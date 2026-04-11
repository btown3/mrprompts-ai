import type { Metadata } from "next";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "What is a Prompt Library? — MrPrompts Glossary",
  description:
    "A prompt library is a curated collection of reusable prompts organized by task or department. Learn how to build one and scale AI across your team.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/prompt-library" },
};

export default function PromptLibraryPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is a Prompt Library?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          A prompt library is a curated collection of reusable, tested prompts organized by task,
          role, or department that teams can share and refine over time. Instead of every team member
          writing their own prompts from scratch, a prompt library provides proven templates that
          deliver consistent results. It is the simplest way to scale AI skills across an
          organization.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How prompt libraries work</h2>
          <p className="mt-3">
            A prompt library starts with one person writing a prompt that works, then sharing it with
            their team. Over time, the library grows to cover common tasks: drafting emails,
            analyzing data, writing reports, summarizing meetings, handling objections, onboarding
            new hires. Each prompt is documented with its purpose, input format, expected output,
            and any variables that need to be customized.
          </p>
          <p className="mt-3">
            Good prompt libraries are organized by function, not by AI model. A sales team might
            have categories for prospecting, discovery calls, proposals, and follow-ups. An HR team
            might organize by recruiting, onboarding, policy writing, and performance reviews. The
            prompts work with any AI model because they focus on clear instructions, not
            model-specific tricks.
          </p>
          <p className="mt-3">
            The best prompt libraries are living documents. Prompts get tested, refined based on
            results, and versioned so you can track what changed. Team members contribute new
            prompts, and the best ones get promoted to the shared library. This creates a flywheel
            where the team&apos;s collective AI capability improves continuously.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Without a prompt library, AI adoption stalls at the individual level. A few power users
            get great results while everyone else struggles with vague prompts and inconsistent
            outputs. A prompt library bridges this gap by making the best practices of power users
            available to the entire team.
          </p>
          <p className="mt-3">
            Prompt libraries also reduce the learning curve for AI adoption. New team members do not
            need to learn prompt engineering from scratch. They open the library, find the prompt for
            their task, fill in the variables, and get a reliable result. This turns AI from a skill
            that takes weeks to learn into a tool that delivers value on day one.
          </p>
          <p className="mt-3">
            For leaders, prompt libraries provide visibility into how teams are using AI. You can see
            which prompts are used most, which tasks are being automated, and where there are gaps.
            This data helps prioritize AI training, identify workflow improvements, and measure the
            ROI of AI investments.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/system-prompt" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">System Prompt</Link>
          <Link href="/glossary/ai-workflow" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Workflow</Link>
          <Link href="/glossary/ai-fluency" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Fluency</Link>
          <Link href="/glossary/ai-knowledge-base" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Knowledge Base</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/guides/prompt-library-starter" className="text-emerald-600 hover:text-emerald-700">Prompt Library Starter Guide &rarr;</Link></li>
          <li><Link href="/learn/ai-prompts-for-sales" className="text-emerald-600 hover:text-emerald-700">AI Prompts for Sales &rarr;</Link></li>
          <li><Link href="/learn/ai-prompts-for-marketing" className="text-emerald-600 hover:text-emerald-700">AI Prompts for Marketing &rarr;</Link></li>
          <li><Link href="/learn/ai-prompts-for-hr" className="text-emerald-600 hover:text-emerald-700">AI Prompts for HR &rarr;</Link></li>
        </ul>
      </div>

      <PageFooterCTA />
    </article>
  );
}
