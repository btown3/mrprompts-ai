import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export const maxDuration = 300;

type Source = { title: string; content: string };

type WikiArticle = {
  filename: string;
  title: string;
  tags: string[];
  sources: string[];
  summary: string;
  content: string;
};

type Query = {
  filename: string;
  title: string;
  description: string;
  prompt: string;
};

type WikiResult = {
  claude_md: string;
  articles: WikiArticle[];
  queries: Query[];
};

function extractJson(text: string): string {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (fenced) return fenced[1].trim();

  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    return text.slice(firstBrace, lastBrace + 1);
  }
  return text.trim();
}

export async function POST(req: NextRequest) {
  let body: { topic?: string; sources?: Source[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { topic, sources } = body;

  if (!topic?.trim() || !sources?.length) {
    return Response.json(
      { error: "Topic and at least one source are required." },
      { status: 400 }
    );
  }

  const sourcesText = sources
    .map(
      (s, i) =>
        `--- Source ${i + 1}: ${s.title || `Untitled ${i + 1}`} ---\n${s.content}`
    )
    .join("\n\n");

  const prompt = `You are a knowledge base architect. Build a compounding wiki vault on the topic: "${topic}".

Source materials:

${sourcesText}

Output ONLY valid JSON. No markdown fences. No explanation. Use this exact schema:

{
  "claude_md": "string — the complete CLAUDE.md file content",
  "articles": [
    {
      "filename": "kebab-case-filename.md",
      "title": "Human Readable Title",
      "tags": ["tag1", "tag2"],
      "sources": ["source-1", "source-2"],
      "summary": "2-3 sentence summary",
      "content": "full markdown body with H2 sections and [[wikilinks]] to other article titles"
    }
  ],
  "queries": [
    {
      "filename": "kebab-case-query.md",
      "title": "Query Name",
      "description": "what this query answers",
      "prompt": "the actual prompt text the user will paste into an LLM, referencing the vault"
    }
  ]
}

Rules:
- CLAUDE.md must define: the topic, folder structure (Sources/, Wiki/, Queries/), article format with frontmatter, tagging taxonomy, how to add new sources, and how to query the vault. Keep it under 600 words.
- Generate 5-8 atomic wiki articles. One concept per article. No overlap.
- Each article body must start with a short YAML frontmatter block: ---\\ntitle: ...\\ntags: [...]\\nsources: [...]\\n---
- Article content must use H2 sections, concrete examples, and [[wikilinks]] to at least 2 other article titles in this vault.
- Article sources[] must reference the source titles provided above (e.g. "Source 1: Foo").
- Generate 3-5 query templates in queries[]. Each query is a ready-to-paste prompt that pulls from the vault (e.g. "Using the articles in Wiki/, explain X across all perspectives").
- Wikilinks must point to titles you actually generated. Do not invent articles.
- No Obsidian-specific language. This vault works with any markdown editor and any LLM.
- No fluff. No generic AI filler. Every line must earn its place.`;

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-5-20250929",
      max_tokens: 16000,
      messages: [{ role: "user", content: prompt }],
    });

    const textBlock = message.content.find((b) => b.type === "text");
    if (!textBlock || textBlock.type !== "text") {
      return Response.json(
        { error: "No content returned from model." },
        { status: 500 }
      );
    }

    const raw = textBlock.text;
    const json = extractJson(raw);

    let parsed: WikiResult;
    try {
      parsed = JSON.parse(json);
    } catch {
      return Response.json(
        {
          error:
            "Model returned malformed JSON. Try again or simplify your sources.",
          debug: raw.slice(0, 500),
        },
        { status: 500 }
      );
    }

    if (
      !parsed.claude_md ||
      !Array.isArray(parsed.articles) ||
      !Array.isArray(parsed.queries)
    ) {
      return Response.json(
        { error: "Incomplete vault structure returned." },
        { status: 500 }
      );
    }

    return Response.json(parsed);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return Response.json({ error: msg }, { status: 500 });
  }
}
