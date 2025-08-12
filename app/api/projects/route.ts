import { adminAuth } from "@/lib/firebase/admin"
import { getDb } from "@/lib/db/mongodb"
import { hasRequiredRole } from "@/lib/auth/roles"

function getBearer(headers: Headers) {
  const a = headers.get("authorization") || ""
  return a.startsWith("Bearer ") ? a.slice(7) : null
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const all = searchParams.get("all") === "1"
  const db = await getDb()
  const cursor = db
    .collection("projects")
    .find(all ? {} : { published: true })
    .sort({ updatedAt: -1 })
  const items = await cursor.toArray()
  return Response.json({ items: items.map(({ _id, ...rest }) => ({ _id: String(_id), ...rest })) })
}

export async function POST(request: Request) {
  try {
    const token = getBearer(request.headers)
    if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 })
    const decoded = await adminAuth.verifyIdToken(token)

    const db = await getDb()
    const user = await db.collection("users").findOne({ uid: decoded.uid })
    if (!user || !hasRequiredRole(user.role, ["editor", "admin"]))
      return Response.json({ error: "Forbidden" }, { status: 403 })

    const body = await request.json()
    const now = new Date().toISOString()
    const doc = {
      title: body.title || "",
      slug: body.slug || "",
      description: body.description || "",
      content: body.content || "",
      coverImage: body.coverImage || "",
      tags: Array.isArray(body.tags) ? body.tags : [],
      gradientFrom: body.gradientFrom || "from-blue-600",
      gradientTo: body.gradientTo || "to-[#0A69DC]",
      links: body.links || {},
      published: !!body.published,
      createdAt: now,
      updatedAt: now,
    }
    const res = await db.collection("projects").insertOne(doc)
    return Response.json({ _id: String(res.insertedId) })
  } catch (e: any) {
    return Response.json({ error: e?.message || "Failed" }, { status: 500 })
  }
}
