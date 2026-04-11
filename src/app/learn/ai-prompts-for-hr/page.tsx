import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "AI Prompts for HR — 12 Ready-to-Use Templates",
  description:
    "Copy-paste AI prompt templates for HR professionals. Job descriptions, performance reviews, onboarding, policy writing, and employee communications.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/ai-prompts-for-hr" },
};

const PROMPTS = [
  { name: "Job Description Builder", category: "Recruiting", prompt: `Write a job description for [role title] at [company name].

Team: [which department]
Reports to: [manager title]
Level: [junior / mid / senior / lead / director]
Location: [remote / hybrid / office — city]
Salary range: [if disclosing]

Key responsibilities: [list 3-5 main duties]
Must-have skills: [list non-negotiable requirements]
Nice-to-have skills: [list preferred but not required]

Tone: [professional / startup-casual / mission-driven]

Rules:
- Under 500 words total
- No cliches: "rock star," "ninja," "fast-paced environment," "wear many hats"
- Lead with what the person will DO, not who the company IS
- Include a section on what makes this role unique or interesting
- End with how to apply
- Use inclusive language throughout` },
  { name: "Performance Review Framework", category: "Performance", prompt: `Create a performance review template for [role type / level].

Review period: [Q1 2026 / annual / etc.]

Evaluate across these dimensions:
1. Core job competencies (specific to this role)
2. Collaboration and communication
3. Growth, learning, and initiative
4. Impact and results delivered

For each dimension, provide:
- What "exceeds expectations" looks like (2 sentences)
- What "meets expectations" looks like (2 sentences)
- What "needs improvement" looks like (2 sentences)
- Two specific questions for the manager to ask in the review conversation

Also include:
- A self-assessment section (3 questions the employee answers before the review)
- A development goals section (what to work on in the next period)

Format as a fillable document the manager can complete in 30 minutes.` },
  { name: "Interview Question Generator", category: "Recruiting", prompt: `Generate interview questions for [role title] at [level].

Key skills we are evaluating: [list 3-5]
Team culture: [describe the team dynamics and what matters]
Red flags to screen for: [things that have gone wrong with past hires]

Create:
- 3 behavioral questions ("Tell me about a time...")
- 3 situational questions ("What would you do if...")
- 2 technical/skill assessment questions (specific to the role)
- 1 culture-fit question that is not "tell me about yourself"
- 1 question the candidate should ask US (to evaluate if they are thoughtful)

For each question, include what a strong answer looks like and what a weak answer looks like.` },
  { name: "Onboarding Plan", category: "Onboarding", prompt: `Create a 30-60-90 day onboarding plan for a new [role title] joining [team/department].

Their manager: [name/title]
Team size: [number]
Key tools they will use: [list]
Their first project or responsibility: [describe]

Week 1: Focus on orientation, access, introductions
Week 2-4: Focus on learning systems, shadowing, first small contributions
Month 2: Focus on independent work, relationship building, first deliverables
Month 3: Focus on full ownership, feedback loop, goal setting

For each week/month include:
- 3-5 specific tasks or milestones
- Who they should meet with and why
- What success looks like at the end of that period
- One check-in question their manager should ask` },
  { name: "Policy Writer", category: "Policy", prompt: `Write a company policy for [policy topic: remote work / PTO / AI usage / expenses / etc.].

Company size: [number of employees]
Industry: [industry]
Existing approach: [what you currently do informally]
Constraints: [any legal, compliance, or cultural requirements]

The policy should include:
1. Purpose (why this policy exists, in 2 sentences)
2. Scope (who it applies to)
3. Guidelines (clear, specific rules — not vague principles)
4. Exceptions (how to request an exception and who approves)
5. Effective date

Rules for writing:
- Plain language. No legalese unless legally required.
- Specific enough to answer "what do I do in this situation?"
- Short enough that people actually read it (under 500 words)
- Include 2-3 examples of common scenarios and how the policy applies` },
  { name: "Employee Communication", category: "Communications", prompt: `Write an internal communication about [topic: org change / new policy / benefit update / leadership change].

Audience: [all employees / specific team / managers only]
Tone: [transparent / celebratory / reassuring / matter-of-fact]
Key message: [the one thing people need to understand]
What is changing: [describe specifically]
Why: [the reason behind the change]
What employees need to do: [any actions required]
Who to contact with questions: [name/channel]

Rules:
- Under 300 words
- Lead with what is changing and why it matters to THEM
- No corporate speak. Write like a human talking to humans.
- Anticipate and answer the top 2 questions people will have
- End with next steps and where to get more information` },
  { name: "Compensation Analysis", category: "Compensation", prompt: `Help me analyze this compensation scenario.

Role: [title]
Current salary: [amount]
Market range for this role: [range, if known]
Location: [city/region]
Experience level: [years]
Performance: [how they have been performing]

The employee is [requesting a raise / up for promotion / at risk of leaving / being benchmarked].

Analyze:
1. Is their current compensation competitive based on the information provided?
2. What factors should I weigh in this decision?
3. What are the risks of each option (raise, no raise, promotion, counter-offer)?
4. Draft a talking-points outline for the conversation with the employee
5. If we cannot increase salary, what non-monetary options could address their concerns?

Be practical. I need to prepare for a conversation, not write a policy paper.` },
  { name: "Exit Interview Questions", category: "Retention", prompt: `Generate exit interview questions for an employee leaving [department/role].

Their tenure: [how long they were here]
Reason for leaving: [if known]
Their manager: [if relevant context]

Create 10 questions that:
1. Start with their overall experience (not why they are leaving)
2. Ask about management quality without putting them on the spot
3. Surface cultural issues they may not have felt safe raising before
4. Ask what we could have done to keep them
5. Ask what their new opportunity offers that we did not
6. End with "what is the one thing you would change about working here?"

Include guidance on how to create psychological safety so they give honest answers, not polite ones.` },
];

