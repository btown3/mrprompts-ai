"use client";

import { useState, type ReactNode } from "react";
import { useAuth } from "./AuthProvider";

export function AuthGate({ children }: { children: ReactNode }) {
  const { user, loading, signIn, signInWithGoogle } = useAuth();
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
        Unlock all downloads, tools, and guides on MrPrompts. Free account.
      </p>

      {/* Google sign in */}
      <button
        onClick={() => signInWithGoogle()}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-medium transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
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
          <span className="bg-white px-4 text-zinc-400 dark:bg-zinc-950">or</span>
        </div>
      </div>

      {/* Magic link */}
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
          className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:opacity-50 dark:bg-zinc-700 dark:hover:bg-zinc-600"
        >
          {submitting ? "Sending..." : "Magic Link"}
        </button>
      </form>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <p className="mt-3 text-xs text-zinc-400">
        Free account. No password. You will also receive our weekly newsletter.
      </p>
    </div>
  );
}
