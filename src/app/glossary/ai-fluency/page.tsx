import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is AI Fluency? — MrPrompts Glossary",
  description:
    "AI fluency is the ability to communicate effectively with AI, understand its capabilities, and integrate it into everyday work. Learn how to develop it.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/ai-fluency" },
};

export default function AIFluencyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is AI Fluency?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          AI fluency is the ability to communicate effectively with AI systems, understand their
          capabilities and limitations, and integrate them into everyday work. It goes beyond knowing
          how to use a specific tool. AI fluency means understanding when to use AI, what to ask it,
          how to evaluate its output, and how to design processes that leverage AI strengths while
          compensating for its weaknesses.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What AI fluency looks like in practice</h2>
          <p className="mt-3">
            An AI-fluent professional does not just type questions into ChatGPT. They know how to
            frame problems so the AI can help solve them. They understand that AI excels at drafting,
            summarizing, analyzing patterns, and generating variations, but struggles with factual
            accuracy on niche topics, nuanced judgment, and tasks requiring real-world context the
            model does not have.
          </p>
          <p className="mt-3">
            AI fluency includes practical skills like prompt engineering, but it also includes
            strategic skills: knowing which processes in your work are good candidates for AI
            assistance, understanding how to evaluate AI tools, and being able to train others on
            effective AI use. It is the difference between someone who can use a calculator and
            someone who understands math well enough to know when the calculator is wrong.
          </p>
          <p className="mt-3">
            Organizations measure AI fluency across a spectrum. At the beginner level, people can
            hold basic AI conversations. At the intermediate level, they can build prompt libraries
            and simple workflows. At the advanced level, they can design multi-step AI systems,
            build knowledge bases, and lead AI adoption initiatives. Most teams benefit from getting
            everyone to intermediate fluency.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            AI fluency is becoming a core professional skill, similar to how computer literacy
            became essential in the 1990s. Teams where most members have strong AI fluency
            consistently outperform teams where AI use is limited to a few power users. The
            difference is not the tools; it is the ability of people to use them effectively.
          </p>
          <p className="mt-3">
            For leaders, building team AI fluency is the highest-leverage investment in AI adoption.
            Buying AI tools without developing fluency is like buying software without training
            anyone to use it. The tools sit idle, and the investment does not pay off. Fluency
            training, prompt libraries, and shared workflows are what make AI adoption stick.
          </p>
          <p className="mt-3">
            AI fluency also helps professionals future-proof their careers. The specific AI tools
            will change. The underlying ability to work with AI systems, evaluate their output, and
            integrate them into professional work will remain valuable regardless of which models or
            platforms dominate the market.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/prompt-library" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Library</Link>
          <Link href="/glossary/change-management-ai" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Change Management</Link>
          <Link href="/glossary/ai-workflow" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Workflow</Link>
          <Link href="/glossary/hallucination" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Hallucination</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/guides/team-fluency-assessment" className="text-emerald-600 hover:text-emerald-700">Team Fluency Assessment &rarr;</Link></li>
          <li><Link href="/learn/ai-for-non-technical" className="text-emerald-600 hover:text-emerald-700">AI for Non-Technical Leaders &rarr;</Link></li>
          <li><Link href="/learn/ai-team-assessment" className="text-emerald-600 hover:text-emerald-700">AI Team Assessment &rarr;</Link></li>
          <li><Link href="/guides/ai-adoption-roadmap" className="text-emerald-600 hover:text-emerald-700">AI Adoption Roadmap &rarr;</Link></li>
        </ul>
      </div>
    </article>
  );
}
