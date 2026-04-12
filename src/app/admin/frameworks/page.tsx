"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Framework {
  id: string;
  title: string;
  type: string;
  featured: boolean;
  visible: boolean;
  sort_order: number;
}

export default function AdminFrameworks() {
  const [frameworks, setFrameworks] = useState<Framework[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchFrameworks() {
    const { data } = await supabase
      .from("frameworks")
      .select("id, title, type, featured, visible, sort_order")
      .order("sort_order", { ascending: true });
    setFrameworks((data as Framework[]) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    fetchFrameworks();
  }, []);

  async function toggleVisible(id: string, current: boolean) {
    await supabase
      .from("frameworks")
      .update({ visible: !current, updated_at: new Date().toISOString() })
      .eq("id", id);
    setFrameworks((prev) =>
      prev.map((f) => (f.id === id ? { ...f, visible: !current } : f))
    );
  }

  async function toggleFeatured(id: string, current: boolean) {
    await supabase
      .from("frameworks")
      .update({ featured: !current, updated_at: new Date().toISOString() })
      .eq("id", id);
    setFrameworks((prev) =>
      prev.map((f) => (f.id === id ? { ...f, featured: !current } : f))
    );
  }

  if (loading) {
    return <div className="text-zinc-400">Loading frameworks...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-zinc-900">Frameworks</h1>
        <Link
          href="/admin/frameworks/new"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
        >
          Add Framework
        </Link>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Title
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Type
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Featured
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Visible
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {frameworks.map((framework) => (
              <tr
                key={framework.id}
                className="border-b border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-4 py-3 text-zinc-900 font-medium">
                  {framework.title}
                </td>
                <td className="px-4 py-3 text-zinc-500">{framework.type}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() =>
                      toggleFeatured(framework.id, framework.featured)
                    }
                    className={`text-lg transition-colors ${
                      framework.featured
                        ? "text-amber-500 hover:text-amber-600"
                        : "text-zinc-300 hover:text-zinc-400"
                    }`}
                    title={framework.featured ? "Unfeature" : "Feature"}
                  >
                    ★
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() =>
                      toggleVisible(framework.id, framework.visible)
                    }
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      framework.visible
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-zinc-100 text-zinc-400"
                    }`}
                  >
                    {framework.visible ? "Visible" : "Hidden"}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/frameworks/${framework.id}`}
                    className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
            {frameworks.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-6 text-center text-zinc-400"
                >
                  No frameworks found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
