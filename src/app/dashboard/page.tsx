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
  const { signIn, signInWithGoogle } = useAuth();
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
          Free account. No password needed.
        </p>
      </div>

      {/* Google sign in */}
      <button
        onClick={() => signInWithGoogle()}
        className="mt-10 flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 py-3.5 text-sm font-medium transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        Continue with Google
      </button>

      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-700" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-4 text-zinc-400 dark:bg-zinc-950">or use email</span>
        </div>
      </div>

      {/* Magic link */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-zinc-900 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-700 dark:hover:bg-zinc-600"
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
