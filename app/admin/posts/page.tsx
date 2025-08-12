"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"

type PostList = { _id: string; title: string; slug: string; published: boolean; updatedAt: string }

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<PostList[]>([])
  const [loading, setLoading] = useState(true)
  const { token } = useAuth()

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/posts?all=1")
      const data = await res.json()
      setPosts(data?.items || [])
      setLoading(false)
    }
    load()
  }, [])

  async function deletePost(id: string) {
    if (!confirm("Delete this post?")) return
    const res = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p._id !== id))
    } else {
      alert("Failed to delete")
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Posts</h1>
        <a href="/admin/posts/new">
          <Button className="bg-[#0A69DC] hover:bg-[#0a60c8]">New Post</Button>
        </a>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : posts.length === 0 ? (
        <div>No posts yet.</div>
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
              {posts.map((p) => (
                <tr key={p._id} className="border-t border-white/10">
                  <td className="py-2">{p.title}</td>
                  <td className="py-2 text-gray-400">{p.slug}</td>
                  <td className="py-2">{p.published ? "Yes" : "No"}</td>
                  <td className="py-2 text-gray-400">{new Date(p.updatedAt).toLocaleString()}</td>
                  <td className="py-2 flex gap-3">
                    <a href={`/admin/posts/${p._id}`} className="text-[#0A69DC] hover:underline">
                      Edit
                    </a>
                    <button onClick={() => deletePost(p._id)} className="text-rose-400 hover:underline">
                      Delete
                    </button>
                    <a href={`/blog/${p.slug}`} className="text-gray-300 hover:underline">
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
