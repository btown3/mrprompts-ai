import Link from "next/link";

const STEPS = [
  {
    number: "1",
    title: "Choose your tool",
    content:
      "Pick any note-taking app you already use. Notion (recommended for most people), Google Docs (simplest option), or a folder of text files on your computer. Create a new workspace or folder. Name it whatever you want. This is where your wiki lives.",
  },
  {
    number: "2",
    title: "Pick your topic",
    content:
      "Choose one topic you care about and already know a little. AI prompt engineering, personal finance, cooking techniques. Narrow beats broad. You can always expand later.",
  },
  {
    number: "3",
    title: "Create your folder structure",
    content:
      'Make three folders inside your workspace: "Sources" for raw material, "Wiki" for compiled articles, and "Queries" for questions and answers. That is the entire architecture.',
  },
  {
    number: "4",
    title: "Add your first sources",
    content:
      "Copy-paste 3 to 5 articles, blog posts, or notes into the Sources folder. One file per source. These are the raw ingredients your AI will work with.",
  },
  {
    number: "5",
    title: "Write your CLAUDE.md",
    content:
      "Create a CLAUDE.md file in your workspace root. This tells the AI what your wiki is about, how to structure articles, and what format to use. We have a template below.",
  },
  {
    number: "6",
    title: "Generate your first wiki article",
    content:
      'Open Claude (or any LLM with file access). Point it at your workspace. Ask: "Read the sources and write a wiki article about [your topic] following the schema in CLAUDE.md." Review, edit, save to the Wiki folder.',
  },
  {
    number: "7",
    title: "Query your wiki",
    content:
      'Ask a question. "Based on the wiki, what are the three main approaches to X?" The AI reads your compiled wiki, not raw sources, so answers are structured and consistent. Save good answers back.',
  },
];

export default function YourFirstWikiPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            Free Guide
          </span>
          <span className="text-xs text-zinc-400">Updated April 2026</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Your First Wiki in 20 Minutes
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          Go from zero to a working LLM knowledge base with nothing but a
          note-taking app and an AI assistant. No coding, no terminal, no nonsense.
        </p>
      </div>

      {/* Why this matters */}
      <section className="mb-16">
        <h2 className="text-xl font-bold">Why build a wiki?</h2>
        <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
          Every time you start a new chat, you lose context. Your AI has no
          memory of what you discussed yesterday. A wiki fixes that. It gives
          your AI a persistent, structured knowledge base it can read every time.
          The more you use it, the better it gets. Karpathy called this the most
          underrated use of LLMs. We agree.
        </p>
      </section>

      {/* Steps */}
      <section className="mb-16">
        <h2 className="text-xl font-bold">The 7 steps</h2>
        <div className="mt-8 space-y-8">
          {STEPS.map((step) => (
            <div key={step.number} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                {step.number}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLAUDE.md template */}
      <section className="mb-16">
        <h2 className="text-xl font-bold">Starter CLAUDE.md template</h2>
        <p className="mt-3 text-sm text-zinc-500">
          Copy this into a file called CLAUDE.md in your workspace root. Replace the
          bracketed fields with your topic.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-6 text-sm leading-relaxed text-zinc-300">
{`# [Your Topic] Wiki

## Purpose
A structured knowledge base on [your topic]
compiled from curated sources.

## Structure
- /Sources — Raw articles and notes (never edited by AI)
- /Wiki — Compiled, interlinked wiki articles
- /Queries — Questions asked and answers generated

## Article Format
- Title as H1
- 2-3 sentence summary at top
- Body with H2 sections
- "Sources" section at bottom linking to /Sources files
- Wiki-style [[links]] to related articles

## Rules
- Never modify files in /Sources
- Always cite which source(s) informed each article
- Use [[wikilinks]] to connect related concepts
- Keep articles focused: one concept per page`}
        </pre>
      </section>

      {/* What's next */}
      <section className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-xl font-bold">What comes next</h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          You have a working wiki. From here you can add more sources, generate
          more articles, and start querying. When you are ready to go deeper:
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/guides/claude-md-masterclass"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">CLAUDE.md Masterclass</p>
            <p className="mt-1 text-xs text-zinc-500">
              Write schemas that make your wiki self-maintaining.
            </p>
          </Link>
          <Link
            href="/guides/wiki-automation"
            className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800"
          >
            <p className="text-sm font-semibold">Wiki Automation</p>
            <p className="mt-1 text-xs text-zinc-500">
              Slash commands and scheduled tasks for hands-free wikis.
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
