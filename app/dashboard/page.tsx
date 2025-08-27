import Link from "next/link";

export const revalidate = 60;

import { headers } from "next/headers";

async function getBaseUrl() {
  const envBase = process.env.NEXT_PUBLIC_BASE_URL || "";
  if (envBase) return envBase;
  const h = await headers();
  const host = h.get("host");
  const protocol = h.get("x-forwarded-proto") || "http";
  return host ? `${protocol}://${host}` : "";
}

async function getData() {
  const base = await getBaseUrl();
  const [blogsRes, projectsRes, contactsRes] = await Promise.all([
    fetch(`${base}/api/blogs`, { cache: "no-store" }),
    fetch(`${base}/api/projects`, { cache: "no-store" }),
    fetch(`${base}/api/contacts`, { cache: "no-store" }),
  ]);
  const [blogs, projects, contacts] = await Promise.all([blogsRes.json(), projectsRes.json(), contactsRes.json()]);
  return { blogs, projects, contacts };
}

export default async function Dashboard() {
  const { blogs, projects, contacts } = await getData();
  const topBlogs = [...blogs].sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0)).slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Overview</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded"><div className="text-sm text-gray-400">Total Blogs</div><div className="text-3xl font-bold">{blogs.length}</div></div>
        <div className="bg-gray-800 p-4 rounded"><div className="text-sm text-gray-400">Total Projects</div><div className="text-3xl font-bold">{projects.length}</div></div>
        <div className="bg-gray-800 p-4 rounded"><div className="text-sm text-gray-400">Contacts</div><div className="text-3xl font-bold">{contacts.length}</div></div>
      </div>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Top Viewed Blogs</h2>
          <Link className="text-sm text-blue-400" href="/dashboard/blogs">Manage Blogs</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {topBlogs.map((b) => (
            <div key={b._id} className="p-4 bg-gray-800 rounded">
              <div className="font-semibold">{b.title}</div>
              <div className="text-xs text-gray-400">/{b.slug}</div>
              <div className="text-sm mt-1">Views: {b.viewCount || 0}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


