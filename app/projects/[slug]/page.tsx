import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

async function getProject(slug: string) {
  const res = await fetch(`${typeof window === "undefined" ? "" : ""}/api/projects/by-slug/${slug}`, {
    cache: "no-store",
  })
  if (!res.ok) return null
  return res.json()
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug)
  if (!project) {
    return (
      <main className="bg-[#111A28] text-white min-h-screen px-5 md:px-16 py-12">
        <h1 className="text-2xl font-bold">Project not found</h1>
      </main>
    )
  }

  return (
    <main className="bg-[#111A28] text-white min-h-screen">
      <div
        className={`h-64 bg-gradient-to-r ${project.gradientFrom || "from-blue-600"} ${
          project.gradientTo || "to-[#0A69DC]"
        } flex items-end`}
      >
        <div className="px-5 md:px-16 pb-6">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-gray-200 mt-2 max-w-3xl">{project.description}</p>
          <div className="flex gap-3 mt-3">
            {project?.links?.github && (
              <a href={project.links.github} target="_blank" className="underline" rel="noreferrer">
                GitHub
              </a>
            )}
            {project?.links?.demo && (
              <a href={project.links.demo} target="_blank" className="underline" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
      <article className="px-5 md:px-16 py-8">
        {project.coverImage && (
          <img
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            className="w-full rounded-lg mb-6 object-cover"
          />
        )}
        <div className="flex flex-wrap gap-2 mb-6">
          {(project.tags || []).map((t: string) => (
            <span key={t} className="px-2 py-0.5 bg-gray-800 rounded-full text-xs">
              {t}
            </span>
          ))}
        </div>
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content || ""}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
