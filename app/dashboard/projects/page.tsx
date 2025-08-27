import Link from "next/link";

export const revalidate = 0;

import { headers } from "next/headers";

async function getBaseUrl() {
  const envBase = process.env.NEXT_PUBLIC_BASE_URL || "";
  if (envBase) return envBase;
  const h = await headers();
  const host = h.get("host");
  const protocol = h.get("x-forwarded-proto") || "http";
  return host ? `${protocol}://${host}` : "";
}

async function getProjects() {
  const base = await getBaseUrl();
  const res = await fetch(`${base}/api/projects`, { cache: "no-store" });
  return res.json();
}

export default async function DashboardProjects() {
  const projects = await getProjects();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Link href="/dashboard/projects/new" className="px-3 py-2 bg-blue-600 rounded">New Project</Link>
      </div>
      <div className="grid gap-3">
        {projects.map((p: { _id: string; title: string; technologies?: string[] }) => (
          <div key={p._id} className="p-4 bg-gray-800 rounded flex items-center justify-between">
            <div>
              <div className="font-semibold">{p.title}</div>
              <div className="text-xs text-gray-400">{(p.technologies || []).join(', ')}</div>
            </div>
            <div className="flex gap-2 text-sm">
              <a className="px-2 py-1 border rounded" href={`/projects`} target="_blank">View</a>
              <a className="px-2 py-1 border rounded" href={`/dashboard/projects/${p._id}`}>Edit</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


