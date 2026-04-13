"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFeaturedBlogPosts, type DbBlogPost } from "@/lib/db";

const POST_IMAGES: Record<string, string> = {
  "claude-skills-explained-how-to-build-and-use-them": "/images/blog-claude-skills.png",
  "the-4layer-prompt-framework-nobody-talks-about": "/images/blog-4layer-framework.png",
  "diving-into-karpathys-autoresearch": "/images/blog-karpathy-research.png",
};

export function FeaturedPosts() {
  const [posts, setPosts] = useState<DbBlogPost[]>([]);

  useEffect(() => {
    getFeaturedBlogPosts().then(setPosts);
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Latest
          </h2>
          <p className="mt-3 text-zinc-500">
            Battle-tested AI workflows from the field, not the feed.
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden text-sm font-semibold text-emerald-600 hover:text-emerald-700 md:block"
        >
          All posts &rarr;
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => {
          const hasContent = !!post.content && post.content.trim().length > 0;
          const cardClasses = "group overflow-hidden rounded-xl border border-zinc-200 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800";
          const imgSrc = POST_IMAGES[post.slug || ""];

          const inner = (
            <>
              {imgSrc && (
                <div className="overflow-hidden">
                  <img src={imgSrc} alt={post.title} className="h-36 w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
              )}
              <div className="p-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-zinc-400">{post.category}</span>
                {post.published_at && (
                  <>
                    <span className="text-xs text-zinc-300">·</span>
                    <span className="text-xs text-zinc-400">
                      {new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </>
                )}
              </div>
              <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">{post.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{post.description}</p>
              </div>
            </>
          );

          return hasContent ? (
            <Link key={post.id} href={`/blog/${post.slug}`} className={cardClasses}>{inner}</Link>
          ) : (
            <a key={post.id} href={post.substack_url || "#"} target="_blank" rel="noopener noreferrer" className={cardClasses}>{inner}</a>
          );
        })}
      </div>
    </section>
  );
}
