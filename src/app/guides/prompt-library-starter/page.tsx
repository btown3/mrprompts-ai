"use client";

import Link from "next/link";
import { AuthGate } from "@/app/components/AuthGate";

const PROMPTS = [
  {
    role: "Marketing",
    prompts: [
      {
        name: "Campaign Brief Generator",
        prompt: `You are a senior marketing strategist. I need a campaign brief for [product/service].

Target audience: [describe audience]
Campaign goal: [awareness/leads/conversions]
Budget range: [range]
Timeline: [dates]

Generate a complete brief including: positioning statement, key messages (3), channel recommendations with rationale, content calendar outline, and KPIs to track. Format as a structured document I can share with my team.`,
      },
      {
        name: "Competitor Analysis",
        prompt: `Analyze the competitive positioning of [my company] against [competitor 1], [competitor 2], and [competitor 3].

For each competitor, evaluate:
- Core value proposition
- Target audience overlap with ours
- Pricing strategy
- Content/messaging approach
- Strengths we should learn from
- Weaknesses we can exploit

End with 3 specific recommendations for how we should differentiate.`,
      },
      {
        name: "Email Sequence Writer",
        prompt: `Write a [3/5/7]-email nurture sequence for [product/service].

Audience: [describe]
Goal: Move them from [awareness] to [purchase/signup]
Tone: [professional/conversational/bold]

For each email provide: subject line (under 50 chars), preview text, body copy, and CTA. Each email should build on the last. Include send timing recommendations.`,
      },
    ],
  },
  {
    role: "Sales",
    prompts: [
      {
        name: "Discovery Call Prep",
        prompt: `I have a discovery call with [prospect name] at [company]. They are [role/title] at a [company size] company in [industry].

Based on this context, generate:
1. Five open-ended discovery questions specific to their likely pain points
2. Three ways our [product/service] maps to companies like theirs
3. Two potential objections they might raise and how to handle them
4. A suggested call structure with time allocation
5. One insight about their industry I can reference to build credibility`,
      },
      {
        name: "Proposal Executive Summary",
        prompt: `Write an executive summary for a proposal to [company].

Their challenge: [describe problem]
Our solution: [describe offering]
Investment: [price range]
Timeline: [implementation timeline]

Keep it under 300 words. Lead with their problem, not our product. Include one quantified benefit. End with a clear next step. Tone should be confident but not pushy.`,
      },
      {
        name: "Follow-Up After No Response",
        prompt: `Write 3 different follow-up emails for a prospect who hasn't responded in [X days].

Context: We discussed [topic] and they seemed interested in [specific thing].

Email 1: Gentle check-in with added value (share a relevant insight)
Email 2: Direct and brief, acknowledge they're busy
Email 3: Breakup email that leaves the door open

Each should be under 100 words. No guilt-tripping. Professional but human.`,
      },
    ],
  },
  {
    role: "Operations",
    prompts: [
      {
        name: "Process Documentation",
        prompt: `Document the following process: [process name]

I'll describe the steps and you format them into a clear SOP that includes:
- Process name and purpose
- Who is responsible for each step
- Required tools/systems
- Step-by-step instructions with decision points
- Common errors and how to avoid them
- How to measure if the process is working

Format for someone doing this for the first time.`,
      },
      {
        name: "Meeting Summary and Actions",
        prompt: `Here are my rough notes from a meeting:

[paste notes]

Generate:
1. A 3-sentence summary of what was discussed
2. Key decisions made (bulleted)
3. Action items with owner and due date (table format)
4. Open questions that still need answers
5. Suggested follow-up date

Keep it concise enough to paste into Slack.`,
      },
    ],
  },
  {
    role: "Finance",
    prompts: [
      {
        name: "Budget Variance Analysis",
        prompt: `Analyze this budget variance data:

[paste budget vs actual figures]

For each line item with >10% variance, explain:
- What likely caused the variance
- Whether it's a one-time or recurring issue
- Recommended action (adjust budget, investigate, or accept)

End with a 3-sentence executive summary I can include in the monthly report. Use plain language, not accounting jargon.`,
      },
      {
        name: "Vendor Comparison",
        prompt: `Compare these [X] vendors for [service/product]:

[list vendors and what you know about each]

Create a comparison matrix evaluating:
- Pricing (score 1-5)
- Features relevant to our needs
- Contract flexibility
- Customer support reputation
- Integration with our existing tools
- Risk factors

End with a recommendation and rationale.`,
      },
    ],
  },
  {
    role: "HR / People",
    prompts: [
      {
        name: "Job Description Builder",
        prompt: `Write a job description for [role title] at [company].

Team: [which team/department]
Reports to: [title]
Level: [junior/mid/senior/lead]
Key responsibilities: [list 3-5 main duties]
Must-have skills: [list]
Nice-to-have skills: [list]

Write it in a tone that's [professional/casual/startup-y]. Include a section on what makes this role unique. Avoid cliches like "rock star" or "fast-paced environment." Keep it under 500 words.`,
      },
      {
        name: "Performance Review Framework",
        prompt: `Create a performance review framework for [role/team].

Evaluate across these dimensions:
1. Core job competencies
2. Collaboration and communication
3. Growth and learning
4. Impact and results

For each dimension, provide:
- What "exceeds expectations" looks like
- What "meets expectations" looks like
- What "needs improvement" looks like
- Two specific questions to ask in the review conversation

Format as a document the manager can fill in.`,
      },
    ],
  },
  {
    role: "Consulting",
    prompts: [
      {
        name: "Client Deliverable Structure",
        prompt: `I need to create a [type of deliverable: strategy deck / audit report / recommendation memo] for a client in [industry].

The engagement is about: [describe scope]
Key findings so far: [list 3-5 findings]
Client audience: [who will read this]

Generate an outline including:
- Executive summary structure
- Section headers with what goes in each
- Where to place data/evidence
- Recommendation format (prioritized, categorized)
- Next steps section

Make it look like it came from a top-tier consulting firm.`,
      },
      {
        name: "Stakeholder Interview Questions",
        prompt: `Generate interview questions for a [type of project] at [company/industry].

I'm interviewing [role/title] to understand [what you need to learn].

Create 10 questions that:
- Start broad and get specific
- Uncover pain points without leading
- Reveal organizational dynamics
- Surface what's been tried before
- End with "what would success look like"

Include follow-up probes for the 3 most important questions.`,
      },
    ],
  },
];

