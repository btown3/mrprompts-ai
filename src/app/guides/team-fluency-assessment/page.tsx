"use client";

import Link from "next/link";
import { AuthGate } from "@/app/components/AuthGate";

const DIMENSIONS = [
  {
    name: "AI Awareness",
    weight: "20%",
    description: "Does the team know what AI tools exist and what they can do?",
    levels: [
      { score: "1", label: "Unaware", description: "Cannot name any AI tools or explain what they do." },
      { score: "2", label: "Aware", description: "Knows AI exists, has heard of ChatGPT, but hasn't used it meaningfully." },
      { score: "3", label: "Informed", description: "Can name 2-3 AI tools and describe their general capabilities." },
      { score: "4", label: "Knowledgeable", description: "Understands the differences between AI tools and when to use which one." },
      { score: "5", label: "Expert", description: "Tracks AI developments, evaluates new tools proactively, and can teach others." },
    ],
  },
  {
    name: "Practical Usage",
    weight: "30%",
    description: "Is the team actively using AI in their daily work?",
    levels: [
      { score: "1", label: "None", description: "No one on the team uses AI tools." },
      { score: "2", label: "Experimental", description: "1-2 people have tried AI tools occasionally." },
      { score: "3", label: "Regular", description: "Most team members use AI at least weekly for simple tasks." },
      { score: "4", label: "Integrated", description: "AI is part of established workflows. Team has shared prompts or processes." },
      { score: "5", label: "Advanced", description: "Team builds custom AI workflows, creates reusable systems, and measures AI impact." },
    ],
  },
  {
    name: "Critical Evaluation",
    weight: "20%",
    description: "Can the team evaluate AI output and know when not to trust it?",
    levels: [
      { score: "1", label: "No filter", description: "Accepts all AI output at face value." },
      { score: "2", label: "Suspicious", description: "Distrusts AI and avoids using it, or flags everything as unreliable." },
      { score: "3", label: "Checking", description: "Reviews AI output before using it, catches obvious errors." },
      { score: "4", label: "Discerning", description: "Knows when AI is likely to hallucinate, verifies claims, cross-references." },
      { score: "5", label: "Systematic", description: "Has established validation workflows. Uses multi-model verification for high-stakes work." },
    ],
  },
  {
    name: "Building Capability",
    weight: "20%",
    description: "Can the team create AI-powered tools, workflows, and systems?",
    levels: [
      { score: "1", label: "Consumer", description: "Uses AI only through chat interfaces with no customization." },
      { score: "2", label: "Customizer", description: "Saves and reuses prompts. Has a few go-to approaches." },
      { score: "3", label: "Builder", description: "Creates prompt libraries, uses AI in multi-step workflows." },
      { score: "4", label: "Architect", description: "Designs AI systems: knowledge bases, automation pipelines, team tools." },
      { score: "5", label: "Innovator", description: "Builds novel AI applications. Trains others. Publishes processes for the organization." },
    ],
  },
  {
    name: "Leadership and Culture",
    weight: "10%",
    description: "Does leadership support and model AI usage?",
    levels: [
      { score: "1", label: "Resistant", description: "Leadership discourages or ignores AI." },
      { score: "2", label: "Passive", description: "Leadership allows AI but doesn't actively support it." },
      { score: "3", label: "Supportive", description: "Leadership encourages AI exploration and provides basic tools." },
      { score: "4", label: "Champion", description: "Leadership uses AI themselves, allocates budget, and celebrates AI wins." },
      { score: "5", label: "Visionary", description: "Leadership has an AI strategy, invests in training, and measures AI ROI." },
    ],
  },
];

const SURVEY_QUESTIONS = [
  "How often do you use AI tools in your work? (Never / Monthly / Weekly / Daily)",
  "Which AI tools have you used in the past 30 days? (List all)",
  "What's the single most time-consuming repetitive task in your role?",
  "Have you ever used AI to help with that task? What happened?",
  "On a scale of 1-5, how confident are you in evaluating whether AI output is accurate?",
  "What's the biggest barrier to using AI more in your work?",
  "If you could wave a magic wand, what would AI handle for you automatically?",
  "What concerns do you have about AI in the workplace? (Select all: job security / data privacy / quality / bias / other)",
  "Would you attend a 1-hour AI training session if offered? (Yes / No / Already have)",
  "Who on your team is the most advanced AI user? (Name or 'no one')",
];

