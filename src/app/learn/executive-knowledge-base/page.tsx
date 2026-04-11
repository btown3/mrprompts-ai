import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "Executive Knowledge Base — Industry Intelligence & Decision Support",
  description:
    "Build an AI-powered executive knowledge base for industry intelligence, competitive landscape, strategic trends, and board-ready briefings.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/executive-knowledge-base" },
};

export default function ExecutiveKnowledgeBasePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Use Case</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        How to Build an Executive Knowledge Base
      </h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By MrPrompts</p>
      <p className="mt-4 text-lg text-zinc-500">
        A structured system for industry intelligence, competitive landscape,
        strategic trends, and board-ready briefings. Ask a question Monday
        morning and get a synthesized answer based on everything you've
        collected over the past year.
      </p>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why executives need a knowledge base</h2>
          <p className="mt-3">You read 20 industry reports a quarter. You attend conferences. You have conversations with board members, customers, and peers. You absorb an enormous amount of strategic information. Almost none of it is captured in a way you can query later.</p>
          <p className="mt-3">When the board asks "what are the top 3 competitive threats this year?" you synthesize from memory. When a direct report asks "what did that McKinsey report say about our market?" you dig through email. When you need to make a strategic decision, you rely on whatever you happen to remember.</p>
          <p className="mt-3">An executive knowledge base changes this. Every report, every interesting conversation, every strategic observation gets captured. The AI synthesizes it into structured intelligence. When you need to make a decision, you query a year's worth of accumulated insight, not last week's memory.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What goes in an executive knowledge base</h2>
          <p className="mt-3"><strong>Industry intelligence.</strong> Market reports, analyst research, conference takeaways, and trend observations. One article per major trend or development. Updated quarterly as new data arrives.</p>
          <p className="mt-3"><strong>Competitive landscape.</strong> One article per major competitor: their strategy, recent moves, strengths, weaknesses, and what they're likely to do next. Updated after every earnings call, product launch, or leadership change.</p>
          <p className="mt-3"><strong>Strategic themes.</strong> The 5-7 themes that matter to your business right now. AI adoption, talent market, regulatory changes, customer behavior shifts, technology disruption. Each theme gets its own article that accumulates evidence over time.</p>
          <p className="mt-3"><strong>Decision history.</strong> Major decisions you've made: what the options were, what data informed the choice, what you expected to happen, and what actually happened. This is your institutional memory for decision-making patterns.</p>
          <p className="mt-3"><strong>Board prep.</strong> Key metrics, talking points, strategic questions, and risk factors that come up in board discussions. Having this in the wiki means your board prep starts from accumulated intelligence, not from scratch each quarter.</p>
          <p className="mt-3"><strong>People and relationships.</strong> Key external contacts: investors, advisors, potential hires, partners. What you discussed, what they care about, and what you promised to follow up on.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The CLAUDE.md schema for executives</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-6 text-sm leading-relaxed text-zinc-300">{`# Executive Intelligence Wiki
# Version: 1.0

## Purpose
Strategic intelligence, competitive landscape, and decision
support for executive leadership. Confidential.

## Structure
- /Sources — Reports, articles, meeting notes, conversation logs
  - /Sources/Reports — Industry reports, analyst research
  - /Sources/Meetings — Board prep, leadership team notes
  - /Sources/External — Conference notes, advisor conversations
- /Wiki — Synthesized strategic intelligence
- /Queries — Strategic questions and synthesized answers

## Categories
- Industry (market trends, regulatory, technology shifts)
- Competitors (one article per major competitor)
- Strategy (internal strategic themes and initiatives)
- Decisions (decision log with context and outcomes)
- Board (board-related prep and recurring themes)
- People (key external relationships)

## Article Format
- H1 title
- Executive summary (3 sentences — boardroom ready)
- Body with H2 sections
- "So What" section (implications for our business)
- Evidence quality: [CONFIRMED], [LIKELY], [SPECULATIVE]
- Sources section
- Related articles with [[wikilinks]]
- Confidentiality level: [INTERNAL], [BOARD], [PERSONAL]

## Rules
1. Never modify source files
2. Executive summary must be boardroom-ready (no jargon, no hedging)
3. Every competitive article must include "what they'll likely do next"
4. Mark confidence levels on all forward-looking claims
5. Review all competitor articles quarterly
6. Decision log entries must include outcome tracking`}</pre>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How executives query the wiki</h2>
          <p className="mt-3">"What are the three biggest competitive threats right now? What evidence supports each one?"</p>
          <p className="mt-3">"Prepare a 5-minute briefing on [market trend] for the board meeting. Include recent data points and strategic implications."</p>
          <p className="mt-3">"What decisions have we made about [strategic area] in the past 12 months? What outcomes have we seen?"</p>
          <p className="mt-3">"Compare what we knew about [competitor] 6 months ago to what we know now. What changed?"</p>
        </section>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "How do I handle confidential information?", answer: "Use a private tool with local storage — a folder on your laptop, a private Notion workspace, or a secured cloud drive. Never put confidential strategic data in a shared or public tool. The CLAUDE.md schema includes confidentiality levels for this reason." },
            { question: "How much time does this take to maintain?", answer: "15-20 minutes per week. Drop source materials in as you encounter them (articles, notes, reports). Run the compilation prompt once a week. Query as needed. The AI does the heavy synthesis. You do the judgment calls." },
            { question: "Can my EA or chief of staff maintain this for me?", answer: "Yes, and that's the ideal setup. They add sources, run the prompts, and maintain the wiki. You query it and make decisions. The schema ensures the output is boardroom-ready regardless of who maintains it." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Build your executive knowledge base now</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">Get the starter kit with folder structure, CLAUDE.md schema, and 7 numbered prompts.</p>
        <Link href="/build/knowledge-bases" className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700">Get the Starter Kit</Link>
      </div>
    </article>
  );
}
