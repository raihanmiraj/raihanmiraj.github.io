import { notFound } from "next/navigation";
import { getBlog } from "@/lib/data";
import { BlogForm } from "@/components/admin/BlogForm";
export const dynamic="force-dynamic";
export default async function EditBlog({params}:{params:Promise<{slug:string}>}){const article=await getBlog((await params).slug,true);if(!article)notFound();return <><div className="dash-heading"><div><p className="eyebrow">Journal</p><h1>Edit article</h1></div></div><BlogForm initial={article}/></>}
