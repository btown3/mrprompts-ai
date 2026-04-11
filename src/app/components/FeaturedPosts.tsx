"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFeaturedBlogPosts, type DbBlogPost } from "@/lib/db";

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
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.substack_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-zinc-400">
                {post.category}
              </span>
              {post.published_at && (
                <>
                  <span className="text-xs text-zinc-300">·</span>
                  <span className="text-xs text-zinc-400">
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </>
              )}
            </div>
            <h3 className="mt-3 text-lg font-bold group-hover:text-emerald-600">
              {post.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              {post.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
