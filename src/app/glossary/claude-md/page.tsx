import type { Metadata } from "next";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "What is CLAUDE.md? — MrPrompts Glossary",
  description:
    "CLAUDE.md is a schema file that gives an AI persistent instructions about a project or knowledge base. Learn what it contains and how to write one.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/claude-md" },
};

export default function ClaudeMdPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is CLAUDE.md?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          CLAUDE.md is a schema file placed at the root of a project or knowledge base that gives an
          AI persistent instructions about how to interact with the content. It defines the purpose,
          folder structure, article format, taxonomy, and behavioral rules the AI should follow. Named
          after Anthropic&apos;s Claude, the concept works with any AI model that can read text files.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How CLAUDE.md works</h2>
          <p className="mt-3">
            When an AI reads a knowledge base, CLAUDE.md is the first file it processes. It acts as
            an instruction manual that tells the AI what the project is about, how content is
            organized, what format to use when generating new content, and what rules to follow.
            Without it, you have to re-explain these things in every conversation.
          </p>
          <p className="mt-3">
            A well-written CLAUDE.md typically contains five sections: purpose (what the knowledge
            base covers), structure (folder layout and what each folder is for), article format
            (headings, sections, and citation style), taxonomy (categories and tags), and rules
            (behavioral constraints like &quot;never modify source files&quot; or &quot;always cite sources&quot;).
          </p>
          <p className="mt-3">
            The file is plain Markdown, which means it works with any AI tool that can read files.
            You can use it with Claude, ChatGPT, Gemini, or local models. The AI reads it as
            instructions, not as conversation. This gives you consistent behavior across sessions
            without relying on chat history or memory features.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            CLAUDE.md is the difference between an AI that produces random, inconsistent output and
            one that builds structured content reliably. It is especially valuable for knowledge bases
            that grow over time, because it ensures every new article follows the same format,
            taxonomy, and quality standards as the first one.
          </p>
          <p className="mt-3">
            For teams, CLAUDE.md creates alignment. Everyone on the team gets the same AI behavior
            because the instructions are in the file, not in individual prompts. This makes AI
            adoption scalable: you write the schema once, and every team member benefits from it.
          </p>
          <p className="mt-3">
            Writing a CLAUDE.md is often the first step in building a production-grade AI knowledge
            base. It forces you to think through your structure, rules, and standards before you
            start generating content, which prevents the kind of drift and inconsistency that makes
            knowledge bases useless within a few months.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/ai-knowledge-base" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Knowledge Base</Link>
          <Link href="/glossary/system-prompt" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">System Prompt</Link>
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/ai-workflow" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Workflow</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/guides/claude-md-masterclass" className="text-emerald-600 hover:text-emerald-700">CLAUDE.md Masterclass &rarr;</Link></li>
          <li><Link href="/learn/what-is-claude-md" className="text-emerald-600 hover:text-emerald-700">What Is CLAUDE.md? (Deep Dive) &rarr;</Link></li>
          <li><Link href="/guides/your-first-wiki" className="text-emerald-600 hover:text-emerald-700">Build Your First AI Wiki &rarr;</Link></li>
        </ul>
      </div>

      <PageFooterCTA />
    </article>
  );
}
