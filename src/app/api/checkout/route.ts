import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { PRODUCTS, type ProductSlug } from "@/lib/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { slug } = (await req.json()) as { slug: string };

  const product = PRODUCTS[slug as ProductSlug];
  if (!product) {
    return NextResponse.json({ error: "Unknown product" }, { status: 400 });
  }

  const origin = req.headers.get("origin") || "https://mrprompts.ai";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: product.name },
          unit_amount: product.price,
        },
        quantity: 1,
      },
    ],
    metadata: { slug: product.slug },
    success_url: `${origin}/guides/${product.slug}?success=true`,
    cancel_url: `${origin}/guides/${product.slug}`,
  });

  return NextResponse.json({ url: session.url });
}
