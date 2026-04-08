import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { PRODUCTS, type ProductSlug } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  let event: Stripe.Event;

  if (process.env.STRIPE_WEBHOOK_SECRET && sig) {
    try {
      event = stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }
  } else {
    event = JSON.parse(body) as Stripe.Event;
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const slug = session.metadata?.slug as ProductSlug | undefined;
    const email = session.customer_details?.email;

    if (slug && email && PRODUCTS[slug]) {
      const product = PRODUCTS[slug];
      const guideUrl = `https://mrprompts.ai/guides/${slug}?token=${session.id}`;

      await resend.emails.send({
        from: process.env.EMAIL_FROM || "hello@mrprompts.ai",
        to: email,
        subject: `Your guide: ${product.name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto;">
            <h1 style="font-size: 24px;">Thanks for your purchase!</h1>
            <p>You now have access to <strong>${product.name}</strong>.</p>
            <p>Click the link below to read your guide:</p>
            <a href="${guideUrl}" style="display: inline-block; background: #059669; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">
              Read Your Guide
            </a>
            <p style="margin-top: 24px; color: #71717a; font-size: 14px;">
              Bookmark this link. You can access it anytime.
            </p>
            <p style="color: #71717a; font-size: 14px;">— MrPrompts</p>
          </div>
        `,
      });
    }
  }

  return NextResponse.json({ received: true });
}
