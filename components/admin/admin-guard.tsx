"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, loading, token } = useAuth()
  const [authorized, setAuthorized] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    async function check() {
      if (loading) return
      if (!user || !token) {
        router.replace("/login")
        return
      }
      const res = await fetch("/api/auth/session", {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.ok) {
        const data = await res.json()
        if (data?.role === "admin" || data?.role === "editor") {
          setAuthorized(true)
        } else {
          setAuthorized(false)
        }
      } else {
        setAuthorized(false)
      }
    }
    check()
  }, [user, token, loading, router])

  if (loading || authorized === null) {
    return <div className="min-h-[40vh] flex items-center justify-center text-gray-300">Checking permissions...</div>
  }
  if (!authorized) {
    return <div className="min-h-[40vh] flex items-center justify-center text-rose-400">Not authorized</div>
  }

  return <>{children}</>
}
