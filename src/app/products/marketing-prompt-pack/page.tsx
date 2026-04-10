"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
  { name: "Email Nurture Sequence (5 emails)", category: "Email", prompt: `Write a 5-email nurture sequence for [product/service].

Audience: [describe who they are and where they are in the journey]
Entry point: [how did they get on this list? Downloaded something? Signed up?]
Goal: Move them from [awareness/consideration] to [trial/purchase/booking]
Tone: [professional / conversational / bold / warm]

For each email provide:
- Subject line (under 50 characters, no clickbait)
- Preview text (under 90 characters)
- Body copy (under 200 words)
- CTA (one clear action)
- Send timing (days after previous email)

Each email should build on the last. Email 1 delivers value. Email 2 builds credibility. Email 3 addresses the main objection. Email 4 creates urgency. Email 5 is the direct ask.` },
  { name: "Social Media Content Calendar (2 weeks)", category: "Social", prompt: `Create a 2-week social media content calendar for [brand/product].

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
  { name: "Blog Post Outline (SEO-optimized)", category: "Content", prompt: `Create a detailed blog post outline for the topic: "[topic]"

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
6. Internal links to include
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
  { name: "Case Study Writer", category: "Content", prompt: `Write a case study based on this client success:

Client: [company name, industry, size]
Challenge: [what problem they had before working with us]
Solution: [what we did — be specific about the product/service]
Results: [measurable outcomes — numbers, percentages, time saved]
Timeline: [how long from start to results]
Quote from client: [if available, paste it; if not, draft one for approval]

Format:
1. Headline that leads with the result, not the client name
2. Snapshot box: industry, company size, challenge, result (one line each)
3. The Challenge (2-3 paragraphs)
4. The Solution (2-3 paragraphs — what we did and why)
5. The Results (specific metrics, before vs after)
6. Client quote
7. CTA: "See how we can do this for you"

Write for a prospect who is evaluating us. They want to see proof, not a story.` },
  { name: "Product Launch Announcement", category: "Content", prompt: `Write a product launch announcement for [product/feature name].

What it does: [describe in 2 sentences]
Who it is for: [target user]
Key differentiator: [what makes this different from alternatives]
Availability: [when, where, pricing]
Call to action: [what should people do?]

Generate:
1. Press release version (formal, 300 words, includes quotes)
2. Email announcement (to existing customers, 150 words)
3. Social media posts (LinkedIn + X/Twitter versions)
4. Internal Slack announcement (for the team, celebratory but informative)

Each version should hit the same key messages but be formatted for its channel. The LinkedIn post should be the longest. The tweet should be the punchiest.` },
  { name: "A/B Test Hypothesis Generator", category: "Conversion", prompt: `Generate A/B test hypotheses for [page/email/ad — specify which].

Current performance: [conversion rate, click rate, or whatever metric you are tracking]
Goal: [increase signups / reduce bounce / improve click-through / etc.]
Audience: [who visits this page or receives this email]

Generate 5 test hypotheses in this format:
"If we [change], then [metric] will [improve/increase] because [reason]."

For each hypothesis:
- What specifically to change (be precise — not "improve the headline" but "change the headline from feature-focused to outcome-focused")
- What to measure
- Estimated impact (high/medium/low)
- How long to run the test
- Priority ranking (which to test first and why)` },
  { name: "LinkedIn Post Series (5 posts)", category: "Social", prompt: `Create a 5-post LinkedIn series about [topic] for [brand/personal profile].

Audience: [who follows you]
Goal: [build authority / drive traffic / generate leads / grow followers]
Tone: [professional / thought-leadership / conversational / contrarian]

For each post:
- Hook (first 2 lines that stop the scroll — this is the most important part)
- Body (8-12 lines, one idea per line, short sentences)
- CTA (engagement prompt or link)
- Suggested visual (if applicable)

Rules:
- No emojis in the first line
- First line must create curiosity or tension
- Each post should standalone but be thematically connected
- Include one post that is contrarian or challenges conventional wisdom
- Include one post that tells a personal story
- Space them: Monday, Wednesday, Friday over 2 weeks` },
  { name: "Ad Copy Variations (3 versions)", category: "Conversion", prompt: `Write 3 ad copy variations for [product/service] on [platform: Google / Meta / LinkedIn].

Target audience: [who]
Objective: [awareness / traffic / conversions]
Key benefit: [the main thing the user gets]
Budget context: [high-ticket B2B / low-ticket consumer / etc.]

For each variation:
- Headline (character limit: Google=30, Meta=40, LinkedIn=70)
- Description (character limit: Google=90, Meta=125, LinkedIn=150)
- CTA button text
- The psychological angle used (pain point / aspiration / social proof / urgency / curiosity)

Make each variation use a DIFFERENT angle so we can test what resonates. Label them: Version A (pain), Version B (aspiration), Version C (proof).` },
  { name: "Content Audit Framework", category: "Strategy", prompt: `Create a content audit framework for [website/brand].

Audit scope: [blog only / all web pages / social + web]
Number of pieces to audit: [estimate]
Business goal: [what should our content achieve?]

Generate an audit spreadsheet structure with these columns:
- URL
- Title
- Content type (blog, landing page, guide, etc.)
- Word count
- Target keyword (if identifiable)
- Current ranking (to fill in manually)
- Traffic (to fill in from analytics)
- Last updated
- Quality score (1-5 rubric you define)
- Action: Keep / Update / Merge / Delete / Rewrite

Include:
- The 1-5 quality scoring rubric with clear definitions for each score
- A decision framework for the Keep/Update/Merge/Delete/Rewrite action
- Priority ranking criteria (which pieces to fix first)

This should be usable by a marketing coordinator, not just a strategist.` },
  { name: "Newsletter Launch Plan", category: "Strategy", prompt: `Create a launch plan for a new newsletter about [topic].

Target audience: [who]
Frequency: [weekly / biweekly / monthly]
Platform: [Substack / Beehiiv / ConvertKit / etc.]
Goal: [subscriber target for first 90 days]
Existing audience: [email list size, social following, website traffic]

Generate:
1. Newsletter name options (5, with rationale)
2. One-line value proposition ("Subscribe to get...")
3. First 8 issue topics/themes
4. Launch announcement strategy (where and how to promote)
5. Growth tactics for months 1-3 (list 10 specific actions)
6. Monetization timeline (when to introduce paid tier or sponsors)
7. Success metrics to track weekly

Be specific. "Promote on social media" is not specific enough. "Post a thread on X every Tuesday teasing that week's newsletter topic with a subscribe link" is.` },
];

