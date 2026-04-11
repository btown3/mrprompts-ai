import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is an AI Knowledge Base? — MrPrompts Glossary",
  description:
    "An AI knowledge base is a structured collection of documents that an AI can read, reference, and build upon. Learn how to create one and why it matters.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/ai-knowledge-base" },
};

export default function AIKnowledgeBasePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is an AI Knowledge Base?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          An AI knowledge base is a structured collection of documents, notes, and reference materials
          organized so that an AI model can read, search, and build upon them. Unlike a traditional
          wiki or shared drive, an AI knowledge base is designed with the AI as a primary consumer,
          using consistent formatting, clear taxonomy, and schema files like CLAUDE.md to ensure the
          AI produces reliable, context-aware outputs every time it interacts with the content.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How AI knowledge bases work</h2>
          <p className="mt-3">
            A traditional knowledge base is built for humans to browse and search. An AI knowledge
            base takes this a step further by structuring content so that AI models can process it
            efficiently. This means organizing files into clear folders, using consistent headings and
            naming conventions, and including a schema file that tells the AI what each section
            contains and how to use it.
          </p>
          <p className="mt-3">
            The typical structure includes three layers: sources (raw materials like articles, meeting
            notes, and documents), compiled content (structured wiki pages the AI generates from
            those sources), and queries (questions asked against the knowledge base and their
            answers). Each layer feeds the next, creating a system that compounds in value over time.
          </p>
          <p className="mt-3">
            When you point an AI at a well-structured knowledge base, it can answer questions with
            context it would otherwise lack, generate new content that is consistent with existing
            material, and surface connections between topics that might take a human hours to find
            manually.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Most professionals use AI by starting from scratch every conversation. They re-explain
            their context, their preferences, and their goals each time. An AI knowledge base
            eliminates this repetition by giving the AI persistent access to everything it needs to
            produce useful work immediately.
          </p>
          <p className="mt-3">
            For teams, knowledge bases are transformative. A sales team can build a knowledge base of
            product specs, competitor analysis, and objection handling scripts. When anyone on the
            team asks the AI a question, it draws from the same authoritative source, producing
            consistent answers across the organization. This is how AI adoption scales beyond
            individual productivity into team-wide capability.
          </p>
          <p className="mt-3">
            The most effective knowledge bases are living systems. You add new sources regularly, the
            AI compiles them into structured content, and the quality of every interaction improves.
            Building one is the single highest-leverage AI skill a non-technical professional can
            develop.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/claude-md" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">CLAUDE.md</Link>
          <Link href="/glossary/rag" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">RAG</Link>
          <Link href="/glossary/context-window" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Context Window</Link>
          <Link href="/glossary/prompt-library" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Library</Link>
          <Link href="/glossary/ai-workflow" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Workflow</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/learn/ai-knowledge-base-guide" className="text-emerald-600 hover:text-emerald-700">AI Knowledge Base Guide &rarr;</Link></li>
          <li><Link href="/guides/your-first-wiki" className="text-emerald-600 hover:text-emerald-700">Build Your First AI Wiki &rarr;</Link></li>
          <li><Link href="/learn/sales-knowledge-base" className="text-emerald-600 hover:text-emerald-700">Sales Knowledge Base &rarr;</Link></li>
          <li><Link href="/learn/research-knowledge-base" className="text-emerald-600 hover:text-emerald-700">Research Knowledge Base &rarr;</Link></li>
        </ul>
      </div>
    </article>
  );
}
