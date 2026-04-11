"use client";

import { useState, type ReactNode } from "react";
import { useAuth } from "./AuthProvider";

export function AuthGate({ children }: { children: ReactNode }) {
  const { user, loading, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 text-sm text-zinc-400">
        Loading...
      </div>
    );
  }

  if (user) {
    return <>{children}</>;
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-900/20">
        <h3 className="text-lg font-bold text-emerald-800 dark:text-emerald-400">
          Check your email!
        </h3>
        <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-500">
          We sent a magic link to <strong>{email}</strong>. Click it to sign in
          and unlock everything on MrPrompts.
        </p>
        <p className="mt-4 text-xs text-zinc-400">
          Didn't get it? Check spam, or{" "}
          <button
            onClick={() => setSent(false)}
            className="text-emerald-600 hover:text-emerald-700"
          >
            try again
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
      <h3 className="text-lg font-bold">Sign in to continue</h3>
      <p className="mt-2 text-sm text-zinc-500">
        Enter your email to unlock all downloads, tools, and guides on
        MrPrompts. No password needed. We will send you a magic link.
      </p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!email.includes("@")) {
            setError("Enter a valid email.");
            return;
          }
          setSubmitting(true);
          setError("");
          const { error: err } = await signIn(email);
          if (err) {
            setError(err);
          } else {
            setSent(true);
          }
          setSubmitting(false);
        }}
        className="mt-6 flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
        />
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
        >
          {submitting ? "Sending..." : "Continue"}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <p className="mt-3 text-xs text-zinc-400">
        Free account. No password. You will also receive our weekly newsletter.
        Unsubscribe anytime.
      </p>
    </div>
  );
}
