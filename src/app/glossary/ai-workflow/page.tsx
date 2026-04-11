import type { Metadata } from "next";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "What is an AI Workflow? — MrPrompts Glossary",
  description:
    "An AI workflow is a repeatable sequence of AI-assisted steps that transforms inputs into finished outputs. Learn how to design workflows that scale.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/ai-workflow" },
};

export default function AIWorkflowPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is an AI Workflow?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          An AI workflow is a repeatable sequence of AI-assisted steps that transforms an input into
          a finished output, often combining multiple prompts, tools, and human review checkpoints.
          Unlike a single prompt-and-response interaction, a workflow chains several steps together
          so that the output of one step becomes the input of the next, producing results that no
          single prompt could achieve.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How AI workflows work</h2>
          <p className="mt-3">
            A simple AI workflow might have three steps: research, draft, and refine. In the
            research step, the AI reads source documents and extracts key points. In the draft step,
            it uses those key points to write a first draft. In the refine step, a second AI pass
            (or human review) checks for accuracy, adjusts tone, and polishes the output. Each step
            has its own prompt, its own quality criteria, and its own inputs and outputs.
          </p>
          <p className="mt-3">
            More sophisticated workflows might include branching logic (different steps depending on
            the type of input), parallel processing (multiple AI tasks running simultaneously), tool
            integration (pulling data from databases, sending outputs to other systems), and human
            approval gates (stopping the workflow for human review before proceeding).
          </p>
          <p className="mt-3">
            The key principle is decomposition. Instead of asking the AI to do everything in one
            prompt, you break the task into discrete steps where each step is simple enough for the
            AI to handle reliably. This produces better results because each step can be tested,
            debugged, and optimized independently.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            AI workflows are how teams move from using AI for ad-hoc tasks to building systematic
            AI capabilities. A marketing team that builds a content workflow (research, outline,
            draft, review, publish) can produce content at scale without sacrificing quality. A sales
            team that builds a prospecting workflow (identify leads, research companies, draft
            outreach, personalize) can generate pipeline consistently.
          </p>
          <p className="mt-3">
            Workflows also make AI outputs more reliable. When a single prompt fails, you get a bad
            result and have to start over. When a workflow step fails, you can identify exactly
            which step broke, fix it, and re-run from that point. This makes AI usage more
            predictable and easier to improve over time.
          </p>
          <p className="mt-3">
            The most valuable professional skill in AI is not writing a single great prompt. It is
            designing workflows that chain multiple steps together into a reliable system. This is
            where prompt engineering evolves into something closer to process design, and it is
            where the biggest productivity gains come from.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/ai-agents" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Agents</Link>
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/prompt-library" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Library</Link>
          <Link href="/glossary/ai-knowledge-base" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Knowledge Base</Link>
          <Link href="/glossary/chain-of-thought" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Chain-of-Thought</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/guides/workflow-blueprints" className="text-emerald-600 hover:text-emerald-700">Workflow Blueprints &rarr;</Link></li>
          <li><Link href="/learn/ai-workflow-examples" className="text-emerald-600 hover:text-emerald-700">AI Workflow Examples &rarr;</Link></li>
          <li><Link href="/build/workflows" className="text-emerald-600 hover:text-emerald-700">Build: Workflows &rarr;</Link></li>
        </ul>
      </div>

      <PageFooterCTA />
    </article>
  );
}
