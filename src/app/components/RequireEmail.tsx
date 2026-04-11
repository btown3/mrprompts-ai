"use client";

import { useState, useEffect, type ReactNode } from "react";

export function RequireEmail({
  slug,
  children,
}: {
  slug: string;
  children: (props: { email: string }) => ReactNode;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const storageKey = `mrp-email-${slug}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setEmail(saved);
      setSubmitted(true);
    }
  }, [storageKey]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await fetch("/api/download-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, guide: slug }),
      });
      localStorage.setItem(storageKey, email);
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Try again.");
    }
    setLoading(false);
  }

  if (submitted) {
    return <>{children({ email })}</>;
  }

  return (
    <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
      <h3 className="text-lg font-bold">Enter your email to continue</h3>
      <p className="mt-2 text-sm text-zinc-500">
        Free download. You will also receive our weekly newsletter for AI
        builders. Unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
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
          {loading ? "..." : "Continue"}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
