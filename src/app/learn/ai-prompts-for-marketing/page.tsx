import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/app/components/FAQ";

export const metadata: Metadata = {
  title: "AI Prompts for Marketing — 15 Ready-to-Use Templates",
  description:
    "Copy-paste AI prompt templates for marketing professionals. Campaign briefs, competitor analysis, email sequences, content calendars, and social media strategy.",
  alternates: { canonical: "https://www.mrprompts.ai/learn/ai-prompts-for-marketing" },
};

const PROMPTS = [
  { name: "Campaign Brief Generator", category: "Strategy", prompt: `You are a senior marketing strategist. I need a campaign brief for [product/service].

Target audience: [describe demographics, psychographics, pain points]
Campaign goal: [awareness / leads / conversions / retention]
Budget range: [range]
Timeline: [start and end dates]
Brand voice: [describe tone and style]

Generate a complete brief including:
1. Positioning statement (one sentence)
2. Key messages (3, ranked by priority)
3. Channel recommendations with rationale for each
4. Content types needed per channel
5. Content calendar outline for the first 2 weeks
6. KPIs to track with target numbers
7. Budget allocation by channel (percentage)

Format as a structured document I can share with my team and agency partners.` },
  { name: "Competitor Content Analysis", category: "Research", prompt: `Analyze the content strategy of [competitor name] based on their website [URL] and social presence.

Evaluate:
1. What topics do they publish about most frequently?
2. What content formats do they use? (blog, video, podcast, newsletter, social)
3. What is their posting cadence on each channel?
4. What tone and style do they use? (formal, casual, technical, aspirational)
5. What content gets the most engagement? (if visible)
6. What topics are they NOT covering that we could own?
7. What is their apparent SEO strategy? (what keywords do they seem to target)

End with 3 specific content opportunities we should pursue that they are missing.` },
  { name: "Email Nurture Sequence", category: "Email", prompt: `Write a [5]-email nurture sequence for [product/service].

Audience: [describe who they are and where they are in the journey]
Entry point: [how did they get on this list? Downloaded something? Signed up?]
Goal: Move them from [awareness/consideration] to [trial/purchase/booking]
Tone: [professional / conversational / bold / warm]
Brand voice notes: [any specific dos and don'ts]

For each email provide:
- Subject line (under 50 characters, no clickbait)
- Preview text (under 90 characters)
- Body copy (under 200 words)
- CTA (one clear action)
- Send timing (days after previous email)

Each email should build on the last. Email 1 delivers value. Email 2 builds credibility. Email 3 addresses the main objection. Email 4 creates urgency. Email 5 is the direct ask.` },
  { name: "Social Media Content Calendar", category: "Social", prompt: `Create a 2-week social media content calendar for [brand/product].

Platforms: [LinkedIn / X / Instagram / TikTok — specify which]
Posting frequency: [X posts per week per platform]
Content pillars: [list 3-4 themes you want to cover]
Goal: [awareness / engagement / traffic / leads]
Audience: [describe]

For each post include:
- Platform
- Post type (text, image, carousel, video, poll)
- Copy (platform-appropriate length)
- Visual direction (what the image or video should show)
- Hashtags (if relevant to the platform)
- Best time to post

Mix educational, entertaining, and promotional content in a 60/30/10 ratio. No post should feel like an ad.` },
  { name: "Landing Page Copy", category: "Conversion", prompt: `Write landing page copy for [product/service/offer].

Target audience: [who is this for?]
Main pain point: [what problem does this solve?]
Offer: [what exactly are they getting?]
Price: [if applicable]
Social proof: [testimonials, stats, logos you can include]
Goal: [signup / purchase / book a call]

Structure:
1. Headline (under 10 words, benefit-driven)
2. Subheadline (one sentence expanding on the headline)
3. Problem section (3 sentences describing their pain)
4. Solution section (how your offer solves it)
5. 3 key benefits with supporting details
6. Social proof block
7. FAQ (3 common objections answered)
8. CTA (specific, action-oriented, low-friction)

Write for scanning. Short paragraphs. Bold key phrases. No walls of text.` },
  { name: "Blog Post Outline", category: "Content", prompt: `Create a detailed blog post outline for the topic: "[topic]"

Target keyword: [primary keyword]
Secondary keywords: [list 3-5]
Target word count: [1,500 / 2,000 / 2,500]
Audience: [who is reading this and what do they already know?]
Goal: [rank for keyword / drive signups / build authority / get shares]

Include:
1. Title options (3 alternatives, each under 60 characters)
2. Meta description (under 155 characters)
3. H1 and all H2/H3 headings
4. Key points to cover under each heading (3-5 bullets)
5. Where to include the target keyword naturally
6. Internal links to include (based on our site structure)
7. CTA placement and copy
8. Suggested featured image direction

The outline should be detailed enough that someone could write the full post from it without additional research.` },
  { name: "Brand Voice Guide", category: "Strategy", prompt: `Create a brand voice guide for [brand name].

Industry: [what industry]
Audience: [who we talk to]
Brand personality: [3-5 adjectives that describe the brand]
Competitors to differentiate from: [who we do NOT want to sound like]
Examples of content we like: [paste 2-3 examples of writing you admire]

Generate:
1. Voice description (one paragraph defining how we sound)
2. Tone spectrum (how our tone shifts by context: social vs email vs support vs sales)
3. Do/Don't list (10 specific rules — e.g., "Do use contractions. Don't use exclamation points.")
4. Word list: 10 words we use, 10 words we never use
5. Sample paragraphs: rewrite this generic text in our voice: "We offer innovative solutions that help businesses grow and succeed in today's competitive landscape."

Make it specific enough that a new hire could read this and write in our voice on day one.` },
  { name: "PR Pitch Email", category: "Outreach", prompt: `Write a media pitch email for [story/announcement/launch].

What is the news: [describe in 2 sentences]
Why it matters now: [timeliness hook]
Target publication: [name and type of publication]
Target journalist: [name and beat, if known]
Data or proof points: [any stats, results, or trends to reference]
Available for: [interview, demo, guest post, quote]

Rules:
- Subject line under 50 characters
- Email under 150 words
- Lead with why their readers care, not why we care
- Include one specific data point or surprising fact
- End with a clear, low-commitment ask
- No attachments. No "I'd love to share more." Be specific about what you are offering.` },
];

