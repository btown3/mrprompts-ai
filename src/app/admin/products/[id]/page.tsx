"use client";

import { supabase } from "@/lib/supabase";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductForm {
  name: string;
  slug: string;
  description: string;
  category: string;
  price: string;
  format: string;
  tag: string;
  href: string;
  items: string;
  visible: boolean;
  sort_order: number;
}

const emptyForm: ProductForm = {
  name: "",
  slug: "",
  description: "",
  category: "",
  price: "0",
  format: "",
  tag: "",
  href: "",
  items: "",
  visible: true,
  sort_order: 0,
};

const categories = [
  "framework",
  "template",
  "guide",
  "toolkit",
  "vault",
  "workshop",
  "bundle",
];

export default function ProductEdit() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const isNew = id === "new";

  const [form, setForm] = useState<ProductForm>(emptyForm);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isNew) return;
    async function fetchProduct() {
      const { data } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
      if (data) {
        setForm({
          name: data.name ?? "",
          slug: data.slug ?? "",
          description: data.description ?? "",
          category: data.category ?? "",
          price: ((data.price ?? 0) / 100).toFixed(2),
          format: data.format ?? "",
          tag: data.tag ?? "",
          href: data.href ?? "",
          items: Array.isArray(data.items)
            ? JSON.stringify(data.items)
            : data.items ?? "",
          visible: data.visible ?? true,
          sort_order: data.sort_order ?? 0,
        });
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id, isNew]);

  async function handleSave() {
    setSaving(true);
    const record = {
      name: form.name,
      slug: form.slug,
      description: form.description,
      category: form.category,
      price: Math.round(parseFloat(form.price) * 100),
      format: form.format,
      tag: form.tag || null,
      href: form.href,
      items: form.items ? (() => { try { return JSON.parse(form.items); } catch { return form.items; } })() : null,
      visible: form.visible,
      sort_order: form.sort_order,
    };

    if (isNew) {
      await supabase.from("products").insert(record);
    } else {
      await supabase.from("products").update(record).eq("id", id);
    }
    setSaving(false);
    router.push("/admin/products");
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this product?")) return;
    await supabase.from("products").delete().eq("id", id);
    router.push("/admin/products");
  }

  if (loading) {
    return <div className="text-zinc-400">Loading product...</div>;
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold text-zinc-900 mb-8">
        {isNew ? "New Product" : "Edit Product"}
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

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Slug
          </label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
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
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            >
              <option value="">Select category</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Price (USD)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Format
            </label>
            <input
              type="text"
              value={form.format}
              onChange={(e) => setForm({ ...form, format: e.target.value })}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Tag
            </label>
            <input
              type="text"
              value={form.tag}
              onChange={(e) => setForm({ ...form, tag: e.target.value })}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Link (href)
          </label>
          <input
            type="text"
            value={form.href}
            onChange={(e) => setForm({ ...form, href: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Items (JSON array)
          </label>
          <textarea
            rows={3}
            value={form.items}
            onChange={(e) => setForm({ ...form, items: e.target.value })}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 font-mono text-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
            placeholder='["Item 1", "Item 2"]'
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
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

        <div className="flex items-center gap-3 pt-4 border-t border-zinc-200">
          <button
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50 transition-colors"
          >
            {saving ? "Saving..." : "Save Product"}
          </button>
          <button
            onClick={() => router.push("/admin/products")}
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
