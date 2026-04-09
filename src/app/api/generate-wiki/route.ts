import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  const { topic, sources } = (await req.json()) as {
    topic: string;
    sources: string[];
  };

  if (!topic || !sources?.length) {
    return Response.json(
      { error: "Topic and at least one source are required." },
      { status: 400 }
    );
  }

  const sourcesText = sources
    .map((s, i) => `--- Source ${i + 1} ---\n${s}`)
    .join("\n\n");

  const stream = await client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 8192,
    messages: [
      {
        role: "user",
        content: `You are a knowledge base architect. The user wants to build an Obsidian wiki vault on the topic: "${topic}".

Here are their source materials:

${sourcesText}

Generate a complete Obsidian wiki vault. Output ONLY valid JSON with this structure (no markdown fences, no explanation):

{
  "claude_md": "the full CLAUDE.md file content",
  "articles": [
    {
      "filename": "Article-Title.md",
      "content": "full markdown content of the wiki article"
    }
  ]
}

Rules for generating the vault:
- The CLAUDE.md should define the topic, folder structure (Sources, Wiki, Queries), article format, taxonomy, and rules
- Generate 3-5 wiki articles from the provided sources
- Each article should have: H1 title, 2-3 sentence summary, H2 sections, a Sources section citing which source(s) informed it
- Use [[wikilinks]] to connect related concepts across articles
- Keep articles focused: one concept per page
- Be thorough but concise. No fluff.`,
      },
    ],
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(event.delta.text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
    },
  });
}
