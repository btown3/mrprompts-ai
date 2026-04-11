"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

interface UserRow {
  user_id: string;
  download_count: number;
  most_recent: string;
}

export default function AdminUsers() {
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await supabase
        .from("downloads")
        .select("user_id, downloaded_at");

      if (!data || data.length === 0) {
        setLoading(false);
        return;
      }

      const userMap = new Map<
        string,
        { count: number; mostRecent: string }
      >();

      for (const row of data) {
        const existing = userMap.get(row.user_id);
        if (existing) {
          existing.count += 1;
          if (row.downloaded_at > existing.mostRecent) {
            existing.mostRecent = row.downloaded_at;
          }
        } else {
          userMap.set(row.user_id, {
            count: 1,
            mostRecent: row.downloaded_at,
          });
        }
      }

      const rows: UserRow[] = Array.from(userMap.entries())
        .map(([user_id, info]) => ({
          user_id,
          download_count: info.count,
          most_recent: info.mostRecent,
        }))
        .sort((a, b) => b.most_recent.localeCompare(a.most_recent));

      setUsers(rows);
      setLoading(false);
    }
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-zinc-400">Loading users...</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900">Users</h1>
        <p className="text-sm text-zinc-500 mt-1">
          Based on download activity. Total unique users: {users.length}
        </p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                User ID
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Downloads
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Most Recent
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.user_id}
                className="border-b border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-4 py-3 text-zinc-700 font-mono text-xs">
                  {u.user_id}
                </td>
                <td className="px-4 py-3 text-zinc-900 font-medium">
                  {u.download_count}
                </td>
                <td className="px-4 py-3 text-zinc-500">
                  {new Date(u.most_recent).toLocaleDateString()}
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-6 text-center text-zinc-400"
                >
                  No users with downloads yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
