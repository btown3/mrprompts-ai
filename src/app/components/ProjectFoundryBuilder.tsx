"use client";

import { useMemo, useState } from "react";

type FormState = {
  frameworkName: string;
  ownerName: string;
  projectName: string;
  workType: string;
  mission: string;
  taskTypes: string;
  businessContext: string;
  currentWork: string;
  decisions: string;
  terminology: string;
  voiceStyle: string;
  antiPatterns: string;
  qualityRules: string;
  corrections: string;
  contractRequirement: string;
  reviewMode: string;
  resetPolicy: string;
  includeScripts: string;
  failureDefinition: string;
  handoffTrigger: string;
  includeEvaluator: boolean;
  includeBootstrapPrompt: boolean;
  includeChecklist: boolean;
};

const DEFAULT_STATE: FormState = {
  frameworkName: "Project Foundry",
  ownerName: "",
  projectName: "",
  workType: "mixed",
  mission: "",
  taskTypes: "",
  businessContext: "",
  currentWork: "",
  decisions: "",
  terminology: "",
  voiceStyle: "",
  antiPatterns: "",
  qualityRules: "",
  corrections: "",
  contractRequirement: "always",
  reviewMode: "skeptical",
  resetPolicy: "aggressive",
  includeScripts: "yes",
  failureDefinition: "",
  handoffTrigger: "",
  includeEvaluator: true,
  includeBootstrapPrompt: true,
  includeChecklist: true,
};

const STEP_NAMES = ["Identity", "Context", "Voice", "Workflow", "Build"];

