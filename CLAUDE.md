@AGENTS.md

# MrPrompts.ai — Project Context

## What This Is
MrPrompts.ai is a Next.js 16 site (Tailwind 4, TypeScript) deployed on Vercel via GitHub. It's the commercial home for the @MrPrompts brand — selling pre-built LLM knowledge base wiki vaults, paid guides, and free tools. The monetization model is inspired by Karpathy's LLM wiki workflow, productized for people who want the output without building from scratch.

## Tech Stack
- Next.js 16 with App Router
- Tailwind CSS 4 (already configured via @tailwindcss/postcss)
- TypeScript
- Deployed on Vercel
- Geist + Geist Mono fonts

## Brand
- Name: MrPrompts
- Accent color: emerald-600
- Tone: Smart person over coffee, not thought leader on stage. Conversational, grammatically correct, curious, honest. Short declarative sentences. No em dashes.
- Logo text treatment: "Mr" in default color, "Prompts" in emerald-600

## Revenue Model
1. **Free tier (lead gen):** Browsable wikis on popular topics, "Your First Wiki in 20 Minutes" guide, CLAUDE.md template generator
2. **Pre-built wiki vaults ($29–$79):** Complete downloadable Obsidian vaults on high-demand topics
3. **Subscription wiki service ($15–$30/month):** Continuously maintained and updated wiki vaults
4. **Paid guides ($19):** Deep-dive tutorials on wiki automation, CLAUDE.md writing, etc.
5. **Substack funnel:** Free newsletter drives traffic to site, site drives email signups

## Current Status (as of 2026-04-07)

### Built ✅
- `src/app/layout.tsx` — Root layout with Header, Footer, OG/Twitter meta
- `src/app/components/Header.tsx` — Sticky nav: Wiki Vaults, Guides, Free Tools, Pricing + "Start Free" CTA
- `src/app/components/Footer.tsx` — Links to X (@MrPrompts) and Substack
- `src/app/page.tsx` — Homepage with: hero section, 4-step "How It Works", featured wiki vaults grid (3 cards), guides grid (3 cards), newsletter CTA
- `src/app/wikis/page.tsx` — Wiki vaults listing (placeholder)
- `src/app/guides/page.tsx` — Guides listing with 4 guides (1 free, 3 paid)

### Not Yet Built ❌
- `src/app/tools/page.tsx` — Free tools landing page
- `src/app/pricing/page.tsx` — Pricing page with tiers
- `src/app/guides/your-first-wiki/page.tsx` — The free guide (main lead magnet). Content adapted from Karpathy wiki workflow for beginners.
- `src/app/guides/claude-md-masterclass/page.tsx` — Paid guide
- `src/app/guides/wiki-automation/page.tsx` — Paid guide
- `src/app/guides/two-model-validation/page.tsx` — Paid guide
- `src/app/wikis/ai-prompt-engineering/page.tsx` — Browsable free wiki with depth limits (free users see summaries, paid users get full vault download)
- Payment integration (Stripe or Gumroad)
- Email capture (Substack embed or custom)
- Mobile hamburger menu for Header
- Actual wiki vault content (the Obsidian .zip downloads)

## Sitemap
```
/ — Homepage
/wikis — All wiki vaults
/wikis/[slug] — Individual wiki vault page (preview + purchase)
/guides — All guides
/guides/[slug] — Individual guide page
/tools — Free tools (CLAUDE.md generator, etc.)
/pricing — Pricing tiers
```

## Design Conventions
- Max width: max-w-6xl
- Page padding: px-6 py-20
- Cards: rounded-xl border border-zinc-200 p-6 with hover:border-emerald-300
- Section backgrounds alternate: white and bg-zinc-50 with border-y
- Tags: rounded-full px-2.5 py-0.5 text-xs font-medium
- Dark mode supported via dark: variants

## Content Notes
- Do NOT include any trucking, recruiting, or transportation industry content. That's a separate business.
- All wiki topics should be broadly popular: AI/ML, prompt engineering, crypto, real estate investing, personal productivity, content creation, coding fundamentals, health/fitness
- First wiki vault to ship: "AI Prompt Engineering"
