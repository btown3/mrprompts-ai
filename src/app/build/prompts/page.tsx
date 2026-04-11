"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthGate } from "@/app/components/AuthGate";
import { useAuth } from "@/app/components/AuthProvider";
import { trackDownload } from "@/lib/track-download";

const ROLES = [
  {
    id: "marketing",
    label: "Marketing",
    description: "Campaign briefs, competitor analysis, email sequences, content calendars, landing pages, brand voice",
    prompts: [
      { name: "Campaign Brief Generator", prompt: `You are a senior marketing strategist. I need a campaign brief for [product/service].\n\nTarget audience: [describe]\nCampaign goal: [awareness/leads/conversions]\nBudget range: [range]\nTimeline: [dates]\n\nGenerate: positioning statement, 3 key messages, channel recommendations with rationale, content calendar outline for 2 weeks, KPIs with targets.` },
      { name: "Competitor Content Analysis", prompt: `Analyze the content strategy of [competitor] based on their website and social presence.\n\nEvaluate: topics they publish about, content formats, posting cadence, tone and style, engagement levels, gaps they are NOT covering.\n\nEnd with 3 content opportunities we should pursue that they are missing.` },
      { name: "Email Nurture Sequence", prompt: `Write a 5-email nurture sequence for [product/service].\n\nAudience: [describe]\nEntry point: [how they joined the list]\nGoal: Move from [awareness] to [purchase]\nTone: [professional/conversational]\n\nFor each email: subject line (<50 chars), preview text, body (<200 words), CTA, send timing. Each email builds on the last.` },
      { name: "Social Media Calendar", prompt: `Create a 2-week social media content calendar for [brand].\n\nPlatforms: [list]\nPosting frequency: [X/week]\nContent pillars: [3-4 themes]\nGoal: [awareness/engagement/traffic]\n\nFor each post: platform, type, copy, visual direction, hashtags, best time. Mix: 60% educational, 30% entertaining, 10% promotional.` },
      { name: "Landing Page Copy", prompt: `Write landing page copy for [offer].\n\nAudience: [who]\nPain point: [problem]\nOffer: [what they get]\nPrice: [if applicable]\n\nStructure: headline (<10 words), subheadline, problem section, solution, 3 benefits, social proof block, FAQ (3 objections), CTA.` },
      { name: "Brand Voice Guide", prompt: `Create a brand voice guide for [brand].\n\nIndustry: [what]\nAudience: [who]\nPersonality: [3-5 adjectives]\nCompetitors to differ from: [who]\n\nGenerate: voice description, tone spectrum by context, 10 do/don't rules, word list (use/never use), sample paragraph rewrite.` },
    ],
  },
  {
    id: "sales",
    label: "Sales",
    description: "Discovery calls, proposals, follow-ups, objection handling, pipeline analysis, competitive intel",
    prompts: [
      { name: "Pre-Call Research Brief", prompt: `I have a discovery call with [prospect] at [company]. They are [title] at a [size] company in [industry].\n\nGenerate a one-page brief: what the company does (2 sentences), recent news, likely pain points, 3 questions that show I did my homework, one industry insight for credibility.` },
      { name: "Discovery Questions", prompt: `I sell [product/service] to [audience]. Discovery call with a [title] at [company type].\n\nGenerate 8 open-ended questions that: start broad and get specific, uncover pain points without leading, reveal current process, surface what they tried before, end with "what would success look like?" Include follow-up probes for the 3 most important.` },
      { name: "Proposal Executive Summary", prompt: `Write a proposal executive summary.\n\nClient: [company]\nChallenge: [their problem]\nSolution: [our offering]\nInvestment: [price]\nTimeline: [when]\n\nRules: under 250 words, lead with THEIR problem, include one quantified benefit, end with clear next step, no buzzwords.` },
      { name: "Follow-Up Sequence", prompt: `Write 3 follow-up emails for a prospect who hasn't responded in [X days].\n\nContext: discussed [topic], interested in [specific thing].\n\nEmail 1 (Day 3): add value with a relevant insight.\nEmail 2 (Day 7): direct, acknowledge busy, one question.\nEmail 3 (Day 14): breakup, leave door open.\n\nEach under 80 words. No "just checking in."` },
      { name: "Objection Responses", prompt: `I sell [product] at [price] to [audience].\n\nCommon objections:\n1. [objection]\n2. [objection]\n3. [objection]\n\nFor each: 1-sentence acknowledgment, the real concern behind it, response with evidence, question to move past it. Conversational tone for live calls.` },
      { name: "Deal Analysis", prompt: `Analyze this deal:\n\nProspect: [company, size, industry]\nContact: [name, title]\nStage: [pipeline stage]\nDeal size: [amount]\nCompetition: [who else]\nLast interaction: [what/when]\n\nEvaluate: am I talking to the right person? Biggest risk? Missing info? Is timeline realistic? One action for this week.` },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    description: "Process documentation, meeting summaries, project planning, vendor evaluation, reporting",
    prompts: [
      { name: "Process Documentation (SOP)", prompt: `Document this process: [process name]\n\nI'll describe the steps. Format as an SOP:\n- Process name and purpose\n- Who is responsible per step\n- Required tools/systems\n- Step-by-step with decision points\n- Common errors and how to avoid them\n- Success metrics\n\nFormat for someone doing this for the first time.` },
      { name: "Meeting Summary", prompt: `Here are my rough notes from a meeting:\n\n[paste notes]\n\nGenerate:\n1. 3-sentence summary\n2. Key decisions (bullets)\n3. Action items with owner and due date (table)\n4. Open questions\n5. Suggested follow-up date\n\nConcise enough to paste into Slack.` },
      { name: "Project Plan", prompt: `Create a project plan for: [project description]\n\nTimeline: [duration]\nTeam: [who is involved]\nConstraints: [budget, dependencies, risks]\n\nInclude: project phases with milestones, task breakdown per phase, dependencies between tasks, risk register (top 3 risks + mitigations), status reporting cadence.` },
      { name: "Vendor Comparison", prompt: `Compare these vendors for [service]:\n\n[list vendors and what you know]\n\nMatrix: pricing (1-5), features, contract flexibility, support, integration with our tools, risk factors.\n\nEnd with recommendation and rationale.` },
      { name: "Status Report", prompt: `Generate a weekly status report.\n\nProject: [name]\nPeriod: [dates]\nCompleted: [list]\nIn progress: [list]\nBlocked: [list]\nRisks: [any new ones]\n\nFormat: executive summary (3 sentences), then details. Traffic light status for each workstream. End with decisions needed from leadership.` },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    description: "Budget analysis, forecasting, vendor comparison, executive reporting, scenario planning",
    prompts: [
      { name: "Budget Variance Analysis", prompt: `Analyze this budget variance:\n\n[paste budget vs actual]\n\nFor each line item with >10% variance: likely cause, one-time or recurring, recommended action (adjust/investigate/accept).\n\nEnd with 3-sentence executive summary. Plain language, not accounting jargon.` },
      { name: "Financial Scenario Planning", prompt: `Model 3 scenarios for [decision/situation]:\n\nBase case: [assumptions]\nBest case: [what goes right]\nWorst case: [what goes wrong]\n\nFor each: revenue impact, cost impact, cash flow effect, break-even timeline, key assumptions.\n\nEnd with recommendation on which scenario to plan for and why.` },
      { name: "Executive Financial Summary", prompt: `Turn this financial data into an executive summary:\n\n[paste data]\n\nFormat: 1 paragraph narrative (what happened and why), 3 key metrics with month-over-month change, 2 positive trends, 1 concern with recommended action.\n\nWrite for a CEO who has 2 minutes to read this.` },
      { name: "ROI Calculator", prompt: `Help me calculate ROI for [investment/project].\n\nInvestment: [total cost]\nTimeline: [months]\nExpected benefits: [list what you expect to gain]\n\nCalculate: total cost of ownership, expected returns by month, break-even point, 12-month ROI percentage, payback period.\n\nInclude assumptions clearly so I can adjust.` },
    ],
  },
  {
    id: "hr",
    label: "HR / People",
    description: "Job descriptions, interviews, performance reviews, onboarding, policies, communications",
    prompts: [
      { name: "Job Description", prompt: `Write a job description for [title] at [company].\n\nTeam: [department]\nReports to: [manager]\nLevel: [junior/mid/senior]\nResponsibilities: [3-5 duties]\nMust-have: [skills]\nNice-to-have: [skills]\n\nUnder 500 words. No cliches. Lead with what they DO. Include what makes this role unique.` },
      { name: "Interview Questions", prompt: `Generate interview questions for [role] at [level].\n\nSkills to evaluate: [3-5]\nCulture: [describe team]\nRed flags: [past hire issues]\n\n3 behavioral, 3 situational, 2 technical, 1 culture, 1 question they should ask us.\n\nFor each: what strong and weak answers look like.` },
      { name: "Performance Review", prompt: `Create a performance review template for [role/level].\n\nDimensions: core competencies, collaboration, growth, impact.\n\nPer dimension: exceeds/meets/needs improvement descriptions, 2 review questions.\n\nInclude self-assessment section and development goals.` },
      { name: "30-60-90 Onboarding", prompt: `Create a 30-60-90 day onboarding plan for a new [title] joining [team].\n\nManager: [name]\nTeam size: [number]\nKey tools: [list]\nFirst project: [describe]\n\nPer period: 3-5 milestones, who to meet, success criteria, one check-in question for the manager.` },
      { name: "Policy Writer", prompt: `Write a company policy for [topic: remote work/PTO/AI usage/etc].\n\nCompany size: [number]\nIndustry: [industry]\nCurrent approach: [informal practice]\n\nInclude: purpose (2 sentences), scope, guidelines, exceptions process, effective date.\n\nPlain language. Under 500 words. Include 2-3 scenario examples.` },
    ],
  },
  {
    id: "consulting",
    label: "Consulting",
    description: "Client deliverables, stakeholder interviews, strategy frameworks, research synthesis",
    prompts: [
      { name: "Deliverable Structure", prompt: `Create a [type: strategy deck/audit report/memo] outline for a client in [industry].\n\nEngagement: [scope]\nKey findings: [3-5]\nAudience: [who reads this]\n\nInclude: executive summary structure, section headers with content guide, data placement, recommendation format, next steps. Make it look top-tier consulting quality.` },
      { name: "Stakeholder Interview Questions", prompt: `Generate interview questions for a [project type] at [company].\n\nInterviewing: [role/title]\nNeed to learn: [what]\n\n10 questions that: start broad, uncover pain points without leading, surface org dynamics, ask what's been tried, end with "what would success look like."\n\nInclude follow-up probes for the 3 most important.` },
      { name: "Research Synthesis", prompt: `Synthesize these sources into a findings document:\n\n[paste sources or key points]\n\nStructure: executive summary (5 sentences), key themes (3-5 with supporting evidence), contradictions or tensions found, implications for the client, recommended next steps.\n\nCite which source supports each finding.` },
      { name: "Strategy Framework", prompt: `Build a strategic framework for [challenge/opportunity] at [client type].\n\nContext: [situation]\nConstraints: [budget, timeline, politics]\nGoal: [desired outcome]\n\nGenerate: framework name, 3-5 pillars with definitions, prioritization criteria, implementation sequence, success metrics per pillar, one-page visual description.` },
    ],
  },
];

function downloadLibrary(selectedRoles: string[]) {
  const lines: string[] = [
    "# My Prompt Library",
    `## Generated by MrPrompts — https://mrprompts.ai`,
    `## Roles: ${selectedRoles.join(", ")}\n`,
    "---\n",
  ];

  for (const roleId of selectedRoles) {
    const role = ROLES.find((r) => r.id === roleId);
    if (!role) continue;
    lines.push(`# ${role.label}\n`);
    for (const p of role.prompts) {
      lines.push(`## ${p.name}\n`);
      lines.push("```");
      lines.push(p.prompt);
      lines.push("```\n");
    }
    lines.push("---\n");
  }

  lines.push("\nGet more prompts at https://mrprompts.ai/products");

  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `prompt-library-${selectedRoles.join("-")}-mrprompts.md`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function PromptsTrackPage() {
  const { user } = useAuth();
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [downloaded, setDownloaded] = useState(false);

  function toggleRole(id: string) {
    setSelectedRoles((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  }

  const selectedPromptCount = selectedRoles.reduce((acc, id) => {
    const role = ROLES.find((r) => r.id === id);
    return acc + (role?.prompts.length || 0);
  }, 0);

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/build" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; All tracks
      </Link>

      <div className="mt-6">
        <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
          Start Here
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Build Your Prompt Library
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          Pick your role. Get a customized prompt library you can use with any
          AI tool. Copy-paste ready. No coding.
        </p>
      </div>

      <div className="mt-10">
      <AuthGate>
      {!downloaded ? (
        <>
          {/* Role selector */}
          <div className="mt-10">
            <h2 className="text-lg font-bold">What roles do you need prompts for?</h2>
            <p className="mt-2 text-sm text-zinc-500">Select one or more. Your library will include every prompt for your selected roles.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => toggleRole(role.id)}
                  className={`flex flex-col rounded-xl border-2 p-4 text-left transition ${
                    selectedRoles.includes(role.id)
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10"
                      : "border-zinc-200 hover:border-emerald-300 dark:border-zinc-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{role.label}</span>
                    <span className="text-xs text-zinc-400">{role.prompts.length} prompts</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">{role.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Preview selected */}
          {selectedRoles.length > 0 && (
            <div className="mt-8 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Your library</h3>
                <span className="text-sm text-emerald-600">{selectedPromptCount} prompts</span>
              </div>
              <div className="mt-4 space-y-2">
                {selectedRoles.map((id) => {
                  const role = ROLES.find((r) => r.id === id)!;
                  return (
                    <div key={id}>
                      <p className="text-sm font-medium">{role.label}</p>
                      <p className="text-xs text-zinc-400">
                        {role.prompts.map((p) => p.name).join(" · ")}
                      </p>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() => {
                  downloadLibrary(selectedRoles);
                  if (user) trackDownload(user.id, "prompt-library-custom");
                  setDownloaded(true);
                }}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Download My Prompt Library (Free)
              </button>
            </div>
          )}

          {/* Browse all */}
          <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <h2 className="text-lg font-bold">Preview all prompts</h2>
            <div className="mt-6 space-y-8">
              {ROLES.map((role) => (
                <details key={role.id} className="group">
                  <summary className="flex cursor-pointer items-center justify-between rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-800">
                    <div>
                      <span className="font-semibold">{role.label}</span>
                      <span className="ml-2 text-xs text-zinc-400">{role.prompts.length} prompts</span>
                    </div>
                    <span className="text-zinc-400 group-open:rotate-180 transition">&#9660;</span>
                  </summary>
                  <div className="mt-3 space-y-4 pl-4">
                    {role.prompts.map((p) => (
                      <div key={p.name}>
                        <h4 className="text-sm font-semibold">{p.name}</h4>
                        <pre className="mt-2 overflow-x-auto whitespace-pre-wrap rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed text-zinc-300">{p.prompt}</pre>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="mt-10">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-900/20">
            <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">
              Your prompt library is downloaded!
            </h2>
            <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-500">
              {selectedPromptCount} prompts across {selectedRoles.length} role{selectedRoles.length > 1 ? "s" : ""}. Open the file, copy any prompt, paste it into your AI tool, and fill in the brackets.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-xl font-bold">How to use your prompt library</h2>
            <div className="mt-6 space-y-4">
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">1</span>
                <span><strong>Open the downloaded file</strong> in any text editor.</span>
              </div>
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">2</span>
                <span><strong>Copy any prompt</strong> and paste it into Claude, ChatGPT, or your AI tool of choice.</span>
              </div>
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">3</span>
                <span><strong>Replace the [brackets]</strong> with your specific details.</span>
              </div>
              <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">4</span>
                <span><strong>Save prompts that work well</strong> so you build a personal library that compounds over time.</span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={() => setDownloaded(false)} className="text-sm font-medium text-emerald-600 hover:text-emerald-700">Build another library</button>
            <Link href="/learn/ai-prompts-for-sales" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">See all sales prompts &rarr;</Link>
          </div>
        </div>
      )}
      </AuthGate>
      </div>
    </div>
  );
}
