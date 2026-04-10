"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const PROMPTS = [
  { name: "Pre-Call Research Brief", category: "Discovery", prompt: `I have a discovery call with [prospect name] at [company name]. They are the [title] at a [company size] company in [industry].

Research this company and generate a one-page brief including:
1. What the company does (2 sentences max)
2. Recent news or developments (last 6 months)
3. Likely pain points based on their industry and size
4. 3 specific questions I should ask that show I did my homework
5. One insight about their industry I can reference to build credibility

Keep it concise. I need to review this in 5 minutes before the call.` },
  { name: "Discovery Question Generator", category: "Discovery", prompt: `I sell [product/service] to [target audience]. I have a discovery call with a [prospect title] at a [company type].

Generate 8 open-ended discovery questions that:
- Start broad and get specific
- Uncover pain points without leading the witness
- Reveal their current process and where it breaks down
- Surface what they have already tried
- End with "what would success look like for you?"

For the 3 most important questions, include a follow-up probe I can use if their answer is vague.` },
  { name: "Proposal Executive Summary", category: "Proposals", prompt: `Write an executive summary for a sales proposal.

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
- No buzzwords. No "synergy." No "leverage."` },
  { name: "Follow-Up After No Response (3 emails)", category: "Follow-ups", prompt: `Write 3 follow-up emails for a prospect who hasn't responded in [X days].

Context: We discussed [topic] and they expressed interest in [specific thing]. My last email was [describe what you sent].

Email 1 (Day 3): Add value. Share a relevant insight, article, or case study related to their challenge. Brief.
Email 2 (Day 7): Direct and short. Acknowledge they are busy. One specific question to re-engage.
Email 3 (Day 14): Breakup email. Leave the door open. No guilt. Professional.

Each email: under 80 words, mobile-friendly, one clear CTA. No "just checking in."` },
  { name: "Objection Response Prep", category: "Objections", prompt: `I sell [product/service] at [price point] to [audience].

The most common objections I hear are:
1. [objection 1]
2. [objection 2]
3. [objection 3]

For each objection, give me:
- A 1-sentence acknowledgment (show I heard them, not dismissing)
- The real concern behind the objection (what they are actually worried about)
- A response that addresses the real concern with evidence or a reframe
- A question I can ask to move past the objection

Keep responses conversational. These are for a live call, not a deck.` },
  { name: "Cold Outreach Sequence (3 emails)", category: "Outreach", prompt: `Write a 3-email cold outreach sequence for [product/service] targeting [title/role] at [company type].

My value proposition: [one sentence on what you solve]
Proof point: [one stat, case study, or credibility marker]

Email 1: Pattern interrupt. Do NOT open with "I hope this email finds you well." Start with an observation about their company, industry, or role. Lead to curiosity about the problem we solve.
Email 2: Social proof. Short case study or specific result from a similar company. End with a question.
Email 3: Direct ask. 2 sentences max. Suggest a specific 15-minute call with a reason why it is worth their time.

Subject lines: under 40 characters. No clickbait. Professional.` },
  { name: "Deal Risk Analysis", category: "Pipeline", prompt: `Analyze this deal and tell me what I am missing.

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
5. One specific action I should take this week to move this forward.` },
  { name: "CRM Meeting Summary", category: "Pipeline", prompt: `Here are my rough notes from a sales call:

[paste your notes]

Generate a CRM-ready meeting summary:
1. Summary (3 sentences max — what was discussed and the outcome)
2. Key pain points mentioned (bulleted)
3. Budget/timeline/authority signals (anything they said about decision process)
4. Objections or concerns raised
5. Agreed next steps with dates
6. Risk flags (anything that could stall the deal)

Format for pasting directly into [Salesforce/HubSpot/your CRM].` },
  { name: "Competitive Battle Card", category: "Strategy", prompt: `Create a competitive battle card for my sales team.

Our product: [name and one-line description]
Competitor: [name and one-line description]

Include:
1. Where we win (3 specific advantages with proof points)
2. Where they win (be honest — what do they do better?)
3. Their likely pitch against us (what will their rep say?)
4. Our counter for each of their attacks
5. Discovery questions that expose their weaknesses
6. One-liner we can use in a competitive deal: "The difference between us and [competitor] is..."

Be honest about weaknesses. My reps need to trust this card.` },
  { name: "Post-Demo Follow-Up", category: "Follow-ups", prompt: `Write a follow-up email after a product demo.

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
- Not sound like a template` },
  { name: "QBR Presentation Outline", category: "Strategy", prompt: `Create a quarterly business review outline for a client meeting.

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

Keep the tone of a trusted partner, not a vendor defending their contract.` },
  { name: "Win/Loss Analysis", category: "Strategy", prompt: `Analyze this closed deal and extract lessons.

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
5. Is this an isolated case or a pattern we should watch?` },
  { name: "Pricing Negotiation Prep", category: "Objections", prompt: `Help me prepare for a pricing negotiation.

Our price: [amount]
Their budget: [what they told us, or "unknown"]
Competition: [who else they are considering and their likely price]
Our strongest value differentiator: [what makes us worth the price]
Relationship leverage: [how much they want to work with us specifically]

Generate:
1. My opening position (what to say when they push back on price)
2. 3 concessions I can offer that cost us less than a discount (extended terms, added services, phased rollout)
3. My walk-away point and how to communicate it without burning the relationship
4. If they ask for a discount: the response framework (acknowledge, reframe value, offer alternative)
5. One question I can ask that shifts the conversation from price to value` },
  { name: "Sales Email for Warm Referral", category: "Outreach", prompt: `Write an email to a prospect who was referred by [referrer name].

Referrer: [name, their relationship to the prospect]
Prospect: [name, title, company]
What the referrer said: [context — why they thought this prospect should talk to us]
Our product/service: [one sentence]

Rules:
- Mention the referrer in the first sentence
- Keep it under 100 words
- Don't sell in this email — just get the meeting
- Suggest a specific time (not "let me know when you're free")
- Tone: warm, professional, not presumptuous
- The referrer's name does the heavy lifting. Don't oversell.` },
  { name: "End-of-Quarter Push Email", category: "Outreach", prompt: `Write an email to a prospect who has been in the pipeline for [X weeks/months] and we need to close before end of quarter.

Context: [what stage they are at, what is holding them up]
Incentive available: [discount, extended trial, added service, or none]

Rules:
- Do NOT sound desperate or salesy
- Create urgency through value, not artificial deadlines
- If there is a real incentive, mention it once — don't belabor it
- Acknowledge the delay respectfully
- Make the path to "yes" feel easy (reduce friction)
- Under 120 words
- End with one specific question, not a generic CTA` },
];

