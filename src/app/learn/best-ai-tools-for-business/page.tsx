import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "Best AI Tools for Business in 2026 — An Opinionated Guide",
  description:
    "The AI tools worth your time and money in 2026. Honest recommendations for business professionals from someone who uses them all. Claude, ChatGPT, Perplexity, and more.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/best-ai-tools-for-business" },
};

const TOOLS = [
  { category: "AI Assistants", tools: [
    { name: "Claude", maker: "Anthropic", price: "Free / $20/mo Pro / $30/seat Teams", verdict: "Best for", best: "Long-form writing, analysis, coding, knowledge base work", detail: "Claude produces the most thoughtful, nuanced output of any AI assistant. It handles long documents better than any competitor and is the engine behind the MrPrompts wiki builder. The Teams plan adds admin controls and data privacy guarantees. If you pick one AI assistant, make it Claude." },
    { name: "ChatGPT", maker: "OpenAI", price: "Free / $20/mo Plus / $30/seat Teams", verdict: "Best for", best: "Ecosystem, plugins, quick tasks, image generation", detail: "ChatGPT has the largest ecosystem of integrations and plugins. Its image generation (DALL-E) is built in. It is faster for quick, simple tasks. The GPT Store gives you access to thousands of specialized mini-apps. If you are in the Microsoft ecosystem, Copilot (which uses GPT) may be the better entry point." },
    { name: "Gemini", maker: "Google", price: "Free / $20/mo Advanced", verdict: "Best for", best: "Google Workspace integration, multimodal input", detail: "If your team lives in Google Docs, Sheets, and Gmail, Gemini's native integration is compelling. The multimodal capabilities (analyzing images, PDFs, and documents) are strong. It is not as polished as Claude for long-form work, but the Google integration is genuinely useful for Google-first organizations." },
  ]},
  { category: "Research", tools: [
    { name: "Perplexity", maker: "Perplexity AI", price: "Free / $20/mo Pro", verdict: "Best for", best: "Web research with citations, fact-checking, current information", detail: "Perplexity is the only AI tool that searches the web in real-time and cites its sources. Use it when you need current information, want to verify claims from another AI, or need to research a topic quickly. The Pro version has access to multiple AI models and unlimited searches. Essential complement to Claude or ChatGPT." },
    { name: "NotebookLM", maker: "Google", price: "Free", verdict: "Best for", best: "Analyzing your own documents, podcast-style summaries", detail: "Upload documents, and NotebookLM creates an interactive knowledge base you can query. Its Audio Overview feature turns documents into surprisingly engaging podcast-style conversations. Excellent for processing long reports, research papers, or meeting transcripts. Free and surprisingly good." },
  ]},
  { category: "Automation", tools: [
    { name: "Zapier", maker: "Zapier", price: "Free tier / $20/mo Starter", verdict: "Best for", best: "Simple automations, no-code, largest integration library", detail: "Connect AI tools to your existing apps without writing code. The AI actions let you add Claude or ChatGPT steps directly into automation workflows. Best for simple, reliable automations like: when a form is submitted, use AI to summarize it and post to Slack. The free tier handles basic needs." },
    { name: "Make", maker: "Make (formerly Integromat)", price: "Free tier / $9/mo Core", verdict: "Best for", best: "Complex multi-step workflows, visual builder, branching logic", detail: "More powerful than Zapier for complex workflows with conditional logic, loops, and multiple branches. The visual builder makes it easy to see the entire flow. Better value per automation at scale. Choose Make when your workflow has more than 3 steps or needs if/then logic." },
  ]},
  { category: "Knowledge Management", tools: [
    { name: "Notion", maker: "Notion Labs", price: "Free / $10/seat Plus", verdict: "Best for", best: "Team collaboration, databases, shared wikis", detail: "The most accessible tool for building AI knowledge bases. Real-time collaboration, powerful databases, and a clean interface that non-technical teams can use immediately. Notion AI is built in but not as capable as Claude or ChatGPT. Best for teams and individuals who want to get started fast without a learning curve." },
    { name: "Obsidian", maker: "Obsidian", price: "Free / $50/yr Sync", verdict: "Best for", best: "Local-first, markdown-based, power users", detail: "For power users who want local-first, markdown-based control. Bidirectional linking and a plugin ecosystem make it powerful for wiki-style knowledge bases. Works perfectly with CLAUDE.md schemas. The learning curve is real but worth it for individuals and small teams who want full ownership of their data." },
  ]},
  { category: "Content Creation", tools: [
    { name: "Midjourney", maker: "Midjourney", price: "$10/mo Basic", verdict: "Best for", best: "Professional image generation, consistent quality", detail: "The highest-quality image generation tool available. Produces visuals that look professional enough for client presentations, social media, and marketing materials. Operates through Discord, which is unusual but workable. Worth the subscription if you need images regularly." },
    { name: "ElevenLabs", maker: "ElevenLabs", price: "Free tier / $5/mo Starter", verdict: "Best for", best: "Text-to-speech, voice cloning, audio content", detail: "The most natural-sounding AI voice tool. Use it to turn written guides into audio content, create voiceovers for videos, or build audio versions of your newsletter. The voice cloning feature can create a consistent brand voice across all audio content." },
  ]},
];

