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
        How to turn raw articles, notes, and research into a structured
        knowledge base that an AI can read, query, and build upon. Every
        question you ask makes it smarter. Every source you add deepens it.
        This is the complete guide. Nothing is left out.
      </p>

      {/* The concept */}
      <div className="mt-12 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/10">
        <p className="font-medium text-emerald-800 dark:text-emerald-400">
          The core idea
        </p>
        <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-500">
          You collect raw sources. An AI compiles them into a structured wiki.
          You query the wiki. Good answers get filed back in. The knowledge
          compounds. Andrej Karpathy described this as one of the most
          underrated uses of LLMs. This guide shows you exactly how to do it
          without writing a single line of code.
        </p>
      </div>

      <div className="mt-12">
        <BuildProcess />
      </div>

      {/* Why this matters */}
      <div className="mt-16 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why every professional needs this</h2>
          <p className="mt-3">
            Every time you start a new AI conversation, you start from zero.
            The AI has no memory of what you discussed yesterday. The research
            you did last week is gone. The insights from that article you read
            last month are trapped in a browser tab you closed.
          </p>
          <p className="mt-3">
            A knowledge base fixes this permanently. It gives your AI a
            structured reference it can read at the start of every session.
            Instead of explaining your topic, your preferences, and your
            context every time, you point the AI at your knowledge base and it
            already knows.
          </p>
          <p className="mt-3">
            The compound effect is what makes this transformative. After a
            month of use, your AI knows your topic better than any single
            conversation could capture. After three months, you have a
            reference that no one else in your field has because it was built
            specifically for your questions, from your sources, organized for
            your work.
          </p>
        </section>

        {/* Step 1 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 1: Set up your workspace</h2>
          <p className="mt-3">
            You need two things: a place to store files and an AI tool.
            That is it.
          </p>
          <p className="mt-3">
            <strong>For storing files, pick whatever you already use:</strong>
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><strong>Notion</strong> works great for most people. Create a new workspace or database. The collaboration features make it ideal if you work with a team.</li>
            <li><strong>Google Docs</strong> is the simplest option. Create a folder in Drive. One document per source, one document per wiki article.</li>
            <li><strong>A folder on your computer</strong> with text files works perfectly. No app needed. Just a folder with .txt or .md files inside it.</li>
            <li><strong>Obsidian</strong> is powerful if you want bidirectional linking and a plugin ecosystem. It has a learning curve.</li>
          </ul>
          <p className="mt-3">
            <strong>For the AI, use any tool that can read files:</strong>
          </p>
          <ul className="mt-2 space-y-2 text-sm">
            <li><strong>Claude</strong> (recommended). Handles long documents well and produces the most thoughtful wiki articles. Upload files directly or paste content.</li>
            <li><strong>ChatGPT</strong> works well. Upload files or paste content. Good for shorter interactions.</li>
            <li><strong>Any LLM with file access.</strong> Gemini, Perplexity, local models. The system works with all of them.</li>
          </ul>
          <p className="mt-3">
            Now create three folders inside your workspace:
          </p>
        </section>

        <FolderStructure />

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 2: Create your CLAUDE.md schema</h2>
          <p className="mt-3">
            This is the most important file in your system. CLAUDE.md is an
            instruction file that tells the AI how your knowledge base works.
            It defines your topic, folder structure, article format, and rules.
            The AI reads this first, every time, so it knows exactly how to
            behave.
          </p>
          <p className="mt-3">
            Create a file called CLAUDE.md in the root of your workspace.
            Copy this template and replace the bracketed parts with your topic:
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
            This template works for any topic. Our{" "}
            <Link href="/learn/what-is-claude-md" className="text-emerald-600 hover:text-emerald-700">
              CLAUDE.md deep dive
            </Link>{" "}
            explains every section in detail. The{" "}
            <Link href="/guides/claude-md-masterclass" className="text-emerald-600 hover:text-emerald-700">
              Masterclass
            </Link>{" "}
            includes advanced schemas for specific use cases.
          </p>
        </section>

        {/* Step 3 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 3: Add your first sources</h2>
          <p className="mt-3">
            Drop 3 to 5 source documents into the Sources folder. These are
            the raw ingredients your AI will work with.
          </p>
          <p className="mt-3">
            <strong>What counts as a source:</strong>
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Articles or blog posts you have read</li>
            <li>Research papers or reports</li>
            <li>Your own notes from meetings, conferences, or conversations</li>
            <li>Documentation or specifications</li>
            <li>Interview transcripts</li>
            <li>Competitor analysis or market research</li>
          </ul>
          <p className="mt-3">
            <strong>How to add them:</strong> Create one file per source.
            Paste the full text (not just a link). Name the file with the
            date and a short title: <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-800">2026-04-12-Karpathy-Knowledge-Bases.md</code>
          </p>
          <p className="mt-3">
            <strong>Quality matters more than quantity.</strong> Five excellent
            sources produce a better wiki than fifty mediocre ones. Start with
            the best things you have read on your topic. You can always add
            more later.
          </p>
        </section>

        {/* Step 4 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 4: Compile your first wiki articles</h2>
          <p className="mt-3">
            This is where the AI does its work. Open your AI tool (Claude,
            ChatGPT, etc.). Give it the CLAUDE.md file first. Then give it
            your source files. Then use this prompt:
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
            The AI will produce structured wiki articles. Each one will have a
            summary, body sections, key takeaways, source citations, and links
            to related articles. Review them. Fix anything that looks wrong.
            Save each article into the Wiki folder.
          </p>
          <p className="mt-3">
            <strong>You now have a working knowledge base.</strong> It took
            about 20 minutes. Everything from here makes it better.
          </p>
        </section>

        {/* Step 5 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 5: Query your knowledge base</h2>
          <p className="mt-3">
            This is where the compound value starts. Instead of asking the AI
            generic questions, you ask it questions against your wiki. The AI
            reads your compiled articles (not the raw sources) and gives you
            synthesized, structured answers based on everything you have
            collected.
          </p>
          <p className="mt-3">
            <strong>How to query:</strong> Give the AI your CLAUDE.md and your
            wiki articles. Then ask your question.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm leading-relaxed text-zinc-300">{`Read the CLAUDE.md schema and all wiki articles.

Based on the wiki, what are the three main approaches
to [topic]? Which approach has the strongest evidence?
What are the trade-offs between them?

Cite which wiki articles support each point.`}</pre>
          <p className="mt-3">
            The answers you get will be dramatically better than asking the
            same question without a knowledge base. The AI is drawing from
            your curated sources, organized by your schema, structured by your
            rules. It is not guessing from its training data. It is
            synthesizing from your data.
          </p>
          <p className="mt-3">
            <strong>File good answers back into the wiki.</strong> When you get
            an answer that teaches you something new, save it to the Queries
            folder. If it is good enough, promote it to a wiki article. Every
            good query enriches the knowledge base for next time.
          </p>
        </section>

        {/* Step 6 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 6: Grow it over time</h2>
          <p className="mt-3">
            The system compounds. Here is what to do each week:
          </p>
          <p className="mt-3">
            <strong>Add new sources.</strong> When you read something relevant,
            drop it into the Sources folder. One article, one file. Takes 30
            seconds.
          </p>
          <p className="mt-3">
            <strong>Compile new articles.</strong> Once a week (or whenever you
            have added 3 to 5 new sources), ask the AI to read the new sources
            and either update existing wiki articles or create new ones.
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
            <strong>Run a health check monthly.</strong> Ask the AI to review
            the entire wiki for problems:
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
            After a month of weekly additions, you will have 15 to 25
            interlinked articles. After three months, 40 to 60. The wiki
            becomes the most comprehensive reference on your topic that exists
            anywhere because it was built specifically for your questions,
            from your sources, organized for your work.
          </p>
        </section>

        {/* Step 7 */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Step 7: Advanced operations</h2>
          <p className="mt-3">
            Once your wiki has 20+ articles, you can do things that are
            impossible with a normal AI conversation:
          </p>
          <p className="mt-3">
            <strong>Cross-source synthesis.</strong> "Compare what Source A and
            Source B say about [topic]. Where do they agree? Where do they
            disagree? Which has stronger evidence?"
          </p>
          <p className="mt-3">
            <strong>Gap analysis.</strong> "What questions can I not answer
            with the current wiki? What topics are mentioned but not covered?
            What should I read next?"
          </p>
          <p className="mt-3">
            <strong>Output generation.</strong> "Based on the wiki, write a
            one-page executive summary of [topic] for my boss." Or "Create a
            slide outline for a 15-minute presentation on [topic]." Or "Draft
            a blog post about [topic] using only information from the wiki."
          </p>
          <p className="mt-3">
            <strong>Quality validation.</strong> If accuracy matters (finance,
            legal, health, compliance), use a second AI model to verify. Give
            Model B the wiki article and its cited sources, and ask: "Does
            this article accurately represent the source material? Flag any
            claims not supported by the provided sources." Two models
            disagreeing is a signal worth investigating. Two models agreeing
            is a strong signal of accuracy.
          </p>
        </section>
      </div>

      {/* Use cases */}
      <section className="mt-16">
        <h2 className="text-xl font-bold">Who uses this and for what</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link href="/learn/sales-knowledge-base" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">Sales Teams</p>
            <p className="mt-1 text-xs text-zinc-500">Competitive intel, deal playbooks, objection libraries</p>
          </Link>
          <Link href="/learn/research-knowledge-base" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">Researchers and Analysts</p>
            <p className="mt-1 text-xs text-zinc-500">Source synthesis, literature maps, open questions</p>
          </Link>
          <Link href="/learn/onboarding-knowledge-base" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">HR and Operations</p>
            <p className="mt-1 text-xs text-zinc-500">New hire onboarding, process docs, tribal knowledge</p>
          </Link>
          <Link href="/learn/executive-knowledge-base" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">Executives</p>
            <p className="mt-1 text-xs text-zinc-500">Industry intelligence, board prep, decision history</p>
          </Link>
        </div>
      </section>

      {/* The origin */}
      <section className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-bold">Where this comes from</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Andrej Karpathy, formerly of Tesla and OpenAI, described this
            approach in early 2026. He reported that a large fraction of his
            AI token usage had shifted from manipulating code to manipulating
            knowledge, stored as markdown files. He collects source documents,
            uses an LLM to compile a wiki, queries it for complex research
            questions, and files answers back in. He called it "an incredible
            new product waiting to be built."
          </p>
          <p>
            Karpathy's version uses Obsidian, custom scripts, and CLI tools.
            The MrPrompts version implements the same architecture for
            professionals who do not write scripts. You use any note-taking
            app, any AI tool, and the numbered prompts in our{" "}
            <Link href="/build/knowledge-bases" className="text-emerald-600 hover:text-emerald-700">
              Knowledge Base Starter Kit
            </Link>
            . Same system. Same compound effect. No coding required.
          </p>
          <p>
            Research from Google DeepMind on retrieval-augmented generation
            confirms that AI models produce fewer hallucinations and more
            accurate responses when they reference a curated knowledge base
            rather than relying on training data alone. Your wiki functions as
            a personal RAG system: sources are the retrieval corpus, wiki
            articles are the compiled knowledge, and queries generate
            synthesized answers grounded in specific evidence.
          </p>
        </div>
      </section>

      {/* Download CTA */}
      <section className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Start building now</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          The Knowledge Base Starter Kit gives you the complete folder
          structure, CLAUDE.md schema, and 7 numbered prompts. Customized to
          your topic. Download and use with any AI tool.
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
                answer: "About 20 minutes for the initial setup: create the folders, write the CLAUDE.md, add 3-5 sources, and generate your first wiki articles. After that, maintenance is 15-20 minutes per week to add sources and compile new articles.",
              },
              {
                question: "Do I need Obsidian?",
                answer: "No. Karpathy uses Obsidian because he is a developer who prefers markdown files. You can use Notion, Google Docs, Apple Notes, or a simple folder of text files. The system is tool-agnostic. The knowledge architecture works the same regardless of where the files live.",
              },
              {
                question: "How many sources before it becomes useful?",
                answer: "5 to 10 sources on a focused topic is enough to start seeing compound value. The wiki becomes genuinely powerful at 20 to 30 sources because the concept articles start synthesizing across many inputs. Start small. Add as you go.",
              },
              {
                question: "Does this replace RAG?",
                answer: "For individual and small-team use, yes. Karpathy himself noted that he thought he needed fancy RAG, but the LLM was good enough at auto-maintaining index files and reading related documents at small scale. For enterprise-scale applications with millions of documents, you would still want a formal RAG pipeline.",
              },
              {
                question: "What if the AI hallucinates in the wiki?",
                answer: "The CLAUDE.md rules require every claim to trace back to a cited source. If the AI writes something not supported by sources, the citation rule catches it. For high-stakes topics, use the two-model validation approach: have a second AI model verify articles against the original sources.",
              },
              {
                question: "Can a team use this together?",
                answer: "Yes. Use Notion or a shared folder so multiple people can add sources. The CLAUDE.md schema keeps everything consistent regardless of who adds content. Sales teams, research teams, and leadership teams all use this for shared knowledge bases.",
              },
            ]}
          />
        </div>
      </div>

      <PageFooterCTA />
    </article>
  );
}
