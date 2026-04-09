import Link from "next/link";

const VAULTS = [
  {
    title: "AI Prompt Engineering",
    description:
      "50+ interlinked articles covering prompting frameworks, chain-of-thought, system prompts, and real-world patterns. Updated weekly.",
    articles: 54,
    sources: 38,
    price: "$49",
    tag: "Available Now",
    tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    title: "AI Agents and Tools",
    description:
      "How MCP servers, function calling, and agent architectures actually work. From basics to production patterns.",
    articles: 42,
    sources: 29,
    price: "$49",
    tag: "Coming Soon",
    tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    title: "Building with LLMs",
    description:
      "RAG, fine-tuning, evaluation, deployment. Everything you need to go from API call to production application.",
    articles: 67,
    sources: 45,
    price: "$79",
    tag: "Coming Soon",
    tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    title: "Personal Productivity with AI",
    description:
      "AI workflows for email, scheduling, note-taking, research, and decision-making. Built for professionals, not developers.",
    articles: 35,
    sources: 22,
    price: "$29",
    tag: "Coming Soon",
    tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  },
];

export default function VaultsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Wiki Vaults
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Complete Obsidian knowledge bases you can download and start using
        immediately. Each vault is interlinked, indexed, and ready to query.
        Don't want to build? Just download.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {VAULTS.map((vault) => (
          <div
            key={vault.title}
            className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <div className="flex items-center justify-between">
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${vault.tagColor}`}
              >
                {vault.tag}
              </span>
              <span className="text-lg font-bold">{vault.price}</span>
            </div>
            <h2 className="mt-4 text-lg font-semibold">{vault.title}</h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
              {vault.description}
            </p>
            <div className="mt-4 flex gap-4 text-xs text-zinc-400">
              <span>{vault.articles} articles</span>
              <span>{vault.sources} sources</span>
            </div>
          </div>
        ))}
      </div>

      {/* Build your own CTA */}
      <div className="mt-16 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h3 className="text-lg font-semibold">Rather build your own?</h3>
        <p className="mt-2 text-sm text-zinc-500">
          The Wiki Builder tool generates a custom vault from your sources in
          minutes. Or follow the Knowledge Base build track to learn the system.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Link
            href="/tools/wiki-builder"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Wiki Builder &rarr;
          </Link>
          <Link
            href="/build/knowledge-bases"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Build Track &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
