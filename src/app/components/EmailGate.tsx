"use client";

import { useState, useEffect, type ReactNode } from "react";

export function EmailGate({
  slug,
  title,
  description,
  checklistItems,
  children,
}: {
  slug: string;
  title: string;
  description: string;
  checklistItems: string[];
  children: ReactNode;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("access") === "granted") {
      setUnlocked(true);
    }
    if (localStorage.getItem(`${slug}-unlocked`) === "true") {
      setUnlocked(true);
    }
  }, [slug]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email || !email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/download-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, guide: slug }),
      });
      if (!res.ok) throw new Error("Something went wrong.");
      setSent(true);
      setUnlocked(true);
      localStorage.setItem(`${slug}-unlocked`, "true");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  if (unlocked) {
    return (
      <>
        {sent && (
          <div className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
            <p className="font-semibold text-emerald-800 dark:text-emerald-400">
              Check your email! We sent you a link to this guide.
            </p>
            <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-500">
              You can also read it right here and download below.
            </p>
          </div>
        )}
        {children}
      </>
    );
  }

  return (
    <section className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-sm text-zinc-500">{description}</p>
      <div className="mt-6 space-y-2">
        {checklistItems.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="text-emerald-600">&#10003;</span>
            {item}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Get the Guide"}
          </button>
        </div>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        <p className="mt-3 text-xs text-zinc-400">Free. No spam. Unsubscribe anytime.</p>
      </form>
    </section>
  );
}
