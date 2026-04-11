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
    return <SignInView />;
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

function SignInView() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setError("Enter a valid email."); return; }
    setLoading(true);
    setError("");
    const { error: err } = await signIn(email);
    if (err) { setError(err); } else { setSent(true); }
    setLoading(false);
  }

  if (sent) {
    return (
      <div className="mx-auto max-w-md px-6 py-20 text-center">
        <div className="text-4xl">&#9993;</div>
        <h1 className="mt-6 text-2xl font-bold">Check your email</h1>
        <p className="mt-3 text-zinc-500">
          We sent a magic link to <strong>{email}</strong>. Click it to sign in.
        </p>
        <p className="mt-6 text-xs text-zinc-400">
          Didn't get it? Check spam, or{" "}
          <button onClick={() => setSent(false)} className="text-emerald-600 hover:text-emerald-700">try again</button>.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md px-6 py-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Sign in to MrPrompts</h1>
        <p className="mt-3 text-zinc-500">
          Enter your email. We will send you a magic link. No password needed.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoFocus
            className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-emerald-600 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Magic Link"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-zinc-400">
        New here? Signing in creates your free account automatically.
      </p>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h3 className="text-sm font-semibold text-center">What you get with a free account</h3>
        <div className="mt-4 space-y-2">
          {[
            "Download prompt packs, templates, and playbooks",
            "Access the Knowledge Base builder and Wiki Builder tool",
            "Track your downloads in one place",
            "Weekly newsletter with AI building guides",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-emerald-600">&#10003;</span>{item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
