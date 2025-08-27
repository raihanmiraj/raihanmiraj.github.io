export const revalidate = 0;

import { headers } from "next/headers";

function getBaseUrl() {
  const envBase = process.env.NEXT_PUBLIC_BASE_URL || "";
  if (envBase) return envBase;
  const h = headers();
  const host = h.get("host");
  const protocol = h.get("x-forwarded-proto") || "http";
  return host ? `${protocol}://${host}` : "";
}

async function getBlogs() {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/blogs`, { cache: "no-store" });
  return res.json();
}

export default async function DashboardBlogs() {
  const blogs = await getBlogs();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Blogs</h1>
        <a href="/dashboard/blogs/new" className="px-3 py-2 bg-blue-600 rounded">New Blog</a>
      </div>
      <div className="grid gap-3">
        {blogs.map((b: any) => (
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


