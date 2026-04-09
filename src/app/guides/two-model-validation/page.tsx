"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BuyButton } from "@/app/components/BuyButton";

const CONCEPTS = [
  {
    title: "The compounding hallucination problem",
    content:
      "When one AI writes an article and the same AI later queries that article to write another, errors compound. A small hallucination becomes a cited fact becomes a foundational assumption. In low-stakes wikis this is annoying. In high-stakes ones (medical, legal, financial) it is dangerous.",
  },
  {
    title: "Why two models fix this",
    content:
      "Use Model A (e.g., Claude) to write wiki articles. Use Model B (e.g., GPT-4) to validate them against the original sources. If Model B flags something Model A wrote, you have a disagreement worth investigating. Agreement across architecturally different models is a strong signal of accuracy.",
  },
  {
    title: "Setting up the validation pipeline",
    content:
      "After Model A compiles an article, pass the article and its cited sources to Model B with the prompt: \"Does this article accurately represent the source material? Flag any claims not supported by the provided sources.\" Log the results. Review flags. Fix or annotate.",
  },
  {
    title: "When to use this pattern",
    content:
      "Not every wiki needs two-model validation. Personal notes and casual knowledge bases are fine with one model. Use this pattern when: the wiki informs decisions, other people rely on it, or the topic has high cost-of-error (finance, health, compliance, engineering specs).",
  },
];

export default function TwoModelValidationPage() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      setUnlocked(true);
      localStorage.setItem("two-model-validation-unlocked", "true");
    }
    if (localStorage.getItem("two-model-validation-unlocked") === "true") {
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
          <span className="text-xs text-zinc-400">30 min read</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          The Two-Model Validation Pattern
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          How to use two different AI models to prevent compounding
          hallucinations in high-stakes knowledge bases.
        </p>
      </div>

      {unlocked && (
        <div className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
          <p className="font-semibold text-emerald-800 dark:text-emerald-400">
            You have full access to this guide. Thank you for your purchase!
          </p>
        </div>
      )}

      {/* Sections */}
      <section className="mb-12">
        <h2 className="text-xl font-bold">What you will learn</h2>
        <div className="mt-6 space-y-6">
          {CONCEPTS.map((concept, i) => (
            <div
              key={concept.title}
              className={`rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 ${
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
              <h3 className="font-semibold">{concept.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {concept.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Purchase CTA or next steps */}
      {!unlocked ? (
        <section className="rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
          <h2 className="text-xl font-bold text-white">Get the full guide</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Complete implementation guide with code examples for Claude + GPT-4
            validation, automated flagging scripts, and a decision framework for
            when to use single vs. dual model pipelines.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <BuyButton slug="two-model-validation" price="$19" />
            <p className="mt-1 text-xs text-zinc-500">
              One-time purchase. Instant access. No subscription.
            </p>
          </div>
        </section>
      ) : (
        <section className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h2 className="text-xl font-bold">Keep building</h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            You now have the full knowledge base system: structure, schema,
            automation, and validation. Put it all together.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Link
              href="/build/knowledge-bases"
              className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
            >
              <p className="text-sm font-semibold">Knowledge Base Track</p>
              <p className="mt-1 text-xs text-zinc-500">
                The complete build track with all four modules.
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
          href="/guides/wiki-automation"
          className="text-emerald-600 hover:text-emerald-700"
        >
          &larr; Wiki Automation
        </Link>
        <Link
          href="/guides"
          className="text-emerald-600 hover:text-emerald-700"
        >
          All guides &rarr;
        </Link>
      </div>
    </article>
  );
}
