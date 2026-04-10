"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            Mr<span className="text-emerald-600">Prompts</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link
            href="/build"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Build
          </Link>
          <Link
            href="/products"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Products
          </Link>
          <Link
            href="/guides"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Learn
          </Link>
          <Link
            href="/workshops"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Workshops
          </Link>
          <Link
            href="/enterprise"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Enterprise
          </Link>
          <Link
            href="/pricing"
            className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/build"
            className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:block"
          >
            Start Building
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-zinc-200 bg-white px-6 pb-6 pt-4 dark:border-zinc-800 dark:bg-zinc-950 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium">
            <Link href="/build" onClick={() => setOpen(false)} className="text-zinc-600 dark:text-zinc-400">Build</Link>
            <Link href="/products" onClick={() => setOpen(false)} className="text-zinc-600 dark:text-zinc-400">Products</Link>
            <Link href="/guides" onClick={() => setOpen(false)} className="text-zinc-600 dark:text-zinc-400">Guides</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="text-zinc-600 dark:text-zinc-400">Blog</Link>
            <Link href="/workshops" onClick={() => setOpen(false)} className="text-zinc-600 dark:text-zinc-400">Workshops</Link>
            <Link href="/enterprise" onClick={() => setOpen(false)} className="text-zinc-600 dark:text-zinc-400">Enterprise</Link>
            <Link href="/pricing" onClick={() => setOpen(false)} className="text-zinc-600 dark:text-zinc-400">Pricing</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-zinc-600 dark:text-zinc-400">About</Link>
            <Link href="/affiliates" onClick={() => setOpen(false)} className="text-zinc-600 dark:text-zinc-400">Tools We Use</Link>
            <Link href="/build" onClick={() => setOpen(false)} className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-semibold text-white">Start Building</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