function downloadAssessment() {
  const lines: string[] = [
    "# Team AI Fluency Assessment",
    "## By Wayne Cederholm — MrPrompts.ai\n",
    "A complete framework for measuring your team's AI readiness.\n",
    "---\n",
    "# Scoring Rubric\n",
  ];

  for (const dim of DIMENSIONS) {
    lines.push(`## ${dim.name} (${dim.weight})`);
    lines.push(`*${dim.description}*\n`);
    for (const level of dim.levels) {
      lines.push(`- **${level.score} — ${level.label}:** ${level.description}`);
    }
    lines.push("");
  }

  lines.push("---\n");
  lines.push("# Team Survey Questions\n");
  lines.push("Send these to every team member before scoring.\n");
  for (let i = 0; i < SURVEY_QUESTIONS.length; i++) {
    lines.push(`${i + 1}. ${SURVEY_QUESTIONS[i]}`);
  }

  lines.push("\n---\n");
  lines.push("# How to Score\n");
  lines.push("1. Have each team lead fill out the rubric for their team");
  lines.push("2. Collect individual survey responses");
  lines.push("3. Average the rubric scores, weighted by the percentages above");
  lines.push("4. Teams scoring 3.5+ are ready for AI pilots");
  lines.push("5. Teams scoring 2-3.5 need foundational training first");
  lines.push("6. Teams scoring below 2 need executive sponsorship and a longer runway\n");
  lines.push("---");
  lines.push("Learn more at https://mrprompts.ai/build/leadership");

  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Team-AI-Fluency-Assessment-MrPrompts.md";
  a.click();
  URL.revokeObjectURL(url);
}

export default function TeamFluencyAssessmentPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
            Free Guide
          </span>
          <span className="text-xs text-zinc-400">Assessment + Survey</span>
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          Team AI Fluency Assessment
        </h1>
        <p className="mt-3 text-lg text-zinc-500">
          A scoring rubric and survey to measure where your team stands with AI.
          Five dimensions, clear levels, and a 10-question survey you can run
          this week.
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-xl font-bold">Get the complete assessment framework</h2>
        <p className="mt-2 text-sm text-zinc-500">Sign in to unlock the full scoring rubric, team survey, and interpretation guide.</p>
        <div className="mt-6 space-y-2">
          {[
            "5-dimension scoring rubric with weighted scores",
            "Clear level definitions (1-5) for each dimension",
            "10-question team survey ready to send",
            "Scoring guide: how to interpret results and what to do next",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-emerald-600">&#10003;</span>{item}
            </div>
          ))}
        </div>
      </div>

      <AuthGate>
        {/* Scoring Rubric */}
        <section className="mb-12">
          <h2 className="text-xl font-bold">Scoring Rubric</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Rate your team on each dimension. The weighted average is your
            team's AI fluency score.
          </p>
          <div className="mt-6 space-y-8">
            {DIMENSIONS.map((dim) => (
              <div
                key={dim.name}
                className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{dim.name}</h3>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    Weight: {dim.weight}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">{dim.description}</p>
                <div className="mt-4 space-y-2">
                  {dim.levels.map((level) => (
                    <div
                      key={level.score}
                      className="flex gap-3 text-sm"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                        {level.score}
                      </span>
                      <div>
                        <span className="font-medium">{level.label}</span>
                        <span className="text-zinc-500"> — {level.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Survey */}
        <section className="mb-12">
          <h2 className="text-xl font-bold">Team Survey</h2>
          <p className="mt-2 text-sm text-zinc-500">
            Send these 10 questions to every team member before scoring.
          </p>
          <div className="mt-6 space-y-3">
            {SURVEY_QUESTIONS.map((q, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-lg border border-zinc-200 p-4 text-sm dark:border-zinc-800"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {i + 1}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">{q}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Interpretation */}
        <section className="mb-12 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
          <h2 className="text-lg font-bold">How to interpret your score</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="font-bold text-emerald-600">3.5+</span>
              <span className="text-zinc-600 dark:text-zinc-400">Ready for AI pilots. Start with the Build Tracks.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-amber-600">2.0 — 3.5</span>
              <span className="text-zinc-600 dark:text-zinc-400">Needs foundational training. Start with AI literacy sessions before introducing tools.</span>
            </div>
            <div className="flex gap-3">
              <span className="font-bold text-red-600">Below 2.0</span>
              <span className="text-zinc-600 dark:text-zinc-400">Needs executive sponsorship and a longer runway. Focus on leadership buy-in and cultural readiness first.</span>
            </div>
          </div>
        </section>

        <div className="mt-8">
          <button
            onClick={downloadAssessment}
            className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Download Full Assessment (.md)
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
