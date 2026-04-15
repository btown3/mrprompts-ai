import type { Metadata } from "next";
import Link from "next/link";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "Andrej Karpathy: The Architect Who Taught Silicon Valley How to Think",
  description:
    "How a Slovak kid who made Rubik's Cube tutorials became the person whose career maps the entire arc of the deep learning revolution. From ImageNet to OpenAI to Tesla to the end of coding.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/karpathy" },
};

export default function KarpathyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
        Deep Dive
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        Andrej Karpathy: The Architect Who Taught Silicon Valley How to Think
      </h1>
      <p className="mt-2 text-sm text-zinc-400">By MrPrompts</p>
      <p className="mt-6 text-lg text-zinc-500">
        On Christmas Day 2025, Andrej Karpathy posted something on X that
        racked up 14 million views. "I've never felt this much behind as a
        programmer," he wrote. A founding member of OpenAI. The former
        Director of AI at Tesla. A man who competed against neural networks
        on ImageNet and lost. Admitting the ground beneath him had shifted
        so violently he could barely recognize his own profession.
      </p>
      <p className="mt-4 text-zinc-600 leading-relaxed dark:text-zinc-400">
        We wrote the full story. From Bratislava to Toronto to Stanford to
        OpenAI to Tesla to the moment in December 2024 when he stopped
        writing code entirely. How he got here, what he built along the way,
        and what it means for everyone working with AI.
      </p>

      <a
        href="https://substack.com/home/post/p-194237613"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block rounded-2xl border-2 border-zinc-200 p-8 transition hover:border-emerald-400 hover:shadow-lg dark:border-zinc-800 dark:hover:border-emerald-600"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
          Read on Substack
        </span>
        <h2 className="mt-3 text-xl font-bold">
          Andrej Karpathy: The Architect Who Taught Silicon Valley How to Think
        </h2>
        <p className="mt-2 text-sm text-zinc-500">
          The full deep dive. From badmephisto to AutoResearch. His career
          as a lens through which to understand the entire arc of the deep
          learning revolution.
        </p>
        <span className="mt-4 inline-flex text-sm font-semibold text-emerald-600">
          Read the full article &rarr;
        </span>
      </a>

      {/* Divider */}
      <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800" />

      {/* Kept content */}
      <div className="mt-16 space-y-16 text-zinc-600 leading-relaxed dark:text-zinc-400">

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">How Karpathy thinks about AI in 2026</h2>

          <h3 className="mt-8 text-lg font-bold text-zinc-900 dark:text-white">Jaggedness</h3>
          <p className="mt-3">
            "I simultaneously feel like I'm talking to an extremely brilliant
            PhD student who's been a systems programmer their entire life, and
            a 10-year-old." Models are unevenly capable in ways humans are
            not. A human expert in systems programming is probably decent in
            adjacent domains. Models solve hard distributed systems problems
            and then fail at something obvious. Your job is to catch the
            10-year-old moments before they compound.
          </p>

          <h3 className="mt-10 text-lg font-bold text-zinc-900 dark:text-white">Token throughput</h3>
          <p className="mt-3">
            "I feel nervous when I have subscription left over. That just
            means I haven't maximized my token throughput." In the GPU era, an
            idle GPU meant wasted capital. Karpathy applies the same logic to
            tokens. Idle tokens mean you are the bottleneck. You are not
            delegating fast enough. Finishing one agent task and then starting
            the next means working serially in a parallel world.
          </p>

          <h3 className="mt-10 text-lg font-bold text-zinc-900 dark:text-white">AGI is still a decade away</h3>
          <p className="mt-3">
            In October 2025, Karpathy said artificial general intelligence
            remains at least a decade away. "Overall, the models are not
            there." He criticized the industry for "trying to pretend like
            this is amazing, and it's not. It's slop." He sees 2025-2035 as
            the "decade of agents" rather than "the year of agents."
          </p>

          <h3 className="mt-10 text-lg font-bold text-zinc-900 dark:text-white">We are summoning ghosts, not building animals</h3>
          <p className="mt-3">
            When you build an animal (a robot, an embodied agent), you create
            something that navigates physical reality with all its
            constraints. When you train an LLM, you are "summoning" a
            statistical representation of human thought patterns encoded in
            text. It is not learning to survive. It is learning to predict
            what humans would say next. This framing explains both the
            capabilities and limitations of current systems.
          </p>

          <h3 className="mt-10 text-lg font-bold text-zinc-900 dark:text-white">More AI means more jobs (different jobs)</h3>
          <p className="mt-3">
            Karpathy uses the ATM analogy. Banks introduced ATMs expecting to
            replace tellers. The cost of running a branch fell. More branches
            opened. Result: more tellers. Code is now cheaper to produce.
            Latent demand gets unlocked that was always there but too
            expensive to serve. More software gets built. The skills that
            remain valuable are the ones that direct the new volume. Not
            writing code. Architecting systems, decomposing problems,
            specifying objectives, evaluating outputs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Why Karpathy matters</h2>
          <p className="mt-3">
            The timing. He entered AI during its wilderness years, studied
            under Hinton when neural networks were unfashionable, and
            graduated just as deep learning proved its worth on ImageNet.
          </p>
          <p className="mt-3">
            The range. Fundamental research at Stanford. Foundational
            infrastructure at OpenAI. Production deployment at scale at
            Tesla. Education and tooling at Eureka Labs. Few people have
            operated at all four levels.
          </p>
          <p className="mt-3">
            The honesty. He will tell you RLHF is terrible. He will say AGI
            is a decade away when everyone else claims it is imminent. He
            will publicly admit feeling "behind as a programmer" when his
            profession gets refactored. That candor makes him a trusted voice
            in an industry that has a problem with hype.
          </p>
          <p className="mt-3">
            And the arc. From learning to researching to building
            infrastructure to deploying at scale to teaching to becoming a
            firsthand witness to the potential obsolescence of his own
            profession. The fact that one of the world's leading AI
            researchers stopped writing code entirely in December 2024 is
            perhaps the clearest signal about where this is heading.
          </p>
          <p className="mt-3">
            When he says programming is "being dramatically refactored," when
            he reveals that agents are writing 100% of his code, these are
            not hypothetical scenarios. This is his daily reality.
          </p>
          <p className="mt-3">
            If someone with Karpathy's credentials has been forced to
            rethink what his profession means, the rest of us should probably
            pay attention.
          </p>
        </section>
      </div>

      {/* Related */}
      <section className="mt-16 rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="text-lg font-bold">Build on Karpathy's ideas</h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <p>
            The Knowledge Base System Karpathy described is available as a
            complete, step-by-step guide on MrPrompts. Same architecture,
            same compound effect, no coding required.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link href="/learn/llm-knowledge-base-system" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">The LLM Knowledge Base System</p>
            <p className="mt-1 text-xs text-zinc-500">The complete guide. Every step, every prompt.</p>
          </Link>
          <Link href="/learn/llm-instruction-set" className="rounded-lg border border-zinc-200 p-4 transition hover:border-emerald-300 dark:border-zinc-700 dark:hover:border-emerald-800">
            <p className="text-sm font-semibold">The LLM Instruction Set</p>
            <p className="mt-1 text-xs text-zinc-500">15 instructions that change how you use AI.</p>
          </Link>
        </div>
      </section>

      <PageFooterCTA />
    </article>
  );
}