export default function AIHRPromptsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">HR Prompts</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">AI Prompts for HR: 12 Ready-to-Use Templates</h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By Wayne Cederholm</p>
      <p className="mt-4 text-lg text-zinc-500">Copy-paste prompts for recruiting, performance management, onboarding, policy writing, and employee communications. Built for HR professionals who want AI to handle the drafting so they can focus on the people. Pair these with an <Link href="/learn/onboarding-knowledge-base" className="text-emerald-600 hover:text-emerald-700">onboarding knowledge base</Link> and new hires get answers from the system instead of interrupting colleagues.</p>

      <div className="mt-12 space-y-10">
        {PROMPTS.map((p, i) => (
          <section key={i}>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">{p.category}</span>
              <h2 className="text-lg font-bold">{p.name}</h2>
            </div>
            <pre className="mt-4 overflow-x-auto whitespace-pre-wrap rounded-lg bg-zinc-900 p-5 text-sm leading-relaxed text-zinc-300">{p.prompt}</pre>
          </section>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "Is it ethical to use AI for HR tasks?", answer: "Yes, when used as a drafting and analysis tool that a human reviews before acting. AI should never make final hiring, firing, or compensation decisions autonomously. Use it to draft the job description, then review for bias. Use it to prepare interview questions, then apply your judgment in the conversation. The human stays in the loop for every decision that affects a person." },
            { question: "Can AI help reduce bias in hiring?", answer: "It can help and it can hurt, depending on how you use it. AI can help by standardizing job descriptions (removing gendered language), creating consistent interview rubrics, and evaluating candidates against the same criteria. But AI can also replicate existing biases in its training data. Always review AI-generated hiring materials for bias before using them." },
            { question: "Should I tell employees we use AI in HR?", answer: "Yes. Transparency builds trust. If you use AI to draft job descriptions, say so. If you use AI to summarize interview notes, say so. Most employees are fine with AI-assisted processes as long as they know a human made the final decision. Hiding AI use and having it discovered later damages trust far more than disclosing it upfront." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold">Want prompts for other roles?</h2>
        <p className="mt-2 text-sm text-zinc-500">The full Prompt Library has 20+ templates across sales, marketing, operations, finance, and consulting. Browse the complete collection in the <Link href="/build/prompts" className="text-emerald-600 hover:text-emerald-700">prompt build track</Link>.</p>
        <Link href="/guides/prompt-library-starter" className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700">Get the full Prompt Library &rarr;</Link>
      </div>
    </article>
  );
}
