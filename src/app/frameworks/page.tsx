"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getFrameworks, type DbFramework } from "@/lib/db";

const TYPE_COLORS: Record<string, string> = {
  Framework: "text-emerald-600",
  System: "text-blue-600",
  Playbook: "text-purple-600",
  Guide: "text-amber-600",
  Assessment: "text-rose-600",
  Reference: "text-zinc-500",
  Prompts: "text-blue-600",
  Workflows: "text-purple-600",
  Tools: "text-emerald-600",
  "Use Case": "text-amber-600",
};

export default function FrameworksPage() {
  const [frameworks, setFrameworks] = useState<DbFramework[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFrameworks().then((data) => {
      setFrameworks(data);
      setLoading(false);
    });
  }, []);

  const featured = frameworks.find((f) => f.featured);
  const rest = frameworks.filter((f) => !f.featured);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Frameworks
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Named systems, prompt frameworks, and structured guides for working
        with AI. Each one is something you can use today.
      </p>

      {loading ? (
        <div className="mt-12 text-center text-sm text-zinc-400">Loading...</div>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured && (
            <Link
              href={`/learn/${featured.slug}`}
              className="group flex flex-col rounded-xl border border-emerald-300 p-6 shadow-sm transition hover:shadow-md md:col-span-2 lg:col-span-3 dark:border-emerald-800"
            >
              <span className={`text-xs font-semibold uppercase tracking-wider ${TYPE_COLORS[featured.type] || "text-zinc-500"}`}>
                {featured.type}
              </span>
              <h2 className="mt-3 text-xl font-bold group-hover:text-emerald-600">
                {featured.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-500">{featured.description}</p>
              <span className="mt-4 text-sm font-semibold text-emerald-600">
                Read the framework &rarr;
              </span>
            </Link>
          )}

          {rest.map((fw) => (
            <Link
              key={fw.slug}
              href={`/learn/${fw.slug}`}
              className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
            >
              <span className={`text-xs font-semibold uppercase tracking-wider ${TYPE_COLORS[fw.type] || "text-zinc-500"}`}>
                {fw.type}
              </span>
              <h2 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
                {fw.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-500">{fw.description}</p>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-12 rounded-xl border border-zinc-200 p-6 text-center dark:border-zinc-800">
        <h3 className="font-semibold">Looking for definitions?</h3>
        <p className="mt-2 text-sm text-zinc-500">
          The glossary has clear definitions for 15 AI terms.
        </p>
        <Link href="/glossary" className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700">
          Browse the glossary &rarr;
        </Link>
      </div>
    </div>
  );
}
