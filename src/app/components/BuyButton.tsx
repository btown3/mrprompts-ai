"use client";

import { useState } from "react";

export function BuyButton({ slug, price }: { slug: string; price: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    const { url } = await res.json();
    if (url) {
      window.location.href = url;
    }
    setLoading(false);
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-600 px-8 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-50"
    >
      {loading ? "Redirecting..." : `Buy Now — ${price}`}
    </button>
  );
}
