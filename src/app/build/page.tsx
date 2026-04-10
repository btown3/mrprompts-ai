import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build with AI — Four Interactive Tracks",
  description:
    "Build AI knowledge bases, prompt libraries, workflows, and leadership playbooks. Pick your track, make your selections, download and use immediately.",
  alternates: { canonical: "https://www.mrprompts.ai/build" },
};

const TRACKS = [
  {
    title: "Build a Knowledge Base",
    description:
      "Pick your topic. Download a complete starter kit with folder structure, CLAUDE.md schema, and 7 numbered prompts. Or let our AI generate articles from your sources. Either way, you leave with a working knowledge base.",
    action: "Choose topic and download",
    href: "/build/knowledge-bases",
    tag: "Most Popular",
    tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    title: "Build a Prompt Library",
    description:
      "Pick your roles: marketing, sales, ops, finance, HR, consulting. Preview every prompt. Download a customized library with 30+ templates you can paste into any AI tool.",
    action: "Select roles and download",
    href: "/build/prompts",
    tag: "Start Here",
    tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "Build AI Workflows",
    description:
      "Pick the workflows you need: morning briefs, meeting notes, lead research, client reports, content repurposing, competitive intel. Download step-by-step blueprints with tools listed.",
    action: "Select workflows and download",
    href: "/build/workflows",
    tag: "Intermediate",
    tagColor: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  },
  {
    title: "Build AI-Ready Teams",
    description:
      "Enter your organization details. Select the tools you need: adoption roadmap, fluency assessment, change management playbook, executive briefing outline. Download a customized leadership kit.",
    action: "Customize and download",
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
        Four tracks. Each one is interactive. You make selections, we generate
        a customized download. No reading assignments. You leave with something
        you built.
      </p>

      <div className="mt-12 space-y-6">
        {TRACKS.map((track) => (
          <Link
            key={track.title}
            href={track.href}
            className="group flex flex-col gap-6 rounded-xl border border-zinc-200 p-8 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 md:flex-row md:items-center md:justify-between"
          >
            <div className="max-w-xl">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${track.tagColor}`}
              >
                {track.tag}
              </span>
              <h2 className="mt-4 text-xl font-bold group-hover:text-emerald-600">
                {track.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {track.description}
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition group-hover:bg-emerald-700">
                {track.action}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Wiki builder callout */}
      <div className="mt-16 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h3 className="text-lg font-semibold">Want AI to do the building?</h3>
        <p className="mt-2 text-sm text-zinc-500">
          The Wiki Builder tool reads your sources and generates a complete
          knowledge base in 60 seconds.
        </p>
        <Link
          href="/tools/wiki-builder"
          className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Try the Wiki Builder &rarr;
        </Link>
      </div>
    </div>
  );
}
