import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";
import { FolderStructure } from "@/app/components/diagrams/FolderStructure";
import { BuildProcess } from "@/app/components/diagrams/BuildProcess";

export const metadata: Metadata = {
  title: "The LLM Knowledge Base System: The Complete Guide",
  description:
    "How to build an AI-powered knowledge base that compiles raw sources into a structured wiki, answers complex questions, and gets smarter every time you use it. Based on Karpathy's approach, built for non-technical professionals.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/llm-knowledge-base-system" },
};

export default function LLMKnowledgeBaseSystemPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Complete Guide
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        The LLM Knowledge Base System
      </h1>
      <p className="mt-2 text-sm text-zinc-400">By MrPrompts</p>
      <p className="mt-4 text-lg text-zinc-500">
        Turn raw articles, notes, and research into a structured wiki that an
        AI can read, query, and build on. This guide covers every step, from
        an empty folder to a system that gets smarter each time you use it.
      </p>

      {/* The concept */}
      <div className="mt-12 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/10">
        <p className="font-medium text-emerald-800 dark:text-emerald-400">
          How it works in one paragraph
        </p>
        <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-500">
          You collect raw sources. An AI compiles them into a structured wiki.
          You query the wiki. Good answers get filed back in. The knowledge
          compounds. Andrej Karpathy described this as one of the most
          underrated uses of LLMs. He does it with custom scripts. This guide
          shows you how to do it without writing any code.
        </p>
      </div>

      <div className="mt-12">
        <BuildProcess />
      </div>

      <div className="mt-16 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The problem this solves</h2>
          <p className="mt-3">
            Every AI conversation starts from scratch. The AI does not remember
            what you discussed yesterday. The research you did last week? Gone.
            That article you read last month? It is in a browser tab you closed.
          </p>
          <p className="mt-3">
            A knowledge base gives your AI persistent memory. You point it at
            a folder of structured articles, it reads them, and now every
            conversation builds on everything you have already collected. You
            stop repeating yourself. The AI stops giving you generic answers.
          </p>
          <p className="mt-3">
            After a month, the wiki knows your topic better than any single
            conversation could. After three months, you have a reference nobody
            else has because it was built from your sources, for your questions.
          </p>
        </section>

        {/* Step 1 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 1: Set up your workspace</h2>
          <p className="mt-3">
            Two things. A place to store files and an AI that can read them.
          </p>
          <p className="mt-3">
            For file storage, use whatever you already have open:
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><strong>Notion</strong> if you want collaboration. Create a new workspace.</li>
            <li><strong>Google Docs</strong> if you want the simplest option. A folder in Drive works fine.</li>
            <li><strong>A folder on your computer</strong> with text files. Nothing fancy needed.</li>
            <li><strong>Obsidian</strong> if you want bidirectional linking. Steeper learning curve.</li>
          </ul>
          <p className="mt-3">
            For the AI, anything that can read files:
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><strong>Claude</strong> handles long documents well. I use it for most wiki work.</li>
            <li><strong>ChatGPT</strong> works. Upload files or paste content.</li>
            <li><strong>Gemini, Perplexity, local models.</strong> All fine. The system is the same regardless of which AI you pick.</li>
          </ul>
          <p className="mt-3">
            Create three folders:
          </p>
        </section>

        <FolderStructure />

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 2: Write your CLAUDE.md</h2>
          <p className="mt-3">
            CLAUDE.md is the instruction file for the whole system. It tells
            the AI your topic, your folder structure, how articles should be
            formatted, and what rules to follow. The AI reads it first, every
            time. Without it, you get inconsistent output and have to repeat
            yourself constantly.
          </p>
          <p className="mt-3">
            Create a file called CLAUDE.md in the root of your workspace and
            paste this template. Replace the brackets with your topic:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-6 text-sm leading-relaxed text-zinc-300">{`# [Your Topic] Knowledge Base
# Version: 1.0

## Purpose
A structured knowledge base on [your topic],
compiled from curated sources and maintained by AI.

## Structure
- /Sources — Raw articles, notes, and reference material
  (NEVER edited by AI)
- /Wiki — Compiled, interlinked wiki articles
  (generated and maintained by AI)
- /Queries — Questions asked and answers generated
  (good answers get promoted to wiki)

## Article Format
Every wiki article must follow this structure:
1. Title as H1
2. Summary (2-3 sentences that stand alone)
3. Body organized with H2 sections
4. Key Takeaways (3-5 bullet points)
5. Sources section (which source files informed this)
6. Related section (links to connected articles)

## Taxonomy
Categories: [define 4-6 top-level categories]
Tags: [define common tags]
Naming: Title-Case-With-Hyphens.md

## Rules
1. NEVER modify files in /Sources
2. Always cite which source(s) informed each article
3. Link related concepts across articles
4. One concept per page
5. Every claim must trace back to a source
6. Add "Last updated" date to every article
7. New articles must link to at least 2 existing articles
8. Keep summaries self-contained`}</pre>
          <p className="mt-4 text-sm text-zinc-500">
            The{" "}
            <Link href="/learn/what-is-claude-md" className="text-emerald-600 hover:text-emerald-700">
              CLAUDE.md deep dive
            </Link>{" "}
            explains every section if you want the details. The{" "}
            <Link href="/guides/claude-md-masterclass" className="text-emerald-600 hover:text-emerald-700">
              Masterclass
            </Link>{" "}
            has schemas for specific use cases.
          </p>
        </section>

        {/* Step 3 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 3: Add your first sources</h2>
          <p className="mt-3">
            Drop 3 to 5 source documents into the Sources folder. One file per
            source. Paste the full text, not just a link. Name each file with
            a date and short title: <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-800">2026-04-12-Karpathy-Knowledge-Bases.md</code>
          </p>
          <p className="mt-3">
            Sources can be articles you read, papers, your own meeting notes,
            documentation, interview transcripts, market research. Anything
            relevant.
          </p>
          <p className="mt-3">
            Five good sources beat fifty mediocre ones. Start with the best
            things you have read on your topic. You will add more over time.
          </p>
        </section>

        {/* Step 4 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 4: Compile your first wiki articles</h2>
          <p className="mt-3">
            Open your AI. Give it the CLAUDE.md file first. Then give it your
            source files. Then use this prompt:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-300">{`Read the CLAUDE.md schema. Then read all the source files.

1. Identify the 5-8 most important concepts across
   all sources.
2. For each concept, write a wiki article following
   the format specified in CLAUDE.md.
3. Link related articles to each other.
4. Create an index file listing all articles by category.

Output each article as a separate section so I can
save them individually.`}</pre>
          <p className="mt-3">
            You will get structured wiki articles with summaries, body sections,
            takeaways, citations, and cross-links. Review them for anything
            that looks off. Save each one into the Wiki folder.
          </p>
          <p className="mt-3">
            That is a working knowledge base. About 20 minutes from start to
            here. Everything after this point makes it better.
          </p>
        </section>

        {/* Step 5 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 5: Start querying it</h2>
          <p className="mt-3">
            Now instead of asking your AI vague questions, you ask it questions
            against the wiki. Give it the CLAUDE.md and your wiki articles,
            then ask what you actually want to know:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-300">{`Read the CLAUDE.md schema and all wiki articles.

Based on the wiki, what are the three main approaches
to [topic]? Which approach has the strongest evidence?
What are the trade-offs between them?

Cite which wiki articles support each point.`}</pre>
          <p className="mt-3">
            The difference between this and a normal AI conversation is
            striking. The AI draws from your curated sources, organized by
            your schema, following your rules. It is synthesizing from your
            data, not guessing from its training data.
          </p>
          <p className="mt-3">
            When you get an answer that teaches you something new, save it to
            the Queries folder. If it is good enough, promote it to a wiki
            article. The queries feed back into the system.
          </p>
        </section>

        {/* Step 6 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 6: Keep feeding it</h2>
          <p className="mt-3">
            When you read something relevant, drop it into Sources. One file,
            30 seconds. Once a week, or whenever you have added a few new
            sources, run this:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-300">{`Read the CLAUDE.md schema, all wiki articles, and
the following new source files: [list them]

1. Do any new sources update or contradict existing
   wiki articles? If so, update those articles.
2. Do any new sources warrant entirely new wiki articles?
   If so, write them.
3. Update the index file.
4. Add links between new and existing articles.`}</pre>
          <p className="mt-3">
            Once a month, run a health check:
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-300">{`Read all wiki articles. Audit for:
1. Articles with no incoming links (orphans)
2. Claims without source citations
3. Contradictions between articles
4. Topics mentioned but never given their own article
5. Articles that are too short (under 300 words)
6. Outdated information (check dates)

Report issues and suggest fixes.`}</pre>
          <p className="mt-3">
            A month in, you will have 15 to 25 interlinked articles. Three
            months, 40 to 60. At that point the wiki is the most complete
            reference on your topic that exists, because nobody else built one
            from your exact sources for your exact questions.
          </p>
        </section>

        {/* Step 7 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 7: Do things you could not do before</h2>
          <p className="mt-3">
            Once you have 20+ articles, some new things become possible.
          </p>
          <p className="mt-3">
            You can ask the AI to compare what two different sources say about
            the same topic and tell you where they agree and disagree.
          </p>
          <p className="mt-3">
            You can ask it to find gaps. "What questions can I not answer with
            the current wiki? What should I read next?"
          </p>
          <p className="mt-3">
            You can ask for outputs. "Write a one-page summary of [topic] for
            my boss." Or "Create a slide outline for a 15-minute presentation."
            Or "Draft a blog post using only information from the wiki." The
            wiki becomes the source of truth for everything you produce on that
            topic.
          </p>
          <p className="mt-3">
            If accuracy is critical (finance, legal, health), use a second AI
            model to check. Give it the wiki article and the cited sources.
            Ask: "Does this article accurately represent the source material?"
            When two different models agree, that is a strong signal. When they
            disagree, it is worth investigating.
          </p>
        </section>
      </div>

      {/* Use cases */}
      <section className="mt-16">
        <h2 className="text-xl font-bold">People use this for all kinds of things</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link href="/learn/sales-knowledge-base" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">Sales teams</p>
            <p className="mt-1 text-xs text-zinc-500">Competitive intel, deal playbooks, objection libraries</p>
          </Link>
          <Link href="/learn/research-knowledge-base" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">Researchers and analysts</p>
            <p className="mt-1 text-xs text-zinc-500">Source synthesis, literature maps, open questions</p>
          </Link>
          <Link href="/learn/onboarding-knowledge-base" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">HR and operations</p>
            <p className="mt-1 text-xs text-zinc-500">New hire onboarding, process documentation</p>
          </Link>
          <Link href="/learn/executive-knowledge-base" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">Executives</p>
            <p className="mt-1 text-xs text-zinc-500">Industry intelligence, board prep, decision logs</p>
          </Link>
        </div>
      </section>

      {/* The origin */}
      <section className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-bold">Why this works: what the research says</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Andrej Karpathy wrote about using LLMs to build personal knowledge
            bases in early 2026. He said most of his AI token usage had shifted
            from writing code to managing knowledge stored as markdown files.
            He collects source documents, uses an LLM to compile a wiki,
            queries it for research, and files answers back in. He called it
            "an incredible new product waiting to be built."
          </p>
          <p>
            But Karpathy is not the only one seeing this pattern. Google
            DeepMind's research on retrieval-augmented generation found that AI
            produces fewer hallucinations and more accurate answers when it
            references a curated knowledge base instead of relying on training
            data alone. The effect is significant enough that RAG has become
            the standard approach in production AI systems.
          </p>
          <p>
            Anthropic's research on long-context performance tells a similar
            story. Structured reference documents consistently outperform
            ad-hoc instructions, sometimes by 40 to 60 percent on task quality.
            The CLAUDE.md schema applies this finding directly: instead of
            explaining your topic from scratch every session, you give the AI
            an organized reference it reads first.
          </p>
          <p>
            The pattern across all of this research is the same: give AI
            organized, persistent context, and the output gets meaningfully
            better. The knowledge base system described in this guide is a
            practical implementation of that principle. Karpathy does it with
            custom scripts. Enterprise teams do it with vector databases. This
            guide shows you how to do it with a note-taking app and numbered
            prompts.
          </p>
          <p>
            The MrPrompts{" "}
            <Link href="/build/knowledge-bases" className="text-emerald-600 hover:text-emerald-700">
              Knowledge Base Starter Kit
            </Link>{" "}
            packages the full system: folder structure, CLAUDE.md schema, and
            7 prompts that walk you through each step. No coding, no scripts,
            no special tools.
          </p>
        </div>
      </section>

      {/* Download CTA */}
      <section className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Get the starter kit</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          The complete folder structure, CLAUDE.md schema, and 7 numbered
          prompts. Customized to your topic. Works with any AI tool.
        </p>
        <Link
          href="/build/knowledge-bases"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Get the Starter Kit (Free)
        </Link>
      </section>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ
            items={[
              {
                question: "How long does it take to set up?",
                answer: "About 20 minutes to go from nothing to a working wiki with articles. Create the folders, write the CLAUDE.md, paste in a few sources, run the compile prompt. After that, plan on 15 to 20 minutes a week to add new sources and update the wiki.",
              },
              {
                question: "Do I need Obsidian?",
                answer: "No. Karpathy uses it because he is a developer. Notion, Google Docs, Apple Notes, or a plain folder of text files all work. The knowledge architecture is what matters, not the tool it lives in.",
              },
              {
                question: "How many sources before it gets useful?",
                answer: "Five to ten on a focused topic. You start seeing compound value when concept articles draw from multiple sources. At 20 to 30 sources the wiki starts answering questions you did not think to ask.",
              },
              {
                question: "Does this replace RAG?",
                answer: "At small scale, it works like a personal RAG system without the infrastructure. Karpathy said he thought he needed fancy RAG but the LLM handled index files and document retrieval fine at the scale of a few hundred articles. For millions of documents, you would still want a proper pipeline.",
              },
              {
                question: "What about hallucinations?",
                answer: "The CLAUDE.md rules require every claim to cite a source. If the AI writes something that is not in the sources, the citation rule catches it. For high-stakes work, use a second AI model to verify: give it the article and the cited sources and ask if they match.",
              },
              {
                question: "Can a team share one wiki?",
                answer: "Yes. Use Notion or a shared drive so multiple people can add sources. The CLAUDE.md keeps output consistent regardless of who adds what. Sales teams, research groups, and leadership teams all do this.",
              },
            ]}
          />
        </div>
      </div>

      <PageFooterCTA />
    </article>
  );
}
