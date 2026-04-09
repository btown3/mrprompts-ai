"use client";

import Link from "next/link";
import { EmailGate } from "@/app/components/EmailGate";

const BLUEPRINTS = [
  {
    name: "Content Research Pipeline",
    description: "Automatically research a topic, compile findings, and draft a summary.",
    tools: "Perplexity + Claude + Google Docs",
    steps: [
      "Trigger: You add a topic to a spreadsheet or send a message",
      "Step 1: Perplexity searches for the 5 most recent, authoritative articles on the topic",
      "Step 2: Results are sent to Claude with the prompt: 'Synthesize these sources into a 500-word research brief with key findings and source links'",
      "Step 3: The brief is saved to a Google Doc and you get a notification",
    ],
    whenToUse: "Weekly research for newsletters, blog posts, or client briefs. Saves 1-2 hours per topic.",
  },
  {
    name: "Meeting Notes to Action Items",
    description: "Record a meeting, get a transcript, and extract action items automatically.",
    tools: "Otter.ai / Fireflies + Claude + Slack",
    steps: [
      "Trigger: Meeting recording finishes processing",
      "Step 1: Transcript is sent to Claude with the prompt: 'Extract a 3-sentence summary, key decisions, and action items with owners and due dates'",
      "Step 2: Formatted summary is posted to the relevant Slack channel",
      "Step 3: Action items are created as tasks in your project management tool",
    ],
    whenToUse: "Any recurring meeting where action items get lost. Especially useful for leadership and cross-functional meetings.",
  },
  {
    name: "Lead Enrichment on Form Submit",
    description: "When someone fills out a form, automatically research their company and prep a brief.",
    tools: "Typeform/Tally + Claude + CRM",
    steps: [
      "Trigger: New form submission with company name and email",
      "Step 1: Look up the company domain from the email",
      "Step 2: Claude receives the prompt: 'Research [company] and generate a one-page brief: what they do, company size, recent news, and 3 ways our [product] might help them'",
      "Step 3: Brief is attached to the lead record in your CRM",
      "Step 4: Sales rep gets a Slack notification with the brief",
    ],
    whenToUse: "Inbound lead flow where you want sales to have context before the first call. Replaces 20 minutes of manual research per lead.",
  },
  {
    name: "Weekly Knowledge Base Update",
    description: "Automatically find new sources, compile articles, and update your wiki.",
    tools: "RSS/Google Alerts + Claude + Obsidian (via GitHub)",
    steps: [
      "Trigger: Weekly schedule (every Monday at 6am)",
      "Step 1: Collect new articles from RSS feeds and Google Alerts on your wiki topic",
      "Step 2: Claude reads each source and decides: 'Does this contain information that would improve or update an existing wiki article, or warrant a new one?'",
      "Step 3: For each relevant source, Claude generates or updates wiki articles following your CLAUDE.md schema",
      "Step 4: Changes are committed to your GitHub repo (which syncs to Obsidian)",
      "Step 5: You get a summary email: 'This week: 2 articles updated, 1 new article created'",
    ],
    whenToUse: "Any knowledge base you want to keep current without manual effort. The compound effect kicks in after 4-6 weeks.",
  },
  {
    name: "Client Report Generator",
    description: "Pull data from multiple sources and generate a formatted client report.",
    tools: "Google Sheets + Claude + Google Docs",
    steps: [
      "Trigger: Monthly schedule or manual button click",
      "Step 1: Pull latest metrics from Google Sheets (or your analytics tool)",
      "Step 2: Claude receives the data with the prompt: 'Generate a monthly performance report for [client]. Include: executive summary, key metrics with month-over-month comparison, top 3 wins, top 3 concerns, and recommended next steps'",
      "Step 3: Report is created in Google Docs with consistent formatting",
      "Step 4: Draft email is created with the report link, ready for your review before sending",
    ],
    whenToUse: "Any recurring client or stakeholder report. Especially valuable for agencies managing multiple clients.",
  },
];

function downloadBlueprints() {
  const lines: string[] = [
    "# AI Workflow Blueprints",
    "## By Wayne Cederholm — MrPrompts.ai\n",
    "5 pre-built AI workflow configurations you can set up today.\n",
    "---\n",
  ];

  for (const bp of BLUEPRINTS) {
    lines.push(`## ${bp.name}`);
    lines.push(`*${bp.description}*\n`);
    lines.push(`**Tools:** ${bp.tools}\n`);
    lines.push("**Steps:**");
    for (const step of bp.steps) {
      lines.push(`- ${step}`);
    }
    lines.push(`\n**When to use:** ${bp.whenToUse}\n`);
    lines.push("---\n");
  }

  lines.push("Learn more at https://mrprompts.ai/build/workflows");

  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "AI-Workflow-Blueprints-MrPrompts.md";
  a.click();
  URL.revokeObjectURL(url);
}

export default function WorkflowBlueprintsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            Free Guide
          </span>
          <span className="text-xs text-zinc-400">5 blueprints</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          AI Workflow Blueprints
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          5 pre-built AI workflow configurations you can set up today. Each one
          saves hours of repetitive work every week.
        </p>
      </div>

      <EmailGate
        slug="workflow-blueprints"
        title="Get 5 ready-to-build workflow blueprints"
        description="Enter your email to unlock the full blueprints with step-by-step setup instructions."
        checklistItems={BLUEPRINTS.map((bp) => `${bp.name} (${bp.tools})`)}
      >
        <div className="space-y-10">
          {BLUEPRINTS.map((bp) => (
            <section
              key={bp.name}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h2 className="text-lg font-bold">{bp.name}</h2>
              <p className="mt-1 text-sm text-zinc-500">{bp.description}</p>
              <p className="mt-3 text-xs font-medium text-emerald-600">
                Tools: {bp.tools}
              </p>
              <div className="mt-4 space-y-2">
                {bp.steps.map((step, i) => (
                  <div key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="shrink-0 text-zinc-400">{i === 0 ? ">" : `${i}.`}</span>
                    <span>{step.replace(/^(Trigger|Step \d): /, "")}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-lg bg-zinc-50 p-3 text-xs text-zinc-500 dark:bg-zinc-900">
                <strong>When to use:</strong> {bp.whenToUse}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <button
            onClick={downloadBlueprints}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Download All Blueprints (.md)
          </button>
        </div>

        <div className="mt-12 flex justify-between text-sm">
          <Link href="/guides" className="text-emerald-600 hover:text-emerald-700">
            &larr; All guides
          </Link>
          <Link href="/build/workflows" className="text-emerald-600 hover:text-emerald-700">
            Build Track: Workflows &rarr;
          </Link>
        </div>
      </EmailGate>
    </article>
  );
}
