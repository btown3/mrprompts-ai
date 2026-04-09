import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build with AI — Four Tracks for Non-Technical Professionals",
  description:
    "Build AI knowledge bases, prompt libraries, workflows, and leadership playbooks. Step-by-step guides for smart professionals who don't code.",
  alternates: { canonical: "https://www.mrprompts.ai/build" },
};

const TRACKS = [
  {
    title: "Build a Knowledge Base",
    description:
      "Go from zero to a structured AI knowledge base that compounds over time. By the end, you will have a working Obsidian vault with interlinked articles, a CLAUDE.md schema, and a system that gets smarter every time you use it.",
    modules: [
      { name: "Your first wiki in 20 minutes", free: true },
      { name: "Writing a CLAUDE.md that runs your wiki", free: false },
      { name: "Automating wiki updates", free: false },
      { name: "Quality control with two-model validation", free: false },
    ],
    href: "/build/knowledge-bases",
    tag: "Most Popular",
    tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    title: "Build Prompt Frameworks",
    description:
      "Build a personal prompt library organized by role and use case. By the end, you will have reusable prompt templates, a framework for writing new ones, and a system your team can share.",
    modules: [
      { name: "Foundations of strategic prompting", free: true },
      { name: "The 4-Layer Framework", free: false },
      { name: "Build a prompt library for your role", free: false },
      { name: "Build reusable prompt systems for your team", free: false },
    ],
    href: "/build/prompts",
    tag: "Start Here",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Build AI Workflows",
    description:
      "Build automations that run without you. By the end, you will have working AI agents, scheduled tasks, and multi-tool pipelines that handle real work while you focus on what matters.",
    modules: [
      { name: "Your first AI workflow", free: true },
      { name: "Build with AI agents", free: false },
      { name: "Build automated systems with Claude Skills", free: false },
      { name: "Build multi-tool AI pipelines", free: false },
    ],
    href: "/build/workflows",
    tag: "Intermediate",
    tagColor: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  },
  {
    title: "Build AI-Ready Teams",
    description:
      "Build an AI transformation plan you can present to the board. By the end, you will have an adoption roadmap, change management playbook, governance framework, and department-specific use case portfolios.",
    modules: [
      { name: "AI fluency assessment for your team", free: true },
      { name: "Build an AI adoption roadmap", free: false },
      { name: "Change management playbook for AI rollout", free: false },
      { name: "AI governance and use case portfolios", free: false },
    ],
    href: "/build/leadership",
    tag: "For Leaders",
    tagColor: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  },
];

export default function BuildPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        What will you build?
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Four tracks. Each one ends with something you built, not something you
        read. Pick the one that matches where you are right now.
      </p>

      <div className="mt-12 space-y-8">
        {TRACKS.map((track) => (
          <div
            key={track.title}
            className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800"
          >
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="max-w-xl">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${track.tagColor}`}
                >
                  {track.tag}
                </span>
                <h2 className="mt-4 text-xl font-bold">{track.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {track.description}
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href={track.href}
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Start This Track
                </Link>
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-800">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Modules
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {track.modules.map((mod) => (
                  <div
                    key={mod.name}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        mod.free ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-600"
                      }`}
                    />
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {mod.name}
                    </span>
                    {mod.free && (
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        Free
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pricing nudge */}
      <div className="mt-16 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">
          First module of every track is free.
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          Unlock all four tracks, every tool, and the full prompt library for
          $19/month. Cancel anytime.
        </p>
        <Link
          href="/pricing"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          See Pricing
        </Link>
      </div>
    </div>
  );
}
