import Link from "next/link";

const TOOLS = [
  {
    title: "CLAUDE.md Generator",
    description:
      "Answer a few questions about your wiki topic and get a ready-to-use CLAUDE.md schema file. Copy, paste, start building.",
    tag: "Available Now",
    tagColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
    href: "#claude-md-generator",
  },
  {
    title: "Wiki Health Check",
    description:
      "Paste your CLAUDE.md and get a diagnostic. Missing fields, weak taxonomy, orphaned categories. Fix it before it compounds errors.",
    tag: "Coming Soon",
    tagColor:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    href: "#",
  },
  {
    title: "Source Quality Scorer",
    description:
      "Drop in a URL or paste text. Get a score for how useful it will be as a wiki source. Saves you from polluting your vault with noise.",
    tag: "Coming Soon",
    tagColor:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
    href: "#",
  },
];

export default function ToolsPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Free Tools
        </h1>
        <p className="mt-3 max-w-xl text-zinc-500">
          Useful things you can use right now. No account required, no email
          gate. Just tools that help you build better knowledge bases.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TOOLS.map((tool) => (
            <div
              key={tool.title}
              className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <span
                className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${tool.tagColor}`}
              >
                {tool.tag}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{tool.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CLAUDE.md Generator */}
      <section
        id="claude-md-generator"
        className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            CLAUDE.md Generator
          </h2>
          <p className="mt-3 max-w-xl text-zinc-500">
            Fill in the fields below. Get a complete CLAUDE.md schema file you
            can drop into any Obsidian vault.
          </p>
          <div className="mt-10 rounded-xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
            <p className="text-lg font-semibold">Interactive generator loading soon.</p>
            <p className="mt-2 text-sm text-zinc-500">
              In the meantime, check out our free guide for a manual approach.
            </p>
            <Link
              href="/guides/your-first-wiki"
              className="mt-6 inline-flex rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Read the free guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
