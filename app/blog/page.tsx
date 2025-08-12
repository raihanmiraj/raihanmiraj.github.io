import Link from "next/link"

export const revalidate = 0

async function getPosts() {
  const res = await fetch(`${typeof window === "undefined" ? "" : ""}/api/posts`, { cache: "no-store" })
  if (!res.ok) return []
  const data = await res.json()
  return data?.items || []
}

export default async function BlogListPage() {
  const items = await getPosts()
  return (
    <main className="bg-[#111A28] text-white min-h-screen px-5 md:px-16 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      {items.length === 0 ? (
        <p className="text-gray-400">No posts yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p: any) => (
            <article key={p._id} className="bg-[#1E293B] rounded-lg overflow-hidden border border-white/10">
              {p.coverImage ? (
                <img src={p.coverImage || "/placeholder.svg"} alt={p.title} className="w-full h-44 object-cover" />
              ) : (
                <div className="h-44 bg-gradient-to-r from-slate-700 to-slate-800" />
              )}
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">
                  <Link href={`/blog/${p.slug}`} className="hover:underline">
                    {p.title}
                  </Link>
                </h2>
                {p.excerpt && <p className="text-gray-300 text-sm line-clamp-3">{p.excerpt}</p>}
                <Link href={`/blog/${p.slug}`} className="text-[#0A69DC] hover:underline inline-block mt-2">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
