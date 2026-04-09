@AGENTS.md

# MrPrompts.ai — Project Context

## What This Is
MrPrompts.ai is the builder's on-ramp to AI. A Next.js 16 site for smart non-technical professionals who want to build with AI, not just read about it. Frameworks, tools, and step-by-step guides. Two audiences: individual builders leveling up their AI skills, and enterprise leaders driving AI transformation.

## Tech Stack
- Next.js 16 with App Router
- Tailwind CSS 4 (already configured via @tailwindcss/postcss)
- TypeScript
- Deployed on Vercel
- Geist + Geist Mono fonts
- Stripe for payments
- Resend for transactional email
- Anthropic SDK for AI features (wiki builder)

## Brand
- Name: MrPrompts
- Founded by: Wayne Cederholm
- Accent color: emerald-600
- Tone: Smart person over coffee, not thought leader on stage. Conversational, grammatically correct, curious, honest. Short declarative sentences. No em dashes.
- Logo text treatment: "Mr" in default color, "Prompts" in emerald-600
- Identity: Builder, not theorist. Teach by building, not lecturing.

## Audience
1. **Solo Builders** — Smart professionals (marketing, ops, sales, finance, consulting) who want to build AI tools, workflows, and systems. Not developers. Price-sensitive, time-constrained.
2. **Team Builders** — Managers/directors building AI capabilities into their department. Need team prompt systems, workflows, and processes.
3. **Org Builders** — VPs, C-suite leading AI transformation. Need strategy, change management, vendor evaluation. Have budget.

## Revenue Model
1. **Free tier (lead gen):** First module of each build track, wiki builder tool, blog, newsletter
2. **Builder ($19/month or $149/year):** All four build tracks, all tools, vault discounts, prompt library
3. **Team ($49/seat/month):** Everything in Builder + team admin + shared prompt libraries
4. **Enterprise (custom):** Everything + leadership track + private workshops + consulting
5. **Vaults ($29-$79 one-time):** Pre-built downloadable Obsidian wiki vaults
6. **Affiliates:** Curated AI tool recommendations with affiliate links
7. **Substack funnel:** Newsletter drives traffic, site drives subscribers

## Sitemap
```
/                              — Homepage: "Build with AI. No dev background required."
/about                         — Wayne Cederholm. Builder, not theorist.
/blog                          — Cards linking to Substack posts (SEO backlinks)
/build                         — Training hub: four build tracks
/build/knowledge-bases         — Build AI knowledge bases
/build/prompts                 — Build prompt frameworks & libraries
/build/workflows               — Build AI-powered workflows & automations
/build/leadership              — Build AI-ready teams & organizations
/tools                         — Free tools
/tools/wiki-builder            — AI-powered wiki vault generator
/vaults                        — Pre-built wiki vaults (downloads)
/vaults/[slug]                 — Individual vault page
/pricing                       — Solo / Team / Enterprise
/affiliates                    — "Tools We Build With" — curated, opinionated
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
- Frame everything as building, not learning. "Build a prompt library" not "Learn prompt engineering."
- Target non-technical professionals. No jargon without explanation. No terminal commands in training content.
- Every page should answer: "What can I build with AI today, and how do I start?"
- Wiki vault topics should be broadly popular: AI/ML, prompt engineering, personal productivity, content creation, business strategy
