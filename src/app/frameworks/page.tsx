import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Frameworks — Named Systems for Building with AI",
  description:
    "AI frameworks, prompt systems, and structured guides for professionals. The LLM Instruction Set, Knowledge Base Architecture, 4-Layer Prompt Framework, and more.",
  alternates: { canonical: "https://www.mrprompts.ai/frameworks" },
};

const FRAMEWORKS = [
  {
    type: "Framework",
    title: "The LLM Instruction Set",
    description: "15 atomic instructions you type into any AI tool. DefineOutcome, ForceAction, CheckGaps, and 12 more. Stack them for compound results.",
    href: "/learn/llm-instruction-set",
    featured: true,
  },
  {
    type: "System",
    title: "The Knowledge Base Architecture",
    description: "Collect, Compile, Query, Compound. The 4-step system for building AI knowledge bases that get smarter over time.",
    href: "/learn/ai-knowledge-base-guide",
    featured: false,
  },
  {
    type: "Playbook",
    title: "The 90-Day AI Adoption Playbook",
    description: "Assess, Foundation, Pilot, Scale. A complete rollout plan for organizations adopting AI.",
    href: "/learn/ai-change-management",
    featured: false,
  },
  {
    type: "Guide",
    title: "AI for Non-Technical Professionals",
    description: "What AI is, what it does well, where it fails, and your first-week plan. The complete on-ramp.",
    href: "/learn/ai-for-non-technical",
    featured: false,
  },
  {
    type: "Assessment",
    title: "AI Fluency Assessment",
    description: "5-dimension scoring rubric and 10-question survey. Measure where your team stands before training.",
    href: "/learn/ai-team-assessment",
    featured: false,
  },
  {
    type: "Reference",
    title: "What is CLAUDE.md?",
    description: "The schema file that controls your AI knowledge base. What it does, how to write one, and a production-ready template.",
    href: "/learn/what-is-claude-md",
    featured: false,
  },
  {
    type: "Prompts",
    title: "Sales Prompt Framework",
    description: "15 prompts for discovery, proposals, follow-ups, objections, and pipeline management.",
    href: "/learn/ai-prompts-for-sales",
    featured: false,
  },
  {
    type: "Prompts",
    title: "Marketing Prompt Framework",
    description: "15 prompts for campaigns, content, email, social, ads, and analytics.",
    href: "/learn/ai-prompts-for-marketing",
    featured: false,
  },
  {
    type: "Prompts",
    title: "HR Prompt Framework",
    description: "12 prompts for recruiting, performance reviews, onboarding, policies, and communications.",
    href: "/learn/ai-prompts-for-hr",
    featured: false,
  },
  {
    type: "Workflows",
    title: "AI Workflow Examples",
    description: "7 automations you can build today. Morning briefs, meeting notes, lead research, client reports.",
    href: "/learn/ai-workflow-examples",
    featured: false,
  },
  {
    type: "Tools",
    title: "Best AI Tools for Business",
    description: "Opinionated recommendations from someone who uses them all. Claude, ChatGPT, Perplexity, and more.",
    href: "/learn/best-ai-tools-for-business",
    featured: false,
  },
  {
    type: "Use Case",
    title: "Sales Knowledge Base",
    description: "Competitive intel, deal playbooks, objection libraries, and win/loss analysis for sales teams.",
    href: "/learn/sales-knowledge-base",
    featured: false,
  },
  {
    type: "Use Case",
    title: "Research Knowledge Base",
    description: "Synthesize papers, articles, and notes into structured, queryable knowledge for analysts and consultants.",
    href: "/learn/research-knowledge-base",
    featured: false,
  },
  {
    type: "Use Case",
    title: "Onboarding Knowledge Base",
    description: "A new hire ramp-up system. Processes, tools, people, culture, and role-specific playbooks.",
    href: "/learn/onboarding-knowledge-base",
    featured: false,
  },
  {
    type: "Use Case",
    title: "Executive Knowledge Base",
    description: "Industry intelligence, competitive landscape, strategic trends, and board-ready briefings.",
    href: "/learn/executive-knowledge-base",
    featured: false,
  },
];

const TYPE_COLORS: Record<string, string> = {
  Framework: "text-emerald-600",
  System: "text-blue-600",
  Playbook: "text-purple-600",
  Guide: "text-amber-600",
  Assessment: "text-rose-600",
  Reference: "text-zinc-500",
  Prompts: "text-blue-600",
  Workflows: "text-purple-600",
  Tools: "text-emerald-600",
  "Use Case": "text-amber-600",
};

export default function FrameworksPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Frameworks
      </h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Named systems, prompt frameworks, and structured guides for building
        with AI. Each one is something you can use today.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FRAMEWORKS.map((fw) => (
          <Link
            key={fw.title}
            href={fw.href}
            className={`group flex flex-col rounded-xl border p-6 transition hover:shadow-sm dark:hover:border-emerald-800 ${
              fw.featured
                ? "border-emerald-300 shadow-sm md:col-span-2 lg:col-span-3 dark:border-emerald-800"
                : "border-zinc-200 hover:border-emerald-300 dark:border-zinc-800"
            }`}
          >
            <span className={`text-xs font-semibold uppercase tracking-wider ${TYPE_COLORS[fw.type] || "text-zinc-500"}`}>
              {fw.type}
            </span>
            <h2 className={`mt-3 font-bold group-hover:text-emerald-600 ${fw.featured ? "text-xl" : "text-lg"}`}>
              {fw.title}
            </h2>
            <p className={`mt-2 text-zinc-500 ${fw.featured ? "text-sm" : "text-sm"}`}>
              {fw.description}
            </p>
            {fw.featured && (
              <span className="mt-4 text-sm font-semibold text-emerald-600">
                Read the framework &rarr;
              </span>
            )}
          </Link>
        ))}
      </div>

      {/* Glossary link */}
      <div className="mt-12 rounded-xl border border-zinc-200 p-6 text-center dark:border-zinc-800">
        <h3 className="font-semibold">Looking for definitions?</h3>
        <p className="mt-2 text-sm text-zinc-500">
          The glossary has clear definitions for 15 AI terms: prompt engineering,
          RAG, chain-of-thought, hallucination, and more.
        </p>
        <Link href="/glossary" className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700">
          Browse the glossary &rarr;
        </Link>
      </div>
    </div>
  );
}
