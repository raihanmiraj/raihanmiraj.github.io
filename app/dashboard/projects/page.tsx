import Link from "next/link";
import { getProjects } from "@/lib/data";
import { AdminProjectList } from "@/components/admin/AdminProjectList";
export const dynamic="force-dynamic";
export default async function ProjectsAdmin(){const items=await getProjects({admin:true});return <><div className="dash-heading"><div><p className="eyebrow">CMS</p><h1>Projects</h1></div><Link className="button" href="/dashboard/projects/new">New project</Link></div><AdminProjectList items={items}/></>}
