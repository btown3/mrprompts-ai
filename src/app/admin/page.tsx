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

interface DailyDownload {
  date: string;
  count: number;
}

interface TopProduct {
  slug: string;
  count: number;
}

interface RecentSignup {
  email: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalUsers: 0,
    totalDownloads: 0,
    totalProducts: 0,
    totalBlogPosts: 0,
  });
  const [recentDownloads, setRecentDownloads] = useState<RecentDownload[]>([]);
  const [dailyDownloads, setDailyDownloads] = useState<DailyDownload[]>([]);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [recentSignups, setRecentSignups] = useState<RecentSignup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [downloads, products, blogPosts, recent, emailsRes] =
        await Promise.all([
          supabase.from("downloads").select("user_id, slug, downloaded_at"),
          supabase
            .from("products")
            .select("id", { count: "exact", head: true }),
          supabase
            .from("blog_posts")
            .select("id", { count: "exact", head: true }),
          supabase
            .from("downloads")
            .select("*")
            .order("downloaded_at", { ascending: false })
            .limit(10),
          supabase.rpc("get_user_emails"),
        ]);

      const allDownloads = downloads.data || [];
      const uniqueUsers = new Set(
        allDownloads.map((d: { user_id: string }) => d.user_id)
      );

      setStats({
        totalUsers: uniqueUsers.size,
        totalDownloads: allDownloads.length,
        totalProducts: products.count ?? 0,
        totalBlogPosts: blogPosts.count ?? 0,
      });

      setRecentDownloads((recent.data as RecentDownload[]) ?? []);

      // Downloads over time (last 30 days)
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      const dateCountMap = new Map<string, number>();

      // Initialize all 30 days with 0
      for (let i = 0; i < 30; i++) {
        const d = new Date();
        d.setDate(d.getDate() - (29 - i));
        dateCountMap.set(d.toISOString().split("T")[0], 0);
      }

      for (const dl of allDownloads) {
        const date = new Date(dl.downloaded_at).toISOString().split("T")[0];
        if (dateCountMap.has(date)) {
          dateCountMap.set(date, (dateCountMap.get(date) ?? 0) + 1);
        }
      }

      const daily: DailyDownload[] = Array.from(dateCountMap.entries())
        .map(([date, count]) => ({ date, count }))
        .sort((a, b) => a.date.localeCompare(b.date));
      setDailyDownloads(daily);

      // Top products
      const slugCountMap = new Map<string, number>();
      for (const dl of allDownloads) {
        slugCountMap.set(dl.slug, (slugCountMap.get(dl.slug) ?? 0) + 1);
      }
      const top: TopProduct[] = Array.from(slugCountMap.entries())
        .map(([slug, count]) => ({ slug, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);
      setTopProducts(top);

      // Recent signups
      const emails: RecentSignup[] = (emailsRes.data || [])
        .sort(
          (a: RecentSignup, b: RecentSignup) =>
            new Date(b.created_at).getTime() -
            new Date(a.created_at).getTime()
        )
        .slice(0, 5);
      setRecentSignups(emails);

      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-zinc-400">Loading dashboard...</div>;
  }

  const statCards = [
    { label: "Total Users", value: stats.totalUsers, href: "/admin/users" },
    {
      label: "Total Downloads",
      value: stats.totalDownloads,
      href: "/admin/users",
    },
    {
      label: "Products",
      value: stats.totalProducts,
      href: "/admin/products",
    },
    {
      label: "Blog Posts",
      value: stats.totalBlogPosts,
      href: "/admin/blog",
    },
  ];

  const maxDaily = Math.max(...dailyDownloads.map((d) => d.count), 1);
  const maxProduct = Math.max(...topProducts.map((p) => p.count), 1);

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

      {/* Downloads Over Time */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold text-zinc-900 mb-4">
          Downloads Over Time
        </h2>
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <div className="flex items-end gap-1 h-40">
            {dailyDownloads.map((day) => (
              <div
                key={day.date}
                className="flex-1 flex flex-col items-center justify-end group relative"
              >
                <div className="absolute -top-6 hidden group-hover:block bg-zinc-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                  {day.date}: {day.count}
                </div>
                <div
                  className="w-full bg-emerald-500 rounded-t transition-all hover:bg-emerald-600"
                  style={{
                    height: `${Math.max((day.count / maxDaily) * 100, day.count > 0 ? 4 : 0)}%`,
                    minHeight: day.count > 0 ? "4px" : "0px",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-zinc-400">
            <span>{dailyDownloads[0]?.date.slice(5)}</span>
            <span>Last 30 days</span>
            <span>{dailyDownloads[dailyDownloads.length - 1]?.date.slice(5)}</span>
          </div>
        </div>
      </div>

      {/* Top Products + Recent Signups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Top Products */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            Top Products
          </h2>
          <div className="rounded-lg border border-zinc-200 bg-white p-6 space-y-3">
            {topProducts.length === 0 && (
              <p className="text-sm text-zinc-400">No downloads yet</p>
            )}
            {topProducts.map((p) => (
              <div key={p.slug} className="flex items-center gap-3">
                <span className="text-sm text-zinc-700 w-40 truncate shrink-0">
                  {p.slug}
                </span>
                <div className="flex-1 h-5 bg-zinc-100 rounded overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded"
                    style={{
                      width: `${(p.count / maxProduct) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-zinc-900 w-8 text-right shrink-0">
                  {p.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Signups */}
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">
            Recent Signups
          </h2>
          <div className="rounded-lg border border-zinc-200 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50">
                  <th className="text-left px-4 py-3 font-medium text-zinc-500">
                    Email
                  </th>
                  <th className="text-left px-4 py-3 font-medium text-zinc-500">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentSignups.map((s, i) => (
                  <tr
                    key={i}
                    className="border-b border-zinc-100 hover:bg-zinc-50"
                  >
                    <td className="px-4 py-3 text-zinc-900">{s.email}</td>
                    <td className="px-4 py-3 text-zinc-500">
                      {new Date(s.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
                {recentSignups.length === 0 && (
                  <tr>
                    <td
                      colSpan={2}
                      className="px-4 py-6 text-center text-zinc-400"
                    >
                      No signups yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
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
