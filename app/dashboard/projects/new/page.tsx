"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewProject() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", description: "", coverImage: "", liveUrl: "", githubUrl: "", technologies: "" });
  const [saving, setSaving] = useState(false);

  async function create() {
    setSaving(true);
    const res = await fetch(`/api/projects`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
      title: form.title,
      description: form.description,
      coverImage: form.coverImage,
      liveUrl: form.liveUrl,
      githubUrl: form.githubUrl,
      technologies: form.technologies.split(",").map(s => s.trim()).filter(Boolean),
    }) });
    setSaving(false);
    if (res.ok) router.push("/dashboard/projects");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">New Project</h1>
      <div className="grid gap-3">
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
        <textarea className="px-3 py-2 bg-gray-900 rounded min-h-[160px]" placeholder="Description" value={form.description} onChange={e=>setForm({...form, description: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Cover Image URL" value={form.coverImage} onChange={e=>setForm({...form, coverImage: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Live URL" value={form.liveUrl} onChange={e=>setForm({...form, liveUrl: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="GitHub URL" value={form.githubUrl} onChange={e=>setForm({...form, githubUrl: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Technologies (comma separated)" value={form.technologies} onChange={e=>setForm({...form, technologies: e.target.value})} />
        <div className="flex gap-2">
          <button onClick={create} disabled={saving} className="px-4 py-2 bg-blue-600 rounded">{saving ? "Creating..." : "Create"}</button>
        </div>
      </div>
    </div>
  );
}


