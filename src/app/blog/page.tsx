"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getBlogPosts, type DbBlogPost } from "@/lib/db";

const CATEGORY_COLORS: Record<string, string> = {
  Prompting: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  Agents: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  Tools: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  Leadership: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Research: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
  General: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

export default function BlogPage() {
  const [posts, setPosts] = useState<DbBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Blog</h1>
      <p className="mt-3 max-w-xl text-zinc-500">
        Battle-tested AI workflows from the field, not the feed.
      </p>

      {loading ? (
        <div className="mt-12 text-center text-sm text-zinc-400">Loading posts...</div>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {posts.map((post) => {
            const hasContent = !!post.content;
            const cardClasses =
              "group flex flex-col rounded-xl border border-zinc-200 p-6 transition hover:border-emerald-300 hover:shadow-sm dark:border-zinc-800 dark:hover:border-emerald-800";

            const cardInner = (
              <>
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      CATEGORY_COLORS[post.category] || CATEGORY_COLORS.General
                    }`}
                  >
                    {post.category}
                  </span>
                  {post.published_at && (
                    <span className="text-xs text-zinc-400">
                      {new Date(post.published_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-semibold group-hover:text-emerald-600">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                  {post.description}
                </p>
                <span className="mt-4 text-xs font-medium text-emerald-600">
                  {hasContent ? "Read more" : "Read on Substack"} &rarr;
                </span>
              </>
            );

            return hasContent ? (
              <Link
                key={post.id}
                href={`/blog/${post.slug || post.id}`}
                className={cardClasses}
              >
                {cardInner}
              </Link>
            ) : (
              <a
                key={post.id}
                href={post.substack_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClasses}
              >
                {cardInner}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