function splitList(text: string, fallback: string[]) {
  const parts = text
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);

  return parts.length ? parts : fallback;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function humanize(value: string) {
  return value.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function ProjectFoundryBuilder() {
  const [step, setStep] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(DEFAULT_STATE);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  const outputs = useMemo(() => {
    const mission =
      form.mission || "Build a reusable environment for high-quality AI-assisted work.";
    const tasks = splitList(form.taskTypes, [
      "Draft recurring work with less re-explaining",
      "Review output against explicit success criteria",
      "Capture failures and corrections for future runs",
    ]);
    const decisions = splitList(form.decisions, [
      "Keep top-level instructions short and directional",
      "Use focused docs as the system of record",
      "Require explicit contracts for meaningful work",
    ]);
    const terminology = splitList(form.terminology, [
      "Define any project-specific language here",
    ]);
    const voice = splitList(form.voiceStyle, [
      "Direct",
      "Warm",
      "Concise",
      "Implementation-oriented",
    ]);
    const antiPatterns = splitList(form.antiPatterns, [
      "Generic AI filler",
      "Vague praise without evaluation",
      "Long answers when short ones are enough",
    ]);
    const qualityRules = splitList(form.qualityRules, [
      "State assumptions explicitly",
      "Judge work against the contract",
      "Log repeated failures",
    ]);
    const corrections = splitList(form.corrections, [
      "Add repeated corrections here as durable rules",
    ]);

    const folderTree = `${slugify(form.projectName || "project-name")}/
  AGENTS.md
  README.md
  docs/
    identity.md
    current-work.md
    decisions.md
    terminology.md
    corrections.md
    agent-failures.md
  templates/
    contract-template.md
    handoff-template.md
${form.includeEvaluator ? "    evaluator-template.md\n" : ""}${
      form.includeScripts === "yes"
        ? `  scripts/
    new-contract
    new-handoff
${form.includeEvaluator ? "    new-review\n" : ""}    log-failure
`
        : ""
    }`;

    const agents = `# ${form.frameworkName}

This project uses a harness-first workflow for ${form.projectName || "this project"}. Treat repeated agent mistakes as environment problems to solve with better structure, clearer docs, or stronger checks.

Before non-trivial work:
- Read only the docs relevant to the task.
- ${
      form.contractRequirement === "always"
        ? "Create a contract before starting meaningful work."
        : form.contractRequirement === "usually"
          ? "Create a contract unless the task is truly small."
          : "Create a contract when scope is fuzzy or important."
    }
- ${
      form.resetPolicy === "aggressive"
        ? "Prefer fresh-context restarts early rather than dragging long threads forward."
        : form.resetPolicy === "moderate"
          ? "Restart when outputs begin to drift or compress."
          : "Restart only when context has clearly become unreliable."
    }

Core references:
- docs/identity.md
- docs/current-work.md
- docs/decisions.md
- docs/terminology.md
- docs/corrections.md
- docs/agent-failures.md

Workflow templates:
- templates/contract-template.md
- templates/handoff-template.md
${form.includeEvaluator ? "- templates/evaluator-template.md" : ""}

When a correction happens twice, encode it into the environment rather than repeating it in chat.`;

    const decisionsDoc = `# Decisions

## Mission
- ${mission}

## Locked Decisions
${decisions.map((line) => `- ${line}`).join("\n")}

## Quality Rules
${qualityRules.map((line) => `- ${line}`).join("\n")}

## Review Mode
- ${humanize(form.reviewMode)}

## Context Reset Policy
- ${humanize(form.resetPolicy)}

## Handoff Trigger
${splitList(form.handoffTrigger, [
  "Create a handoff when quality drifts, context shifts, or the work pauses.",
])
  .map((line) => `- ${line}`)
  .join("\n")}`;

    const bootstrapPrompt = `You are helping set up ${form.projectName || "this project"} using the ${form.frameworkName} harness.

Operator:
- ${form.ownerName || "Project owner not specified"}

Mission:
- ${mission}

Work type:
- ${humanize(form.workType)}

Typical tasks:
${tasks.map((line) => `- ${line}`).join("\n")}

Terminology:
${terminology.map((line) => `- ${line}`).join("\n")}

Voice:
${voice.map((line) => `- ${line}`).join("\n")}

Anti-patterns:
${antiPatterns.map((line) => `- ${line}`).join("\n")}

Corrections:
${corrections.map((line) => `- ${line}`).join("\n")}

Review policy:
- ${
      form.reviewMode === "skeptical"
        ? "Use a skeptical evaluator and fail work that does not fully meet the contract."
        : form.reviewMode === "balanced"
          ? "Use a balanced evaluator but still judge against the contract."
          : "Use light-touch review for speed, but still note clear misses."
    }

Failure logging:
${splitList(form.failureDefinition, [
  "Log repeated misses, skipped verification, bad terminology, and premature done calls.",
])
  .map((line) => `- ${line}`)
  .join("\n")}

Do not create one giant instruction blob. Keep the top-level map short and put durable truths into focused docs.`;

    const markdownBundle = `# ${form.frameworkName} Setup Kit

## Summary
- Project: ${form.projectName || "New Project"}
- Owner: ${form.ownerName || "Not specified"}
- Work type: ${humanize(form.workType)}
- Contract policy: ${humanize(form.contractRequirement)}
- Review mode: ${humanize(form.reviewMode)}
- Reset policy: ${humanize(form.resetPolicy)}

## Folder Structure
\`\`\`
${folderTree}
\`\`\`

## AGENTS.md
\`\`\`md
${agents}
\`\`\`

## docs/decisions.md
\`\`\`md
${decisionsDoc}
\`\`\`

${
  form.includeBootstrapPrompt
    ? `## Bootstrap Prompt
\`\`\`md
${bootstrapPrompt}
\`\`\`
`
    : ""
}${
  form.includeChecklist
    ? `## Setup Checklist
- Create the folder structure
- Add the top-level AGENTS.md map
- Fill in docs/ with real project details
- Start every meaningful task with a contract
- Review important output against the evaluator
- Add corrections and failure logs as the work repeats
`
    : ""
}`;

    const jsonBundle = {
      frameworkName: form.frameworkName,
      ownerName: form.ownerName,
      projectName: form.projectName,
      workType: form.workType,
      mission,
      tasks,
      decisions,
      terminology,
      voice,
      antiPatterns,
      qualityRules,
      corrections,
      files: {
        "AGENTS.md": agents,
        "docs/decisions.md": decisionsDoc,
        "bootstrap-prompt.md": bootstrapPrompt,
      },
    };

    return {
      folderTree,
      agents,
      decisionsDoc,
      bootstrapPrompt,
      markdownBundle,
      jsonBundle,
      summary: `${form.frameworkName} for ${form.projectName || "New Project"}

Mission: ${mission}

Key rules:
${decisions.slice(0, 5).map((line) => `- ${line}`).join("\n")}`,
    };
  }, [form]);

  async function copyText(value: string, label: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(null), 1500);
    } catch {
      setCopied("Copy failed");
      window.setTimeout(() => setCopied(null), 1500);
    }
  }

  function downloadFile(filename: string, content: string, type: string) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  const inputClassName =
    "w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white";
  const textareaClassName = `${inputClassName} min-h-28 resize-y`;
  const cardClassName =
    "rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950";

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Interactive Tool
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Project Foundry
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500">
              A guided builder for creating a stronger AI project structure with
              contracts, handoffs, review rules, and durable corrections.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {STEP_NAMES.map((name, index) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setStep(index)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    step === index
                      ? "bg-emerald-600 text-white"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
                  }`}
                >
                  {index + 1}. {name}
                </button>
              ))}
            </div>
          </div>

          <div className={cardClassName}>
            {step === 0 && (
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Framework name">
                  <input
                    className={inputClassName}
                    value={form.frameworkName}
                    onChange={(e) => updateField("frameworkName", e.target.value)}
                  />
                </Field>
                <Field label="Owner or team">
                  <input
                    className={inputClassName}
                    value={form.ownerName}
                    onChange={(e) => updateField("ownerName", e.target.value)}
                    placeholder="Wayne or Growth Team"
                  />
                </Field>
                <Field label="Project name">
                  <input
                    className={inputClassName}
                    value={form.projectName}
                    onChange={(e) => updateField("projectName", e.target.value)}
                    placeholder="Quarterly Newsletter Engine"
                  />
                </Field>
                <Field label="Primary work type">
                  <select
                    className={inputClassName}
                    value={form.workType}
                    onChange={(e) => updateField("workType", e.target.value)}
                  >
                    <option value="writing">Writing</option>
                    <option value="analysis">Analysis</option>
                    <option value="coding">Coding</option>
                    <option value="operations">Operations</option>
                    <option value="mixed">Mixed</option>
                  </select>
                </Field>
                <Field label="One-sentence mission" full>
                  <textarea
                    className={textareaClassName}
                    value={form.mission}
                    onChange={(e) => updateField("mission", e.target.value)}
                    placeholder="Build a reusable environment for high-quality AI-assisted work without repeating the same corrections."
                  />
                </Field>
                <Field label="Typical tasks" full>
                  <textarea
                    className={textareaClassName}
                    value={form.taskTypes}
                    onChange={(e) => updateField("taskTypes", e.target.value)}
                    placeholder="Drafting newsletters, reviewing strategy docs, generating project plans, building small tools"
                  />
                </Field>
              </div>
            )}

            {step === 1 && (
              <div className="grid gap-4">
                <Field label="Business or project context">
                  <textarea
                    className={textareaClassName}
                    value={form.businessContext}
                    onChange={(e) => updateField("businessContext", e.target.value)}
                    placeholder="Who the work serves, how the project makes decisions, and what constraints matter most"
                  />
                </Field>
                <Field label="Current priorities">
                  <textarea
                    className={textareaClassName}
                    value={form.currentWork}
                    onChange={(e) => updateField("currentWork", e.target.value)}
                    placeholder="What is active right now and what the next 2-3 priorities are"
                  />
                </Field>
                <Field label="Locked decisions or rules">
                  <textarea
                    className={textareaClassName}
                    value={form.decisions}
                    onChange={(e) => updateField("decisions", e.target.value)}
                    placeholder="Use short docs instead of giant instruction files. Require contracts before meaningful work."
                  />
                </Field>
                <Field label="Terminology and naming rules">
                  <textarea
                    className={textareaClassName}
                    value={form.terminology}
                    onChange={(e) => updateField("terminology", e.target.value)}
                    placeholder="We call customers members. Use harness engineering rather than prompt engineering."
                  />
                </Field>
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-4">
                <Field label="Communication style">
                  <textarea
                    className={textareaClassName}
                    value={form.voiceStyle}
                    onChange={(e) => updateField("voiceStyle", e.target.value)}
                    placeholder="Direct, warm, concise, implementation-oriented"
                  />
                </Field>
                <Field label="Anti-patterns to avoid">
                  <textarea
                    className={textareaClassName}
                    value={form.antiPatterns}
                    onChange={(e) => updateField("antiPatterns", e.target.value)}
                    placeholder="No generic AI filler. No vague praise. No giant outlines when a short answer will do."
                  />
                </Field>
                <Field label="Non-negotiable quality rules">
                  <textarea
                    className={textareaClassName}
                    value={form.qualityRules}
                    onChange={(e) => updateField("qualityRules", e.target.value)}
                    placeholder="Show assumptions explicitly. Evaluate against the contract. Log recurring failures."
                  />
                </Field>
                <Field label="Common corrections you already repeat">
                  <textarea
                    className={textareaClassName}
                    value={form.corrections}
                    onChange={(e) => updateField("corrections", e.target.value)}
                    placeholder="Use concise prose. Avoid users if members is the correct term."
                  />
                </Field>
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Require contracts before non-trivial work">
                  <select
                    className={inputClassName}
                    value={form.contractRequirement}
                    onChange={(e) => updateField("contractRequirement", e.target.value)}
                  >
                    <option value="always">Always</option>
                    <option value="usually">Usually</option>
                    <option value="optional">Optional</option>
                  </select>
                </Field>
                <Field label="Evaluator strictness">
                  <select
                    className={inputClassName}
                    value={form.reviewMode}
                    onChange={(e) => updateField("reviewMode", e.target.value)}
                  >
                    <option value="skeptical">Skeptical reviewer</option>
                    <option value="balanced">Balanced reviewer</option>
                    <option value="light">Light-touch review</option>
                  </select>
                </Field>
                <Field label="Fresh-context reset policy">
                  <select
                    className={inputClassName}
                    value={form.resetPolicy}
                    onChange={(e) => updateField("resetPolicy", e.target.value)}
                  >
                    <option value="aggressive">Restart early</option>
                    <option value="moderate">Restart when quality drifts</option>
                    <option value="rare">Only when necessary</option>
                  </select>
                </Field>
                <Field label="Include helper scripts">
                  <select
                    className={inputClassName}
                    value={form.includeScripts}
                    onChange={(e) => updateField("includeScripts", e.target.value)}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </Field>
                <Field label="What should trigger a failure log entry?" full>
                  <textarea
                    className={textareaClassName}
                    value={form.failureDefinition}
                    onChange={(e) => updateField("failureDefinition", e.target.value)}
                    placeholder="Any repeated hallucination, ignored terminology rule, skipped verification step, or premature declaration of done"
                  />
                </Field>
                <Field label="What should trigger a handoff?" full>
                  <textarea
                    className={textareaClassName}
                    value={form.handoffTrigger}
                    onChange={(e) => updateField("handoffTrigger", e.target.value)}
                    placeholder="Long threads, quality drift, major context shifts, or pausing work until later"
                  />
                </Field>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <ToggleRow
                  label="Include evaluator review file"
                  checked={form.includeEvaluator}
                  onChange={(checked) => updateField("includeEvaluator", checked)}
                />
                <ToggleRow
                  label="Include bootstrap prompt"
                  checked={form.includeBootstrapPrompt}
                  onChange={(checked) => updateField("includeBootstrapPrompt", checked)}
                />
                <ToggleRow
                  label="Include setup checklist"
                  checked={form.includeChecklist}
                  onChange={(checked) => updateField("includeChecklist", checked)}
                />
              </div>
            )}

            <div className="mt-6 flex flex-wrap justify-between gap-3">
              <button
                type="button"
                onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep((prev) => Math.min(STEP_NAMES.length - 1, prev + 1))}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                {step === STEP_NAMES.length - 1 ? "Stay on Build Step" : "Next"}
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  Generated Kit
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight">
                  {form.frameworkName}
                </h2>
                <p className="mt-2 text-sm text-zinc-500">
                  {(form.projectName || "New Project") +
                    " • " +
                    humanize(form.workType) +
                    " • " +
                    humanize(form.reviewMode)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => copyText(outputs.summary, "Summary copied")}
                  className="rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  Copy Summary
                </button>
                <button
                  type="button"
                  onClick={() =>
                    downloadFile(
                      `${slugify(form.projectName || "project-foundry")}-setup.md`,
                      outputs.markdownBundle,
                      "text/markdown"
                    )
                  }
                  className="rounded-lg border border-zinc-300 px-3 py-2 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
                >
                  Download Markdown
                </button>
                <button
                  type="button"
                  onClick={() =>
                    downloadFile(
                      `${slugify(form.projectName || "project-foundry")}-setup.json`,
                      JSON.stringify(outputs.jsonBundle, null, 2),
                      "application/json"
                    )
                  }
                  className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                >
                  Download JSON
                </button>
              </div>
            </div>

            {copied && (
              <div className="mt-4 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400">
                {copied}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip>{humanize(form.contractRequirement)} contracts</Chip>
              <Chip>{humanize(form.reviewMode)} review</Chip>
              <Chip>{humanize(form.resetPolicy)} resets</Chip>
              <Chip>{form.includeScripts === "yes" ? "Scripts included" : "Docs only"}</Chip>
            </div>
          </div>

          <OutputBlock
            title="Folder structure"
            value={outputs.folderTree}
            onCopy={() => copyText(outputs.folderTree, "Folder structure copied")}
          />
          <OutputBlock
            title="AGENTS.md"
            value={outputs.agents}
            onCopy={() => copyText(outputs.agents, "AGENTS.md copied")}
          />
          <OutputBlock
            title="docs/decisions.md"
            value={outputs.decisionsDoc}
            onCopy={() => copyText(outputs.decisionsDoc, "decisions.md copied")}
          />
          <OutputBlock
            title="Bootstrap prompt"
            value={
              form.includeBootstrapPrompt
                ? outputs.bootstrapPrompt
                : "Bootstrap prompt disabled."
            }
            onCopy={() =>
              copyText(
                form.includeBootstrapPrompt
                  ? outputs.bootstrapPrompt
                  : "Bootstrap prompt disabled.",
                "Bootstrap prompt copied"
              )
            }
          />
        </aside>
      </section>
    </div>
  );
}

function Field({
  label,
  children,
  full = false,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label className={full ? "md:col-span-2" : ""}>
      <span className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
      {children}
    </label>
  );
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 dark:border-zinc-800">
      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {label}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 accent-emerald-600"
      />
    </label>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
      {children}
    </span>
  );
}

function OutputBlock({
  title,
  value,
  onCopy,
}: {
  title: string;
  value: string;
  onCopy: () => void;
}) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button
          type="button"
          onClick={onCopy}
          className="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          Copy
        </button>
      </div>
      <pre className="mt-4 overflow-x-auto rounded-xl bg-zinc-950 p-4 text-sm leading-6 text-zinc-100">
        {value}
      </pre>
    </section>
  );
}
