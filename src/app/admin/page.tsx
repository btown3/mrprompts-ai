"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Stats {
  totalUsers: number;
  totalDownloads: number;
  totalProducts: number;
  totalBlogPosts: number;
}

interface RecentDownload {
  id: string;
  user_id: string;
  slug: string;
  downloaded_at: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalDownloads: 0,
    totalProducts: 0,
    totalBlogPosts: 0,
  });
  const [recentDownloads, setRecentDownloads] = useState<RecentDownload[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [downloads, products, blogPosts, recent] = await Promise.all([
        supabase.from("downloads").select("user_id"),
        supabase.from("products").select("id", { count: "exact", head: true }),
        supabase
          .from("blog_posts")
          .select("id", { count: "exact", head: true }),
        supabase
          .from("downloads")
          .select("*")
          .order("downloaded_at", { ascending: false })
          .limit(10),
      ]);

      const uniqueUsers = new Set(
        downloads.data?.map((d: { user_id: string }) => d.user_id) ?? []
      );

      setStats({
        totalUsers: uniqueUsers.size,
        totalDownloads: downloads.data?.length ?? 0,
        totalProducts: products.count ?? 0,
        totalBlogPosts: blogPosts.count ?? 0,
      });

      setRecentDownloads((recent.data as RecentDownload[]) ?? []);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-zinc-400">Loading dashboard...</div>;
  }

  const statCards = [
    { label: "Total Users", value: stats.totalUsers, href: "/admin/users" },
    { label: "Total Downloads", value: stats.totalDownloads, href: "/admin/users" },
    { label: "Products", value: stats.totalProducts, href: "/admin/products" },
    { label: "Blog Posts", value: stats.totalBlogPosts, href: "/admin/blog" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-zinc-900 mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statCards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="text-sm text-zinc-500 mb-1">{card.label}</p>
            <p className="text-3xl font-bold text-zinc-900">{card.value}</p>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-zinc-900 mb-4">
          Quick Links
        </h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/products"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            Manage Products
          </Link>
          <Link
            href="/admin/blog"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            Manage Blog Posts
          </Link>
          <Link
            href="/admin/testimonials"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
          >
            Manage Testimonials
          </Link>
          <Link
            href="/admin/users"
            className="rounded-lg bg-zinc-700 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
          >
            View Users
          </Link>
        </div>
      </div>

      {/* Recent Downloads */}
      <div>
        <h2 className="text-lg font-semibold text-zinc-900 mb-4">
          Recent Downloads
        </h2>
        <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th className="text-left px-4 py-3 font-medium text-zinc-500">
                  User ID
                </th>
                <th className="text-left px-4 py-3 font-medium text-zinc-500">
                  Slug
                </th>
                <th className="text-left px-4 py-3 font-medium text-zinc-500">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentDownloads.map((dl) => (
                <tr
                  key={dl.id}
                  className="border-b border-zinc-100 hover:bg-zinc-50"
                >
                  <td className="px-4 py-3 text-zinc-700 font-mono text-xs">
                    {dl.user_id.slice(0, 8)}...
                  </td>
                  <td className="px-4 py-3 text-zinc-900">{dl.slug}</td>
                  <td className="px-4 py-3 text-zinc-500">
                    {new Date(dl.downloaded_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
              {recentDownloads.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-zinc-400"
                  >
                    No downloads yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
