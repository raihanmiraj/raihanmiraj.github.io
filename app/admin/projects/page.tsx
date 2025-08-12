"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"

type ProjectList = { _id: string; title: string; slug: string; published: boolean; updatedAt: string }

export default function AdminProjectsPage() {
  const [items, setItems] = useState<ProjectList[]>([])
  const [loading, setLoading] = useState(true)
  const { token } = useAuth()

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/projects?all=1")
      const data = await res.json()
      setItems(data?.items || [])
      setLoading(false)
    }
    load()
  }, [])

  async function handleDelete(id: string) {
    if (!confirm("Delete this project?")) return
    const res = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) setItems((prev) => prev.filter((p) => p._id !== id))
    else alert("Failed to delete")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Projects</h1>
        <a href="/admin/projects/new">
          <Button className="bg-[#0A69DC] hover:bg-[#0a60c8]">New Project</Button>
        </a>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : items.length === 0 ? (
        <div>No projects yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="text-gray-300">
              <tr>
                <th className="py-2">Title</th>
                <th className="py-2">Slug</th>
                <th className="py-2">Published</th>
                <th className="py-2">Updated</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {items.map((p) => (
                <tr key={p._id} className="border-t border-white/10">
                  <td className="py-2">{p.title}</td>
                  <td className="py-2 text-gray-400">{p.slug}</td>
                  <td className="py-2">{p.published ? "Yes" : "No"}</td>
                  <td className="py-2 text-gray-400">{new Date(p.updatedAt).toLocaleString()}</td>
                  <td className="py-2 flex gap-3">
                    <a href={`/admin/projects/${p._id}`} className="text-[#0A69DC] hover:underline">
                      Edit
                    </a>
                    <button onClick={() => handleDelete(p._id)} className="text-rose-400 hover:underline">
                      Delete
                    </button>
                    <a href={`/projects/${p.slug}`} className="text-gray-300 hover:underline">
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
