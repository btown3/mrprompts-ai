"use client";

import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogForm {
  title: string;
  description: string;
  category: string;
  substack_url: string;
  published_at: string;
  featured: boolean;
  visible: boolean;
}

const emptyForm: BlogForm = {
  title: "",
  description: "",
  category: "",
  substack_url: "",
  published_at: "",
  featured: false,
  visible: true,
};

export default function BlogPostEdit() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const isNew = id === "new";

  const [form, setForm] = useState<BlogForm>(emptyForm);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isNew) return;
    async function fetchPost() {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();
      if (data) {
        setForm({
          title: data.title ?? "",
          description: data.description ?? "",
          category: data.category ?? "",
          substack_url: data.substack_url ?? "",
          published_at: data.published_at
            ? data.published_at.split("T")[0]
            : "",
          featured: data.featured ?? false,
          visible: data.visible ?? true,
        });
      }
      setLoading(false);
    }
    fetchPost();
  }, [id, isNew]);

  async function handleSave() {
    setSaving(true);
    const record = {
      title: form.title,
      description: form.description,
      category: form.category,
      substack_url: form.substack_url || null,
      published_at: form.published_at || null,
      featured: form.featured,
      visible: form.visible,
    };

    if (isNew) {
      await supabase.from("blog_posts").insert(record);
    } else {
      await supabase.from("blog_posts").update(record).eq("id", id);
    }
    setSaving(false);
    router.push("/admin/blog");
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    router.push("/admin/blog");
  }

  if (loading) {
    return <div className="text-zinc-400">Loading blog post...</div>;
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 mb-8">
        {isNew ? "New Blog Post" : "Edit Blog Post"}
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Description
          </label>
          <textarea
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Category
            </label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Published Date
            </label>
            <input
              type="date"
              value={form.published_at}
              onChange={(e) =>
                setForm({ ...form, published_at: e.target.value })
              }
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Substack URL
          </label>
          <input
            type="url"
            value={form.substack_url}
            onChange={(e) =>
              setForm({ ...form, substack_url: e.target.value })
            }
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            placeholder="https://mrprompts.substack.com/p/..."
          />
        </div>

        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(e) =>
                setForm({ ...form, featured: e.target.checked })
              }
              className="h-5 w-5 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
            />
            <span className="text-sm font-medium text-zinc-700">Featured</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={form.visible}
              onChange={(e) => setForm({ ...form, visible: e.target.checked })}
              className="h-5 w-5 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
            />
            <span className="text-sm font-medium text-zinc-700">Visible</span>
          </label>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-zinc-200">
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors"
          >
            {saving ? "Saving..." : "Save Post"}
          </button>
          <button
            onClick={() => router.push("/admin/blog")}
            className="rounded-lg bg-zinc-100 px-6 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
          >
            Cancel
          </button>
          {!isNew && (
            <button
              onClick={handleDelete}
              className="ml-auto rounded-lg bg-red-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
