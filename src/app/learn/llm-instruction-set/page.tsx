import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "The LLM Instruction Set: Stop Prompting, Start Operating",
  description:
    "15 atomic instructions that turn AI from a search bar into an operating system. DefineOutcome, ForceAction, CheckGaps, and 12 more. Copy, stack, and use today.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/llm-instruction-set" },
};

const INSTRUCTIONS = [
  {
    name: "DefineOutcome",
    does: "Clarifies exactly what success looks like so the model stops guessing.",
    example: "DefineOutcome: A 90-day onboarding plan that gets new hires to full productivity, with weekly milestones and clear ownership for each task.",
  },
  {
    name: "AddContext",
    does: "Provides only the necessary background so the answer is relevant, not generic.",
    example: "AddContext: We are a 200-person B2B SaaS company. Our sales cycle is 45 days. Average deal size is $35K. We sell to VP-level buyers in financial services.",
  },
  {
    name: "AssignRole",
    does: "Shapes how the model thinks by putting it in a specific perspective or expertise.",
    example: "AssignRole: You are a CFO preparing a board presentation on Q1 results. Your audience is non-operational board members who care about trends, not details.",
  },
  {
    name: "SetConstraints",
    does: "Forces focus by limiting scope, length, or style so the answer is tighter.",
    example: "SetConstraints: Under 200 words. No bullet points. Written for a CEO who has 90 seconds to read this before a meeting.",
  },
  {
    name: "SpecifyFormat",
    does: "Controls how the answer is structured so it is immediately usable.",
    example: "SpecifyFormat: Table with columns: Initiative, Owner, Deadline, Status, Risk Level. Sort by deadline.",
  },
  {
    name: "ForceAction",
    does: "Turns ideas into execution by requiring clear next steps.",
    example: "ForceAction: End with exactly 3 actions I can take this week. Each action must include who does it, what they do, and by when.",
  },
  {
    name: "AskUserQuestion",
    does: "Prevents bad assumptions by having the model clarify before answering.",
    example: "AskUserQuestion: Before answering, ask me 3 questions that would make your response significantly more useful.",
  },
  {
    name: "ChallengeThinking",
    does: "Pushes beyond obvious answers to get deeper, more strategic output.",
    example: "ChallengeThinking: What is the contrarian view here? What would a skeptic say? Where is the conventional wisdom wrong?",
  },
  {
    name: "CheckGaps",
    does: "Identifies what is missing, weak, or overlooked in the response.",
    example: "CheckGaps: Review your answer. What did you leave out? What assumptions did you make? What risks did you not address?",
  },
  {
    name: "ImproveOutput",
    does: "Refines and sharpens an existing answer instead of starting over.",
    example: "ImproveOutput: Make this sharper. Remove anything that does not directly support the main argument. Tighten the language.",
  },
  {
    name: "Simplify",
    does: "Removes complexity and makes the output easier to understand and use.",
    example: "Simplify: Rewrite this so a smart 14-year-old could understand it. No jargon. No acronyms unless you define them.",
  },
  {
    name: "MakeExecutive",
    does: "Elevates the response to be clear, concise, and decision-ready.",
    example: "MakeExecutive: Rewrite this as an executive summary. Lead with the recommendation. Support with 3 data points. End with the decision needed.",
  },
  {
    name: "CompareOptions",
    does: "Breaks down multiple approaches so you can quickly choose the best one.",
    example: "CompareOptions: Give me 3 approaches to this problem. For each one: what it costs, how long it takes, what could go wrong, and who it is best for.",
  },
  {
    name: "StressTest",
    does: "Finds where an idea could fail and exposes risks before execution.",
    example: "StressTest: Assume this plan fails. What are the 3 most likely reasons? For each one, what early warning sign would I see?",
  },
  {
    name: "Summarize",
    does: "Condenses information into only what matters.",
    example: "Summarize: Give me the 3 most important takeaways from this. Nothing else.",
  },
];

