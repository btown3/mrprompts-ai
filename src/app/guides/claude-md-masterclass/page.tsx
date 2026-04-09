"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SECTIONS = [
  {
    title: "What CLAUDE.md actually does",
    content:
      "CLAUDE.md is the schema file that controls your entire wiki system. When an AI reads your vault, this is the first file it processes. It defines the topic, folder structure, article format, naming conventions, and behavioral rules. A good CLAUDE.md means you can hand your vault to any LLM and get consistent, high-quality output. A bad one means drift, duplication, and hallucination.",
  },
  {
    title: "The five sections every CLAUDE.md needs",
    content:
      "Purpose (what this wiki is about), Structure (folder layout and file roles), Article Format (how each page should be written), Taxonomy (categories, tags, and naming conventions), and Rules (what the AI must and must not do). Skip any of these and your wiki will degrade over time.",
  },
  {
    title: "Writing effective rules",
    content:
      'Rules are constraints, not suggestions. "Never modify source files" prevents data loss. "Always cite sources" prevents hallucination. "One concept per page" prevents bloat. Write rules for the failure modes you actually care about. Every rule should exist because something went wrong without it.',
  },
  {
    title: "Taxonomy design",
    content:
      "Your taxonomy is how the AI decides where things go. Categories should be mutually exclusive and collectively exhaustive for your topic. Tags can overlap. Use a flat category structure until you have 50+ articles. Nesting too early creates empty folders and confused AI.",
  },
  {
    title: "Versioning your schema",
    content:
      "Your CLAUDE.md will evolve. Add a version number. When you make a breaking change (new folder structure, renamed categories), bump the version and add a migration note. This prevents the AI from writing articles that follow an outdated format.",
  },
];

const TEMPLATE = `# [Your Topic] Wiki — CLAUDE.md
# Version: 1.0

## Purpose
A structured, interlinked knowledge base on [your topic],
compiled from curated sources and maintained by AI.

## Structure
- /Sources — Raw articles, notes, and reference material (never edited by AI)
- /Wiki — Compiled, interlinked wiki articles (AI-generated and human-reviewed)
- /Queries — Questions asked and answers generated (filed back into the wiki)

## Article Format
Every wiki article must follow this structure:
1. Title as H1
2. 2-3 sentence summary at the top
3. Body organized with H2 sections
4. "Sources" section at the bottom linking to /Sources files
5. "Related" section with [[wikilinks]] to connected articles

## Taxonomy
Categories: [list your 4-6 top-level categories]
Tags: [list common tags that can span categories]
Naming: Use Title-Case-With-Hyphens for filenames (e.g., Chain-Of-Thought.md)

## Rules
1. Never modify files in /Sources — they are read-only reference material
2. Always cite which source(s) informed each article in the Sources section
3. Use [[wikilinks]] to connect related concepts across articles
4. One concept per page — if an article covers two distinct ideas, split it
5. Every claim must trace back to a source. If no source supports it, flag it
6. When updating an article, add a "Last updated" date at the bottom
7. New articles must link to at least 2 existing articles (prevents orphans)
8. Categories are mutually exclusive. Tags can overlap.`;

export default function ClaudeMdMasterclassPage() {
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
    if (localStorage.getItem("claude-md-unlocked") === "true") {
      setUnlocked(true);
    }
  }, []);

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
        body: JSON.stringify({ email, guide: "claude-md-masterclass" }),
      });
      if (!res.ok) throw new Error("Something went wrong.");
      setSent(true);
      setUnlocked(true);
      localStorage.setItem("claude-md-unlocked", "true");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  function downloadGuide() {
    const content = [
      "# The CLAUDE.md Masterclass",
      "## By Wayne Cederholm — MrPrompts.ai\n",
      ...SECTIONS.map(
        (s) => `## ${s.title}\n\n${s.content}\n`
      ),
      "---\n",
      "## Starter CLAUDE.md Template\n",
      "Copy this into a file called CLAUDE.md in your vault root.\n",
      "```markdown",
      TEMPLATE,
      "```\n",
      "---",
      "Learn more at https://mrprompts.ai/build/knowledge-bases",
    ].join("\n");

    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CLAUDE-md-Masterclass-MrPrompts.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            Free Guide
          </span>
          <span className="text-xs text-zinc-400">45 min read</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          The CLAUDE.md Masterclass
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          The schema file is the single most important file in your system. Learn
          how to write one that makes your wiki practically self-maintaining.
        </p>
      </div>

      {!unlocked ? (
        /* Email gate */
        <section className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h2 className="text-xl font-bold">
            Get the full guide + downloadable template
          </h2>
          <p className="mt-2 text-sm text-zinc-500">
            Enter your email to unlock the complete masterclass and a
            ready-to-use CLAUDE.md template. You will also receive our weekly
            newsletter for AI builders.
          </p>

          {/* Preview of what's inside */}
          <div className="mt-6 space-y-2">
            {SECTIONS.map((s) => (
              <div key={s.title} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-emerald-600">&#10003;</span>
                {s.title}
              </div>
            ))}
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-emerald-600">&#10003;</span>
              Production-ready CLAUDE.md template
            </div>
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
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
            <p className="mt-3 text-xs text-zinc-400">
              Free. No spam. Unsubscribe anytime.
            </p>
          </form>
        </section>
      ) : (
        <>
          {sent && (
            <div className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
              <p className="font-semibold text-emerald-800 dark:text-emerald-400">
                Check your email! We sent you a link to this guide.
              </p>
              <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-500">
                You can also read it right here and download the template below.
              </p>
            </div>
          )}

          {/* Full guide content */}
          <section className="mb-12">
            <h2 className="text-xl font-bold">What you will learn</h2>
            <div className="mt-6 space-y-6">
              {SECTIONS.map((section) => (
                <div
                  key={section.title}
                  className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800"
                >
                  <h3 className="font-semibold">{section.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Downloadable template */}
          <section className="mb-12">
            <h2 className="text-xl font-bold">Production-ready CLAUDE.md template</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Copy this into your vault root, or download the complete guide
              with template included.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-6 text-sm leading-relaxed text-zinc-300">
              {TEMPLATE}
            </pre>
            <button
              onClick={downloadGuide}
              className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Download Full Guide (.md)
            </button>
          </section>

          {/* Next steps */}
          <section className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-xl font-bold">Keep building</h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Now that you understand the schema, put it to work.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/guides/wiki-automation"
                className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
              >
                <p className="text-sm font-semibold">Wiki Automation</p>
                <p className="mt-1 text-xs text-zinc-500">
                  Slash commands and scheduled tasks for hands-free wikis.
                </p>
              </Link>
              <Link
                href="/tools/wiki-builder"
                className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
              >
                <p className="text-sm font-semibold">Wiki Builder Tool</p>
                <p className="mt-1 text-xs text-zinc-500">
                  Generate a complete vault from your sources automatically.
                </p>
              </Link>
            </div>
          </section>

          {/* Related */}
          <div className="mt-12 flex justify-between text-sm">
            <Link
              href="/guides/your-first-wiki"
              className="text-emerald-600 hover:text-emerald-700"
            >
              &larr; Your First Wiki
            </Link>
            <Link
              href="/guides/wiki-automation"
              className="text-emerald-600 hover:text-emerald-700"
            >
              Wiki Automation &rarr;
            </Link>
          </div>
        </>
      )}
    </article>
  );
}
