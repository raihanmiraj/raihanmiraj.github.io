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

async function getContacts() {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/contacts`, { cache: "no-store" });
  return res.json();
}

export default async function DashboardContacts() {
  const contacts = await getContacts();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Contacts</h1>
      <div className="grid gap-3">
        {contacts.map((c: any) => (
          <div key={c._id} className="p-4 bg-gray-800 rounded">
            <div className="font-semibold">{c.name} ({c.email})</div>
            <div className="text-sm mt-1">{c.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


