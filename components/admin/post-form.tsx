"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import MarkdownEditor from "./markdown-editor"
import { slugify } from "@/lib/utils/slug"
import { useAuth } from "@/hooks/use-auth"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function PostForm({
  initial,
  postId,
}: {
  initial?: Partial<{
    title: string
    slug: string
    excerpt: string
    content: string
    coverImage: string
    tags: string[]
    published: boolean
  }>
  postId?: string
}) {
  const [title, setTitle] = useState(initial?.title || "")
  const [slug, setSlug] = useState(initial?.slug || "")
  const [excerpt, setExcerpt] = useState(initial?.excerpt || "")
  const [coverImage, setCoverImage] = useState(initial?.coverImage || "")
  const [tags, setTags] = useState((initial?.tags || []).join(", "))
  const [content, setContent] = useState(initial?.content || "")
  const [published, setPublished] = useState(initial?.published ?? true)
  const [saving, setSaving] = useState(false)
  const { token } = useAuth()

  async function handleSave() {
    setSaving(true)
    try {
      const body = {
        title,
        slug: slug || slugify(title),
        excerpt,
        coverImage,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        content,
        published,
      }
      const res = await fetch(postId ? `/api/posts/${postId}` : "/api/posts", {
        method: postId ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to save")
      }
      window.location.href = "/admin/posts"
    } catch (e: any) {
      alert(e.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              if (!slug) setSlug(slugify(e.target.value))
            }}
            className="bg-[#0f172a] border-gray-700 text-white"
            placeholder="Post title"
          />
        </div>
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(slugify(e.target.value))}
            className="bg-[#0f172a] border-gray-700 text-white"
            placeholder="auto-generated"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="excerpt">Excerpt</Label>
        <Input
          id="excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="bg-[#0f172a] border-gray-700 text-white"
          placeholder="Short summary for lists and SEO"
        />
      </div>
      <div>
        <Label htmlFor="cover">Cover Image URL</Label>
        <Input
          id="cover"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="bg-[#0f172a] border-gray-700 text-white"
          placeholder="https://..."
        />
      </div>
      <div>
        <Label htmlFor="tags">Tags (comma separated)</Label>
        <Input
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="bg-[#0f172a] border-gray-700 text-white"
          placeholder="nextjs, tailwind, firebase"
        />
      </div>
      <div className="flex items-center gap-2">
        <Switch id="published" checked={published} onCheckedChange={setPublished} />
        <Label htmlFor="published">Published</Label>
      </div>
      <div>
        <Label>Content</Label>
        <MarkdownEditor value={content} onChange={setContent} />
      </div>
      <div className="flex gap-3">
        <Button onClick={handleSave} disabled={saving} className="bg-[#0A69DC] hover:bg-[#0a60c8]">
          {saving ? "Saving..." : "Save"}
        </Button>
        <Button variant="outline" onClick={() => (window.location.href = "/admin/posts")}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