function downloadPack() {
  const lines: string[] = [
    "# Sales Prompt Pack — 15 Ready-to-Use Templates",
    "## By Wayne Cederholm — MrPrompts.ai",
    "## https://mrprompts.ai/products/sales-prompt-pack\n",
    "Prompts for every stage of the sales cycle.",
    "Copy any prompt, paste into Claude/ChatGPT, replace the [brackets].\n",
    "---\n",
  ];
  for (const p of PROMPTS) {
    lines.push(`## ${p.name}`);
    lines.push(`*Category: ${p.category}*\n`);
    lines.push("```");
    lines.push(p.prompt);
    lines.push("```\n");
    lines.push("---\n");
  }
  lines.push("\nMore prompts: https://mrprompts.ai/build/prompts");
  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Sales-Prompt-Pack-MrPrompts.md";
  a.click();
  URL.revokeObjectURL(url);
}

export default function SalesPromptPackPage() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("sales-prompt-pack-unlocked") === "true") setUnlocked(true);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setError("Enter a valid email."); return; }
    setLoading(true);
    try {
      await fetch("/api/download-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, guide: "sales-prompt-pack" }),
      });
      setUnlocked(true);
      setSent(true);
      localStorage.setItem("sales-prompt-pack-unlocked", "true");
    } catch { setError("Something went wrong."); }
    setLoading(false);
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/products" className="text-sm text-emerald-600 hover:text-emerald-700">&larr; All products</Link>

      <div className="mt-6">
        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">Prompts</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Sales Prompt Pack</h1>
        <p className="mt-2 text-sm text-zinc-400">15 prompts · By Wayne Cederholm · Free</p>
        <p className="mt-4 text-lg text-zinc-500">
          15 copy-paste prompts for every stage of the sales cycle. Discovery, proposals, follow-ups, objections, outreach, pipeline management, and strategy. Built by someone who actually sells, not someone who writes about selling.
        </p>
      </div>

      {!unlocked ? (
        <div className="mt-10 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h2 className="text-xl font-bold">Get the full Sales Prompt Pack</h2>
          <p className="mt-2 text-sm text-zinc-500">Enter your email to unlock all 15 prompts and download the complete pack.</p>
          <div className="mt-6 space-y-2">
            {["Discovery & Research (2 prompts)", "Proposals (1)", "Follow-ups (3)", "Objection Handling (2)", "Cold & Warm Outreach (3)", "Pipeline & CRM (2)", "Strategy & Analysis (2)"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-emerald-600">&#10003;</span>{item}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900" />
            <button type="submit" disabled={loading} className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50">
              {loading ? "Sending..." : "Get the Pack (Free)"}
            </button>
          </form>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <p className="mt-3 text-xs text-zinc-400">Free. No spam. Unsubscribe anytime.</p>
        </div>
      ) : (
        <>
          {sent && (
            <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
              <p className="font-semibold text-emerald-800 dark:text-emerald-400">You're in! Check your email for a link.</p>
            </div>
          )}

          <div className="mt-8">
            <button onClick={downloadPack} className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Download Sales Prompt Pack (.md)
            </button>
          </div>

          <div className="mt-10 space-y-8">
            {PROMPTS.map((p, i) => (
              <section key={i}>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">{p.category}</span>
                  <h2 className="text-lg font-bold">{p.name}</h2>
                </div>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-lg bg-zinc-900 p-5 text-xs leading-relaxed text-zinc-300">{p.prompt}</pre>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-lg font-bold">Want prompts for other roles?</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/products/marketing-prompt-pack" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">Marketing Prompt Pack &rarr;</Link>
              <Link href="/build/prompts" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">Build a custom library &rarr;</Link>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
