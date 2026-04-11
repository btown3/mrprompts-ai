import type { Metadata } from "next";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "What is AI Hallucination? — MrPrompts Glossary",
  description:
    "AI hallucination is when a model generates plausible-sounding but factually incorrect information. Learn why it happens and how to prevent it.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/hallucination" },
};

export default function HallucinationPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is AI Hallucination?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          AI hallucination occurs when an AI model generates information that sounds plausible and
          confident but is factually incorrect, fabricated, or unsupported by its training data. The
          model is not lying intentionally; it is predicting the most likely next words based on
          patterns, and sometimes those patterns produce convincing-sounding falsehoods. Hallucination
          is one of the most important risks to understand when using AI for professional work.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why AI hallucinations happen</h2>
          <p className="mt-3">
            AI language models work by predicting the most probable next token in a sequence. They
            do not look up facts in a database or verify claims against sources. They generate text
            that statistically fits the pattern of the conversation. When the model does not have
            strong training data for a topic, or when the question is ambiguous, it fills in the
            gaps with plausible-sounding content that may be entirely made up.
          </p>
          <p className="mt-3">
            Common hallucination scenarios include: citing academic papers that do not exist,
            inventing statistics, attributing quotes to the wrong people, creating fake URLs,
            and confidently answering questions about topics outside its knowledge. The model does
            not signal uncertainty in these cases because it does not distinguish between what
            it knows and what it is inventing.
          </p>
          <p className="mt-3">
            Hallucinations are more likely when prompts are vague, when the topic is niche or
            recent, when the model is asked for specific numbers or citations, and when there are
            no source documents to ground the response. Understanding these triggers helps you
            design prompts and workflows that minimize the risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Hallucinations are the primary reason you cannot blindly trust AI output. For
            professionals using AI to draft reports, answer customer questions, or make
            recommendations, an undetected hallucination can damage credibility, create legal
            liability, or lead to bad decisions based on fabricated data.
          </p>
          <p className="mt-3">
            The best defense against hallucination is a combination of techniques: grounding AI
            responses in specific source documents using RAG, asking the model to cite its sources,
            using two-model validation (having a second AI check the first), and maintaining human
            review for high-stakes content. These are not perfect safeguards, but they dramatically
            reduce the risk.
          </p>
          <p className="mt-3">
            Teams that build AI workflows should treat hallucination as a design constraint, not
            a surprise failure. Every workflow should include a verification step proportional to
            the stakes of the output. Low-stakes drafts can tolerate some risk. Client-facing
            deliverables need rigorous checking.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/rag" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">RAG</Link>
          <Link href="/glossary/chain-of-thought" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Chain-of-Thought</Link>
          <Link href="/glossary/fine-tuning" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Fine-Tuning</Link>
          <Link href="/glossary/ai-knowledge-base" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Knowledge Base</Link>
          <Link href="/glossary/token" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Tokens</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/guides/two-model-validation" className="text-emerald-600 hover:text-emerald-700">Two-Model Validation &rarr;</Link></li>
          <li><Link href="/learn/ai-for-non-technical" className="text-emerald-600 hover:text-emerald-700">AI for Non-Technical Leaders &rarr;</Link></li>
          <li><Link href="/learn/ai-knowledge-base-guide" className="text-emerald-600 hover:text-emerald-700">AI Knowledge Base Guide &rarr;</Link></li>
        </ul>
      </div>

      <PageFooterCTA />
    </article>
  );
}
