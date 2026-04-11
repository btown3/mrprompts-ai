import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "Onboarding Knowledge Base — New Hire Ramp-Up System",
  description:
    "Build an AI-powered onboarding knowledge base that gets new hires productive faster. Processes, tools, people, culture, and role-specific playbooks.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/onboarding-knowledge-base" },
};

export default function OnboardingKnowledgeBasePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Use Case</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        How to Build an Onboarding Knowledge Base
      </h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By MrPrompts</p>
      <p className="mt-4 text-lg text-zinc-500">
        A structured system that gets new hires productive in weeks instead
        of months. Processes, tools, people, culture, and role-specific
        playbooks. The new hire queries it. It answers.
      </p>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The onboarding problem</h2>
          <p className="mt-3">New hires spend their first weeks asking the same questions: How does this process work? Who should I talk to about X? Where is the documentation for Y? Every person they ask takes 10 minutes away from their own work. Multiply that by every new hire, every year.</p>
          <p className="mt-3">An onboarding knowledge base captures all of that tribal knowledge in a structured, queryable format. The new hire asks the AI instead of interrupting colleagues. The AI reads the wiki and gives specific, contextual answers. When the new hire discovers something not in the wiki, they add it — and the next person benefits.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What goes in an onboarding knowledge base</h2>
          <p className="mt-3"><strong>Company overview.</strong> What the company does, who the customers are, how the business model works, what the strategy is. Written for someone who just joined, not for investors.</p>
          <p className="mt-3"><strong>Team structure.</strong> Who is who, what each team does, who to go to for what, and how teams work together. Include communication norms: when to Slack vs email vs meeting.</p>
          <p className="mt-3"><strong>Tools and systems.</strong> Every tool the company uses, what it's for, how to get access, and where to find help. Include the unwritten knowledge: which Slack channels actually matter, which meetings are optional, which dashboards to check.</p>
          <p className="mt-3"><strong>Processes.</strong> How things actually get done. Not the official process doc from 2 years ago — the real way things work today. How to submit an expense report. How to request time off. How to deploy code. How to get a decision made.</p>
          <p className="mt-3"><strong>Role-specific playbooks.</strong> Different sections for different roles. What a new engineer needs to know is different from what a new marketer needs. Each role gets its own playbook with first-week priorities, key contacts, and "things I wish I knew on day 1" from people in that role.</p>
          <p className="mt-3"><strong>Culture and norms.</strong> The unwritten rules. How decisions get made. How conflict is handled. What "good work" looks like here. This is the hardest section to write and the most valuable one for new hires.</p>
          <p className="mt-3">Before building an onboarding wiki, run the <Link href="/learn/ai-team-assessment" className="text-emerald-600 hover:text-emerald-700">AI team assessment</Link> to understand where your team stands. Then use our <Link href="/learn/ai-change-management" className="text-emerald-600 hover:text-emerald-700">change management playbook</Link> to roll out AI tools alongside the knowledge base.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The CLAUDE.md schema for onboarding</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-6 text-sm leading-relaxed text-zinc-300">{`# [Company Name] Onboarding Wiki
# Version: 1.0

## Purpose
Everything a new hire needs to get productive at [Company].
Queryable, structured, and maintained by the team.

## Structure
- /Sources — Raw onboarding docs, process descriptions, team notes
- /Wiki — Compiled, interlinked onboarding articles
- /Queries — Questions new hires ask + answers

## Categories
- Company (overview, strategy, customers, business model)
- People (team structure, key contacts, org chart)
- Tools (systems, access, setup guides)
- Processes (how things get done)
- Roles (role-specific playbooks)
- Culture (norms, values, unwritten rules)

## Article Format
- H1 title
- "TL;DR" (3-sentence summary for quick reference)
- Body with H2 sections
- "Pro tips" section (advice from tenured employees)
- Last updated date
- Related articles with [[wikilinks]]

## Rules
1. Write for someone who started today
2. No jargon without explanation
3. Include the REAL process, not the official one if they differ
4. Every article must have a "who to ask" contact
5. Flag anything older than 6 months for review
6. New hires should add things they had to figure out themselves`}</pre>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How new hires query it</h2>
          <p className="mt-3">"I'm a new [role] starting this week. What should I focus on in my first 5 days? Who should I meet with and why?"</p>
          <p className="mt-3">"How do I get access to [tool]? What's the process and who approves it?"</p>
          <p className="mt-3">"I need to [do specific task] for the first time. Walk me through the process step by step."</p>
          <p className="mt-3">"Who should I talk to about [topic]? What team owns this and who's the point of contact?"</p>
        </section>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "How do I keep the onboarding wiki current?", answer: "Make it part of the onboarding process itself: every new hire is asked to update or add one article during their first month based on something they had to figure out that wasn't documented. The wiki improves with every cohort." },
            { question: "Should this replace our existing onboarding docs?", answer: "It should incorporate them. Drop your existing docs into the Sources folder and let the AI compile them into structured wiki articles. You keep the originals, but the wiki makes them searchable and interconnected." },
            { question: "How is this different from a company wiki?", answer: "A company wiki tries to document everything. An onboarding wiki is specifically structured for someone in their first 90 days. The categories, the writing style, the 'who to ask' sections — everything is designed for someone who doesn't know how things work yet." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Build your onboarding knowledge base now</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">Get the starter kit with folder structure, CLAUDE.md schema, and 7 numbered prompts.</p>
        <Link href="/build/knowledge-bases" className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700">Get the Starter Kit</Link>
      </div>

      <PageFooterCTA />
    </article>
  );
}
