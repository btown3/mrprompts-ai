"use client";

import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FrameworkForm {
  title: string;
  slug: string;
  subtitle: string;
  type: string;
  description: string;
  content: string;
  featured: boolean;
  visible: boolean;
  sort_order: number;
  meta_title: string;
  meta_description: string;
}

const emptyForm: FrameworkForm = {
  title: "",
  slug: "",
  subtitle: "",
  type: "",
  description: "",
  content: "",
  featured: false,
  visible: true,
  sort_order: 0,
  meta_title: "",
  meta_description: "",
};

const frameworkTypes = [
  "Framework",
  "System",
  "Playbook",
  "Guide",
  "Assessment",
  "Reference",
  "Prompts",
  "Workflows",
  "Tools",
  "Use Case",
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function FrameworkEdit() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const isNew = id === "new";

  const [form, setForm] = useState<FrameworkForm>(emptyForm);
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(false);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isNew) return;
    async function fetchFramework() {
      const { data } = await supabase
        .from("frameworks")
        .select("*")
        .eq("id", id)
        .single();
      if (data) {
        setForm({
          title: data.title ?? "",
          slug: data.slug ?? "",
          subtitle: data.subtitle ?? "",
          type: data.type ?? "",
          description: data.description ?? "",
          content: data.content ?? "",
          featured: data.featured ?? false,
          visible: data.visible ?? true,
          sort_order: data.sort_order ?? 0,
          meta_title: data.meta_title ?? "",
          meta_description: data.meta_description ?? "",
        });
        setSlugManuallyEdited(true);
      }
      setLoading(false);
    }
    fetchFramework();
  }, [id, isNew]);

  function handleTitleChange(value: string) {
    const updates: Partial<FrameworkForm> = { title: value };
    if (!slugManuallyEdited) {
      updates.slug = slugify(value);
    }
    setForm((prev) => ({ ...prev, ...updates }));
  }

  function handleSlugChange(value: string) {
    setSlugManuallyEdited(true);
    setForm((prev) => ({ ...prev, slug: value }));
  }

  async function handleSave() {
    setSaving(true);
    const record = {
      title: form.title,
      slug: form.slug,
      subtitle: form.subtitle || null,
      type: form.type,
      description: form.description || null,
      content: form.content || null,
      featured: form.featured,
      visible: form.visible,
      sort_order: form.sort_order,
      meta_title: form.meta_title || null,
      meta_description: form.meta_description || null,
      updated_at: new Date().toISOString(),
    };

    if (isNew) {
      await supabase.from("frameworks").insert(record);
    } else {
      await supabase.from("frameworks").update(record).eq("id", id);
    }
    setSaving(false);
    router.push("/admin/frameworks");
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this framework?")) return;
    await supabase.from("frameworks").delete().eq("id", id);
    router.push("/admin/frameworks");
  }

  if (loading) {
    return <div className="text-zinc-400">Loading framework...</div>;
  }

  return (
    <div className="max-w-2xl">
      <Link
        href="/admin/frameworks"
        className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors mb-4 inline-block"
      >
        &larr; Back to Frameworks
      </Link>

      <h1 className="text-2xl font-bold text-zinc-900 mb-8">
        {isNew ? "New Framework" : "Edit Framework"}
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Slug
          </label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => handleSlugChange(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Subtitle
          </label>
          <input
            type="text"
            value={form.subtitle}
            onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Type
          </label>
          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          >
            <option value="">Select type</option>
            {frameworkTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
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

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Content (Markdown)
          </label>
          <textarea
            rows={20}
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 font-mono text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Sort Order
            </label>
            <input
              type="number"
              value={form.sort_order}
              onChange={(e) =>
                setForm({ ...form, sort_order: parseInt(e.target.value) || 0 })
              }
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div className="flex items-end pb-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) =>
                  setForm({ ...form, featured: e.target.checked })
                }
                className="h-5 w-5 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm font-medium text-zinc-700">
                Featured
              </span>
            </label>
          </div>

          <div className="flex items-end pb-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.visible}
                onChange={(e) =>
                  setForm({ ...form, visible: e.target.checked })
                }
                className="h-5 w-5 rounded border-zinc-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="text-sm font-medium text-zinc-700">
                Visible
              </span>
            </label>
          </div>
        </div>

        {/* SEO */}
        <div className="pt-6 border-t border-zinc-200">
          <h2 className="text-sm font-semibold text-zinc-900 mb-4 uppercase tracking-wide">
            SEO
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Meta Title
              </label>
              <input
                type="text"
                value={form.meta_title}
                onChange={(e) =>
                  setForm({ ...form, meta_title: e.target.value })
                }
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                placeholder="Custom page title for search engines"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Meta Description
              </label>
              <input
                type="text"
                value={form.meta_description}
                onChange={(e) =>
                  setForm({ ...form, meta_description: e.target.value })
                }
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                placeholder="Short description for search engine results"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-zinc-200">
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors"
          >
            {saving ? "Saving..." : "Save Framework"}
          </button>
          <button
            onClick={() => router.push("/admin/frameworks")}
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
