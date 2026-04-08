import Link from "next/link";

const FEATURED_WIKIS = [
  {
    title: "AI Prompt Engineering",
    description:
      "50+ interlinked articles covering prompting frameworks, chain-of-thought, system prompts, and real-world patterns. Updated weekly.",
    articles: 54,
    sources: 38,
    tag: "Free",
    href: "/wikis/ai-prompt-engineering",
    tagColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    title: "AI Agents and Tools",
    description:
      "How MCP servers, function calling, and agent architectures actually work. From basics to production patterns.",
    articles: 42,
    sources: 29,
    tag: "Coming Soon",
    href: "/wikis/ai-agents-tools",
    tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    title: "Building with LLMs",
    description:
      "RAG, fine-tuning, evaluation, deployment. Everything you need to go from API call to production application.",
    articles: 67,
    sources: 45,
    tag: "Coming Soon",
    href: "/wikis/building-with-llms",
    tagColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  },
];

const GUIDES = [
  {
    title: "Your First Wiki in 20 Minutes",
    description: "Zero to a working LLM knowledge base. No coding required.",
    free: true,
    href: "/guides/your-first-wiki",
  },
  {
    title: "The CLAUDE.md Masterclass",
    description:
      "How to write the schema file that controls your entire wiki system.",
    free: false,
    href: "/guides/claude-md-masterclass",
  },
  {
    title: "Wiki Automation with Claude Code",
    description:
      "Slash commands, scheduled tasks, and GitHub Actions for self-building wikis.",
    free: false,
    href: "/guides/wiki-automation",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pt-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              LLM Knowledge Bases
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Stop starting from scratch{" "}
              <span className="text-zinc-400">every time you open a chat window.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Pre-built wiki vaults, free guides, and tools to build AI
              knowledge bases that actually compound. Inspired by Karpathy.
              Built for everyone.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/guides/your-first-wiki"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Build Your First Wiki (Free)
              </Link>
              <Link
                href="/wikis"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-300 px-6 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                Browse Wiki Vaults
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            How LLM knowledge bases work
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-zinc-500">
            The system Karpathy described, packaged so you can start using it
            today.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                label: "Collect",
                desc: "Drop articles, papers, and notes into a raw folder. The AI never touches your originals.",
              },
              {
                step: "02",
                label: "Compile",
                desc: "The AI reads everything and writes a structured, interlinked wiki with summaries and concept pages.",
              },
              {
                step: "03",
                label: "Query",
                desc: "Ask questions against your wiki. Get cited, synthesized answers. File them back in.",
              },
              {
                step: "04",
                label: "Compound",
                desc: "Every answer enriches the wiki. Every new source deepens it. Knowledge that actually accumulates.",
              },
            ].map((item) => (
              <div key={item.step}>
                <span className="text-3xl font-bold text-emerald-600">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wiki Vaults */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Wiki Vaults
            </h2>
            <p className="mt-2 text-zinc-500">
              Download a complete Obsidian vault and start querying immediately.
            </p>
          </div>
          <Link
            href="/wikis"
            className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-700 md:block"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FEATURED_WIKIS.map((wiki) => (
            <Link
              key={wiki.title}
              href={wiki.href}
              className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
            >
              <span
                className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${wiki.tagColor}`}
              >
                {wiki.tag}
              </span>
              <h3 className="mt-4 text-lg font-semibold group-hover:text-emerald-600">
                {wiki.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                {wiki.description}
              </p>
              <div className="mt-4 flex gap-4 text-xs text-zinc-400">
                <span>{wiki.articles} articles</span>
                <span>{wiki.sources} sources</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Guides
          </h2>
          <p className="mt-2 text-zinc-500">
            Learn the system. Build your own. Or skip straight to the vaults.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {GUIDES.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800"
              >
                <span
                  className={`w-fit rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    guide.free
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                      : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  }`}
                >
                  {guide.free ? "Free" : "Paid"}
                </span>
                <h3 className="mt-4 text-lg font-semibold group-hover:text-emerald-600">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-zinc-900 px-8 py-14 text-center dark:bg-zinc-800">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Get the best AI knowledge base content, weekly.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
            Free newsletter. New wiki drops, prompt engineering breakdowns, and
            tools you can actually use. No fluff.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <iframe
              src="https://mrprompts.substack.com/embed"
              width="100%"
              height="150"
              className="rounded-lg"
              style={{ border: "none", background: "transparent" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
