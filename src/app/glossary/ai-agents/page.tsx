import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What are AI Agents? — MrPrompts Glossary",
  description:
    "AI agents are autonomous systems that plan, use tools, and take multi-step actions to accomplish goals. Learn how they work and how they differ from chatbots.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/ai-agents" },
};

export default function AIAgentsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What are AI Agents?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          AI agents are autonomous systems built on top of large language models that can plan
          multi-step tasks, use external tools, make decisions, and take actions to accomplish goals
          without constant human direction. Unlike a chatbot that responds to one message at a time,
          an agent can break a complex goal into subtasks, execute them in sequence, handle errors,
          and deliver a finished result.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How AI agents work</h2>
          <p className="mt-3">
            A standard AI chatbot takes your message, generates a response, and waits for your next
            message. An agent takes your goal and runs with it. It plans the steps needed, decides
            which tools to use (web search, file reading, code execution, API calls), executes each
            step, evaluates the result, and adjusts its plan if something goes wrong.
          </p>
          <p className="mt-3">
            The core loop of an agent is: observe the current state, plan the next action, execute
            it, and evaluate whether the goal has been achieved. This loop repeats until the task is
            done or the agent determines it cannot proceed without human input. Modern agents can
            handle dozens of steps autonomously.
          </p>
          <p className="mt-3">
            Agents are made possible by tool use, which is the ability for an AI model to call
            external functions. A model by itself can only generate text. Give it tools and it can
            search the web, read files, write code, send emails, or interact with any API. The
            combination of reasoning and tool use is what makes agents powerful.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            Agents represent the next stage of AI adoption. Chatbots help you do individual tasks
            faster. Agents help you automate entire workflows. Instead of prompting an AI ten times
            to complete a project, you describe the project once and the agent handles the rest.
          </p>
          <p className="mt-3">
            For non-technical professionals, understanding agents is important because they are
            becoming embedded in everyday business tools. Email assistants that can draft, schedule,
            and follow up. Research agents that can find sources, summarize them, and compile reports.
            Coding agents that can build features from descriptions. These are all agent patterns.
          </p>
          <p className="mt-3">
            The key skill shift is moving from prompting to delegation. With chatbots, you write
            better prompts. With agents, you define better goals, constraints, and success criteria.
            The people who learn to work with agents effectively will have a significant productivity
            advantage.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/ai-workflow" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Workflow</Link>
          <Link href="/glossary/system-prompt" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">System Prompt</Link>
          <Link href="/glossary/rag" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">RAG</Link>
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/context-window" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Context Window</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/guides/workflow-blueprints" className="text-emerald-600 hover:text-emerald-700">Workflow Blueprints &rarr;</Link></li>
          <li><Link href="/learn/ai-workflow-examples" className="text-emerald-600 hover:text-emerald-700">AI Workflow Examples &rarr;</Link></li>
          <li><Link href="/learn/best-ai-tools-for-business" className="text-emerald-600 hover:text-emerald-700">Best AI Tools for Business &rarr;</Link></li>
        </ul>
      </div>
    </article>
  );
}
