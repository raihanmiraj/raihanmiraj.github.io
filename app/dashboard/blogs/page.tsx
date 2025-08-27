import Link from "next/link";

export const revalidate = 0;

import { getBaseUrl } from "@/lib/baseUrl";

async function getBlogs() {
  const base = await getBaseUrl();
  const res = await fetch(`${base}/api/blogs`, { cache: "no-store" });
  if (!res.ok) {
    console.error('Failed to fetch blogs:', res.status, res.statusText);
    return [];
  }
  return res.json();
}

export default async function DashboardBlogs() {
  const blogs = await getBlogs();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        <Link href="/dashboard/blogs/new" className="px-3 py-2 bg-blue-600 rounded">New Blog</Link>
      </div>
      <div className="grid gap-3">
        {blogs.map((b: { _id: string; title: string; slug: string }) => (
          <div key={b._id} className="p-4 bg-gray-800 rounded flex items-center justify-between">
            <div>
              <div className="font-semibold">{b.title}</div>
              <div className="text-xs text-gray-400">/{b.slug}</div>
            </div>
            <div className="flex gap-2 text-sm">
              <a className="px-2 py-1 border rounded" href={`/blogs/${b.slug}`} target="_blank">View</a>
              <a className="px-2 py-1 border rounded" href={`/dashboard/blogs/${b.slug}`}>Edit</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


