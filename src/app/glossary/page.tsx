import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Glossary — Key Terms for Building with AI",
  description:
    "A plain-language AI glossary covering prompt engineering, knowledge bases, AI agents, RAG, and more. Definitions written for builders, not researchers.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary" },
};

const glossaryTerms = [
  {
    slug: "ai-agents",
    term: "AI Agents",
    definition:
      "Autonomous AI systems that can plan, use tools, and take multi-step actions to accomplish goals without constant human direction.",
  },
  {
    slug: "ai-fluency",
    term: "AI Fluency",
    definition:
      "The ability to communicate effectively with AI systems, understand their capabilities and limitations, and integrate them into everyday work.",
  },
  {
    slug: "ai-knowledge-base",
    term: "AI Knowledge Base",
    definition:
      "A structured collection of documents that an AI can read, reference, and build upon to produce consistent, accurate outputs.",
  },
  {
    slug: "ai-workflow",
    term: "AI Workflow",
    definition:
      "A repeatable sequence of AI-assisted steps that transforms an input into a finished output, often combining prompts, tools, and human review.",
  },
  {
    slug: "chain-of-thought",
    term: "Chain-of-Thought Prompting",
    definition:
      "A prompting technique that instructs the AI to reason through a problem step by step before giving a final answer.",
  },
  {
    slug: "change-management-ai",
    term: "AI Change Management",
    definition:
      "The practice of planning, communicating, and supporting the adoption of AI tools across a team or organization.",
  },
  {
    slug: "claude-md",
    term: "CLAUDE.md",
    definition:
      "A schema file that gives an AI persistent instructions about how to interact with a project or knowledge base.",
  },
  {
    slug: "context-window",
    term: "Context Window",
    definition:
      "The maximum amount of text an AI model can process in a single conversation, measured in tokens.",
  },
  {
    slug: "fine-tuning",
    term: "Fine-Tuning",
    definition:
      "The process of training a pre-trained AI model on a specialized dataset to improve its performance on specific tasks.",
  },
  {
    slug: "hallucination",
    term: "AI Hallucination",
    definition:
      "When an AI model generates information that sounds plausible but is factually incorrect, fabricated, or unsupported by its training data.",
  },
  {
    slug: "prompt-engineering",
    term: "Prompt Engineering",
    definition:
      "The practice of writing clear, structured instructions that guide AI models to produce accurate, useful outputs.",
  },
  {
    slug: "prompt-library",
    term: "Prompt Library",
    definition:
      "A curated collection of reusable prompts organized by task, role, or department that teams can share and refine over time.",
  },
  {
    slug: "rag",
    term: "RAG (Retrieval-Augmented Generation)",
    definition:
      "A technique that retrieves relevant documents from a knowledge base and feeds them to an AI model so it can generate answers grounded in real data.",
  },
  {
    slug: "system-prompt",
    term: "System Prompt",
    definition:
      "A hidden instruction given to an AI model at the start of a conversation that defines its role, behavior, and constraints.",
  },
  {
    slug: "token",
    term: "Tokens",
    definition:
      "The basic units of text that AI models process. A token is roughly 3-4 characters or about three-quarters of an English word.",
  },
];

export default function GlossaryPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Reference
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        AI Glossary
      </h1>
      <p className="mt-4 text-lg text-zinc-500">
        Plain-language definitions of the terms you need to know when building
        with AI. No jargon walls. Each term links to a full explanation with
        examples and related guides.
      </p>

      <div className="mt-12 space-y-6">
        {glossaryTerms.map((item) => (
          <Link
            key={item.slug}
            href={`/glossary/${item.slug}`}
            className="block rounded-xl border border-zinc-200 p-6 transition-colors hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-zinc-800 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/20"
          >
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
              {item.term}
            </h2>
            <p className="mt-2 text-sm text-zinc-500">{item.definition}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-emerald-600">
              Read full definition &rarr;
            </span>
          </Link>
        ))}
      </div>
    </article>
  );
}
