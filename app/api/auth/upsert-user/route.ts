import { adminAuth } from "@/lib/firebase/admin"
import { getDb } from "@/lib/db/mongodb"
import type { Role } from "@/lib/auth/roles"
import type { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    // return Response.json({ success:true });
    const authHeader = req.headers.get("authorization") || ""
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null
    if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 })

    const decoded = await adminAuth.verifyIdToken(token)
    const uid = decoded.uid
    const { email, name, photoURL } = await req.json()

    const db = await getDb()
    const users = db.collection("users")

    const existing = await users.findOne({ uid })
    const now = new Date().toISOString()

    if (!existing) {
      const doc = {
        uid,
        email: email ?? decoded.email ?? null,
        name: name ?? decoded.name ?? null,
        photoURL: photoURL ?? decoded.picture ?? null,
        role: "viewer" as Role,
        createdAt: now,
        updatedAt: now,
      }
      await users.insertOne(doc)
      return Response.json({ ok: true, role: doc.role })
    } else {
      await users.updateOne(
        { uid },
        {
          $set: {
            email: email ?? existing.email ?? null,
            name: name ?? existing.name ?? null,
            photoURL: photoURL ?? existing.photoURL ?? null,
            updatedAt: now,
          },
        },
      )
      return Response.json({ ok: true, role: existing.role })
    }
  } catch (e: any) {
    return Response.json({ error: e?.message || "Failed" }, { status: 500 })
  }
}
