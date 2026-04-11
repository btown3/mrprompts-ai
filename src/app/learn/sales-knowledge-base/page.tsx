import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "Sales Knowledge Base — Build a Competitive Intel & Deal Playbook System",
  description:
    "Build an AI-powered sales knowledge base with competitive battle cards, deal playbooks, customer profiles, and objection libraries. Works with any AI tool.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/sales-knowledge-base" },
};

export default function SalesKnowledgeBasePage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Use Case</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        How to Build a Sales Knowledge Base
      </h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By MrPrompts</p>
      <p className="mt-4 text-lg text-zinc-500">
        A structured system for competitive intelligence, deal playbooks,
        customer profiles, and objection handling. Your sales team queries it
        before every call and it gets smarter after every deal.
      </p>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why sales teams need a knowledge base</h2>
          <p className="mt-3">Every sales team has tribal knowledge trapped in people's heads. The best objection response lives in one rep's memory. The competitive intel from last quarter's lost deal is in a Slack thread nobody can find. The onboarding doc is six months out of date.</p>
          <p className="mt-3">A sales knowledge base fixes this by making team knowledge persistent, searchable, and self-improving. When a rep wins a deal against a specific competitor, the lessons go into the wiki. When a new objection emerges, the best response gets documented. When a prospect asks a question nobody has heard before, the answer becomes part of the system.</p>
          <p className="mt-3">The compound effect is what makes this different from a shared Google Drive. Every new piece of knowledge enriches everything else. The competitive battle card links to the objection library which links to the customer profile which links to the deal playbook. Your AI reads all of it before answering any question.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">What goes in a sales knowledge base</h2>
          <p className="mt-3"><strong>Competitive battle cards.</strong> One article per competitor: where you win, where they win, their likely pitch, your counter, discovery questions that expose their weaknesses. Updated after every competitive deal.</p>
          <p className="mt-3"><strong>Objection library.</strong> Every objection your team hears, with: the real concern behind it, the best response, a question to move past it, and which reps have used it successfully. Organized by category: price, timing, competition, authority, need.</p>
          <p className="mt-3"><strong>Deal playbooks.</strong> Step-by-step guides for different deal types: enterprise vs. mid-market, inbound vs. outbound, new logo vs. expansion. What to do at each stage, what questions to ask, what materials to send.</p>
          <p className="mt-3"><strong>Customer profiles.</strong> For key accounts: company overview, decision-making process, past interactions, what they value, what they don't care about. Updated after every touchpoint.</p>
          <p className="mt-3"><strong>Win/loss analysis.</strong> After every closed deal: what worked, what didn't, at what stage you gained or lost momentum, and what to repeat or avoid next time.</p>
          <p className="mt-3"><strong>Product knowledge.</strong> Features, use cases, pricing, and positioning. Written for sales conversations, not for the website. Includes "how to demo this" for each key feature.</p>
          <p className="mt-3">Pair your knowledge base with our <Link href="/learn/ai-prompts-for-sales" className="text-emerald-600 hover:text-emerald-700">15 ready-to-use sales prompts</Link> to get structured output for discovery calls, proposals, and objection handling. Or grab the complete <Link href="/products/sales-prompt-pack" className="text-emerald-600 hover:text-emerald-700">Sales Prompt Pack</Link> with all templates included.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">The CLAUDE.md schema for sales</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg bg-zinc-900 p-6 text-sm leading-relaxed text-zinc-300">{`# Sales Knowledge Base
# Version: 1.0

## Purpose
Competitive intelligence, deal playbooks, and team knowledge
for the sales organization. Updated after every deal.

## Structure
- /Sources — Raw deal notes, call recordings, competitor research
- /Wiki — Compiled articles organized by category
- /Queries — Questions reps ask + synthesized answers

## Categories
- Competitors (one article per competitor)
- Objections (organized by type)
- Playbooks (by deal type and stage)
- Customers (key account profiles)
- Win-Loss (post-deal analysis)
- Product (features, demos, positioning)

## Article Format
- H1 title
- 2-3 sentence summary
- Body with H2 sections
- "Last Updated" date
- "Contributed By" (which rep)
- Sources section
- Related articles with [[wikilinks]]

## Rules
1. Never modify source files
2. Update competitive intel within 48 hours of a deal close
3. Every objection response must include which rep validated it
4. Win/loss articles must be written within 1 week of deal close
5. Flag outdated information (>90 days old) for review`}</pre>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How to query your sales wiki</h2>
          <p className="mt-3">Before a discovery call: "Read the wiki. I have a call with [prospect] in [industry]. What competitive threats should I prepare for? What objections are most common in this segment? What deal playbook applies?"</p>
          <p className="mt-3">After a lost deal: "Read the win/loss articles. Find patterns in deals we lost to [competitor] in the last 6 months. What stage do we consistently lose momentum?"</p>
          <p className="mt-3">For onboarding a new rep: "Summarize the top 5 objections, our 3 main competitors, and the discovery call playbook. Format as a one-page cheat sheet."</p>
        </section>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "What tool should I use for a sales knowledge base?", answer: "Any tool your team already uses. Notion is ideal for teams because of real-time collaboration. Google Docs works for simplicity. A shared folder of markdown files works too. The tool matters less than the structure. The CLAUDE.md schema and folder system work with anything." },
            { question: "How do I get reps to actually contribute?", answer: "Make it part of the deal close process: every closed deal (won or lost) requires a 5-minute debrief note in the Sources folder. The AI compiles the wiki article from that note. The rep writes 5 minutes of raw notes, not a polished article. The system does the rest." },
            { question: "How is this different from a CRM?", answer: "A CRM tracks deals and contacts. A knowledge base captures the knowledge your team generates: what works against competitors, how to handle objections, what makes deals succeed or fail. The CRM tells you what happened. The wiki tells you what to do about it." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Build your sales knowledge base now</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          Get the starter kit with a sales-specific CLAUDE.md template, folder structure, and 7 prompts.
        </p>
        <Link href="/build/knowledge-bases" className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700">Get the Starter Kit</Link>
      </div>
    </article>
  );
}
