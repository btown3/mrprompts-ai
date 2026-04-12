"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getProducts, formatPrice, type DbProduct } from "@/lib/db";

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "tools", label: "Tools" },
  { key: "prompts", label: "Prompts" },
  { key: "templates", label: "Templates" },
  { key: "workflows", label: "Workflows" },
  { key: "playbooks", label: "Playbooks" },
];

const CATEGORY_COLORS: Record<string, string> = {
  tools: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  prompts: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  templates: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  workflows: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  playbooks: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
};

const BUILD_TOOLS = [
  {
    name: "Knowledge Base Builder",
    description: "Pick your topic, download a complete starter kit with CLAUDE.md schema, folder structure, and 7 numbered prompts. Or let AI generate articles from your sources.",
    category: "tools",
    tag: "Interactive",
    href: "/build/knowledge-bases",
    items: "Starter kit + AI builder",
  },
  {
    name: "Prompt Library Builder",
    description: "Pick your roles: marketing, sales, ops, finance, HR, consulting. Preview every prompt. Download a customized library.",
    category: "tools",
    tag: "Interactive",
    href: "/build/prompts",
    items: "30+ prompts",
  },
  {
    name: "Workflow Blueprint Builder",
    description: "Select the workflows you need: morning briefs, meeting notes, lead research, client reports. Download step-by-step blueprints.",
    category: "tools",
    tag: "Interactive",
    href: "/build/workflows",
    items: "7 blueprints",
  },
  {
    name: "Leadership Kit Builder",
    description: "Enter your organization details. Download a customized adoption roadmap, fluency assessment, change management playbook, and executive briefing.",
    category: "tools",
    tag: "Interactive",
    href: "/build/leadership",
    items: "4 tools",
  },
  {
    name: "Wiki Builder",
    description: "Paste your sources. AI reads them and generates a complete knowledge base with CLAUDE.md schema and interlinked articles. 60 seconds.",
    category: "tools",
    tag: "AI-Powered",
    href: "/tools/wiki-builder",
    items: "AI generation",
  },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState("all");
  const [products, setProducts] = useState<DbProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const allItems = [
    ...BUILD_TOOLS.map((t) => ({ ...t, price: 0, format: "Interactive", slug: t.href, visible: true, sort_order: 0, id: t.href, meta_title: null, meta_description: null })),
    ...products,
  ];

  const filtered =
    filter === "all"
      ? allItems
      : allItems.filter((p) => p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Products
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Interactive builders, prompt packs, templates, and playbooks.
        Everything is free unless marked otherwise.
      </p>

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

      {loading ? (
        <div className="mt-10 text-center text-sm text-zinc-400">Loading...</div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <Link
              key={product.slug || product.name}
              href={product.href}
              className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    CATEGORY_COLORS[product.category] || "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
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
                {product.items && <span>{product.items}</span>}
                {product.tag && (
                  <span
                    className={`rounded-full px-2 py-0.5 font-medium ${
                      product.tag === "Free" || product.tag === "Interactive"
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                        : product.tag === "AI-Powered"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
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
      )}
    </div>
  );
}
