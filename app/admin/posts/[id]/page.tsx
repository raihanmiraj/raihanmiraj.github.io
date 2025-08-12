"use client"

import PostForm from "@/components/admin/post-form"
import { useEffect, useState } from "react"

export default function EditPostPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/posts/${params.id}`)
      const d = await res.json()
      setData(d)
      setLoading(false)
    }
    load()
  }, [params.id])

  if (loading) return <div>Loading...</div>
  if (!data) return <div>Not found</div>

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <PostForm
        postId={params.id}
        initial={{
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          coverImage: data.coverImage,
          tags: data.tags,
          content: data.content,
          published: data.published,
        }}
      />
    </div>
  )
}
