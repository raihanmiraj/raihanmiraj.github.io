import { notFound } from "next/navigation";
import { getProject } from "@/lib/data";
import { ProjectForm } from "@/components/admin/ProjectForm";
export const dynamic="force-dynamic";
export default async function EditProject({params}:{params:Promise<{id:string}>}){const project=await getProject((await params).id,true);if(!project)notFound();return <><div className="dash-heading"><div><p className="eyebrow">Projects</p><h1>Edit {project.title}</h1></div></div><ProjectForm initial={project}/></>}
