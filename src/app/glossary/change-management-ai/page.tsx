import type { Metadata } from "next";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "What is AI Change Management? — MrPrompts Glossary",
  description:
    "AI change management is planning, communicating, and supporting AI tool adoption across a team or organization. Learn the frameworks that make adoption stick.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/change-management-ai" },
};

export default function ChangeManagementAIPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is AI Change Management?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          AI change management is the practice of planning, communicating, and supporting the
          adoption of AI tools and workflows across a team or organization. It applies traditional
          change management principles to the specific challenges of AI adoption: managing
          expectations, addressing fears about job displacement, building skills progressively, and
          creating the organizational conditions where AI use becomes self-sustaining rather than
          mandated from the top down.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How AI change management works</h2>
          <p className="mt-3">
            Successful AI change management follows a phased approach. The first phase is awareness:
            helping the team understand what AI can and cannot do, demonstrating real use cases from
            their own work, and addressing concerns honestly. Most resistance to AI comes from
            uncertainty, not opposition. Giving people hands-on experience with low-stakes tasks
            reduces fear more effectively than presentations.
          </p>
          <p className="mt-3">
            The second phase is enablement: providing the tools, training, and resources people need
            to start using AI productively. This means prompt libraries, workflow templates, and
            designated support for people who get stuck. The goal is to make the first experience
            positive and useful, so people want to continue rather than being forced to.
          </p>
          <p className="mt-3">
            The third phase is embedding: making AI part of standard workflows so it becomes the
            default way of working rather than an extra step. This requires process changes, not
            just tool access. When AI is woven into how the team does its work, adoption becomes
            self-sustaining because going back to the old way feels slower.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Most AI adoption initiatives fail not because of technology but because of people.
            Teams buy tools, run a training session, and then wonder why usage drops off after two
            weeks. Change management is the discipline that addresses this gap. It focuses on the
            human side of technology adoption: habits, incentives, fears, and skills.
          </p>
          <p className="mt-3">
            The cost of failed AI adoption is not just the wasted tool licenses. It is the
            opportunity cost of competitors who adopt successfully and the organizational cynicism
            that makes the next technology initiative harder to launch. Teams that invest in change
            management alongside technology consistently see higher adoption rates and faster ROI.
          </p>
          <p className="mt-3">
            For leaders, change management is the difference between being someone who buys AI tools
            and someone who builds AI capabilities. The tools are commodities. The organizational
            ability to use them effectively is a durable competitive advantage.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/ai-fluency" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Fluency</Link>
          <Link href="/glossary/prompt-library" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Library</Link>
          <Link href="/glossary/ai-workflow" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Workflow</Link>
          <Link href="/glossary/ai-knowledge-base" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Knowledge Base</Link>
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/learn/ai-change-management" className="text-emerald-600 hover:text-emerald-700">AI Change Management Guide &rarr;</Link></li>
          <li><Link href="/guides/ai-adoption-roadmap" className="text-emerald-600 hover:text-emerald-700">AI Adoption Roadmap &rarr;</Link></li>
          <li><Link href="/guides/team-fluency-assessment" className="text-emerald-600 hover:text-emerald-700">Team Fluency Assessment &rarr;</Link></li>
          <li><Link href="/build/leadership" className="text-emerald-600 hover:text-emerald-700">Build: Leadership &rarr;</Link></li>
        </ul>
      </div>

      <PageFooterCTA />
    </article>
  );
}
