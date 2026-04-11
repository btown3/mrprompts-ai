import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a System Prompt? — MrPrompts Glossary",
  description:
    "A system prompt is a hidden instruction given to an AI at the start of a conversation that defines its role, behavior, and constraints. Learn how to write one.",
  alternates: { canonical: "https://www.mrprompts.ai/glossary/system-prompt" },
};

export default function SystemPromptPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/glossary" className="text-sm text-emerald-600 hover:text-emerald-700">
        &larr; Glossary
      </Link>
      <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Definition
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
        What is a System Prompt?
      </h1>

      <div className="mt-8 rounded-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          A system prompt is a hidden instruction given to an AI model at the start of a conversation
          that defines its role, personality, behavior, and constraints. The user does not see the
          system prompt, but it shapes every response the AI generates. System prompts are how
          developers and builders customize AI behavior without modifying the underlying model.
        </p>
      </div>

      <div className="mt-12 space-y-10 text-zinc-600 leading-relaxed dark:text-zinc-400">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">How system prompts work</h2>
          <p className="mt-3">
            When you use an AI chatbot, there are actually two types of messages being sent: the
            system message (set by the developer) and the user message (what you type). The system
            message is processed first and acts as a persistent instruction that colors every
            subsequent response. It is the most powerful position in the conversation because the
            model treats it as ground truth.
          </p>
          <p className="mt-3">
            A system prompt typically includes: the AI&apos;s role (&quot;You are a senior sales
            strategist&quot;), its behavioral rules (&quot;Always provide evidence for claims&quot;), its
            constraints (&quot;Do not give legal advice&quot;), its output format (&quot;Respond in bullet
            points&quot;), and its tone (&quot;Professional but approachable&quot;). The more specific the system
            prompt, the more consistent and useful the AI&apos;s behavior.
          </p>
          <p className="mt-3">
            System prompts are different from CLAUDE.md files in scope. A system prompt controls one
            conversation. A CLAUDE.md file controls how an AI interacts with an entire project or
            knowledge base. In practice, they serve complementary purposes: the system prompt sets the
            AI&apos;s personality, while CLAUDE.md provides the structural context.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Why it matters</h2>
          <p className="mt-3">
            System prompts are the foundation of every custom AI application. When you use a
            customer support chatbot, a writing assistant, or an AI-powered tool, the system prompt
            is what makes it behave differently from a generic AI. Without system prompts, every AI
            interaction would feel identical regardless of the use case.
          </p>
          <p className="mt-3">
            For professionals building with AI, understanding system prompts is essential. Whether
            you are creating a custom GPT, building an AI tool for your team, or setting up an
            automated workflow, the system prompt is where you define the AI&apos;s behavior. A
            well-written system prompt can replace hours of manual instruction that would otherwise
            be repeated in every conversation.
          </p>
          <p className="mt-3">
            The most common mistake is writing system prompts that are too vague. &quot;Be helpful&quot; tells
            the AI nothing useful. &quot;You are a B2B content strategist. Write in a direct, evidence-based
            style. Target marketing directors at mid-market SaaS companies. Avoid jargon&quot; gives the
            AI everything it needs to be genuinely useful.
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related terms</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/glossary/prompt-engineering" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Prompt Engineering</Link>
          <Link href="/glossary/claude-md" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">CLAUDE.md</Link>
          <Link href="/glossary/context-window" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Context Window</Link>
          <Link href="/glossary/token" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">Tokens</Link>
          <Link href="/glossary/ai-agents" className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm hover:border-emerald-300 dark:border-zinc-700">AI Agents</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Related guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link href="/guides/prompt-library-starter" className="text-emerald-600 hover:text-emerald-700">Prompt Library Starter Guide &rarr;</Link></li>
          <li><Link href="/guides/claude-md-masterclass" className="text-emerald-600 hover:text-emerald-700">CLAUDE.md Masterclass &rarr;</Link></li>
          <li><Link href="/learn/ai-for-non-technical" className="text-emerald-600 hover:text-emerald-700">AI for Non-Technical Leaders &rarr;</Link></li>
        </ul>
      </div>
    </article>
  );
}
