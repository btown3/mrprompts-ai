"use client";

import Link from "next/link";
import { AuthGate } from "@/app/components/AuthGate";

const PHASES = [
  {
    phase: "Phase 1: Assessment (Week 1-2)",
    title: "Where are you now?",
    sections: [
      {
        heading: "Current State Audit",
        content: `Before introducing AI, you need an honest picture of where your organization stands today.

Map these for each department:
- What repetitive tasks consume the most time?
- Where do bottlenecks consistently occur?
- What decisions are made with incomplete information?
- What processes require manual data entry or transfer?

Create a simple spreadsheet: Department | Task | Time Spent Weekly | Automation Potential (High/Medium/Low)

The tasks rated "High" automation potential with the most time spent are your first AI targets.`,
      },
      {
        heading: "Team Readiness Survey",
        content: `Ask every team lead these five questions (anonymously if needed):

1. How comfortable are you using AI tools in your daily work? (1-5)
2. Have you used any AI tools in the past 30 days? Which ones?
3. What's the biggest barrier to using AI in your department?
4. If AI could handle one task for your team, what would it be?
5. What concerns do you have about AI in the workplace?

Score the results. Teams averaging 3+ are ready to start. Teams below 3 need foundational training first (see Phase 2).`,
      },
    ],
  },
  {
    phase: "Phase 2: Foundation (Week 3-4)",
    title: "Build the base",
    sections: [
      {
        heading: "AI Literacy Training",
        content: `Before anyone builds anything, everyone needs a shared vocabulary. Run a 90-minute session covering:

- What AI can and cannot do (with examples from your industry)
- The difference between chatbots, assistants, and agents
- How to evaluate AI output (when to trust it, when to verify)
- Your organization's AI usage policy (create one if you don't have it)
- Live demo: solve a real problem from someone's team using AI

Record this session. New hires should watch it as part of onboarding.`,
      },
      {
        heading: "Select Your First Tools",
        content: `Don't give everyone access to everything. Start with one or two tools:

For most organizations, start with:
- Claude Teams or ChatGPT Enterprise (general assistant)
- One domain-specific tool relevant to your highest-impact department

Criteria for selecting tools:
- Does it have enterprise security and data privacy?
- Can you control access and monitor usage?
- Is the pricing predictable at your team size?
- Does it integrate with tools you already use?

Avoid: free-tier tools with unclear data policies, tools that require coding to set up, more than 2 tools in the first month.`,
      },
    ],
  },
  {
    phase: "Phase 3: Pilot (Week 5-8)",
    title: "Prove it works",
    sections: [
      {
        heading: "Choose Your Pilot Team",
        content: `Pick ONE team for the pilot. The ideal pilot team:

- Has a leader who scored 4+ on the readiness survey
- Has at least one high-automation-potential task identified
- Is visible enough that success will be noticed
- Is small enough (5-15 people) to manage closely

Do NOT pilot with: the most resistant team (save them for later), the IT team (too technical to prove the point), the entire company (too broad to measure).`,
      },
      {
        heading: "Define Success Metrics",
        content: `Before the pilot starts, agree on what success looks like:

Quantitative (pick 2-3):
- Time saved per week on target tasks (hours)
- Output volume increase (reports, emails, analyses)
- Error rate reduction
- Response time improvement

Qualitative (pick 1-2):
- Team satisfaction with AI tools (survey)
- Quality of AI-assisted output (manager assessment)
- Willingness to continue using AI after pilot

Set a baseline BEFORE the pilot starts. Measure the same things at week 4 and week 8.`,
      },
      {
        heading: "Weekly Check-ins",
        content: `Every week during the pilot, the team lead runs a 15-minute standup:

- What did you use AI for this week?
- What worked well?
- What didn't work or felt awkward?
- What do you wish the AI could do that it can't?

Document every answer. These become your case studies, training material, and the evidence you present to leadership.`,
      },
    ],
  },
  {
    phase: "Phase 4: Scale (Week 9-12)",
    title: "Expand what works",
    sections: [
      {
        heading: "Document and Package",
        content: `Take everything that worked in the pilot and turn it into repeatable playbooks:

- Which prompts/workflows delivered the most value? Write them down.
- What training did the pilot team need? Create a 1-hour version for other teams.
- What mistakes were made early on? Build them into an FAQ.
- What were the quantified results? Create a one-page summary.

This package is what you use to roll out to the next 2-3 teams.`,
      },
      {
        heading: "Rollout Plan",
        content: `Expand in waves, not all at once:

Wave 2 (Week 9-10): Add 2-3 teams that scored highest on readiness
Wave 3 (Week 11-12): Add remaining willing teams
Wave 4 (Month 4+): Address resistant teams with pilot success stories

For each new team:
- 1-hour training session using your packaged materials
- Assign a "champion" from the pilot team as their point of contact
- Same weekly check-in format
- Same success metrics, measured the same way`,
      },
      {
        heading: "Report to Leadership",
        content: `At the end of 90 days, present:

1. Executive summary: What we did, what we found (3 sentences)
2. Quantified results: Time saved, output improved, errors reduced
3. Team feedback: Direct quotes from participants
4. Cost analysis: Tool costs vs. time saved (calculate hourly value)
5. Recommended next steps: What to expand, what to invest in, what to stop
6. Risks and mitigations: What could go wrong as we scale, and how we'll handle it

Keep the deck under 10 slides. Lead with results, not process.`,
      },
    ],
  },
];

