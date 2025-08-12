import { getDb } from "@/lib/db/mongodb"

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
  const db = await getDb()
  const doc = await db.collection("posts").findOne({ slug: params.slug, published: true })
  if (!doc) return Response.json({ error: "Not found" }, { status: 404 })
  return Response.json({ ...doc, _id: String(doc._id) })
}
