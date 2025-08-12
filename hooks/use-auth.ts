"use client"

import { useEffect, useState } from "react"
import { auth } from "@/lib/firebase/client"
import { onAuthStateChanged, type User, getIdToken } from "firebase/auth"

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u)
      if (u) {
        const t = await getIdToken(u, true)
        setToken(t)
        // upsert user profile record in DB
        try {
          await fetch("/api/auth/upsert-user", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${t}` },
            body: JSON.stringify({
              email: u.email,
              name: u.displayName,
              photoURL: u.photoURL,
            }),
          })
        } catch {
          // ignore
        }
      } else {
        setToken(null)
      }
      setLoading(false)
    })
    return () => unsub()
  }, [])

  return { user, loading, token }
}
