"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

interface UserEmail {
  id: string;
  email: string;
  created_at: string;
}

interface MergedUser {
  id: string;
  email: string;
  signed_up: string;
  download_count: number;
  last_download: string | null;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<MergedUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      // Fetch user emails via RPC and downloads in parallel
      const [emailsRes, downloadsRes] = await Promise.all([
        supabase.rpc("get_user_emails"),
        supabase.from("downloads").select("user_id, downloaded_at"),
      ]);

      const emails: UserEmail[] = emailsRes.data || [];
      const downloads = downloadsRes.data || [];

      // Build download stats map
      const downloadMap = new Map<
        string,
        { count: number; lastDownload: string }
      >();
      for (const row of downloads) {
        const existing = downloadMap.get(row.user_id);
        if (existing) {
          existing.count += 1;
          if (row.downloaded_at > existing.lastDownload) {
            existing.lastDownload = row.downloaded_at;
          }
        } else {
          downloadMap.set(row.user_id, {
            count: 1,
            lastDownload: row.downloaded_at,
          });
        }
      }

      // Merge data
      const merged: MergedUser[] = emails
        .map((u) => {
          const dl = downloadMap.get(u.id);
          return {
            id: u.id,
            email: u.email,
            signed_up: u.created_at,
            download_count: dl?.count ?? 0,
            last_download: dl?.lastDownload ?? null,
          };
        })
        .sort(
          (a, b) =>
            new Date(b.signed_up).getTime() - new Date(a.signed_up).getTime()
        );

      setUsers(merged);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  function exportCSV() {
    const header = "email,signed_up,download_count";
    const rows = users.map(
      (u) =>
        `${u.email},${new Date(u.signed_up).toISOString().split("T")[0]},${u.download_count}`
    );
    const csv = [header, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `mrprompts-users-${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  if (loading) {
    return <div className="text-zinc-400">Loading users...</div>;
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">Users</h1>
          <p className="text-sm text-zinc-500 mt-1">
            {users.length} registered users
          </p>
        </div>
        <button
          onClick={exportCSV}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
        >
          Export CSV
        </button>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Email
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Signed Up
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Downloads
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Last Download
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                className="border-b border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-4 py-3 text-zinc-900">{u.email}</td>
                <td className="px-4 py-3 text-zinc-500">
                  {new Date(u.signed_up).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-zinc-900 font-medium">
                  {u.download_count}
                </td>
                <td className="px-4 py-3 text-zinc-500">
                  {u.last_download
                    ? new Date(u.last_download).toLocaleDateString()
                    : "--"}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-6 text-center text-zinc-400"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
