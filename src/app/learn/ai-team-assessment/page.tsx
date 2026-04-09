import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "AI Team Assessment — How to Measure Your Team's AI Readiness",
  description:
    "A practical framework for assessing your team's AI readiness. 5-dimension rubric, 10-question survey, and scoring guide. Free download.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/ai-team-assessment" },
};

export default function AITeamAssessmentPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Leadership</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">How to Measure Your Team's AI Readiness</h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By Wayne Cederholm</p>
      <p className="mt-4 text-lg text-zinc-500">Before you roll out AI to your team, you need to know where they stand. This guide explains the five dimensions of AI fluency, how to measure them, and what to do with the results.</p>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why assessment comes before training</h2>
          <p className="mt-3">The number one mistake in AI rollouts is assuming everyone starts at the same place. They do not. In any team of 20 people, you will have 2-3 who are already using AI daily, 10-12 who have tried it once or twice, and 5-8 who have never used it at all.</p>
          <p className="mt-3">If you put all 20 in the same training session, you bore the advanced users, overwhelm the beginners, and frustrate everyone in between. Assessment lets you segment your team and provide the right training at the right level. It also gives you a baseline so you can measure improvement.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The five dimensions of AI fluency</h2>
          <p className="mt-3">AI fluency is not a single skill. It is five interrelated capabilities that develop at different rates:</p>
          <p className="mt-3"><strong>1. AI Awareness (20% weight).</strong> Does the person know what AI tools exist and what they can do? This ranges from "has never heard of ChatGPT" to "tracks AI developments and can explain trade-offs between models." Awareness is the foundation. Without it, nothing else happens.</p>
          <p className="mt-3"><strong>2. Practical Usage (30% weight).</strong> Is the person actually using AI in their work? This is the highest-weighted dimension because it measures behavior, not knowledge. Someone who uses AI weekly for real work tasks is more fluent than someone who can describe every model but never uses them.</p>
          <p className="mt-3"><strong>3. Critical Evaluation (20% weight).</strong> Can the person evaluate AI output and know when not to trust it? This is the safety dimension. A team that blindly trusts AI output is a liability. A team that knows when to verify, how to spot hallucinations, and which tasks require human judgment is an asset.</p>
          <p className="mt-3"><strong>4. Building Capability (20% weight).</strong> Can the person create AI-powered tools, workflows, and systems? This goes beyond using AI to building with AI. Saving prompts, creating libraries, designing workflows, building knowledge bases. This is where compound value lives.</p>
          <p className="mt-3"><strong>5. Leadership and Culture (10% weight).</strong> Does leadership support and model AI usage? This dimension assesses the environment, not the individual. A team with high individual fluency but resistant leadership will stall. A team with supportive leadership and low individual fluency will grow.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How to run the assessment</h2>
          <p className="mt-3"><strong>Step 1: Team lead scores the rubric.</strong> Have each team lead rate their team (not individual members) on each dimension using the 1-5 scale. This takes 10 minutes.</p>
          <p className="mt-3"><strong>Step 2: Individual survey.</strong> Send the 10-question survey to every team member. Anonymous responses are more honest. This takes each person 5 minutes.</p>
          <p className="mt-3"><strong>Step 3: Score and segment.</strong> Average the rubric scores using the weights above. Cross-reference with survey responses to validate.</p>
          <p className="mt-3"><strong>Step 4: Interpret and plan.</strong> Teams scoring 3.5+ are ready for AI pilots. Teams scoring 2.0-3.5 need foundational training first. Teams below 2.0 need executive sponsorship and a longer runway.</p>
          <p className="mt-3">The full rubric, survey questions, and scoring guide are available in our <Link href="/guides/team-fluency-assessment" className="text-emerald-600 hover:text-emerald-700">Team AI Fluency Assessment</Link> download.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What to do with the results</h2>
          <p className="mt-3"><strong>High scorers (3.5+):</strong> These are your champions. Give them the tools and time to build. They become mentors for the rest of the organization. Start your AI pilot with this group.</p>
          <p className="mt-3"><strong>Middle scorers (2.0-3.5):</strong> These are the majority. They need structured training: a 90-minute AI literacy session, hands-on workshops, and a buddy from the high-scorer group. They will get to 3.5+ within a month of supported use.</p>
          <p className="mt-3"><strong>Low scorers (below 2.0):</strong> Do not push AI on this group first. Focus on awareness and comfort. Let them watch colleagues succeed before asking them to participate. Resistance is often fear, and fear dissolves with proximity to positive examples.</p>
        </section>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "How often should we reassess AI fluency?", answer: "Quarterly for the first year of AI adoption, then semi-annually. AI capabilities change fast. A team that was advanced 6 months ago may be behind if they have not kept up with new tools and techniques. Regular assessment keeps training targeted and reveals regression early." },
            { question: "Should the assessment be anonymous?", answer: "The individual survey should be anonymous to get honest answers. The team-level rubric scored by the team lead is not anonymous. Combining anonymous individual data with named team-level assessment gives you the fullest picture without making anyone feel exposed." },
            { question: "What if leadership scores low on the leadership dimension?", answer: "This is the most common and most important finding. If leadership is passive or resistant, individual training will not stick. Address leadership first with an executive briefing that focuses on business impact and competitive risk, not technology features. Leaders need to see AI as a business decision, not an IT project." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Get the complete assessment</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">Full rubric, 10-question survey, and scoring guide. Free download.</p>
        <Link href="/guides/team-fluency-assessment" className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700">Download the Assessment</Link>
      </div>
    </article>
  );
}