function downloadPack() {
  const lines: string[] = [
    "# Marketing Prompt Pack — 15 Ready-to-Use Templates",
    "## By Wayne Cederholm — MrPrompts.ai",
    "## https://mrprompts.ai/products/marketing-prompt-pack\n",
    "Prompts for strategy, content, email, social, conversion, and outreach.",
    "Copy any prompt, paste into Claude/ChatGPT, replace the [brackets].\n",
    "---\n",
  ];
  for (const p of PROMPTS) {
    lines.push(`## ${p.name}`);
    lines.push(`*Category: ${p.category}*\n`);
    lines.push("```");
    lines.push(p.prompt);
    lines.push("```\n");
    lines.push("---\n");
  }
  lines.push("\nMore prompts: https://mrprompts.ai/build/prompts");
  const blob = new Blob([lines.join("\n")], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Marketing-Prompt-Pack-MrPrompts.md";
  a.click();
  URL.revokeObjectURL(url);
}

export default function MarketingPromptPackPage() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("marketing-prompt-pack-unlocked") === "true") setUnlocked(true);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setError("Enter a valid email."); return; }
    setLoading(true);
    try {
      await fetch("/api/download-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, guide: "marketing-prompt-pack" }),
      });
      setUnlocked(true);
      setSent(true);
      localStorage.setItem("marketing-prompt-pack-unlocked", "true");
    } catch { setError("Something went wrong."); }
    setLoading(false);
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/products" className="text-sm text-emerald-600 hover:text-emerald-700">&larr; All products</Link>

      <div className="mt-6">
        <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">Prompts</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Marketing Prompt Pack</h1>
        <p className="mt-2 text-sm text-zinc-400">15 prompts · By Wayne Cederholm · Free</p>
        <p className="mt-4 text-lg text-zinc-500">
          15 copy-paste prompts for marketing strategy, content creation, email campaigns, social media, conversion optimization, and outreach. Each prompt is detailed enough to produce work you'd actually send to clients.
        </p>
      </div>

      {!unlocked ? (
        <div className="mt-10 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h2 className="text-xl font-bold">Get the full Marketing Prompt Pack</h2>
          <p className="mt-2 text-sm text-zinc-500">Enter your email to unlock all 15 prompts and download the complete pack.</p>
          <div className="mt-6 space-y-2">
            {["Strategy & Planning (3 prompts)", "Content Creation (3)", "Email Campaigns (1)", "Social Media (2)", "Conversion & Ads (3)", "Outreach & PR (1)", "Analytics & Audits (2)"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-emerald-600">&#10003;</span>{item}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="flex-1 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-900" />
            <button type="submit" disabled={loading} className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50">
              {loading ? "Sending..." : "Get the Pack (Free)"}
            </button>
          </form>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          <p className="mt-3 text-xs text-zinc-400">Free. No spam. Unsubscribe anytime.</p>
        </div>
      ) : (
        <>
          {sent && (
            <div className="mt-10 rounded-xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-800 dark:bg-emerald-900/20">
              <p className="font-semibold text-emerald-800 dark:text-emerald-400">You're in! Check your email for a link.</p>
            </div>
          )}

          <div className="mt-8">
            <button onClick={downloadPack} className="inline-flex h-10 items-center justify-center rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700">
              Download Marketing Prompt Pack (.md)
            </button>
          </div>

          <div className="mt-10 space-y-8">
            {PROMPTS.map((p, i) => (
              <section key={i}>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">{p.category}</span>
                  <h2 className="text-lg font-bold">{p.name}</h2>
                </div>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap rounded-lg bg-zinc-900 p-5 text-xs leading-relaxed text-zinc-300">{p.prompt}</pre>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-lg font-bold">Want prompts for other roles?</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/products/sales-prompt-pack" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">Sales Prompt Pack &rarr;</Link>
              <Link href="/build/prompts" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">Build a custom library &rarr;</Link>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
