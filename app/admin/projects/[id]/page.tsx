"use client"

import { useEffect, useState } from "react"
import ProjectForm from "@/components/admin/project-form"

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/projects/${params.id}`)
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
      <h1 className="text-2xl font-bold">Edit Project</h1>
      <ProjectForm
        projectId={params.id}
        initial={{
          title: data.title,
          slug: data.slug,
          description: data.description,
          coverImage: data.coverImage,
          tags: data.tags,
          content: data.content,
          gradientFrom: data.gradientFrom,
          gradientTo: data.gradientTo,
          links: data.links,
          published: data.published,
        }}
      />
    </div>
  )
}
