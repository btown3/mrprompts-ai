import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "What Is CLAUDE.md? — The Schema File That Controls Your AI Wiki",
  description:
    "CLAUDE.md is a schema file that tells AI how to build, maintain, and query a knowledge base. Learn what it does, how to write one, and get a production-ready template.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/what-is-claude-md" },
};

export default function WhatIsClaudeMdPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Reference</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        What Is CLAUDE.md?
      </h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By Wayne Cederholm</p>
      <p className="mt-4 text-lg text-zinc-500">
        CLAUDE.md is a schema file that controls how an AI interacts with your
        knowledge base. It defines the rules, structure, and format your AI
        follows when building and querying a wiki. Think of it as the
        instruction manual you hand to your AI before it starts working.
      </p>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why CLAUDE.md matters</h2>
          <p className="mt-3">Without a schema file, every AI interaction starts from zero. You explain your topic, your preferences, your format requirements, your rules — every single time. The AI has no memory of what you told it yesterday.</p>
          <p className="mt-3">CLAUDE.md solves this by giving the AI a persistent reference document. When it reads your knowledge base, CLAUDE.md is the first file it processes. It learns your topic, your folder structure, your article format, your taxonomy, and your behavioral rules before doing anything else. The result is consistent, high-quality output every time without you repeating yourself.</p>
          <p className="mt-3">A well-written CLAUDE.md is the difference between an AI that produces random, inconsistent wiki articles and one that builds a structured, interlinked knowledge base that gets better with every use. Our <Link href="/learn/ai-knowledge-base-guide" className="text-emerald-600 hover:text-emerald-700">complete knowledge base guide</Link> explains the full system that CLAUDE.md powers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The five sections every CLAUDE.md needs</h2>
          <p className="mt-3"><strong>1. Purpose.</strong> What this knowledge base is about, in one or two sentences. "A structured knowledge base on AI prompt engineering, compiled from curated sources and maintained by AI." This sets the scope. Without it, the AI might write articles about topics outside your domain.</p>
          <p className="mt-3"><strong>2. Structure.</strong> Your folder layout and what each folder is for. The standard three-folder structure is: Sources (raw materials the AI reads but never modifies), Wiki (compiled articles the AI generates), and Queries (questions and answers filed back into the system). Clear structure prevents the AI from putting files in the wrong place.</p>
          <p className="mt-3"><strong>3. Article Format.</strong> How each wiki page should be written. Title as H1, summary at the top, H2 sections in the body, a Sources section citing references, and a Related section with links to other articles. Consistent format means every article is readable, citeable, and interlinked.</p>
          <p className="mt-3"><strong>4. Taxonomy.</strong> Your categories, tags, and naming conventions. Categories should be mutually exclusive (every article belongs to exactly one). Tags can overlap. Use a flat category structure until you have 50+ articles. Premature nesting creates empty folders and confused AI.</p>
          <p className="mt-3"><strong>5. Rules.</strong> Behavioral constraints the AI must follow. "Never modify source files." "Always cite sources." "One concept per page." "Every new article must link to at least 2 existing articles." Write rules for the failure modes you actually care about. Every rule should exist because something went wrong without it.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Example CLAUDE.md</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-6 text-sm leading-relaxed text-zinc-300">{`# AI Prompt Engineering Wiki
# Version: 1.0

## Purpose
A structured knowledge base on AI prompt engineering,
compiled from curated sources and maintained by AI.

## Structure
- /Sources — Raw articles and notes (never edited by AI)
- /Wiki — Compiled, interlinked wiki articles
- /Queries — Questions asked and answers generated

## Article Format
- Title as H1
- 2-3 sentence summary at top
- Body with H2 sections
- "Sources" section citing /Sources files
- "Related" section with [[wikilinks]]

## Taxonomy
Categories: Frameworks, Techniques, Patterns, Tools, Case Studies
Tags: beginner, advanced, chain-of-thought, system-prompt, multi-turn

## Rules
1. Never modify files in /Sources
2. Always cite which source(s) informed each article
3. Use [[wikilinks]] to connect related concepts
4. One concept per page
5. Every claim must trace back to a source
6. New articles must link to at least 2 existing articles`}</pre>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How CLAUDE.md fits into the bigger system</h2>
          <p className="mt-3">CLAUDE.md is one piece of the LLM knowledge base system popularized by Andrej Karpathy. The full system works like this:</p>
          <p className="mt-3"><strong>Collect:</strong> You drop raw sources (articles, notes, documents) into the Sources folder. The AI never touches your originals.</p>
          <p className="mt-3"><strong>Compile:</strong> The AI reads CLAUDE.md to understand the rules, then reads the sources and generates structured wiki articles following your schema.</p>
          <p className="mt-3"><strong>Query:</strong> You ask questions against your wiki. The AI reads the compiled articles (not raw sources) so answers are structured and consistent. Good answers get filed back into the wiki.</p>
          <p className="mt-3"><strong>Compound:</strong> Every new source enriches the wiki. Every query generates new knowledge. The system gets smarter over time because CLAUDE.md ensures consistency at every step.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Where the name comes from</h2>
          <p className="mt-3">CLAUDE.md is named after Claude, the AI model built by Anthropic. In Claude Code (Anthropic's CLI tool), a file called CLAUDE.md in the root of a project serves as persistent instructions that Claude reads automatically at the start of every session. The concept has been adopted by the broader AI community for any schema file that gives an AI persistent context about a knowledge base, regardless of which AI model you use.</p>
          <p className="mt-3">You can use a CLAUDE.md file with any AI that can read files: Claude, ChatGPT, Gemini, or local models. The format is plain Markdown. The AI reads it as instructions.</p>
        </section>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "Do I need to use Claude to use a CLAUDE.md file?", answer: "No. CLAUDE.md is a plain Markdown file that any AI model can read. The name comes from Claude Code, but the concept works with ChatGPT, Gemini, Perplexity, or any AI that can process text files. Just point the AI at the file and tell it to follow the instructions inside." },
            { question: "How long should a CLAUDE.md file be?", answer: "Most effective CLAUDE.md files are 30-80 lines. Long enough to cover purpose, structure, format, taxonomy, and rules. Short enough that the AI processes it quickly without using too much of its context window. If your CLAUDE.md is over 100 lines, you are probably over-specifying." },
            { question: "Can I use CLAUDE.md with Notion instead of Obsidian?", answer: "Yes. The schema concept works with any note-taking or knowledge management tool. In Notion, create a page called 'Schema' at the top of your database and paste the CLAUDE.md content there. The folder structure translates to Notion databases or page hierarchies. The AI reads it the same way." },
            { question: "What happens if I don't have a CLAUDE.md?", answer: "Without a CLAUDE.md, your AI has no persistent memory of your preferences, structure, or rules. You end up repeating instructions every session, getting inconsistent article formats, and manually catching errors the schema would have prevented. It works, but it does not compound. The wiki drifts instead of improving." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold">Get the full CLAUDE.md Masterclass</h2>
        <p className="mt-2 text-sm text-zinc-500">Deep dive into writing production-ready schemas, with templates you can copy. Or jump straight to the <Link href="/build/knowledge-bases" className="text-emerald-600 hover:text-emerald-700">knowledge base build track</Link> and start building.</p>
        <Link href="/guides/claude-md-masterclass" className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700">Read the Masterclass (free) &rarr;</Link>
      </div>
    </article>
  );
}
