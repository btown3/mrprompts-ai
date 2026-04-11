"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string | null;
  company: string | null;
  quote: string;
  featured: boolean;
  visible: boolean;
}

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchTestimonials() {
    const { data } = await supabase
      .from("testimonials")
      .select("id, name, role, company, quote, featured, visible")
      .order("sort_order", { ascending: true });
    setTestimonials((data as Testimonial[]) ?? []);
    setLoading(false);
  }

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function toggleVisible(id: string, current: boolean) {
    await supabase
      .from("testimonials")
      .update({ visible: !current })
      .eq("id", id);
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, visible: !current } : t))
    );
  }

  async function toggleFeatured(id: string, current: boolean) {
    await supabase
      .from("testimonials")
      .update({ featured: !current })
      .eq("id", id);
    setTestimonials((prev) =>
      prev.map((t) => (t.id === id ? { ...t, featured: !current } : t))
    );
  }

  if (loading) {
    return <div className="text-zinc-400">Loading testimonials...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-zinc-900">Testimonials</h1>
        <Link
          href="/admin/testimonials/new"
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
        >
          Add Testimonial
        </Link>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Name
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Role
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Company
              </th>
              <th className="text-left px-4 py-3 font-medium text-zinc-500">
                Quote
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
            {testimonials.map((t) => (
              <tr
                key={t.id}
                className="border-b border-zinc-100 hover:bg-zinc-50"
              >
                <td className="px-4 py-3 text-zinc-900 font-medium">
                  {t.name}
                </td>
                <td className="px-4 py-3 text-zinc-500">{t.role ?? "-"}</td>
                <td className="px-4 py-3 text-zinc-500">{t.company ?? "-"}</td>
                <td className="px-4 py-3 text-zinc-500 max-w-xs truncate">
                  {t.quote}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => toggleFeatured(t.id, t.featured)}
                    className={`text-lg ${
                      t.featured ? "text-yellow-500" : "text-zinc-300"
                    }`}
                    title={t.featured ? "Unfeature" : "Feature"}
                  >
                    &#9733;
                  </button>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => toggleVisible(t.id, t.visible)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      t.visible
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-zinc-100 text-zinc-400"
                    }`}
                  >
                    {t.visible ? "Visible" : "Hidden"}
                  </button>
                </td>
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/testimonials/${t.id}`}
                    className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
            {testimonials.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-zinc-400"
                >
                  No testimonials found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
