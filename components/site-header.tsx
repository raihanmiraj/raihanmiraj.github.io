"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function SiteHeader({
  logoChar = "R",
  resumeUrl = "https://drive.google.com/file/d/1-n17DQGbrK5KcBjFyuE0iDURW_dfFZVn/view?usp=sharing",
}: {
  logoChar?: string
  resumeUrl?: string
}) {
  const [open, setOpen] = useState(false)

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return
    e.preventDefault()
    const el = document.querySelector(href) as HTMLElement | null
    if (el) {
      const headerOffset = 80
      const top = el.offsetTop - headerOffset
      window.scrollTo({ top, behavior: "smooth" })
      setOpen(false)
    }
  }, [])

  return (
    <header className="md:flex md:flex-row md:justify-between items-center flex flex-col justify-center py-6 px-5 md:px-16 bg-transparent sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#111A28]/60">
      <div className="flex justify-between items-center w-full">
        <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")} aria-label="Logo">
          <span
            className="text-xl font-semibold text-white px-3 py-2 rounded-full"
            style={{ backgroundColor: "#0A69DC" }}
          >
            {logoChar}
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="font-medium text-white/90 hover:text-[#0A69DC] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop resume */}
        <div className="hidden md:block pl-5">
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            <Button variant="outline" className="border-[#0A69DC] text-white hover:bg-[#0A69DC]/10 bg-transparent">
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="p-2 rounded-md border border-white/10">
                <Menu className="h-5 w-5 text-[#0A69DC]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#111A28] text-white border-l border-white/10">
              <div className="mt-8 flex flex-col gap-5">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="font-medium text-white/90 hover:text-[#0A69DC] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a href={resumeUrl} target="_blank" rel="noreferrer" className="mt-2">
                  <Button className="w-full bg-[#0A69DC] hover:bg-[#0a60c8]">Resume</Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
