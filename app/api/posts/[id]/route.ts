import { adminAuth } from "@/lib/firebase/admin"
import { getDb } from "@/lib/db/mongodb"
import { hasRequiredRole } from "@/lib/auth/roles"
import { ObjectId } from "mongodb"

function getBearer(headers: Headers) {
  const a = headers.get("authorization") || ""
  return a.startsWith("Bearer ") ? a.slice(7) : null
}

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const db = await getDb()
  const doc = await db.collection("posts").findOne({ _id: new ObjectId(params.id) })
  if (!doc) return Response.json({ error: "Not found" }, { status: 404 })
  return Response.json({ ...doc, _id: String(doc._id) })
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
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
    const update = {
      $set: {
        title: body.title || "",
        slug: body.slug || "",
        excerpt: body.excerpt || "",
        content: body.content || "",
        coverImage: body.coverImage || "",
        tags: Array.isArray(body.tags) ? body.tags : [],
        published: !!body.published,
        updatedAt: now,
      },
    }
    await db.collection("posts").updateOne({ _id: new ObjectId(params.id) }, update)
    return Response.json({ ok: true })
  } catch (e: any) {
    return Response.json({ error: e?.message || "Failed" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const token = getBearer(request.headers)
    if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 })
    const decoded = await adminAuth.verifyIdToken(token)

    const db = await getDb()
    const user = await db.collection("users").findOne({ uid: decoded.uid })
    if (!user || !hasRequiredRole(user.role, ["editor", "admin"]))
      return Response.json({ error: "Forbidden" }, { status: 403 })

    await db.collection("posts").deleteOne({ _id: new ObjectId(params.id) })
    return Response.json({ ok: true })
  } catch (e: any) {
    return Response.json({ error: e?.message || "Failed" }, { status: 500 })
  }
}
