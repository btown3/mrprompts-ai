import Link from "next/link";

const GUIDES = [
  {
    title: "Your First Wiki in 20 Minutes",
    description:
      "Go from zero to a working LLM knowledge base with nothing but Obsidian and a Claude subscription. No coding, no terminal, no nonsense.",
    free: true,
    href: "/guides/your-first-wiki",
    time: "20 min",
  },
  {
    title: "The CLAUDE.md Masterclass",
    description:
      "The schema file is the single most important file in your system. Learn how to write one that makes your wiki practically self-maintaining.",
    free: false,
    href: "/guides/claude-md-masterclass",
    time: "45 min",
  },
  {
    title: "Wiki Automation with Claude Code",
    description:
      "Slash commands, scheduled tasks, GitHub Actions, and Agent Skills. Five levels of automation from manual to fully autonomous.",
    free: false,
    href: "/guides/wiki-automation",
    time: "60 min",
  },
  {
    title: "The Two-Model Validation Pattern",
    description:
      "How to use two different AI models to prevent compounding hallucinations in high-stakes knowledge bases.",
    free: false,
    href: "/guides/two-model-validation",
    time: "30 min",
  },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Guides</h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Learn the LLM knowledge base system step by step. Start free, go deep
        when you are ready.
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
