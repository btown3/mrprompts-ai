import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

const GUIDE_TITLES: Record<string, string> = {
  "claude-md-masterclass": "The CLAUDE.md Masterclass",
  "prompt-library-starter": "Prompt Library Starter Kit",
  "workflow-blueprints": "AI Workflow Blueprints",
  "ai-adoption-roadmap": "AI Adoption Roadmap Template",
  "team-fluency-assessment": "Team AI Fluency Assessment",
};

export async function POST(req: NextRequest) {
  const { email, guide } = (await req.json()) as {
    email: string;
    guide: string;
  };

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 });
  }

  const title = GUIDE_TITLES[guide] || "Your MrPrompts Guide";
  const downloadUrl = `https://mrprompts.ai/guides/${guide}?access=granted`;

  await resend.emails.send({
    from: process.env.EMAIL_FROM || "hello@mrprompts.ai",
    to: email,
    subject: `Your free guide: ${title}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto;">
        <h1 style="font-size: 24px;">Your guide is ready.</h1>
        <p>Thanks for joining the MrPrompts community. Here's your free guide:</p>
        <a href="${downloadUrl}" style="display: inline-block; background: #059669; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
          Read ${title}
        </a>
        <p style="margin-top: 24px; color: #71717a; font-size: 14px;">
          You'll also receive our weekly newsletter with build guides, prompt frameworks, and tools. You can unsubscribe anytime.
        </p>
        <p style="color: #71717a; font-size: 14px;">— Wayne, MrPrompts</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
