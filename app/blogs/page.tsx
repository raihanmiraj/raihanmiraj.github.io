import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blogs | Raihan Miraj",
  description: "Read recent blogs by Raihan Miraj",
};

import { getBaseUrl } from "@/lib/baseUrl";

async function getBlogs() {
  const res = await fetch(`${await getBaseUrl()}/api/blogs`, { next: { revalidate: 60 }, cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main className="bg-[#111A28] text-white min-h-screen px-5 md:px-16 py-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Blogs</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((b: { _id: string; slug: string; title: string; image?: string; metaDescription?: string; createdAt: string }) => (
          <a key={b._id} href={`/blogs/${b.slug}`} className="rounded-lg bg-gray-800 hover:shadow-lg">
            {b.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={b.image} alt={b.title} className="w-full aspect-video object-cover rounded-t-lg" />
            ) : null}
            <div className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">{b.title}</h2>
              <p className="text-sm text-gray-300 line-clamp-2">{b.metaDescription || ""}</p>
              <div className="text-xs text-gray-400">{new Date(b.createdAt).toLocaleDateString()}</div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}


