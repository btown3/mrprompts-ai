import Link from "next/link";

const MODULES = [
  {
    number: "01",
    title: "Your first wiki in 20 minutes",
    description:
      "Install Obsidian, pick a topic, create your folder structure, add sources, write a CLAUDE.md, and generate your first wiki article. You will have a working knowledge base by the end.",
    free: true,
    href: "/guides/your-first-wiki",
  },
  {
    number: "02",
    title: "Writing a CLAUDE.md that runs your wiki",
    description:
      "The schema file is the single most important file in your system. Learn the five sections every CLAUDE.md needs, how to write effective rules, and how to design taxonomy that scales.",
    free: false,
    href: "/guides/claude-md-masterclass",
  },
  {
    number: "03",
    title: "Automating wiki updates",
    description:
      "Five levels of automation: manual prompting, slash commands, scheduled tasks, GitHub Actions, and Agent Skills. Pick the level that matches your comfort and watch your wiki build itself.",
    free: false,
    href: "/guides/wiki-automation",
  },
  {
    number: "04",
    title: "Quality control with two-model validation",
    description:
      "Use two different AI models to prevent compounding hallucinations. Essential for high-stakes knowledge bases where accuracy matters.",
    free: false,
    href: "/guides/two-model-validation",
  },
];

export default function KnowledgeBasesTrackPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/build"
        className="text-sm text-emerald-600 hover:text-emerald-700"
      >
        &larr; All tracks
      </Link>

      <div className="mt-6">
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
          Most Popular
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Build a Knowledge Base
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          Go from zero to a structured AI knowledge base that compounds over
          time. By the end, you will have a working Obsidian vault with
          interlinked articles, a CLAUDE.md schema, and a system that gets
          smarter every time you use it.
        </p>
      </div>

      {/* What you'll build */}
      <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
        <h2 className="font-semibold text-emerald-800 dark:text-emerald-400">
          What you will have when you are done
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-emerald-700 dark:text-emerald-500">
          <li>A complete Obsidian wiki vault with 10+ interlinked articles</li>
          <li>A CLAUDE.md schema that controls your entire system</li>
          <li>Automated updates running on a schedule</li>
          <li>Quality validation using two different AI models</li>
        </ul>
      </div>

      {/* Modules */}
      <div className="mt-12 space-y-6">
        {MODULES.map((mod) => (
          <Link
            key={mod.number}
            href={mod.href}
            className="group flex gap-4 rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {mod.number}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold group-hover:text-emerald-600">
                  {mod.title}
                </h3>
                {mod.free && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                    Free
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                {mod.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Tool callout */}
      <div className="mt-12 rounded-xl border border-zinc-200 p-6 text-center dark:border-zinc-800">
        <h3 className="font-semibold">Want to skip ahead?</h3>
        <p className="mt-2 text-sm text-zinc-500">
          The Wiki Builder tool generates a complete vault from your sources
          automatically.
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
