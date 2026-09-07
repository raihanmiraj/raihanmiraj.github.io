import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { LogoutButton } from "@/components/admin/LogoutButton";
export default async function DashboardLayout({children}:{children:React.ReactNode}){await requireAdmin();return <div className="dashboard-shell"><aside className="dashboard-nav"><Link className="wordmark" href="/dashboard">RM<span>.</span> CMS</Link><nav><Link href="/dashboard">Overview</Link><Link href="/dashboard/projects">Projects</Link><Link href="/dashboard/blogs">Blogs</Link><Link href="/dashboard/contacts">Contacts</Link><a href="/" target="_blank">View website ↗</a><LogoutButton/></nav></aside><main className="dashboard-main">{children}</main></div>}
