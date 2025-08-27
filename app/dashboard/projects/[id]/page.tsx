"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProject() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [form, setForm] = useState({ title: "", description: "", coverImage: "", liveUrl: "", githubUrl: "", technologies: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch(`/api/projects`).then(r => r.json()).then((list) => {
      const p = list.find((x: { _id: string; title?: string; description?: string; coverImage?: string; liveUrl?: string; githubUrl?: string; technologies?: string[] }) => x._id === id);
      if (!p) return;
      setForm({
        title: p.title || "",
        description: p.description || "",
        coverImage: p.coverImage || "",
        liveUrl: p.liveUrl || "",
        githubUrl: p.githubUrl || "",
        technologies: (p.technologies || []).join(", ")
      });
    });
  }, [id]);

  async function save() {
    setSaving(true);
    await fetch(`/api/projects/${id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
      title: form.title,
      description: form.description,
      coverImage: form.coverImage,
      liveUrl: form.liveUrl,
      githubUrl: form.githubUrl,
      technologies: form.technologies.split(",").map(s => s.trim()).filter(Boolean),
    }) });
    setSaving(false);
    router.push("/dashboard/projects");
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Edit Project</h1>
      <div className="grid gap-3">
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Title" value={form.title} onChange={e=>setForm({...form, title: e.target.value})} />
        <textarea className="px-3 py-2 bg-gray-900 rounded min-h-[160px]" placeholder="Description" value={form.description} onChange={e=>setForm({...form, description: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Cover Image URL" value={form.coverImage} onChange={e=>setForm({...form, coverImage: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Live URL" value={form.liveUrl} onChange={e=>setForm({...form, liveUrl: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="GitHub URL" value={form.githubUrl} onChange={e=>setForm({...form, githubUrl: e.target.value})} />
        <input className="px-3 py-2 bg-gray-900 rounded" placeholder="Technologies (comma separated)" value={form.technologies} onChange={e=>setForm({...form, technologies: e.target.value})} />
        <div className="flex gap-2">
          <button onClick={save} disabled={saving} className="px-4 py-2 bg-blue-600 rounded">{saving ? "Saving..." : "Save"}</button>
        </div>
      </div>
    </div>
  );
}