export default function AIMarketingPromptsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Marketing Prompts</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        AI Prompts for Marketing: 15 Ready-to-Use Templates
      </h1>
      <p className="mt-2 text-sm text-zinc-400">Updated April 2026 · By Wayne Cederholm</p>
      <p className="mt-4 text-lg text-zinc-500">
        Copy-paste prompts for campaign planning, content strategy, email sequences,
        social media, and competitive analysis. Built for marketing professionals
        who want better AI output without learning to code.
      </p>

      <div className="mt-12 space-y-10">
        {PROMPTS.map((p, i) => (
          <section key={i}>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                {p.category}
              </span>
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
            { question: "Can AI write marketing copy that sounds human?", answer: "Yes, but you need to give it your brand voice. The Brand Voice Guide prompt above generates a style guide the AI can follow. Without voice guidance, AI defaults to generic corporate language. With it, the output matches your tone. Always edit the final output — AI gets you 80% there, your judgment makes it 100%." },
            { question: "Which AI tool is best for marketing?", answer: "Claude is strongest for long-form content, strategy docs, and nuanced writing. ChatGPT has more integrations for workflow automation. Perplexity is best for competitive research because it cites sources. For most marketing teams, Claude or ChatGPT plus Perplexity covers everything." },
            { question: "How do I use AI without making my content sound generic?", answer: "Three things: give the AI your brand voice guide, provide specific examples of content you like, and always edit the output with your knowledge of your audience. Generic AI output comes from generic prompts. The more specific context you provide — your audience, your competitors, your constraints — the more distinctive the output." },
          ]} />
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
        <h2 className="text-lg font-bold">Want prompts for other roles?</h2>
        <p className="mt-2 text-sm text-zinc-500">The full Prompt Library has 20+ templates across sales, operations, finance, HR, and consulting.</p>
        <Link href="/guides/prompt-library-starter" className="mt-4 inline-flex text-sm font-semibold text-emerald-600 hover:text-emerald-700">Get the full Prompt Library &rarr;</Link>
      </div>
    </article>
  );
}
