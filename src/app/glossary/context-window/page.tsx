import type { Metadata } from "next";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "What is a Context Window? — MrPrompts Glossary",
  description:
    "A context window is the maximum amount of text an AI model can process in a single conversation. Learn how it affects your prompts and workflows.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/context-window" },
};

export default function ContextWindowPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is a Context Window?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          A context window is the maximum amount of text an AI model can process in a single
          conversation, measured in tokens. It includes everything: the system prompt, all previous
          messages in the conversation, any documents you paste in, and the model&apos;s own responses.
          When a conversation exceeds the context window, the model loses access to the earliest
          parts and can no longer reference them.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How context windows work</h2>
          <p className="mt-3">
            Think of the context window as the AI&apos;s working memory. Everything inside the window is
            available for the model to reference. Everything outside it is gone. A model with a
            128,000-token context window can hold roughly 100,000 words at once, equivalent to a
            medium-length book. A model with a 200,000-token window can hold even more.
          </p>
          <p className="mt-3">
            Context windows have grown dramatically. Early GPT models had 4,000-token windows.
            Current models from Anthropic, OpenAI, and Google offer windows ranging from 128,000 to
            over 1 million tokens. Larger windows mean you can feed the model more documents, have
            longer conversations, and work with bigger codebases without losing context.
          </p>
          <p className="mt-3">
            However, bigger is not always better. Models tend to pay less attention to information in
            the middle of long context windows (the &quot;lost in the middle&quot; problem). Information at the
            beginning and end of the context receives more attention. This is why placing your most
            important instructions at the start (system prompt) and end (user message) of the
            context matters.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Understanding context windows helps you design better AI workflows. If you are building
            a knowledge base that the AI needs to reference, you need to know whether your documents
            fit within the window or whether you need RAG to retrieve relevant pieces. If you are
            having a long conversation, you need to know when the model might start forgetting
            earlier instructions.
          </p>
          <p className="mt-3">
            Context windows also affect cost. Most AI APIs charge per token processed. A long system
            prompt that gets sent with every message adds up quickly. Understanding token budgets
            helps you write efficient prompts that deliver maximum value without wasting context
            space on unnecessary content.
          </p>
          <p className="mt-3">
            For team deployments, context window management is a practical skill. Knowing when to
            start a new conversation, how to summarize previous context, and when to use external
            documents versus pasting content directly into the chat are all decisions that depend on
            understanding how context windows work.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/token" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Tokens</Link>
          <Link href="/glossary/rag" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">RAG</Link>
          <Link href="/glossary/system-prompt" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">System Prompt</Link>
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/ai-knowledge-base" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Knowledge Base</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/learn/ai-for-non-technical" className="text-emerald-600 hover:text-emerald-700">AI for Non-Technical Leaders &rarr;</Link></li>
          <li><Link href="/learn/best-ai-tools-for-business" className="text-emerald-600 hover:text-emerald-700">Best AI Tools for Business &rarr;</Link></li>
          <li><Link href="/guides/prompt-library-starter" className="text-emerald-600 hover:text-emerald-700">Prompt Library Starter Guide &rarr;</Link></li>
        </ul>
      </div>

      <PageFooterCTA />
    </article>
  );
}
