import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Interactive builders and AI-powered tools. Create knowledge bases, prompt libraries, workflows, and project structures in minutes.",
  alternates: {
    canonical: "https://www.mrprompts.ai/tools",
  },
  openGraph: {
    title: "Tools | MrPrompts",
    description:
      "Interactive builders and AI-powered tools for non-technical professionals.",
    url: "https://www.mrprompts.ai/tools",
  },
};

const TOOLS = [
  {
    name: "Project Foundry",
    description:
      "Build a stronger AI project structure with contracts, handoffs, corrections, and review rules. Guided setup with downloadable exports.",
    href: "/tools/project-foundry",
    tag: "Interactive",
    items: "Guided setup + exports",
  },
  {
    name: "Wiki Builder",
    description:
      "Paste your sources. AI reads them and generates a complete knowledge base with CLAUDE.md schema and interlinked articles. 60 seconds.",
    href: "/tools/wiki-builder",
    tag: "AI-Powered",
    items: "AI generation",
  },
  {
    name: "Knowledge Base Builder",
    description:
      "Pick your topic, download a complete starter kit with CLAUDE.md schema, folder structure, and 7 numbered prompts.",
    href: "/build/knowledge-bases",
    tag: "Interactive",
    items: "Starter kit",
  },
  {
    name: "Prompt Library Builder",
    description:
      "Pick your roles: marketing, sales, ops, finance, HR, consulting. Preview every prompt. Download a customized library.",
    href: "/build/prompts",
    tag: "Interactive",
    items: "30+ prompts",
  },
  {
    name: "Workflow Blueprint Builder",
    description:
      "Select the workflows you need: morning briefs, meeting notes, lead research, client reports. Download step-by-step blueprints.",
    href: "/build/workflows",
    tag: "Interactive",
    items: "7 blueprints",
  },
  {
    name: "Leadership Kit Builder",
    description:
      "Enter your organization details. Download a customized adoption roadmap, fluency assessment, change management playbook, and executive briefing.",
    href: "/build/leadership",
    tag: "Interactive",
    items: "4 tools",
  },
];

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Interactive Tools
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Build something useful in minutes
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-500">
          Guided builders that produce real, downloadable artifacts — project
          harnesses, knowledge bases, prompt libraries, workflows, and
          leadership kits. No coding. No setup.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group flex flex-col rounded-2xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800 dark:hover:shadow-emerald-900/20"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                {tool.tag}
              </span>
              <span className="text-xs text-zinc-400">{tool.items}</span>
            </div>
            <h2 className="mt-4 text-xl font-bold group-hover:text-emerald-600">
              {tool.name}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
              {tool.description}
            </p>
            <span className="mt-4 inline-flex text-sm font-semibold text-emerald-600 group-hover:text-emerald-700">
              Open tool &rarr;
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
