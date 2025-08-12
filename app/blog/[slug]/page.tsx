import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

async function getPost(slug: string) {
  const res = await fetch(`${typeof window === "undefined" ? "" : ""}/api/posts/by-slug/${slug}`, { cache: "no-store" })
  if (!res.ok) return null
  return res.json()
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) {
    return (
      <main className="bg-[#111A28] text-white min-h-screen px-5 md:px-16 py-12">
        <h1 className="text-2xl font-bold">Post not found</h1>
      </main>
    )
  }

  return (
    <main className="bg-[#111A28] text-white min-h-screen">
      <div className="h-52 bg-gradient-to-r from-slate-800 to-slate-900 flex items-end">
        <div className="px-5 md:px-16 pb-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          {post.excerpt && <p className="text-gray-300 mt-2">{post.excerpt}</p>}
        </div>
      </div>
      <article className="px-5 md:px-16 py-8">
        {post.coverImage && (
          <img
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            className="w-full max-h-[420px] object-cover rounded-lg mb-6"
          />
        )}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content || ""}</ReactMarkdown>
        </div>
      </article>
    </main>
  )
}
