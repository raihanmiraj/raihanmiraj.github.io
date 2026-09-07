import Link from "next/link";
import { getBlogs } from "@/lib/data";
import { AdminBlogList } from "@/components/admin/AdminBlogList";
export const dynamic="force-dynamic";
export default async function BlogsAdmin(){const items=await getBlogs({admin:true});return <><div className="dash-heading"><div><p className="eyebrow">CMS</p><h1>Journal</h1></div><Link className="button" href="/dashboard/blogs/new">New article</Link></div><AdminBlogList items={items}/></>}
