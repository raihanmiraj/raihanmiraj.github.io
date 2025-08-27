"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditBlog() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [form, setForm] = useState({ title: "", slug: "", image: "", metaDescription: "", seoKeywords: "", content: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`/api/blogs/${slug}`).then(r => r.json()).then((b) => setForm({
      title: b.title || "",
      slug: b.slug || "",
      image: b.image || "",
      metaDescription: b.metaDescription || "",
      seoKeywords: (b.seoKeywords || []).join(", "),
      content: b.content || "",
    }));
  }, [slug]);

  async function save() {
    setSaving(true);
    await fetch(`/api/blogs/${slug}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
      title: form.title,
      slug: form.slug,
      image: form.image,
      metaDescription: form.metaDescription,
      seoKeywords: form.seoKeywords.split(",").map(s => s.trim()).filter(Boolean),
      content: form.content,
    }) });
    setSaving(false);
    router.push("/dashboard/blogs");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Edit Blog</h1>
      <div className="grid gap-3">
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Slug" value={form.slug} onChange={e=>setForm({...form, slug: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Image URL" value={form.image} onChange={e=>setForm({...form, image: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Meta Description" value={form.metaDescription} onChange={e=>setForm({...form, metaDescription: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="SEO Keywords (comma separated)" value={form.seoKeywords} onChange={e=>setForm({...form, seoKeywords: e.target.value})} />
        <textarea className="px-3 py-2 bg-gray-900 rounded min-h-[240px]" placeholder="Content (Markdown supported)" value={form.content} onChange={e=>setForm({...form, content: e.target.value})} />
        <div className="flex gap-2">
          <button onClick={save} disabled={saving} className="px-4 py-2 bg-blue-600 rounded">{saving ? "Saving..." : "Save"}</button>
        </div>
      </div>
    </div>
  );
}


