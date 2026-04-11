import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Fine-Tuning? — MrPrompts Glossary",
  description:
    "Fine-tuning trains a pre-trained AI model on specialized data to improve performance on specific tasks. Learn when to fine-tune vs. use RAG or prompting.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/fine-tuning" },
};

export default function FineTuningPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is Fine-Tuning?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          Fine-tuning is the process of taking a pre-trained AI model and training it further on a
          specialized dataset to improve its performance on specific tasks, domains, or output
          styles. Instead of training a model from scratch, fine-tuning adjusts the model&apos;s
          existing knowledge to better handle your particular use case, like writing in your brand
          voice or classifying your specific document types.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How fine-tuning works</h2>
          <p className="mt-3">
            A pre-trained model like GPT-4 or Claude has learned general language patterns from a
            massive dataset. Fine-tuning adds a second training phase where the model learns from a
            smaller, domain-specific dataset that you provide. This dataset is usually formatted as
            input-output pairs: example prompts and the ideal responses you want the model to
            produce.
          </p>
          <p className="mt-3">
            The process adjusts the model&apos;s internal weights so that it favors patterns found in your
            training data. After fine-tuning, the model still retains its general capabilities but
            is measurably better at the specific tasks represented in your dataset. The more
            high-quality examples you provide, the better the results.
          </p>
          <p className="mt-3">
            Fine-tuning requires technical infrastructure: cloud computing resources, dataset
            preparation, and evaluation pipelines. Most teams use platforms like OpenAI&apos;s API,
            Hugging Face, or cloud provider ML services to manage the process. It is not a one-click
            operation, but it has become significantly more accessible in recent years.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Fine-tuning matters when prompt engineering and RAG are not enough. If you need the model
            to consistently write in a specific style, classify documents into custom categories, or
            follow complex domain-specific rules, fine-tuning embeds that behavior into the model
            itself rather than relying on instructions in the prompt.
          </p>
          <p className="mt-3">
            However, fine-tuning is often overused. Many tasks that seem to require fine-tuning can
            actually be solved with better prompts, system prompts, or RAG. Fine-tuning is best
            suited for situations where you need consistent style or format changes, domain-specific
            terminology, or high-volume tasks where the cost of longer prompts becomes significant.
          </p>
          <p className="mt-3">
            For most non-technical teams, prompt engineering and knowledge bases will deliver 90% of
            the value without the cost and complexity of fine-tuning. Understanding what fine-tuning
            is helps you make informed decisions about when it is actually worth the investment
            versus when simpler approaches will work.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/rag" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">RAG</Link>
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/token" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Tokens</Link>
          <Link href="/glossary/hallucination" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Hallucination</Link>
          <Link href="/glossary/system-prompt" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">System Prompt</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/learn/ai-knowledge-base-guide" className="text-emerald-600 hover:text-emerald-700">AI Knowledge Base Guide &rarr;</Link></li>
          <li><Link href="/learn/best-ai-tools-for-business" className="text-emerald-600 hover:text-emerald-700">Best AI Tools for Business &rarr;</Link></li>
          <li><Link href="/learn/ai-for-non-technical" className="text-emerald-600 hover:text-emerald-700">AI for Non-Technical Leaders &rarr;</Link></li>
        </ul>
      </div>
    </article>
  );
}
