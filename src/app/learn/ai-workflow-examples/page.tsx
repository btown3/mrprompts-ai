import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";
import { PageFooterCTA } from "@/app/components/PageFooterCTA";

export const metadata: Metadata = {
  title: "AI Workflow Examples — 7 Automations You Can Build Today",
  description:
    "Real AI workflow examples for business professionals. Content research, meeting notes, lead enrichment, report generation, and more. Step-by-step with tools listed.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/ai-workflow-examples" },
};

const WORKFLOWS = [
  { name: "Morning News Brief", time: "Saves 30 min/day", tools: "RSS + Claude + Email", description: "Automatically summarize industry news every morning before you open your inbox.", steps: ["Set up RSS feeds or Google Alerts for your industry keywords", "Every morning at 6am, the automation collects new articles", "Claude reads the articles and generates a 5-bullet summary: what happened, why it matters, what to watch", "Summary is emailed to you (or posted to Slack) before your first meeting", "You start every day informed without reading 10 articles"] },
  { name: "Meeting Notes to Actions", time: "Saves 20 min/meeting", tools: "Otter.ai + Claude + Slack/Asana", description: "Every meeting automatically generates a summary, decisions, and action items distributed to the right people.", steps: ["Meeting is recorded and transcribed (Otter.ai, Fireflies, or your video tool's built-in transcription)", "Transcript is sent to Claude: 'Generate a 3-sentence summary, key decisions, and action items with owners and due dates'", "Summary is posted to the meeting's Slack channel", "Action items are created as tasks in your project management tool", "No more 'can someone send the notes?' emails"] },
  { name: "Inbound Lead Research", time: "Saves 20 min/lead", tools: "Form + Perplexity + Claude + CRM", description: "When a lead fills out a form, automatically research their company and prepare a brief before the first call.", steps: ["Trigger: new form submission with name, email, company", "Perplexity researches the company: what they do, size, recent news, industry trends", "Claude generates a one-page brief: company overview, likely pain points, 3 talking points specific to your product", "Brief is attached to the lead record in your CRM", "Sales rep gets a notification: 'New lead with research brief ready'"] },
  { name: "Weekly Client Report", time: "Saves 2-3 hours/week", tools: "Google Sheets + Claude + Google Docs", description: "Pull metrics from a spreadsheet and generate a formatted client report automatically.", steps: ["Your metrics live in a Google Sheet (manually updated or pulled from APIs)", "Weekly trigger pulls the latest data", "Claude receives the data: 'Generate a monthly performance report with executive summary, key metrics (month-over-month), top 3 wins, top 2 concerns, and recommended next steps'", "Report is created in Google Docs with consistent formatting", "Draft email is prepared with the report link for your review before sending"] },
  { name: "Content Repurposing Pipeline", time: "Saves 3-4 hours/piece", tools: "Blog post + Claude + Canva/Buffer", description: "Turn one blog post into 5 social media posts, an email, and a slide deck outline.", steps: ["Start with a published blog post or long-form piece", "Claude extracts the 5 key insights and creates: one LinkedIn post per insight (professional tone), one X/Twitter thread summarizing the whole piece, one email newsletter version (300 words), one slide deck outline (10 slides)", "Each piece is formatted for its platform (character limits, hashtags, etc.)", "Review and schedule through your social media tool", "One piece of content becomes a week of distribution"] },
  { name: "Competitive Intelligence Monitor", time: "Saves 1-2 hours/week", tools: "Google Alerts + Perplexity + Claude + Notion", description: "Automatically track competitor moves and maintain a living competitive intelligence doc.", steps: ["Google Alerts monitors competitor names, product names, and key industry terms", "When new mentions appear, Perplexity enriches the alert with context", "Claude categorizes the update: product launch, pricing change, hiring signal, partnership, or funding", "The categorized update is added to a Notion database with date, competitor, category, and significance", "Monthly: Claude generates a competitive landscape summary from the accumulated data"] },
  { name: "Job Application Screener", time: "Saves 5-10 min/applicant", tools: "ATS + Claude + Slack", description: "Automatically screen applications against your requirements and flag the best candidates.", steps: ["Trigger: new application submitted to your ATS or email", "Claude reads the resume/application against your job requirements (pulled from the job description)", "Generates a fit assessment: meets requirements (Y/N for each), relevant experience highlights, potential concerns, and overall recommendation (advance / maybe / pass)", "Strong candidates are flagged with a Slack notification to the hiring manager", "Note: Always have a human review before rejecting any candidate. AI screens for fit, humans make decisions"] },
];

export default function AIWorkflowExamplesPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Workflow Guide</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">AI Workflow Examples: 7 Automations You Can Build Today</h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By Wayne Cederholm</p>
      <p className="mt-4 text-lg text-zinc-500">Real workflows with real tools. Each one saves hours per week and requires no coding to set up. Copy the structure, plug in your tools, and let it run. For even more power, pair workflows with an <Link href="/learn/ai-knowledge-base-guide" className="text-emerald-600 hover:text-emerald-700">AI knowledge base</Link> so your automations have persistent context about your work.</p>

      <div className="mt-12 space-y-10">
        {WORKFLOWS.map((wf, i) => (
          <section key={i} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">{wf.name}</h2>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">{wf.time}</span>
            </div>
            <p className="mt-1 text-xs font-medium text-zinc-400">Tools: {wf.tools}</p>
            <p className="mt-3 text-sm text-zinc-500">{wf.description}</p>
            <div className="mt-4 space-y-2">
              {wf.steps.map((step, j) => (
                <div key={j} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-500 dark:bg-zinc-800">{j + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "Do I need to know how to code to build these workflows?", answer: "No. All of these can be built using no-code tools like Zapier or Make. You connect apps visually, set up triggers, and configure AI steps through simple forms. The hardest part is writing the prompt for the AI step, and this guide gives you those prompts." },
            { question: "How much do these automations cost to run?", answer: "Most can run for under $50/month total. Zapier's free tier handles simple automations. AI API costs depend on usage but typically run $5-20/month for moderate use. The time savings (5-15 hours/week) far exceed the cost." },
            { question: "What if the AI makes a mistake in an automated workflow?", answer: "Always include a human review step for anything that goes to clients or makes decisions about people. Use AI for drafting and categorizing, then have a human approve before the final action. The workflows above include review steps where they matter most." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold">Want the complete blueprint bundle?</h2>
        <p className="mt-2 text-sm text-zinc-500">5 fully documented workflow blueprints with prompts, tool configs, and setup instructions. Or jump straight to the <Link href="/build/workflows" className="text-emerald-600 hover:text-emerald-700">workflow build track</Link> and start building.</p>
        <Link href="/guides/workflow-blueprints" className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700">Get the Workflow Blueprints (free) &rarr;</Link>
      </div>

      <PageFooterCTA />
    </article>
  );
}
