import type { Metadata } from "next";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "What is RAG (Retrieval-Augmented Generation)? — MrPrompts Glossary",
  description:
    "RAG retrieves relevant documents from a knowledge base and feeds them to an AI so it generates answers grounded in real data. Learn how RAG works.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/rag" },
};

export default function RAGPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is RAG (Retrieval-Augmented Generation)?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          Retrieval-Augmented Generation (RAG) is a technique that improves AI responses by first
          retrieving relevant documents from a knowledge base, then feeding those documents to the AI
          model as context so it can generate answers grounded in real, specific data rather than
          relying solely on its training data. RAG combines the precision of search with the fluency
          of AI generation.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How RAG works</h2>
          <p className="mt-3">
            RAG operates in two phases. In the retrieval phase, the system takes your question,
            searches a document database for the most relevant passages, and pulls them out. In the
            generation phase, those retrieved passages are inserted into the AI&apos;s prompt as context,
            and the model generates an answer based on that specific information.
          </p>
          <p className="mt-3">
            The retrieval step typically uses embeddings, which are numerical representations of text
            that capture meaning. When you ask a question, the system converts it to an embedding,
            finds documents with similar embeddings, and returns the closest matches. This is why RAG
            can find relevant information even when your question does not use the exact same words as
            the source document.
          </p>
          <p className="mt-3">
            The key advantage of RAG over using a base AI model is that the answers are grounded in
            your actual data. The model is not guessing from its training data; it is reading and
            synthesizing specific documents you control. This dramatically reduces hallucination and
            makes the outputs verifiable because you can trace every answer back to a source document.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            RAG solves the biggest practical problem with AI models: they do not know your specific
            data. A model trained on the internet knows general information but nothing about your
            company&apos;s products, policies, customers, or internal processes. RAG bridges this gap by
            giving the model access to your documents at query time.
          </p>
          <p className="mt-3">
            For business teams, RAG is the technology behind most &quot;chat with your documents&quot;
            applications. Customer support bots that answer questions from your help center, sales
            tools that pull from product specs and case studies, and research assistants that search
            internal reports all use RAG under the hood.
          </p>
          <p className="mt-3">
            RAG is also more practical than fine-tuning for most use cases. Fine-tuning requires
            retraining the model, which is expensive and time-consuming. RAG lets you update the
            knowledge base by simply adding or removing documents, with changes reflected immediately
            in the AI&apos;s responses.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/ai-knowledge-base" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Knowledge Base</Link>
          <Link href="/glossary/hallucination" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Hallucination</Link>
          <Link href="/glossary/fine-tuning" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Fine-Tuning</Link>
          <Link href="/glossary/context-window" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Context Window</Link>
          <Link href="/glossary/token" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Tokens</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/learn/ai-knowledge-base-guide" className="text-emerald-600 hover:text-emerald-700">AI Knowledge Base Guide &rarr;</Link></li>
          <li><Link href="/guides/your-first-wiki" className="text-emerald-600 hover:text-emerald-700">Build Your First AI Wiki &rarr;</Link></li>
          <li><Link href="/learn/best-ai-tools-for-business" className="text-emerald-600 hover:text-emerald-700">Best AI Tools for Business &rarr;</Link></li>
        </ul>
      </div>

      <PageFooterCTA />
    </article>
  );
}