function downloadPrompts() {
  const lines: string[] = [
    "# Prompt Library Starter Kit",
    "## By Wayne Cederholm — MrPrompts.ai\n",
    "20+ ready-to-use prompt templates organized by role.\n",
    "---\n",
  ];

  for (const cat of PROMPTS) {
    lines.push(`# ${cat.role}\n`);
    for (const p of cat.prompts) {
      lines.push(`## ${p.name}\n`);
      lines.push("```");
      lines.push(p.prompt);
      lines.push("```\n");
    }
    lines.push("---\n");
  }

  lines.push("Learn more at https://mrprompts.ai/build/prompts");

  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Prompt-Library-Starter-Kit-MrPrompts.md";
  a.click();
  URL.revokeObjectURL(url);
}

export default function PromptLibraryStarterPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            Free Guide
          </span>
          <span className="text-xs text-zinc-400">20+ templates</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Prompt Library Starter Kit
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          20+ ready-to-use prompt templates organized by role. Marketing, sales,
          operations, finance, HR, and consulting. Copy, customize, build.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-xl font-bold">Get 20+ prompt templates by role</h2>
        <p className="mt-2 text-sm text-zinc-500">Sign in to unlock the full library and download it as a file you can keep.</p>
        <div className="mt-6 space-y-2">
          {[
            "Marketing: campaigns, competitor analysis, email sequences",
            "Sales: discovery calls, proposals, follow-ups",
            "Operations: SOPs, meeting summaries",
            "Finance: variance analysis, vendor comparisons",
            "HR: job descriptions, performance reviews",
            "Consulting: deliverables, stakeholder interviews",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-emerald-600">&#10003;</span>{item}
            </div>
          ))}
        </div>
      </div>

      <AuthGate>
        {/* Full content */}
        <div className="space-y-12">
          {PROMPTS.map((cat) => (
            <section key={cat.role}>
              <h2 className="text-xl font-bold">{cat.role}</h2>
              <div className="mt-4 space-y-6">
                {cat.prompts.map((p) => (
                  <div
                    key={p.name}
                    className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800"
                  >
                    <h3 className="font-semibold">{p.name}</h3>
                    <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-300">
                      {p.prompt}
                    </pre>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={downloadPrompts}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Download Full Library (.md)
          </button>
        </div>

        <div className="mt-12 flex justify-between text-sm">
          <Link href="/guides" className="text-emerald-600 hover:text-emerald-700">
            &larr; All guides
          </Link>
          <Link href="/build/prompts" className="text-emerald-600 hover:text-emerald-700">
            Build Track: Prompts &rarr;
          </Link>
        </div>
      </AuthGate>
    </article>
  );
}
