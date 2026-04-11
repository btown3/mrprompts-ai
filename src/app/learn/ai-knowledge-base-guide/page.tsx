import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";
import { BuildProcess } from "@/app/components/diagrams/BuildProcess";
import { FolderStructure } from "@/app/components/diagrams/FolderStructure";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "How to Build an AI Knowledge Base — Complete Guide",
  description:
    "Step-by-step guide to building an AI knowledge base that gets smarter over time. The system behind MrPrompts, explained for non-technical professionals.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/ai-knowledge-base-guide" },
};

export default function AIKnowledgeBaseGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Deep Dive</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">How to Build an AI Knowledge Base</h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By Wayne Cederholm</p>
      <p className="mt-4 text-lg text-zinc-500">An AI knowledge base is a structured collection of articles that an AI can read, query, and build upon. Unlike a chat that disappears, a knowledge base compounds. This guide explains the complete system.</p>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why knowledge bases matter more than conversations</h2>
          <p className="mt-3">Every AI conversation starts from zero. The AI has no memory of what you discussed yesterday. If you asked it to research a topic last week, that research is gone. You start over every time.</p>
          <p className="mt-3">A knowledge base changes this. It gives your AI a persistent, structured reference it can read at the start of every session. Instead of explaining your topic, your preferences, and your context every time, you point the AI at your knowledge base and it already knows.</p>
          <p className="mt-3">The compounding effect is what makes this transformative. Every article the AI generates enriches the knowledge base. Every query and answer adds context. Every new source deepens the foundation. After a month of regular use, your AI knows your topic better than any single conversation ever could because it has accumulated hundreds of interconnected references.</p>
          <p className="mt-3">Andrej Karpathy, formerly of Tesla and OpenAI, called this the most underrated use of LLMs. He is right. Building a knowledge base is the single highest-leverage thing you can do with AI for long-term professional development.</p>
        </section>

        <section>
          <div className="mb-10">
            <BuildProcess />
          </div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The four-step system</h2>
          <p className="mt-3"><strong>1. Collect.</strong> Drop raw sources — articles, papers, notes, transcripts — into a Sources folder. These are read-only. The AI never modifies your originals. Quality matters more than quantity. Five excellent sources produce a better wiki than fifty mediocre ones.</p>
          <p className="mt-3"><strong>2. Compile.</strong> The AI reads your sources and writes structured, interlinked wiki articles following your CLAUDE.md schema. Each article covers one concept, cites its sources, and links to related articles. The AI is doing the synthesis work — turning raw information into organized knowledge.</p>
          <p className="mt-3"><strong>3. Query.</strong> Ask questions against your compiled wiki. "What are the main approaches to X?" "How does Y compare to Z?" The AI reads the wiki (not the raw sources) so answers are structured and consistent. The best answers get filed back into the wiki, enriching it further.</p>
          <p className="mt-3"><strong>4. Compound.</strong> Every new source enriches the wiki. Every good query response becomes new knowledge. Every article links to others, creating a web of understanding. Over time, the knowledge base becomes the most comprehensive reference on your topic that exists anywhere — because it was built specifically for your needs.</p>
        </section>

        <section>
          <div className="mb-10">
            <FolderStructure />
          </div>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What you need to get started</h2>
          <p className="mt-3"><strong>A note-taking tool.</strong> Any note-taking app works: Notion, Google Docs, Apple Notes, or a simple folder of markdown files. The tool matters less than the structure.</p>
          <p className="mt-3"><strong>An AI assistant.</strong> Claude, ChatGPT, or any model that can read files. Claude is our recommendation because it handles long documents well and produces more nuanced wiki articles.</p>
          <p className="mt-3"><strong>A CLAUDE.md schema.</strong> The instruction file that tells your AI how to build and maintain the knowledge base. Our <Link href="/learn/what-is-claude-md" className="text-emerald-600 hover:text-emerald-700">CLAUDE.md explainer</Link> covers this in detail. Our <Link href="/guides/claude-md-masterclass" className="text-emerald-600 hover:text-emerald-700">Masterclass</Link> gives you a production-ready template.</p>
          <p className="mt-3"><strong>3-5 source documents.</strong> Articles, notes, or research on your topic. Start small. You can always add more.</p>
          <p className="mt-3"><strong>20 minutes.</strong> That is how long it takes to set up your first wiki. Our <Link href="/guides/your-first-wiki" className="text-emerald-600 hover:text-emerald-700">step-by-step guide</Link> walks you through it.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Common mistakes and how to avoid them</h2>
          <p className="mt-3"><strong>Starting too broad.</strong> "AI" is not a good wiki topic. "AI prompt engineering for marketing teams" is. Narrow topics produce better, more interlinked articles. You can always expand the scope later.</p>
          <p className="mt-3"><strong>Skipping the schema.</strong> Without a CLAUDE.md, your wiki will drift. Articles will be inconsistent, categories will overlap, and the AI will make different formatting decisions every session. The schema is a 15-minute investment that saves hours of cleanup.</p>
          <p className="mt-3"><strong>Adding too many sources too fast.</strong> Quality matters more than quantity. Five well-chosen articles produce a better foundation than fifty random ones. Start with 3-5 sources, generate your first articles, verify the quality, then add more.</p>
          <p className="mt-3"><strong>Never querying.</strong> A knowledge base you do not query is just a folder of documents. The value comes from asking questions, getting synthesized answers, and filing good answers back. Use your wiki daily.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What to build your knowledge base about</h2>
          <p className="mt-3">The best knowledge base topics share three qualities: you care about them, you encounter new information about them regularly, and synthesized knowledge is more valuable than raw notes.</p>
          <p className="mt-3">Strong topics for professionals: your industry's competitive landscape, your product's technical documentation, a domain you are learning (AI, data science, leadership), client research, regulatory compliance, sales methodology, marketing strategy. See our use-case guides for building a <Link href="/learn/sales-knowledge-base" className="text-emerald-600 hover:text-emerald-700">sales knowledge base</Link>, a <Link href="/learn/research-knowledge-base" className="text-emerald-600 hover:text-emerald-700">research knowledge base</Link>, or an <Link href="/learn/executive-knowledge-base" className="text-emerald-600 hover:text-emerald-700">executive knowledge base</Link>.</p>
          <p className="mt-3">Weak topics: things that change daily (news), things with no depth (simple facts), things you do not reference regularly (vacation planning).</p>
        </section>
      </div>

      <section className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-bold">Why this matters: what the research says</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>The compound knowledge approach described in this guide builds directly on Andrej Karpathy&apos;s autoresearch framework. Karpathy, formerly of Tesla and OpenAI, demonstrated that AI systems with access to structured, accumulated knowledge dramatically outperform those that start from scratch each session. His work showed that the key differentiator was not model capability but knowledge architecture — how information is organized, interlinked, and made queryable.</p>
          <p>Research from Google DeepMind on retrieval-augmented generation (RAG) systems confirms that AI models produce fewer hallucinations and more accurate responses when they can reference a curated knowledge base rather than relying solely on training data. The wiki system described here functions as a personal RAG system: your sources are the retrieval corpus, your wiki articles are the compiled knowledge, and your queries generate synthesized answers grounded in specific sources.</p>
          <p>The four-step system — Collect, Compile, Query, Compound — is not theoretical. It is the same architecture used by research teams, intelligence analysts, and knowledge management professionals, now made accessible to anyone with a note-taking app and an AI assistant.</p>
        </div>
      </section>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "How is a knowledge base different from just saving bookmarks?", answer: "Bookmarks are links to information. A knowledge base is synthesized, structured, interlinked knowledge. When you save a bookmark, you have a URL. When you add a source to a knowledge base, the AI reads it, extracts the key insights, connects them to everything else you know about the topic, and makes it all queryable. The difference is between a pile of papers and an encyclopedia." },
            { question: "How long before a knowledge base becomes useful?", answer: "Immediately useful for the topic you start with. After one session, you have 3-5 structured articles you can reference. After a week of daily use, you have 15-20 interlinked articles and the compounding effect starts to become obvious. After a month, you have a reference that no single conversation could replicate." },
            { question: "Can I build a knowledge base with ChatGPT instead of Claude?", answer: "Yes. The system works with any AI that can read files and follow instructions. Claude is our recommendation because it handles long documents and multi-step instructions well, but ChatGPT, Gemini, and other models work too. The key is the system (sources, schema, wiki), not the specific AI model." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Build your first knowledge base right now</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">The Wiki Builder tool generates a complete knowledge base from your sources in minutes. Or follow the step-by-step guide to learn the system.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/tools/wiki-builder" className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700">Wiki Builder</Link>
          <Link href="/guides/your-first-wiki" className="inline-flex h-10 items-center justify-center rounded-lg border border-zinc-600 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800">Step-by-Step Guide</Link>
        </div>
      </div>

      <PageFooterCTA />
    </article>
  );
}
