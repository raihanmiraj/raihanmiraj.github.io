"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlog() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", slug: "", image: "", metaDescription: "", seoKeywords: "", content: "" });
  const [saving, setSaving] = useState(false);

  async function create() {
    setSaving(true);
    const res = await fetch(`/api/blogs`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
      title: form.title,
      slug: form.slug,
      image: form.image,
      metaDescription: form.metaDescription,
      seoKeywords: form.seoKeywords.split(",").map(s => s.trim()).filter(Boolean),
      content: form.content,
      published: true,
    }) });
    setSaving(false);
    if (res.ok) router.push("/dashboard/blogs");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">New Blog</h1>
      <div className="grid gap-3">
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Slug" value={form.slug} onChange={e=>setForm({...form, slug: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Image URL" value={form.image} onChange={e=>setForm({...form, image: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Meta Description" value={form.metaDescription} onChange={e=>setForm({...form, metaDescription: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="SEO Keywords (comma separated)" value={form.seoKeywords} onChange={e=>setForm({...form, seoKeywords: e.target.value})} />
        <textarea className="px-3 py-2 bg-gray-900 rounded min-h-[240px]" placeholder="Content (Markdown supported)" value={form.content} onChange={e=>setForm({...form, content: e.target.value})} />
        <div className="flex gap-2">
          <button onClick={create} disabled={saving} className="px-4 py-2 bg-blue-600 rounded">{saving ? "Creating..." : "Create"}</button>
        </div>
      </div>
    </div>
  );
}


