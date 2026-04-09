"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CATALOG,
  CATEGORIES,
  CATEGORY_COLORS,
  formatPrice,
} from "@/lib/catalog";

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? CATALOG
      : CATALOG.filter((p) => p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Products
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Prompt packs, templates, workflow blueprints, and leadership playbooks.
        Download and use immediately. No Obsidian required. No coding required.
      </p>

      {/* Category filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              filter === cat.key
                ? "bg-emerald-600 text-white"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Link
            key={product.slug}
            href={product.href}
            className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <div className="flex items-center justify-between">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  CATEGORY_COLORS[product.category] || ""
                }`}
              >
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </span>
              <span
                className={`text-sm font-bold ${
                  product.price === 0
                    ? "text-emerald-600"
                    : "text-zinc-900 dark:text-white"
                }`}
              >
                {formatPrice(product.price)}
              </span>
            </div>

            <h2 className="mt-4 text-lg font-semibold group-hover:text-emerald-600">
              {product.name}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
              {product.description}
            </p>

            <div className="mt-4 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex gap-3">
                {product.items && <span>{product.items}</span>}
                <span>{product.format}</span>
              </div>
              {product.tag && (
                <span
                  className={`rounded-full px-2 py-0.5 font-medium ${
                    product.tag === "Free"
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                      : product.tag === "Coming Soon"
                      ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                      : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  }`}
                >
                  {product.tag}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-10 rounded-xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
          <p className="text-lg font-semibold">No products in this category yet.</p>
          <p className="mt-2 text-sm text-zinc-500">
            New products ship regularly. Subscribe to the newsletter to get
            notified.
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">
          Want to build your own?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          The Wiki Builder tool generates a complete AI knowledge base from your
          sources. The Build Tracks teach you the system behind all of these
          products.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/tools/wiki-builder"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Wiki Builder
          </Link>
          <Link
            href="/build"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-600 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Build Tracks
          </Link>
        </div>
      </div>
    </div>
  );
}
