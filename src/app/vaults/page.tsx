import Link from "next/link";

export default function VaultsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Wiki Vaults
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Complete knowledge bases you can download and start using immediately.
        Each vault is interlinked, indexed, and ready to query with any AI tool.
      </p>

      <div className="mt-12">
        <div className="flex flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
              Available Now
            </span>
            <span className="text-lg font-bold">$49</span>
          </div>
          <h2 className="mt-4 text-lg font-semibold">
            AI Prompt Engineering
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-500">
            50+ interlinked articles covering prompting frameworks,
            chain-of-thought, system prompts, and real-world patterns. Updated
            weekly. Includes a production-ready CLAUDE.md schema.
          </p>
          <div className="mt-4 flex gap-4 text-xs text-zinc-400">
            <span>54 articles</span>
            <span>38 sources</span>
          </div>
        </div>
      </div>

      {/* Newsletter CTA for new vaults */}
      <div className="mt-12 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h3 className="text-lg font-semibold">More vaults in the works.</h3>
        <p className="mt-2 text-sm text-zinc-500">
          New vault topics ship regularly. Subscribe to the newsletter to get
          notified when the next one drops.
        </p>
        <a
          href="https://mrprompts.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Subscribe to the newsletter &rarr;
        </a>
      </div>

      {/* Build your own CTA */}
      <div className="mt-8 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h3 className="text-lg font-semibold">Rather build your own?</h3>
        <p className="mt-2 text-sm text-zinc-500">
          The Knowledge Base Starter Kit gives you the complete folder structure,
          schema, and 7 prompts to build a knowledge base on any topic.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <Link
            href="/build/knowledge-bases"
            className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
          >
            Build your own &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
