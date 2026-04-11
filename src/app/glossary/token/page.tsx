import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What are Tokens in AI? — MrPrompts Glossary",
  description:
    "Tokens are the basic units of text that AI models process, roughly 3-4 characters each. Learn how tokens affect pricing, context windows, and prompt design.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/token" },
};

export default function TokenPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What are Tokens in AI?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          Tokens are the basic units of text that AI models process. A token is roughly 3-4
          characters, or about three-quarters of an English word. AI models do not read text as
          humans do; they break it into tokens, process each one mathematically, and generate new
          tokens as output. Token counts determine how much text fits in a context window and how
          much API usage costs.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How tokens work</h2>
          <p className="mt-3">
            Before an AI model can process your text, it splits the input into tokens using a
            tokenizer. Common English words are usually a single token (&quot;the&quot;, &quot;and&quot;, &quot;work&quot;).
            Longer or less common words get split into multiple tokens (&quot;unpredictable&quot; becomes
            several tokens). Punctuation, spaces, and special characters are also tokenized.
          </p>
          <p className="mt-3">
            A practical rule of thumb: 1 token is approximately 0.75 English words, or 1 word is
            approximately 1.3 tokens. A 1,000-word document is roughly 1,300 tokens. A full page
            of text is around 500-800 tokens depending on the writing style. These are approximations;
            exact counts depend on the specific tokenizer each model uses.
          </p>
          <p className="mt-3">
            Token counts matter in two practical ways: context window limits and pricing. If a model
            has a 128,000-token context window, that is the total space for your system prompt, your
            messages, any documents you include, and the model&apos;s responses combined. API pricing is
            also per-token, with input tokens (what you send) typically costing less than output
            tokens (what the model generates).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Understanding tokens helps you write more efficient prompts and manage AI costs. A
            system prompt that is 2,000 tokens gets sent with every single message in a conversation.
            Over hundreds of conversations, that adds up to significant token usage. Writing concise,
            effective prompts is not just good communication; it is cost management.
          </p>
          <p className="mt-3">
            Tokens also affect how much information you can give the AI in a single interaction. If
            you need to analyze a 50-page report, you need to know whether it fits in the context
            window or whether you need to break it into chunks. If you are building a knowledge base,
            token awareness helps you decide between pasting documents directly into prompts versus
            using RAG to retrieve only the relevant sections.
          </p>
          <p className="mt-3">
            For teams evaluating AI tools, token pricing is a key cost driver. Different models
            charge different rates per token, and the difference between input and output pricing
            can be significant. Understanding tokens helps you compare vendors, estimate costs, and
            design workflows that deliver value without runaway spending.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/context-window" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Context Window</Link>
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/rag" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">RAG</Link>
          <Link href="/glossary/fine-tuning" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Fine-Tuning</Link>
          <Link href="/glossary/system-prompt" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">System Prompt</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/learn/best-ai-tools-for-business" className="text-emerald-600 hover:text-emerald-700">Best AI Tools for Business &rarr;</Link></li>
          <li><Link href="/learn/ai-for-non-technical" className="text-emerald-600 hover:text-emerald-700">AI for Non-Technical Leaders &rarr;</Link></li>
          <li><Link href="/guides/prompt-library-starter" className="text-emerald-600 hover:text-emerald-700">Prompt Library Starter Guide &rarr;</Link></li>
        </ul>
      </div>
    </article>
  );
}
