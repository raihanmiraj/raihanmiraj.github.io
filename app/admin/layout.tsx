import type React from "react"
import AdminGuard from "@/components/admin/admin-guard"
import AdminSidebar from "@/components/admin/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-[#111A28] text-white flex">
        <AdminSidebar />
        <div className="flex-1 p-6">{children}</div>
      </div>
    </AdminGuard>
  )
}
