import Link from "next/link";

const GUIDES = [
  {
    title: "Your First Wiki in 20 Minutes",
    description:
      "Go from zero to a working LLM knowledge base with nothing but Obsidian and a Claude subscription. No coding, no terminal, no nonsense.",
    free: true,
    href: "/guides/your-first-wiki",
    time: "20 min",
    category: "Knowledge Bases",
  },
  {
    title: "The CLAUDE.md Masterclass",
    description:
      "The schema file is the single most important file in your system. Learn how to write one that makes your wiki practically self-maintaining.",
    free: true,
    href: "/guides/claude-md-masterclass",
    time: "45 min",
    category: "Knowledge Bases",
  },
  {
    title: "Prompt Library Starter Kit",
    description:
      "20+ ready-to-use prompt templates organized by role. Marketing, sales, operations, finance, HR, and consulting.",
    free: true,
    href: "/guides/prompt-library-starter",
    time: "20+ templates",
    category: "Prompts",
  },
  {
    title: "AI Workflow Blueprints",
    description:
      "5 pre-built AI workflow configurations for content research, meeting notes, lead enrichment, knowledge base updates, and client reports.",
    free: true,
    href: "/guides/workflow-blueprints",
    time: "5 blueprints",
    category: "Workflows",
  },
  {
    title: "AI Adoption Roadmap Template",
    description:
      "A structured 90-day plan for rolling out AI to your organization. Assessment, foundation, pilot, scale. Ready to present to the board.",
    free: true,
    href: "/guides/ai-adoption-roadmap",
    time: "90-day plan",
    category: "Leadership",
  },
  {
    title: "Team AI Fluency Assessment",
    description:
      "A scoring rubric and 10-question survey to measure where your team stands with AI. Five dimensions, clear levels, and an interpretation guide.",
    free: true,
    href: "/guides/team-fluency-assessment",
    time: "Assessment",
    category: "Leadership",
  },
  {
    title: "Wiki Automation with Claude Code",
    description:
      "Slash commands, scheduled tasks, GitHub Actions, and Agent Skills. Five levels of automation from manual to fully autonomous.",
    free: false,
    href: "/guides/wiki-automation",
    time: "60 min",
    category: "Knowledge Bases",
  },
  {
    title: "The Two-Model Validation Pattern",
    description:
      "How to use two different AI models to prevent compounding hallucinations in high-stakes knowledge bases.",
    free: false,
    href: "/guides/two-model-validation",
    time: "30 min",
    category: "Knowledge Bases",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Knowledge Bases": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  Prompts: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  Workflows: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  Leadership: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Guides</h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Free guides and downloadable templates for building with AI. Enter your
        email to unlock the full guide and download.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {GUIDES.map((guide) => (
          <Link
            key={guide.title}
            href={guide.href}
            className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <div className="flex items-center gap-3">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  CATEGORY_COLORS[guide.category] || CATEGORY_COLORS["Knowledge Bases"]
                }`}
              >
                {guide.category}
              </span>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  guide.free
                    ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                    : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                }`}
              >
                {guide.free ? "Free" : "Paid"}
              </span>
              <span className="text-xs text-zinc-400">{guide.time}</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold group-hover:text-emerald-600">
              {guide.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
              {guide.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
