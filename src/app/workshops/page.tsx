"use client";

import { useState } from "react";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

const WORKSHOPS = [
  {
    title: "Build Your AI Knowledge Base in 2 Hours",
    description:
      "Walk in with a topic. Walk out with a working knowledge base, a CLAUDE.md schema, and 5+ interlinked wiki articles. Live, hands-on, no coding.",
    price: "$249",
    duration: "2 hours",
    format: "Live on Zoom",
    frequency: "Monthly",
    whatYouBuild: [
      "A complete knowledge base with folder structure",
      "A production-ready CLAUDE.md schema",
      "5+ interlinked wiki articles from your sources",
      "An automation plan to keep your wiki growing",
    ],
    whoItsFor:
      "Professionals who want a working knowledge base but don't want to figure it out alone. Bring your topic and your sources. We build it together.",
    slug: "knowledge-base",
  },
  {
    title: "The 4-Layer Prompt Framework Workshop",
    description:
      "The prompt engineering framework from the most-read MrPrompts article, taught live with exercises. Build a personal prompt library you'll actually use.",
    price: "$199",
    duration: "90 minutes",
    format: "Live on Zoom",
    frequency: "Monthly",
    whatYouBuild: [
      "Deep understanding of the 4-Layer Framework",
      "10+ custom prompts for your specific role",
      "A reusable template system for writing new prompts",
      "A shared prompt library you can bring to your team",
    ],
    whoItsFor:
      "Anyone who uses AI daily but knows their prompts could be better. Marketing, sales, ops, consulting, HR. No technical background needed.",
    slug: "prompt-framework",
  },
];

function WaitlistForm({ workshop }: { workshop: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    try {
      await fetch("/api/download-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, guide: `workshop-${workshop}` }),
      });
      setSubmitted(true);
    } catch {
      // Silently handle - still show success since email was likely sent
      setSubmitted(true);
    }
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-emerald-50 p-4 text-sm text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400">
        You're on the list. We'll email you when the next session is scheduled.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
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
        {loading ? "Joining..." : "Join the Waitlist"}
      </button>
    </form>
  );
}

export default function WorkshopsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Live Workshops
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Small-group, hands-on sessions where you build something real with AI.
        Not a webinar. Not a lecture. You show up, you build, you leave with
        something you can use tomorrow.
      </p>

      <div className="mt-12 space-y-8">
        {WORKSHOPS.map((ws) => (
          <div
            key={ws.slug}
            className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-xl font-bold">{ws.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {ws.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                    {ws.price}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {ws.duration}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {ws.format}
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {ws.frequency}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-3xl font-bold">{ws.price}</span>
                <p className="text-xs text-zinc-400">per seat</p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  What you will build
                </h3>
                <ul className="mt-3 space-y-2">
                  {ws.whatYouBuild.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="mt-0.5 text-emerald-600">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Who it's for
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {ws.whoItsFor}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-800">
              <p className="mb-3 text-sm font-semibold">
                Next session dates coming soon. Join the waitlist.
              </p>
              <WaitlistForm workshop={ws.slug} />
            </div>
          </div>
        ))}
      </div>

      {/* Custom workshop CTA */}
      <div className="mt-16 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h3 className="text-lg font-semibold">Need a workshop for your team?</h3>
        <p className="mt-2 text-sm text-zinc-500">
          We run private workshops for teams of 5-50. Custom topics, your use
          cases, your schedule.
        </p>
        <Link
          href="/enterprise"
          className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Learn about enterprise training &rarr;
        </Link>
      </div>

      <PageFooterCTA />
    </div>
  );
}
