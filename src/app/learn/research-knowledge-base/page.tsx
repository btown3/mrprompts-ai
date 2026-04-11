import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "Research Knowledge Base — Synthesize Sources Into Structured Knowledge",
  description:
    "Build an AI-powered research knowledge base that synthesizes papers, articles, and notes into interlinked wiki articles. For analysts, consultants, and researchers.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/research-knowledge-base" },
};

export default function ResearchKnowledgeBasePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Use Case</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        How to Build a Research Knowledge Base
      </h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By MrPrompts</p>
      <p className="mt-4 text-lg text-zinc-500">
        Turn hundreds of articles, papers, and notes into a structured,
        queryable knowledge system. For analysts, consultants, academics, and
        anyone who synthesizes information for a living.
      </p>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The research problem</h2>
          <p className="mt-3">You read 10 articles about a topic. A week later, you remember the conclusions but not the sources. A month later, you remember vaguely reading something about it. Six months later, you read the same articles again because you can't find your notes.</p>
          <p className="mt-3">A research knowledge base solves this by turning raw reading into structured, permanent knowledge. Every article you read gets summarized. Every summary gets linked to related concepts. Every concept builds on previous ones. The result is a personal encyclopedia on your research topic that you can query instantly.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What goes in a research knowledge base</h2>
          <p className="mt-3"><strong>Source summaries.</strong> For every paper, article, or report: a 3-5 sentence summary, the key findings, methodology notes, and your personal assessment of quality and relevance.</p>
          <p className="mt-3"><strong>Concept articles.</strong> One article per concept. "Chain-of-Thought Prompting" gets its own page that synthesizes everything you've read about it from multiple sources. This is where compound knowledge lives.</p>
          <p className="mt-3"><strong>Synthesis pieces.</strong> Articles that compare and contrast multiple sources on a theme. "Three Approaches to AI Safety" draws from 8 different source articles and presents a unified analysis.</p>
          <p className="mt-3"><strong>Open questions.</strong> What you don't know yet. What contradictions exist between sources. What needs more research. This is the most valuable section because it directs your future reading.</p>
          <p className="mt-3"><strong>Literature maps.</strong> Visual or textual maps showing how sources relate to each other. Who cites whom. Which findings agree or conflict. Where consensus exists and where the field is divided.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The CLAUDE.md schema for research</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-6 text-sm leading-relaxed text-zinc-300">{`# [Research Topic] Knowledge Base
# Version: 1.0

## Purpose
A structured research knowledge base on [topic],
synthesized from academic papers, industry articles,
and primary research.

## Structure
- /Sources — Raw papers, articles, reports (one file each)
  - /Sources/Papers — Academic and technical papers
  - /Sources/Articles — Blog posts, news, industry analysis
  - /Sources/Data — Datasets, surveys, statistics
- /Wiki — Synthesized knowledge articles
- /Queries — Research questions and synthesized answers

## Categories
- Concepts (one article per core concept)
- Methods (methodologies, frameworks, approaches)
- Findings (key results and evidence)
- People (researchers, organizations, companies)
- Open Questions (gaps, contradictions, areas for more research)

## Article Format
- H1 title
- Summary (must stand alone — someone should get the key insight from the summary)
- Body with H2 sections
- Evidence section (which sources support which claims)
- Counterarguments (what challenges this view)
- Sources section with full citations
- Related articles with [[wikilinks]]

## Rules
1. Never modify source files
2. Every claim must cite a specific source
3. Note disagreements between sources explicitly
4. Flag your own opinions separately from source findings
5. Date every article — research findings have a shelf life
6. Mark confidence levels: [HIGH], [MEDIUM], [LOW] for claims with varying evidence`}</pre>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How researchers query the wiki</h2>
          <p className="mt-3">"What do my sources agree on about [topic]? Where do they disagree? What evidence supports each position?"</p>
          <p className="mt-3">"Summarize everything I know about [concept] from all sources. Include confidence levels and source quality."</p>
          <p className="mt-3">"What gaps exist in my research? What questions have I not yet found answers to? What should I read next?"</p>
          <p className="mt-3">"Write a literature review section on [theme] drawing from my wiki articles. Include citations."</p>
        </section>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "How is this different from Zotero or Mendeley?", answer: "Reference managers store papers and citations. A knowledge base synthesizes them into structured understanding. Zotero tells you which papers you have. Your wiki tells you what you know from those papers and how the ideas connect. They're complementary — use Zotero to manage sources, the wiki to manage knowledge." },
            { question: "How many sources before the wiki becomes useful?", answer: "5-10 sources on a focused topic is enough to start seeing compound value. The wiki becomes genuinely powerful at 20-30 sources because the concept articles start synthesizing across many inputs. Start small, add sources as you read." },
            { question: "Can I use this for client research?", answer: "Absolutely. Consultants build project-specific wikis for each client engagement. The sources are client documents, industry reports, and interview transcripts. The wiki becomes the knowledge foundation for all deliverables. When the engagement ends, the wiki is itself a deliverable." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Build your research knowledge base now</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">Get the starter kit with folder structure, CLAUDE.md schema, and 7 numbered prompts.</p>
        <Link href="/build/knowledge-bases" className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700">Get the Starter Kit</Link>
      </div>
    </article>
  );
}
