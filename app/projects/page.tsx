import Link from "next/link"

export const revalidate = 0

async function getProjects() {
  const res = await fetch(`${typeof window === "undefined" ? "" : ""}/api/projects`, { cache: "no-store" })
  if (!res.ok) return []
  const data = await res.json()
  return data?.items || []
}

export default async function ProjectsListPage() {
  const items = await getProjects()
  return (
    <main className="bg-[#111A28] text-white min-h-screen px-5 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      {items.length === 0 ? (
        <p className="text-gray-400">No projects yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p: any) => (
            <article key={p._id} className="bg-[#111A28] border border-white/10 rounded-lg overflow-hidden">
              <div
                className={`h-44 bg-gradient-to-r ${p.gradientFrom || "from-blue-600"} ${p.gradientTo || "to-[#0A69DC]"}`}
              />
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">
                  <Link href={`/projects/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h2>
                <p className="text-gray-300 text-sm line-clamp-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {(p.tags || []).map((t: string) => (
                    <span key={t} className="px-2 py-0.5 bg-gray-800 rounded-full text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${p.slug}`} className="text-[#0A69DC] hover:underline inline-block mt-2">
                  View details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
