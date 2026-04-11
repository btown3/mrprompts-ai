"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/components/AuthProvider";
import { supabase } from "@/lib/supabase";
import { CATALOG } from "@/lib/catalog";

type Download = { slug: string; downloaded_at: string };

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const [downloads, setDownloads] = useState<Download[]>([]);
  const [loadingDownloads, setLoadingDownloads] = useState(true);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("downloads")
      .select("slug, downloaded_at")
      .eq("user_id", user.id)
      .order("downloaded_at", { ascending: false })
      .then(({ data }) => {
        setDownloads(data || []);
        setLoadingDownloads(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center text-sm text-zinc-400">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Sign in to view your dashboard</h1>
        <p className="mt-3 text-zinc-500">
          Your downloads, tools, and account are all in one place.
        </p>
        <Link
          href="/build"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Get Started
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-zinc-400">{user.email}</p>
        </div>
        <button
          onClick={signOut}
          className="text-sm text-zinc-400 transition hover:text-zinc-600"
        >
          Sign out
        </button>
      </div>

      {/* Downloads */}
      <section className="mt-12">
        <h2 className="text-lg font-bold">Your Downloads</h2>
        {loadingDownloads ? (
          <p className="mt-4 text-sm text-zinc-400">Loading...</p>
        ) : downloads.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
            <p className="text-sm text-zinc-500">No downloads yet.</p>
            <Link
              href="/build"
              className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
            >
              Start building &rarr;
            </Link>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {downloads.map((dl) => {
              const product = CATALOG.find((p) => p.slug === dl.slug);
              return (
                <Link
                  key={dl.slug}
                  href={product?.href || "/products"}
                  className="flex items-center justify-between rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-800 dark:hover:border-emerald-800"
                >
                  <div>
                    <p className="text-sm font-semibold">
                      {product?.name || dl.slug}
                    </p>
                    <p className="text-xs text-zinc-400">
                      Downloaded{" "}
                      {new Date(dl.downloaded_at).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-emerald-600">
                    Open &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* Quick links */}
      <section className="mt-12">
        <h2 className="text-lg font-bold">Build Something</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link
            href="/build/knowledge-bases"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">Knowledge Base</p>
            <p className="mt-1 text-xs text-zinc-500">
              Starter kit or AI builder
            </p>
          </Link>
          <Link
            href="/build/prompts"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">Prompt Library</p>
            <p className="mt-1 text-xs text-zinc-500">
              Pick roles, download prompts
            </p>
          </Link>
          <Link
            href="/build/workflows"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">Workflows</p>
            <p className="mt-1 text-xs text-zinc-500">
              Automation blueprints
            </p>
          </Link>
          <Link
            href="/build/leadership"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">Leadership Kit</p>
            <p className="mt-1 text-xs text-zinc-500">
              Roadmaps and assessments
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
