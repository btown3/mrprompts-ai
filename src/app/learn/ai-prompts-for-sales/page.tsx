import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "AI Prompts for Sales — 15 Ready-to-Use Templates",
  description:
    "Copy-paste AI prompt templates for sales professionals. Discovery calls, proposals, follow-ups, objection handling, and pipeline analysis. No coding required.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/ai-prompts-for-sales" },
};

const PROMPTS = [
  {
    name: "Pre-Call Research Brief",
    category: "Discovery",
    prompt: `I have a discovery call with [prospect name] at [company name]. They are the [title] at a [company size] company in [industry].

Research this company and generate a one-page brief including:
1. What the company does (2 sentences max)
2. Recent news or developments (last 6 months)
3. Likely pain points based on their industry and size
4. 3 specific questions I should ask that show I did my homework
5. One insight about their industry I can reference to build credibility

Keep it concise. I need to review this in 5 minutes before the call.`,
  },
  {
    name: "Discovery Question Generator",
    category: "Discovery",
    prompt: `I sell [product/service] to [target audience]. I have a discovery call with a [prospect title] at a [company type].

Generate 8 open-ended discovery questions that:
- Start broad and get specific
- Uncover pain points without leading the witness
- Reveal their current process and where it breaks down
- Surface what they have already tried
- End with "what would success look like for you?"

For the 3 most important questions, include a follow-up probe I can use if their answer is vague.`,
  },
  {
    name: "Proposal Executive Summary",
    category: "Proposals",
    prompt: `Write an executive summary for a sales proposal.

Client: [company name]
Their challenge: [describe the problem they told you about]
Our solution: [describe your product/service and how it addresses their specific challenge]
Investment: [price or price range]
Timeline: [implementation timeline]

Rules:
- Under 250 words
- Lead with THEIR problem, not our product
- Include one quantified benefit (time saved, revenue impact, cost reduction)
- End with a clear next step
- Tone: confident but not pushy
- No buzzwords. No "synergy." No "leverage."`,
  },
  {
    name: "Follow-Up After No Response",
    category: "Follow-ups",
    prompt: `Write 3 follow-up emails for a prospect who hasn't responded in [X days].

Context: We discussed [topic] and they expressed interest in [specific thing]. My last email was [describe what you sent].

Email 1 (Day 3): Add value. Share a relevant insight, article, or case study related to their challenge. Brief.
Email 2 (Day 7): Direct and short. Acknowledge they are busy. One specific question to re-engage.
Email 3 (Day 14): Breakup email. Leave the door open. No guilt. Professional.

Each email: under 80 words, mobile-friendly, one clear CTA. No "just checking in."`,
  },
  {
    name: "Objection Response Prep",
    category: "Objection Handling",
    prompt: `I sell [product/service] at [price point] to [audience].

The most common objections I hear are:
1. [objection 1]
2. [objection 2]
3. [objection 3]

For each objection, give me:
- A 1-sentence acknowledgment (show I heard them, not dismissing)
- The real concern behind the objection (what they are actually worried about)
- A response that addresses the real concern with evidence or a reframe
- A question I can ask to move past the objection

Keep responses conversational. These are for a live call, not a deck.`,
  },
  {
    name: "Cold Outreach Sequence",
    category: "Outreach",
    prompt: `Write a 3-email cold outreach sequence for [product/service] targeting [title/role] at [company type].

My value proposition: [one sentence on what you solve]
Proof point: [one stat, case study, or credibility marker]

Email 1: Pattern interrupt. Do NOT open with "I hope this email finds you well." Start with an observation about their company, industry, or role. Lead to curiosity about the problem we solve.
Email 2: Social proof. Short case study or specific result from a similar company. End with a question.
Email 3: Direct ask. 2 sentences max. Suggest a specific 15-minute call with a reason why it is worth their time.

Subject lines: under 40 characters. No clickbait. Professional.`,
  },
  {
    name: "Deal Analysis",
    category: "Pipeline",
    prompt: `Analyze this deal and tell me what I am missing.

Prospect: [company, size, industry]
Contact: [name, title, their role in the decision]
Stage: [current pipeline stage]
Deal size: [dollar amount]
Timeline: [when they said they want to decide]
Competition: [who else they are evaluating]
Last interaction: [what happened and when]
Next step: [what is scheduled or planned]

Evaluate:
1. Am I talking to the right person? If not, who else should I reach?
2. What is the biggest risk to this deal closing?
3. What information am I missing that I should get on the next call?
4. Is the timeline realistic based on what I have told you?
5. One specific action I should take this week to move this forward.`,
  },
  {
    name: "Meeting Summary for CRM",
    category: "Pipeline",
    prompt: `Here are my rough notes from a sales call:

[paste your notes]

Generate a CRM-ready meeting summary:
1. Summary (3 sentences max — what was discussed and the outcome)
2. Key pain points mentioned (bulleted)
3. Budget/timeline/authority signals (anything they said about decision process)
4. Objections or concerns raised
5. Agreed next steps with dates
6. Risk flags (anything that could stall the deal)

Format for pasting directly into [Salesforce/HubSpot/your CRM].`,
  },
  {
    name: "Competitive Battle Card",
    category: "Strategy",
    prompt: `Create a competitive battle card for my sales team.

Our product: [name and one-line description]
Competitor: [name and one-line description]

Include:
1. Where we win (3 specific advantages with proof points)
2. Where they win (be honest — what do they do better?)
3. Their likely pitch against us (what will their rep say?)
4. Our counter for each of their attacks
5. Discovery questions that expose their weaknesses
6. One-liner we can use in a competitive deal: "The difference between us and [competitor] is..."

Be honest about weaknesses. My reps need to trust this card.`,
  },
  {
    name: "QBR Presentation Outline",
    category: "Strategy",
    prompt: `Create a quarterly business review outline for a client meeting.

Client: [company name]
Relationship length: [how long they have been a customer]
Their goals from last QBR: [list them]
Key metrics this quarter: [list available data]
Issues or support tickets: [any notable problems]

Structure:
1. Executive summary (what happened this quarter, 3 sentences)
2. Results against their stated goals (metric by metric)
3. Top 3 wins to celebrate together
4. Top 2 challenges and what we are doing about them
5. Recommendations for next quarter (tied to their business goals, not just our product roadmap)
6. Open questions for discussion

Keep the tone of a trusted partner, not a vendor defending their contract.`,
  },
  {
    name: "Email After a Demo",
    category: "Follow-ups",
    prompt: `Write a follow-up email after a product demo.

Prospect: [name], [title] at [company]
What we showed: [features/use cases demonstrated]
Their biggest reaction: [what excited them most or what questions they asked]
Agreed next step: [what was discussed]
Other stakeholders: [anyone else they mentioned needing to involve]

The email should:
- Reference something specific from the demo (not generic)
- Reinforce the value tied to their specific challenge
- Make the next step easy (include a calendar link or specific time)
- Be under 150 words
- Not sound like a template`,
  },
  {
    name: "Win/Loss Analysis",
    category: "Strategy",
    prompt: `Analyze this closed deal and extract lessons.

Outcome: [Won / Lost]
Prospect: [company, size, industry]
Deal size: [amount]
Sales cycle length: [how long from first touch to close]
Competition: [who else they considered]
Decision maker: [who made the final call]
Key moments: [list 2-3 turning points in the deal]
Why they chose us / didn't choose us: [what they told you]

Generate:
1. What worked (if won) or what failed (if lost) — be specific
2. At what stage did we gain or lose momentum?
3. What should we repeat in similar deals?
4. What should we do differently?
5. Is this an isolated case or a pattern we should watch?`,
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

      <nav className="mt-8 rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
        <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">In this guide</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {["Discovery", "Proposals", "Follow-ups", "Objection Handling", "Outreach", "Pipeline", "Strategy"].map((cat) => (
            <span key={cat} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {cat}
            </span>
          ))}
        </div>
      </nav>

      <div className="mt-12 space-y-10">
        {PROMPTS.map((p, i) => (
          <section key={i} id={p.name.toLowerCase().replace(/\s+/g, "-")}>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                {p.category}
              </span>
              <h2 className="text-lg font-bold">{p.name}</h2>
            </div>
            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-lg bg-zinc-900 p-5 text-sm leading-relaxed text-zinc-300">
              {p.prompt}
            </pre>
          </section>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ
            items={[
              {
                question: "How do I customize these prompts for my product?",
                answer: "Replace the bracketed placeholders with your specific details. The more context you provide about your product, prospect, and situation, the better the output. Start with the template, run it once, then adjust the prompt based on what the AI gets right and wrong.",
              },
              {
                question: "Which AI tool is best for sales?",
                answer: "Claude and ChatGPT both work well for sales prompts. Claude tends to produce more nuanced, longer-form output (better for proposals and analysis). ChatGPT is faster for quick tasks. For prospect research, use Perplexity — it searches the web and cites sources.",
              },
              {
                question: "Will my prospect know I used AI?",
                answer: "Not if you edit the output. AI produces solid first drafts, but the best results come from adding your personal knowledge, specific details from your conversations, and your natural voice. The prompt gets you 80% there. Your editing makes it 100% yours.",
              },
            ]}
          />
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold">Want prompts for other roles?</h2>
        <p className="mt-2 text-sm text-zinc-500">
          The full Prompt Library has 20+ templates across marketing, operations,
          finance, HR, and consulting.
        </p>
        <Link
          href="/guides/prompt-library-starter"
          className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Get the full Prompt Library &rarr;
        </Link>
      </div>
    </article>
  );
}
