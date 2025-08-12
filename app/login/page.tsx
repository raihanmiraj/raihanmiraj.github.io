"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { googleProvider, auth } from "@/lib/firebase/client"
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGoogle() {
    setError(null)
    setLoading(true)
    try {
      await signInWithPopup(auth, googleProvider)
      window.location.href = "/admin"
    } catch (e: any) {
      setError(e?.message || "Google sign-in failed")
    } finally {
      setLoading(false)
    }
  }

  async function handleEmailPassword(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      window.location.href = "/admin"
    } catch (e: any) {
      setError(e?.message || "Authentication failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#111A28] text-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-[#1E293B] border-none">
        <CardHeader>
          <CardTitle>{mode === "login" ? "Sign in to Admin" : "Create an account"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleEmailPassword} className="space-y-3">
            <div>
              <label htmlFor="email" className="mb-1 block">
                Email
              </label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#0f172a] border-gray-700 text-white"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block">
                Password
              </label>
              <Input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#0f172a] border-gray-700 text-white"
                type="password"
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-[#0A69DC] hover:bg-[#0a60c8]">
              {loading ? "Please wait..." : mode === "login" ? "Sign In" : "Sign Up"}
            </Button>
          </form>

          <div className="flex items-center gap-2 text-gray-400">
            <div className="h-px bg-gray-700 w-full" />
            <span>or</span>
            <div className="h-px bg-gray-700 w-full" />
          </div>

          <Button onClick={handleGoogle} variant="outline" className="w-full border-gray-600 text-white bg-transparent">
            <Mail className="h-4 w-4 mr-2" /> Continue with Google
          </Button>

          {error && <p className="text-rose-400 text-sm">{error}</p>}

          <p className="text-sm text-gray-300">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="text-[#0A69DC] hover:underline"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>

          <p className="text-xs text-gray-400">
            Note: New accounts are created with viewer role by default. An admin must grant elevated access.
          </p>

          <div className="text-center">
            <Link href="/" className="text-gray-400 hover:text-white text-sm">
              ← Back to site
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
