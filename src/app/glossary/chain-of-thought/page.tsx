import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Chain-of-Thought Prompting? — MrPrompts Glossary",
  description:
    "Chain-of-thought prompting instructs an AI to reason step by step before answering. Learn how it improves accuracy and when to use it.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/chain-of-thought" },
};

export default function ChainOfThoughtPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is Chain-of-Thought Prompting?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          Chain-of-thought prompting is a technique where you instruct an AI model to reason through
          a problem step by step before giving its final answer. Instead of jumping straight to a
          conclusion, the AI shows its reasoning process, which significantly improves accuracy on
          complex tasks like math, logic, analysis, and multi-step decision-making.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How chain-of-thought prompting works</h2>
          <p className="mt-3">
            By default, AI models try to predict the most likely next token in a sequence. For simple
            questions, this works well. For complex questions, it can lead to wrong answers because
            the model skips intermediate reasoning steps. Chain-of-thought prompting solves this by
            forcing the model to generate those intermediate steps explicitly.
          </p>
          <p className="mt-3">
            The technique is simple to apply. You add phrases like &quot;Think step by step,&quot;
            &quot;Walk through your reasoning,&quot; or &quot;Explain your logic before giving the answer&quot; to your
            prompt. You can also provide an example that shows the kind of step-by-step reasoning you
            want. The model then mirrors that pattern in its response.
          </p>
          <p className="mt-3">
            Research shows that chain-of-thought prompting can dramatically improve performance on
            arithmetic, commonsense reasoning, and symbolic tasks. It works because the intermediate
            steps give the model more context to work with when generating each subsequent step,
            reducing the chance of errors compounding.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Chain-of-thought is one of the most practical prompting techniques for everyday work. Any
            time you need an AI to analyze data, compare options, evaluate a strategy, or solve a
            problem with multiple variables, asking it to think step by step will improve the quality
            of the answer.
          </p>
          <p className="mt-3">
            It also makes AI outputs more transparent. When the model shows its reasoning, you can
            identify exactly where it went wrong and correct the specific step, rather than guessing
            why the final answer was off. This makes chain-of-thought prompting valuable for
            high-stakes decisions where you need to verify the AI&apos;s logic.
          </p>
          <p className="mt-3">
            The downside is that chain-of-thought responses use more tokens, which means higher costs
            and slower responses. For simple tasks like writing a subject line or formatting data, the
            overhead is not worth it. Use chain-of-thought when the task involves reasoning, not when
            it involves simple generation.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/token" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Tokens</Link>
          <Link href="/glossary/system-prompt" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">System Prompt</Link>
          <Link href="/glossary/hallucination" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Hallucination</Link>
          <Link href="/glossary/context-window" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Context Window</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/guides/prompt-library-starter" className="text-emerald-600 hover:text-emerald-700">Prompt Library Starter Guide &rarr;</Link></li>
          <li><Link href="/learn/ai-for-non-technical" className="text-emerald-600 hover:text-emerald-700">AI for Non-Technical Leaders &rarr;</Link></li>
          <li><Link href="/guides/two-model-validation" className="text-emerald-600 hover:text-emerald-700">Two-Model Validation &rarr;</Link></li>
        </ul>
      </div>
    </article>
  );
}
