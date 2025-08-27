import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0f1720] text-white grid grid-cols-[240px_1fr]">
      <aside className="bg-[#0b1220] border-r border-white/10 p-4 space-y-4">
        <div className="text-xl font-bold">Dashboard</div>
        <nav className="flex flex-col gap-2 text-sm">
          <Link href="/dashboard" className="px-3 py-2 rounded hover:bg-white/10">Overview</Link>
          <Link href="/dashboard/blogs" className="px-3 py-2 rounded hover:bg-white/10">Blogs</Link>
          <Link href="/dashboard/projects" className="px-3 py-2 rounded hover:bg-white/10">Projects</Link>
          <Link href="/dashboard/contacts" className="px-3 py-2 rounded hover:bg-white/10">Contacts</Link>
        </nav>
      </aside>
      <section className="p-6">{children}</section>
    </div>
  );
}


