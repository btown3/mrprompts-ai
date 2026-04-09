import { NextRequest, NextResponse } from "next/server";
import { generateKit } from "@/lib/knowledge-base-kit";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const { topic, email } = (await req.json()) as {
    topic: string;
    email: string;
  };

  if (!topic?.trim()) {
    return NextResponse.json({ error: "Topic is required." }, { status: 400 });
  }

  // If email provided, send delivery email
  if (email && email.includes("@")) {
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    await resend.emails.send({
      from: process.env.EMAIL_FROM || "hello@mrprompts.ai",
      to: email,
      subject: `Your Knowledge Base Starter Kit: ${topic}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto;">
          <h1 style="font-size: 24px;">Your Knowledge Base Starter Kit is ready.</h1>
          <p>You downloaded the <strong>${topic}</strong> knowledge base kit from MrPrompts.</p>
          <p>Here's how to get started:</p>
          <ol style="line-height: 1.8;">
            <li>Unzip the download and open the folder</li>
            <li>Read README.md first</li>
            <li>Open your AI tool (Claude, ChatGPT, etc.)</li>
            <li>Give it the CLAUDE.md file</li>
            <li>Run the prompts in order: 01, 02, 03...</li>
          </ol>
          <a href="https://mrprompts.ai/build/knowledge-bases" style="display: inline-block; background: #059669; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
            Build Another Knowledge Base
          </a>
          <p style="margin-top: 24px; color: #71717a; font-size: 14px;">
            You'll also receive our weekly newsletter. Unsubscribe anytime.
          </p>
          <p style="color: #71717a; font-size: 14px;">— Wayne, MrPrompts</p>
        </div>
      `,
    });
  }

  // Generate the kit
  const files = generateKit(topic);

  return NextResponse.json({ files });
}
