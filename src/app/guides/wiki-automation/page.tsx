"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BuyButton } from "@/app/components/BuyButton";

const LEVELS = [
  {
    level: "1",
    title: "Manual prompting",
    description:
      'You open Claude, point it at your vault, and tell it what to do. "Read the sources and write a wiki article about X." This is where everyone starts.',
  },
  {
    level: "2",
    title: "Slash commands",
    description:
      "Create reusable commands like /compile, /query, and /audit. Instead of writing a new prompt each time, you run a command. Same result, less typing, fewer mistakes.",
  },
  {
    level: "3",
    title: "Scheduled tasks",
    description:
      "Set up cron-style jobs that run daily or weekly. Compile new sources automatically. Run quality checks on existing articles. Flag outdated content.",
  },
  {
    level: "4",
    title: "GitHub Actions",
    description:
      "Push sources to a GitHub repo. A workflow triggers on every push: compile new articles, validate links, update the index. Your wiki builds itself on every commit.",
  },
  {
    level: "5",
    title: "Agent Skills",
    description:
      "Claude Code skills that monitor your wiki continuously. They detect gaps in coverage, suggest new articles, and even draft them for review. Fully autonomous with human approval.",
  },
];

export default function WikiAutomationPage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setUnlocked(true);
      localStorage.setItem("wiki-automation-unlocked", "true");
    }
    if (localStorage.getItem("wiki-automation-unlocked") === "true") {
      setUnlocked(true);
    }
  }, []);

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {unlocked ? "Purchased" : "$19 One-Time"}
          </span>
          <span className="text-xs text-zinc-400">60 min read</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Wiki Automation with Claude Code
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          Five levels of automation, from manual prompting to fully autonomous
          wiki agents. Pick the level that matches your comfort.
        </p>
      </div>

      {unlocked && (
        <div className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
          <p className="font-semibold text-emerald-800 dark:text-emerald-400">
            You have full access to this guide. Thank you for your purchase!
          </p>
        </div>
      )}

      {/* The 5 levels */}
      <section className="mb-12">
        <h2 className="text-xl font-bold">The five levels</h2>
        <div className="mt-8 space-y-6">
          {LEVELS.map((item, i) => (
            <div
              key={item.level}
              className={`flex gap-4 rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 ${
                !unlocked && i >= 2 ? "relative overflow-hidden" : ""
              }`}
            >
              {!unlocked && i >= 2 && (
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-white via-white/80 to-transparent pb-6 dark:from-zinc-950 dark:via-zinc-950/80">
                  <span className="text-sm font-medium text-zinc-400">
                    Preview ends here
                  </span>
                </div>
              )}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                {item.level}
              </span>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Purchase CTA or next steps */}
      {!unlocked ? (
        <section className="rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
          <h2 className="text-xl font-bold text-white">Get the full guide</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Complete walkthroughs for all 5 levels. Includes working slash command
            configs, GitHub Action YAML files, and a starter Agent Skill.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <BuyButton slug="wiki-automation" price="$19" />
            <p className="mt-1 text-xs text-zinc-500">
              One-time purchase. Instant access. No subscription.
            </p>
          </div>
        </section>
      ) : (
        <section className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h2 className="text-xl font-bold">Keep building</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Now that you have the automation system, add quality control to make
            sure your wiki stays accurate as it grows.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/guides/two-model-validation"
              className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
            >
              <p className="text-sm font-semibold">Two-Model Validation</p>
              <p className="mt-1 text-xs text-zinc-500">
                Prevent compounding hallucinations with dual-model verification.
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
      )}

      {/* Related */}
      <div className="mt-12 flex justify-between text-sm">
        <Link
          href="/guides/claude-md-masterclass"
          className="text-emerald-600 hover:text-emerald-700"
        >
          &larr; CLAUDE.md Masterclass
        </Link>
        <Link
          href="/guides/two-model-validation"
          className="text-emerald-600 hover:text-emerald-700"
        >
          Two-Model Validation &rarr;
        </Link>
      </div>
    </article>
  );
}
