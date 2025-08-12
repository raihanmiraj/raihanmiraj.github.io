"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/posts", label: "Posts" },
  { href: "/admin/projects", label: "Projects" },
  // Optional: { href: "/admin/users", label: "Users" },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-full md:w-60 bg-[#0b1324] border-r border-white/10 p-4">
      <div className="text-lg font-semibold mb-4">Admin</div>
      <nav className="flex flex-col gap-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              "px-3 py-2 rounded-md hover:bg-white/5",
              pathname === l.href ? "bg-white/10 text-white" : "text-gray-300",
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
