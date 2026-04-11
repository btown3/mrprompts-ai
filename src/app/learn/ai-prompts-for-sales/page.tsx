import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "AI Prompts for Sales — 15 Ready-to-Use Templates",
  description:
    "Copy-paste AI prompt templates for sales professionals. Discovery calls, proposals, follow-ups, objection handling, and pipeline analysis. No coding required.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/ai-prompts-for-sales" },
};

const PREVIEW_PROMPTS = [
  {
    name: "Pre-Call Research Brief",
    category: "Discovery",
    preview: "Generate a one-page brief before any discovery call: company overview, recent news, likely pain points, smart questions to ask, and one industry insight for credibility. Takes 5 minutes to review instead of 30 minutes to research.",
  },
  {
    name: "Objection Response Prep",
    category: "Objections",
    preview: "For each objection you commonly hear, get: a 1-sentence acknowledgment, the real concern behind it, a response with evidence, and a question to move past it. Conversational tone for live calls, not a script.",
  },
  {
    name: "Deal Risk Analysis",
    category: "Pipeline",
    preview: "Paste your deal details and get an honest evaluation: are you talking to the right person, what is the biggest risk, what information are you missing, is the timeline realistic, and one specific action for this week.",
  },
  {
    name: "Competitive Battle Card",
    category: "Strategy",
    preview: "Where you win, where they win (honestly), their likely pitch against you, your counter for each attack, discovery questions that expose their weaknesses, and a one-liner for competitive deals.",
  },
];

export default function AISalesPromptsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Sales Prompts
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        AI Prompts for Sales: 15 Ready-to-Use Templates
      </h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By Wayne Cederholm</p>
      <p className="mt-4 text-lg text-zinc-500">
        Copy-paste prompts for every stage of the sales cycle. Discovery calls,
        proposals, follow-ups, objection handling, competitive analysis, and
        pipeline management. No coding. No jargon. Just prompts that work.
      </p>

      {/* What's in the pack */}
      <section className="mt-10">
        <h2 className="text-xl font-bold">What is in the Sales Prompt Pack?</h2>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          15 detailed, role-specific prompts covering every stage of the sales
          cycle. Each prompt includes full context, specific instructions for
          the AI, and formatting rules so the output is immediately usable.
          Not generic "write me an email" prompts. These are structured
          frameworks that produce work you would actually send. Pair them with a <Link href="/learn/sales-knowledge-base" className="text-emerald-600 hover:text-emerald-700">sales knowledge base</Link> and your AI has persistent context about your deals, competitors, and objections every time you run a prompt.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {["Discovery & Research (2)", "Proposals (1)", "Follow-ups (3)", "Objection Handling (2)", "Cold & Warm Outreach (3)", "Pipeline & CRM (2)", "Strategy & Analysis (2)"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-emerald-600">&#10003;</span>{item}
            </div>
          ))}
        </div>
      </section>

      {/* Preview */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Preview: 4 of 15 prompts</h2>
        <div className="mt-6 space-y-4">
          {PREVIEW_PROMPTS.map((p) => (
            <div key={p.name} className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">{p.category}</span>
                <h3 className="font-semibold">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.preview}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 rounded-xl bg-zinc-900 p-8 text-center dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">Get all 15 sales prompts</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          Free download. Enter your email and get the complete Sales Prompt
          Pack with all 15 copy-paste templates. Or explore the full <Link href="/build/prompts" className="text-emerald-400 hover:text-emerald-300">prompt library</Link> for templates across every role.
        </p>
        <Link
          href="/products/sales-prompt-pack"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Get the Sales Prompt Pack (Free)
        </Link>
      </section>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "How do I customize these prompts for my product?", answer: "Replace the bracketed placeholders with your specific details. The more context you provide about your product, prospect, and situation, the better the output. Start with the template, run it once, then adjust the prompt based on what the AI gets right and wrong." },
            { question: "Which AI tool is best for sales?", answer: "Claude and ChatGPT both work well for sales prompts. Claude tends to produce more nuanced, longer-form output (better for proposals and analysis). ChatGPT is faster for quick tasks. For prospect research, use Perplexity — it searches the web and cites sources." },
            { question: "Will my prospect know I used AI?", answer: "Not if you edit the output. AI produces solid first drafts, but the best results come from adding your personal knowledge, specific details from your conversations, and your natural voice. The prompt gets you 80% there. Your editing makes it 100% yours." },
          ]} />
        </div>
      </div>

      <PageFooterCTA />
    </article>
  );
}
