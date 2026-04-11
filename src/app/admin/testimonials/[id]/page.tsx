"use client";

import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface TestimonialForm {
  name: string;
  role: string;
  company: string;
  quote: string;
  featured: boolean;
  visible: boolean;
  sort_order: number;
}

const emptyForm: TestimonialForm = {
  name: "",
  role: "",
  company: "",
  quote: "",
  featured: false,
  visible: true,
  sort_order: 0,
};

export default function TestimonialEdit() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const isNew = id === "new";

  const [form, setForm] = useState<TestimonialForm>(emptyForm);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isNew) return;
    async function fetchTestimonial() {
      const { data } = await supabase
        .from("testimonials")
        .select("*")
        .eq("id", id)
        .single();
      if (data) {
        setForm({
          name: data.name ?? "",
          role: data.role ?? "",
          company: data.company ?? "",
          quote: data.quote ?? "",
          featured: data.featured ?? false,
          visible: data.visible ?? true,
          sort_order: data.sort_order ?? 0,
        });
      }
      setLoading(false);
    }
    fetchTestimonial();
  }, [id, isNew]);

  async function handleSave() {
    setSaving(true);
    const record = {
      name: form.name,
      role: form.role || null,
      company: form.company || null,
      quote: form.quote,
      featured: form.featured,
      visible: form.visible,
      sort_order: form.sort_order,
    };

    if (isNew) {
      await supabase.from("testimonials").insert(record);
    } else {
      await supabase.from("testimonials").update(record).eq("id", id);
    }
    setSaving(false);
    router.push("/admin/testimonials");
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    await supabase.from("testimonials").delete().eq("id", id);
    router.push("/admin/testimonials");
  }

  if (loading) {
    return <div className="text-zinc-400">Loading testimonial...</div>;
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 mb-8">
        {isNew ? "New Testimonial" : "Edit Testimonial"}
      </h1>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Role
            </label>
            <input
              type="text"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Company
            </label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Quote
          </label>
          <textarea
            rows={4}
            value={form.quote}
            onChange={(e) => setForm({ ...form, quote: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          />
        </div>

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
            className="w-48 rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
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
            {saving ? "Saving..." : "Save Testimonial"}
          </button>
          <button
            onClick={() => router.push("/admin/testimonials")}
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