export default function BestAIToolsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Tool Guide</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Best AI Tools for Business in 2026</h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By Wayne Cederholm</p>
      <p className="mt-4 text-lg text-zinc-500">An opinionated guide from someone who uses these tools every day. Not a listicle. Not sponsored. Just honest recommendations for business professionals who want to build with AI.</p>

      <div className="mt-12 space-y-14">
        {TOOLS.map((cat) => (
          <section key={cat.category}>
            <h2 className="text-xl font-bold">{cat.category}</h2>
            <div className="mt-6 space-y-6">
              {cat.tools.map((tool) => (
                <div key={tool.name} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{tool.name}</h3>
                    <span className="text-xs text-zinc-400">{tool.maker}</span>
                  </div>
                  <p className="mt-1 text-xs text-zinc-400">{tool.price}</p>
                  <p className="mt-3 text-sm font-medium text-emerald-600">{tool.verdict}: {tool.best}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{tool.detail}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
        <h2 className="text-lg font-bold">The starter stack</h2>
        <p className="mt-2 text-sm text-zinc-500">If you are starting from scratch, here is what I recommend:</p>
        <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li><strong>Day 1:</strong> Claude (free tier) for writing and analysis</li>
          <li><strong>Week 1:</strong> Add Perplexity (free) for research</li>
          <li><strong>Month 1:</strong> Add Zapier (free tier) for your first automation</li>
          <li><strong>When ready:</strong> Claude Pro ($20/mo) + Notion or any note-taking app for knowledge bases</li>
        </ul>
        <p className="mt-3 text-xs text-zinc-400">Some links on this page may be affiliate links. We only recommend tools we use. <Link href="/terms" className="text-emerald-600 hover:text-emerald-700">Full disclosure</Link>.</p>
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold">Frequently asked questions</h2>
        <div className="mt-8">
          <FAQ items={[
            { question: "Do I need to pay for AI tools?", answer: "No. The free tiers of Claude, ChatGPT, and Perplexity are genuinely useful for most professionals. Pay when you hit limits: context window size, speed, or usage caps. Most people should use free tiers for at least a month before deciding what to upgrade." },
            { question: "Claude or ChatGPT?", answer: "Claude for depth. ChatGPT for breadth. If you write long documents, build knowledge bases, or need nuanced analysis, Claude. If you need plugins, image generation, or are in the Microsoft ecosystem, ChatGPT. Both are excellent. Pick one, learn it well, then add the other when you have a specific reason." },
            { question: "What AI tools should a team start with?", answer: "Claude Teams or ChatGPT Enterprise for the AI assistant (pick based on your ecosystem). Perplexity for research. Zapier for basic automation. That covers 90% of team needs. Add specialized tools only when you have a specific use case that the general tools cannot handle." },
          ]} />
        </div>
      </div>
    </article>
  );
}
