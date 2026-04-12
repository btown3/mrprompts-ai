import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "The LLM Instruction Set: Stop Prompting, Start Operating",
  description:
    "15 instructions you can type directly into any AI tool. DefineOutcome, ForceAction, CheckGaps, and 12 more. Each one does a specific job, and they stack together.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/llm-instruction-set" },
};

const INSTRUCTIONS = [
  {
    name: "DefineOutcome",
    does: "Tell the AI what a good answer actually looks like. Without this, it guesses.",
    example: "DefineOutcome: A 90-day onboarding plan that gets new hires to full productivity, with weekly milestones and clear ownership for each task.",
  },
  {
    name: "AddContext",
    does: "Give it the background it needs so you get a relevant answer instead of a generic one.",
    example: "AddContext: We are a 200-person B2B SaaS company. Our sales cycle is 45 days. Average deal size is $35K. We sell to VP-level buyers in financial services.",
  },
  {
    name: "AssignRole",
    does: "Put the AI in a specific mindset. A CFO thinks differently than a marketing lead, and the output reflects that.",
    example: "AssignRole: You are a CFO preparing a board presentation on Q1 results. Your audience is non-operational board members who care about trends, not details.",
  },
  {
    name: "SetConstraints",
    does: "Limit scope, length, or style. Tighter constraints produce tighter answers.",
    example: "SetConstraints: Under 200 words. No bullet points. Written for a CEO who has 90 seconds to read this before a meeting.",
  },
  {
    name: "SpecifyFormat",
    does: "Tell it exactly how to structure the output so you can use it right away.",
    example: "SpecifyFormat: Table with columns: Initiative, Owner, Deadline, Status, Risk Level. Sort by deadline.",
  },
  {
    name: "ForceAction",
    does: "This is the one I use most. It stops the AI from giving you ideas and makes it give you steps.",
    example: "ForceAction: End with exactly 3 actions I can take this week. Each action must include who does it, what they do, and by when.",
  },
  {
    name: "AskUserQuestion",
    does: "Have the AI ask you questions before it answers. This catches bad assumptions early.",
    example: "AskUserQuestion: Before answering, ask me 3 questions that would make your response significantly more useful.",
  },
  {
    name: "ChallengeThinking",
    does: "Push past the obvious. The AI defaults to safe, conventional answers unless you tell it not to.",
    example: "ChallengeThinking: What is the contrarian view here? What would a skeptic say? Where is the conventional wisdom wrong?",
  },
  {
    name: "CheckGaps",
    does: "Ask the AI to audit its own answer. It is surprisingly good at finding what it missed.",
    example: "CheckGaps: Review your answer. What did you leave out? What assumptions did you make? What risks did you not address?",
  },
  {
    name: "ImproveOutput",
    does: "Refine what you already have instead of starting from scratch.",
    example: "ImproveOutput: Make this sharper. Remove anything that does not directly support the main argument. Tighten the language.",
  },
  {
    name: "Simplify",
    does: "Strip out complexity. I use this whenever output comes back full of jargon.",
    example: "Simplify: Rewrite this so a smart 14-year-old could understand it. No jargon. No acronyms unless you define them.",
  },
  {
    name: "MakeExecutive",
    does: "Reformat for decision-makers. Lead with the recommendation, support with data, end with the ask.",
    example: "MakeExecutive: Rewrite this as an executive summary. Lead with the recommendation. Support with 3 data points. End with the decision needed.",
  },
  {
    name: "CompareOptions",
    does: "When you have multiple paths, this lays them out side by side so you can actually choose.",
    example: "CompareOptions: Give me 3 approaches to this problem. For each one: what it costs, how long it takes, what could go wrong, and who it is best for.",
  },
  {
    name: "StressTest",
    does: "Assume the plan fails. Figure out why before you commit to it.",
    example: "StressTest: Assume this plan fails. What are the 3 most likely reasons? For each one, what early warning sign would I see?",
  },
  {
    name: "Summarize",
    does: "Cut everything down to what actually matters.",
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
          Most people type a question into AI and hope for something useful.
          Sometimes it works. Usually the output is generic.
        </p>
        <p>
          The people I see getting consistently good results are not writing
          better questions. They are giving the AI short, specific instructions
          that tell it how to think about the task. That is what this page is about.
        </p>
      </div>

      {/* What this is + how to use it */}
      <section className="mt-12 rounded-xl border-2 border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-900/10">
        <h2 className="text-xl font-bold text-emerald-800 dark:text-emerald-400">What this is and how to use it</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            Below are 15 instructions you can type directly into any AI tool,
            whether that is Claude, ChatGPT, Gemini, or Perplexity. No special
            software. You just type the instruction before your request.
          </p>
          <p>
            Each instruction tells the AI how to approach your task. You are
            not hoping for a good answer. You are specifying what kind of output
            you need, how it should be structured, and where to focus.
          </p>
          <p>
            <strong>A quick example.</strong> Say you need help with a
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
            Four short instructions. Now the AI knows what success looks like,
            who you are, that you want steps (not ideas), and that it should
            find the holes in its own thinking. The difference in output quality
            is significant.
          </p>
          <p>
            <strong>You can use one instruction or stack several.</strong> Start
            with one. Add more as you get comfortable. They work on their own,
            but they compound when combined. I typically use two or three together
            and that covers most of what I need.
          </p>
        </div>
      </section>

      {/* The Instruction Set */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold tracking-tight">
          The 15 Instructions
        </h2>
        <p className="mt-3 text-sm text-zinc-500">
          Copy any of these and type it into your AI tool before your request.
          The examples show you exactly what to write.
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
              These three cover most situations. Start here.
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
              Same question, completely different output.
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
              Each pass gets sharper. Two or three passes usually gets you from
              draft to something you would actually send.
            </p>
          </div>
        </div>
      </section>

      {/* The Shift */}
      <section className="mt-16 rounded-xl bg-zinc-900 p-8 dark:bg-zinc-800">
        <h2 className="text-xl font-bold text-white">The shift</h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          Most people ask AI for answers. That works sometimes. But the better
          mental model is directing a system to produce a specific outcome. You
          define what you want, give it the right context, tell it to act, then
          refine until the output is usable.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          Do not overthink this. Pick one thing you are already doing with AI
          and add a couple of these instructions. See what happens.
        </p>
      </section>

      {/* Download */}
      <section className="mt-12 rounded-xl border border-zinc-200 p-8 text-center dark:border-zinc-800">
        <h3 className="text-lg font-bold">Get the complete instruction set</h3>
        <p className="mt-2 text-sm text-zinc-500">
          All 15 instructions with examples in one place. Keep it handy.
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
            Anthropic's prompt engineering research found that structured,
            context-rich instructions outperform ad-hoc prompts by 40-60% on
            task completion quality. The three biggest factors were specificity,
            relevant context, and output format clarity. Each instruction in
            this set targets at least one of those.
          </p>
          <p>
            OpenAI's best practices documentation makes a similar point:
            breaking complex tasks into smaller steps produces better output
            than a single long prompt. That is the idea here. Each instruction
            handles one thing, and you stack them when you need more.
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
                  "No. I would start with DefineOutcome, ForceAction, and CheckGaps. Those cover most situations. Add others when you run into a specific need, like comparing options or simplifying jargon. Most people end up using 5-7 regularly.",
              },
              {
                question: "Does this work with any AI model?",
                answer:
                  "Yes. I have tested these with Claude, ChatGPT, Gemini, and Perplexity. They work because they are about communicating clearly, not about any model-specific syntax.",
              },
              {
                question:
                  "What is the difference between this and prompt engineering?",
                answer:
                  "Prompt engineering usually means crafting one careful prompt for a specific task. This is more like having a toolkit. Instead of writing something from scratch each time, you pick two or three instructions and combine them. Less creative writing, more assembly.",
              },
              {
                question: "How is this different from the prompt library?",
                answer:
                  "The prompt library has ready-made templates for specific tasks like sales calls or marketing campaigns. The instruction set gives you the building blocks to make your own prompts for anything. Think of the library as finished meals and the instruction set as ingredients.",
              },
            ]}
          />
        </div>
      </div>

      <PageFooterCTA />
    </article>
  );
}