export default function LLMInstructionSetPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Framework
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        Stop Prompting. Start Operating.
      </h1>
      <p className="mt-2 text-sm text-zinc-400">By MrPrompts</p>

      <div className="mt-10 space-y-6 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <p className="text-lg">
          Most people use AI like a search bar. That is why they get average
          results.
        </p>
        <p>
          High performers do not "prompt better." They operate better. They use
          simple, repeatable instructions that force the model to think clearly,
          respond precisely, and produce usable output.
        </p>
      </div>

      {/* What this is + how to use it */}
      <section className="mt-12 rounded-xl border-2 border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-900/10">
        <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">What this is and how to use it</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            Below are 15 instructions you can type directly into any AI tool.
            Claude, ChatGPT, Gemini, Perplexity. Any of them. You do not need
            special software or technical knowledge. You just type the
            instruction before your request.
          </p>
          <p>
            Each instruction tells the AI how to think about your request. Instead
            of hoping it gives you something useful, you are telling it exactly
            what kind of output you need, how to structure it, and what to focus on.
          </p>
          <p>
            <strong>Here is a simple example.</strong> Say you need help with a
            marketing plan. Instead of typing "give me a marketing plan," you type:
          </p>
          <div className="rounded-lg bg-zinc-900 p-4">
            <p className="font-mono text-xs leading-relaxed text-zinc-300">
              DefineOutcome: A 30-day marketing plan that generates 50 qualified leads{"\n"}
              AddContext: We are a 20-person consulting firm targeting CFOs{"\n"}
              ForceAction: Give me the exact steps to execute this week{"\n"}
              CheckGaps: What am I missing that could make this fail?
            </p>
          </div>
          <p>
            That is it. You typed four short instructions before your request.
            The AI now knows what success looks like, who you are, that you want
            action steps not ideas, and that you want it to find the holes in its
            own thinking. The output you get back will be dramatically more useful
            than "give me a marketing plan."
          </p>
          <p>
            <strong>You can use one instruction or stack several.</strong> Start
            with just one. Add more as you get comfortable. The instructions work
            individually, but they compound when you combine them. Three
            instructions together will change how you work with AI. You will
            wonder why you ever used it without them.
          </p>
        </div>
      </section>

      {/* The Instruction Set */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">
          The 15 Instructions
        </h2>
        <p className="mt-3 text-sm text-zinc-500">
          Each one does one job. Copy any instruction and type it into your
          AI tool before your request. The examples show you exactly what to
          write.
        </p>

        <div className="mt-10 space-y-6">
          {INSTRUCTIONS.map((inst) => (
            <div
              key={inst.name}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="text-lg font-bold text-emerald-600">
                {inst.name}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {inst.does}
              </p>
              <div className="mt-4 rounded-lg bg-zinc-900 p-4">
                <p className="font-mono text-xs leading-relaxed text-zinc-300">
                  {inst.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Use It */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">
          How to actually use this
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Most people will read this and do nothing. Do not be most people.
        </p>

        <div className="mt-8 space-y-8">
          {/* Step 1 */}
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                1
              </span>
              <h3 className="text-lg font-bold">Pick 3</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Start with just three instructions:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li className="font-semibold text-emerald-600">DefineOutcome</li>
              <li className="font-semibold text-emerald-600">ForceAction</li>
              <li className="font-semibold text-emerald-600">CheckGaps</li>
            </ul>
            <p className="mt-3 text-sm text-zinc-500">
              That alone puts you ahead of 90% of AI users.
            </p>
          </div>

          {/* Step 2 */}
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                2
              </span>
              <h3 className="text-lg font-bold">Stack them</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-500">Instead of asking:</p>
            <div className="mt-2 rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
              <p className="font-mono text-xs text-zinc-500">"Give me marketing ideas"</p>
            </div>
            <p className="mt-3 text-sm text-zinc-500">You say:</p>
            <div className="mt-2 rounded-lg bg-zinc-900 p-4">
              <p className="font-mono text-xs leading-relaxed text-zinc-300">
                DefineOutcome: Generate 50 qualified leads per week{"\n"}
                AddContext: B2B SaaS company, $15M revenue, selling to VPs{"\n"}
                ForceAction: Give exact steps to execute this week{"\n"}
                CheckGaps: What am I missing?
              </p>
            </div>
            <p className="mt-3 text-sm text-zinc-500">
              Now you are not prompting. You are directing.
            </p>
          </div>

          {/* Step 3 */}
          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                3
              </span>
              <h3 className="text-lg font-bold">Iterate like an operator</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
              Do not restart. Refine. Use these three instructions on any output
              to sharpen it:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li className="font-semibold text-emerald-600">ImproveOutput</li>
              <li className="font-semibold text-emerald-600">Simplify</li>
              <li className="font-semibold text-emerald-600">MakeExecutive</li>
            </ul>
            <p className="mt-3 text-sm text-zinc-500">
              Each pass gets sharper. Three passes is usually enough to go from
              draft to done.
            </p>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="mt-16 rounded-xl bg-zinc-900 p-8 dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">The shift</h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          This is the shift most people miss: you are not asking the AI for
          answers. You are directing a system to produce outcomes. The
          instructions above are how operators think. They define what they want,
          provide the right context, force action, and refine until the output is
          ready to use.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          Do not overthink this. Take one thing you are already doing with AI
          and apply three of these instructions. Simple inputs. Better outputs.
        </p>
      </section>

      {/* Download */}
      <section className="mt-12 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h3 className="text-lg font-bold">Get the complete instruction set</h3>
        <p className="mt-2 text-sm text-zinc-500">
          All 15 instructions with examples in a single downloadable file.
          Print it. Pin it. Use it daily.
        </p>
        <Link
          href="/build/prompts"
          className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700"
        >
          Build your prompt library &rarr;
        </Link>
      </section>

      {/* Research */}
      <section className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-bold">Why this works: what the research says</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            Anthropic's prompt engineering research shows that structured,
            context-rich instructions outperform ad-hoc prompts by 40-60% on
            task completion quality. The biggest factors: specificity of the
            request, amount of relevant context, and clarity of the expected
            output format. Every instruction in this set targets one of those
            three factors.
          </p>
          <p>
            OpenAI's documentation on best practices confirms that decomposing
            complex tasks into atomic steps produces significantly better output
            than single monolithic prompts. The instruction set applies this
            principle directly: each instruction does one job, and stacking them
            builds complexity without sacrificing clarity.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ
            items={[
              {
                question: "Do I need to use all 15 instructions?",
                answer:
                  "No. Start with three: DefineOutcome, ForceAction, and CheckGaps. Those three alone will transform your AI output. Add others as you need them. Most people settle into using 5-7 regularly.",
              },
              {
                question: "Does this work with any AI model?",
                answer:
                  "Yes. These instructions work with Claude, ChatGPT, Gemini, Perplexity, and any other LLM. The principles are model-agnostic because they are about clear communication, not model-specific syntax.",
              },
              {
                question:
                  "What is the difference between this and prompt engineering?",
                answer:
                  "Prompt engineering is about crafting individual prompts. This is about building an operating system for how you interact with AI. You stop writing prompts from scratch and start assembling instructions. The shift is from creative writing to systematic operation.",
              },
              {
                question: "How is this different from the prompt library?",
                answer:
                  "The prompt library gives you ready-made templates for specific tasks (sales calls, marketing campaigns, HR reviews). The instruction set gives you the building blocks to create your own prompts for any task. The library is the output. The instruction set is the operating system.",
              },
            ]}
          />
        </div>
      </div>

      <PageFooterCTA />
    </article>
  );
}
