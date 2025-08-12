import { adminAuth } from "@/lib/firebase/admin"
import { getDb } from "@/lib/db/mongodb"

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization") || ""
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null
    if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 })
    const decoded = await adminAuth.verifyIdToken(token)
    const db = await getDb()
    const user = await db.collection("users").findOne({ uid: decoded.uid }, { projection: { _id: 0 } })
    if (!user) return Response.json({ error: "Profile missing" }, { status: 403 })
    return Response.json({ uid: user.uid, email: user.email, role: user.role })
  } catch (e: any) {
    return Response.json({ error: e?.message || "Unauthorized" }, { status: 401 })
  }
}
