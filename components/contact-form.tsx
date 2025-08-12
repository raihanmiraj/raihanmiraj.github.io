"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setSuccess(null)
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (res.ok && data?.ok) {
        setSuccess("Thanks! Your message has been sent.")
        form.reset()
      } else {
        setError("Something went wrong. Please try again later.")
      }
    } catch (err) {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit} aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <Input
          id="name"
          name="name"
          className="bg-[#1E293B] border border-gray-700 text-white"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          className="bg-[#1E293B] border border-gray-700 text-white"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          className="bg-[#1E293B] border border-gray-700 text-white"
          placeholder="How can I help?"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          className="bg-[#1E293B] border border-gray-700 text-white"
          placeholder="Write your message..."
          required
        />
      </div>
      <Button type="submit" className="w-full bg-[#0A69DC] hover:bg-[#0a60c8]" disabled={loading} aria-busy={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>

      {success && <p className="text-emerald-400">{success}</p>}
      {error && <p className="text-rose-400">{error}</p>}
    </form>
  )
}