function downloadRoadmap() {
  const lines: string[] = [
    "# AI Adoption Roadmap: 90-Day Plan",
    "## By Wayne Cederholm — MrPrompts.ai\n",
    "A structured 90-day plan for rolling out AI to your organization.\n",
    "---\n",
  ];

  for (const phase of PHASES) {
    lines.push(`# ${phase.phase}`);
    lines.push(`*${phase.title}*\n`);
    for (const section of phase.sections) {
      lines.push(`## ${section.heading}\n`);
      lines.push(`${section.content}\n`);
    }
    lines.push("---\n");
  }

  lines.push("Learn more at https://mrprompts.ai/build/leadership");

  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "AI-Adoption-Roadmap-90-Day-MrPrompts.md";
  a.click();
  URL.revokeObjectURL(url);
}

export default function AIAdoptionRoadmapPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            Free Guide
          </span>
          <span className="text-xs text-zinc-400">90-day plan</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          AI Adoption Roadmap Template
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          A structured 90-day plan for rolling out AI to your organization.
          Assessment, foundation, pilot, scale. Ready to present to the board.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-xl font-bold">Get the complete 90-day AI adoption roadmap</h2>
        <p className="mt-2 text-sm text-zinc-500">Sign in to unlock the full plan with templates, survey questions, and a leadership presentation outline.</p>
        <div className="mt-6 space-y-2">
          {[
            "Phase 1: Current state audit + team readiness survey",
            "Phase 2: AI literacy training + tool selection criteria",
            "Phase 3: Pilot team selection + success metrics framework",
            "Phase 4: Rollout plan + leadership presentation template",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-emerald-600">&#10003;</span>{item}
            </div>
          ))}
        </div>
      </div>

      <AuthGate>
        <div className="space-y-12">
          {PHASES.map((phase) => (
            <section key={phase.phase}>
              <div className="mb-6">
                <h2 className="text-xl font-bold">{phase.phase}</h2>
                <p className="text-sm text-zinc-500">{phase.title}</p>
              </div>
              <div className="space-y-6">
                {phase.sections.map((section) => (
                  <div
                    key={section.heading}
                    className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800"
                  >
                    <h3 className="font-semibold">{section.heading}</h3>
                    <div className="mt-3 whitespace-pre-line text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={downloadRoadmap}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Download Full Roadmap (.md)
          </button>
        </div>

        <div className="mt-12 flex justify-between text-sm">
          <Link href="/guides" className="text-emerald-600 hover:text-emerald-700">
            &larr; All guides
          </Link>
          <Link href="/build/leadership" className="text-emerald-600 hover:text-emerald-700">
            Build Track: Leadership &rarr;
          </Link>
        </div>
      </AuthGate>
    </article>
  );
}
