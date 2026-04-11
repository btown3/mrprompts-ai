"use client";

import { useEffect, useState } from "react";
import { getTestimonials, type DbTestimonial } from "@/lib/db";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<DbTestimonial[]>([]);

  useEffect(() => {
    getTestimonials().then(setTestimonials);
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
        What builders are saying
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              "{t.quote}"
            </p>
            <div className="mt-4">
              <p className="text-sm font-semibold">{t.name}</p>
              {(t.role || t.company) && (
                <p className="text-xs text-zinc-400">
                  {[t.role, t.company].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
