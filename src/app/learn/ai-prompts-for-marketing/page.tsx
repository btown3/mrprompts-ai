import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "AI Prompts for Marketing — 15 Ready-to-Use Templates",
  description:
    "Copy-paste AI prompt templates for marketing professionals. Campaign briefs, competitor analysis, email sequences, content calendars, and social media strategy.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/ai-prompts-for-marketing" },
};

const PREVIEW_PROMPTS = [
  {
    name: "Campaign Brief Generator",
    category: "Strategy",
    preview: "Generate a complete campaign brief: positioning statement, 3 key messages ranked by priority, channel recommendations with rationale, content calendar for week 1-2, KPIs with targets, and budget allocation by channel. Ready to share with your team.",
  },
  {
    name: "Email Nurture Sequence",
    category: "Email",
    preview: "A full 5-email sequence with subject lines, preview text, body copy, and CTAs. Each email builds on the last: value, credibility, objection handling, urgency, direct ask. Send timing included.",
  },
  {
    name: "Brand Voice Guide",
    category: "Strategy",
    preview: "Voice description, tone spectrum by context, 10 do/don't rules, word list (use vs never use), and a sample rewrite from generic corporate to your voice. Specific enough for a new hire to match your brand on day one.",
  },
  {
    name: "A/B Test Hypothesis Generator",
    category: "Conversion",
    preview: "5 structured test hypotheses: what to change (specific), what to measure, estimated impact, how long to run, and priority ranking. Each follows the format: 'If we [change], then [metric] will [improve] because [reason].'",
  },
];

export default function AIMarketingPromptsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Marketing Prompts</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        AI Prompts for Marketing: 15 Ready-to-Use Templates
      </h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By Wayne Cederholm</p>
      <p className="mt-4 text-lg text-zinc-500">
        Copy-paste prompts for campaign planning, content strategy, email sequences,
        social media, and competitive analysis. Built for marketing professionals
        who want better AI output without learning to code.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-bold">What is in the Marketing Prompt Pack?</h2>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          15 detailed prompts that produce marketing work you would actually use.
          Campaign briefs, content calendars, email sequences, landing page copy,
          ad variations, PR pitches, and more. Each prompt includes specific
          instructions so the AI understands marketing context, not just keywords. Browse the full <Link href="/build/prompts" className="text-emerald-600 hover:text-emerald-700">prompt library</Link> for templates across every department.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {["Strategy & Planning (3)", "Content Creation (3)", "Email Campaigns (1)", "Social Media (2)", "Conversion & Ads (3)", "Outreach & PR (1)", "Analytics & Audits (2)"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-emerald-600">&#10003;</span>{item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Preview: 4 of 15 prompts</h2>
        <div className="mt-6 space-y-4">
          {PREVIEW_PROMPTS.map((p) => (
            <div key={p.name} className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">{p.category}</span>
                <h3 className="font-semibold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.preview}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Once you have your prompts dialed in, automate the repetitive parts. Our <Link href="/learn/ai-workflow-examples" className="text-emerald-600 hover:text-emerald-700">AI workflow examples</Link> show you how to turn a single blog post into a week of content distribution without touching it.</p>
      </section>

      <section className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Get all 15 marketing prompts</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          Free download. Enter your email and get the complete Marketing Prompt
          Pack with all 15 copy-paste templates.
        </p>
        <Link
          href="/products/marketing-prompt-pack"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Get the Marketing Prompt Pack (Free)
        </Link>
      </section>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "Can AI write marketing copy that sounds human?", answer: "Yes, but you need to give it your brand voice. The Brand Voice Guide prompt generates a style guide the AI can follow. Without voice guidance, AI defaults to generic corporate language. With it, the output matches your tone. Always edit the final output." },
            { question: "Which AI tool is best for marketing?", answer: "Claude is strongest for long-form content, strategy docs, and nuanced writing. ChatGPT has more integrations for workflow automation. Perplexity is best for competitive research because it cites sources. For most marketing teams, Claude or ChatGPT plus Perplexity covers everything." },
            { question: "How do I use AI without making my content sound generic?", answer: "Three things: give the AI your brand voice guide, provide specific examples of content you like, and always edit the output with your knowledge of your audience. Generic AI output comes from generic prompts. The more specific context you provide, the more distinctive the output. Combining prompts with AI workflows can automate your entire content repurposing pipeline." },
          ]} />
        </div>
      </div>
    </article>
  );
}
