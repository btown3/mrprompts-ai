import type { Metadata } from "next";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "What is Prompt Engineering? — MrPrompts Glossary",
  description:
    "Prompt engineering is the practice of writing clear, structured instructions that guide AI models to produce accurate, useful outputs. Learn the fundamentals.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/prompt-engineering" },
};

export default function PromptEngineeringPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is Prompt Engineering?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          Prompt engineering is the practice of writing clear, structured instructions that guide AI
          models to produce accurate, useful outputs. It involves choosing the right words, providing
          context, specifying format requirements, and iterating on your instructions until the AI
          consistently delivers what you need. Good prompt engineering turns vague AI interactions
          into reliable, repeatable workflows.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How prompt engineering works</h2>
          <p className="mt-3">
            At its core, prompt engineering is about communication. AI models process text as input and
            generate text as output. The quality of that output depends almost entirely on the quality
            of the input. A vague prompt like &quot;write something about marketing&quot; gives the AI too much
            freedom and produces generic results. A structured prompt that specifies the audience, tone,
            format, and goal produces something you can actually use.
          </p>
          <p className="mt-3">
            The best prompts include four elements: a clear role for the AI, context about the
            situation, specific instructions about what to produce, and constraints that prevent common
            mistakes. For example, telling the AI &quot;You are a B2B copywriter. Write a 200-word product
            description for a project management tool. Use short sentences. Avoid buzzwords&quot; is
            dramatically more effective than &quot;write a product description.&quot;
          </p>
          <p className="mt-3">
            Prompt engineering is iterative. You write a prompt, test it, study the output, identify
            where it went wrong, and refine the instructions. Over time, you build a library of prompts
            that work reliably for your specific tasks. This is why prompt engineering is a skill, not a
            one-time activity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Prompt engineering is the most accessible way to get better results from AI without writing
            code. You do not need a technical background to learn it. You need clarity about what you
            want and willingness to experiment with how you ask for it.
          </p>
          <p className="mt-3">
            For teams, prompt engineering becomes even more valuable when prompts are shared. A
            well-tested prompt that one person builds can be used by the entire team, creating
            consistent output across the organization. This is the foundation of a prompt library and
            the first step toward systematic AI adoption.
          </p>
          <p className="mt-3">
            The professionals who invest in prompt engineering today are building a durable skill.
            Even as AI models improve, the ability to communicate precisely with machines will remain
            valuable. The tools change. The skill of clear instruction does not.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/system-prompt" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">System Prompt</Link>
          <Link href="/glossary/chain-of-thought" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Chain-of-Thought</Link>
          <Link href="/glossary/prompt-library" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Library</Link>
          <Link href="/glossary/token" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Tokens</Link>
          <Link href="/glossary/hallucination" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Hallucination</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/guides/prompt-library-starter" className="text-emerald-600 hover:text-emerald-700">Prompt Library Starter Guide &rarr;</Link></li>
          <li><Link href="/learn/ai-for-non-technical" className="text-emerald-600 hover:text-emerald-700">AI for Non-Technical Leaders &rarr;</Link></li>
          <li><Link href="/learn/ai-prompts-for-sales" className="text-emerald-600 hover:text-emerald-700">AI Prompts for Sales &rarr;</Link></li>
          <li><Link href="/learn/ai-prompts-for-marketing" className="text-emerald-600 hover:text-emerald-700">AI Prompts for Marketing &rarr;</Link></li>
        </ul>
      </div>

      <PageFooterCTA />
    </article>
  );
}
