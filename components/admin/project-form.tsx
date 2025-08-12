"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import MarkdownEditor from "./markdown-editor"
import { slugify } from "@/lib/utils/slug"
import { useAuth } from "@/hooks/use-auth"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ProjectForm({
  initial,
  projectId,
}: {
  initial?: Partial<{
    title: string
    slug: string
    description: string
    content: string
    coverImage: string
    tags: string[]
    gradientFrom: string
    gradientTo: string
    links: { github?: string; demo?: string }
    published: boolean
  }>
  projectId?: string
}) {
  const [title, setTitle] = useState(initial?.title || "")
  const [slug, setSlug] = useState(initial?.slug || "")
  const [description, setDescription] = useState(initial?.description || "")
  const [coverImage, setCoverImage] = useState(initial?.coverImage || "")
  const [tags, setTags] = useState((initial?.tags || []).join(", "))
  const [content, setContent] = useState(initial?.content || "")
  const [gradientFrom, setGradientFrom] = useState(initial?.gradientFrom || "from-blue-600")
  const [gradientTo, setGradientTo] = useState(initial?.gradientTo || "to-[#0A69DC]")
  const [github, setGithub] = useState(initial?.links?.github || "")
  const [demo, setDemo] = useState(initial?.links?.demo || "")
  const [published, setPublished] = useState(initial?.published ?? true)
  const [saving, setSaving] = useState(false)
  const { token } = useAuth()

  async function handleSave() {
    setSaving(true)
    try {
      const body = {
        title,
        slug: slug || slugify(title),
        description,
        coverImage,
        content,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        gradientFrom,
        gradientTo,
        links: { github, demo },
        published,
      }
      const res = await fetch(projectId ? `/api/projects/${projectId}` : "/api/projects", {
        method: projectId ? "PUT" : "POST",
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
      window.location.href = "/admin/projects"
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
            placeholder="Project title"
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
        <Label htmlFor="description">Short description</Label>
        <Input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-[#0f172a] border-gray-700 text-white"
          placeholder="One-liner describing the project"
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
          placeholder="react, api, ui"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="from">Gradient From class</Label>
          <Input
            id="from"
            value={gradientFrom}
            onChange={(e) => setGradientFrom(e.target.value)}
            className="bg-[#0f172a] border-gray-700 text-white"
            placeholder="from-blue-600"
          />
        </div>
        <div>
          <Label htmlFor="to">Gradient To class</Label>
          <Input
            id="to"
            value={gradientTo}
            onChange={(e) => setGradientTo(e.target.value)}
            className="bg-[#0f172a] border-gray-700 text-white"
            placeholder="to-[#0A69DC]"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="github">GitHub</Label>
          <Input
            id="github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="bg-[#0f172a] border-gray-700 text-white"
            placeholder="https://github.com/..."
          />
        </div>
        <div>
          <Label htmlFor="demo">Live Demo</Label>
          <Input
            id="demo"
            value={demo}
            onChange={(e) => setDemo(e.target.value)}
            className="bg-[#0f172a] border-gray-700 text-white"
            placeholder="https://..."
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="published" checked={published} onCheckedChange={setPublished} />
        <Label htmlFor="published">Published</Label>
      </div>
      <div>
        <Label>Details content</Label>
        <MarkdownEditor value={content} onChange={setContent} />
      </div>
      <div className="flex gap-3">
        <Button onClick={handleSave} disabled={saving} className="bg-[#0A69DC] hover:bg-[#0a60c8]">
          {saving ? "Saving..." : "Save"}
        </Button>
        <Button variant="outline" onClick={() => (window.location.href = "/admin/projects")}>
          Cancel
        </Button>
      </div>
    </div>
  )
}
