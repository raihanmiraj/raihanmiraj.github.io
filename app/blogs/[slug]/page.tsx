import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";

export const revalidate = 60;

type Props = { params: { slug: string } };

import { getBaseUrl } from "@/lib/baseUrl";

async function getBlog(slug: string) {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/blogs/${slug}`, { next: { revalidate: 60 }, cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog(params.slug);
  if (!blog) return { title: "Blog not found" };
  return {
    title: `${blog.title} | Blog` ,
    description: blog.metaDescription || undefined,
    keywords: blog.seoKeywords || undefined,
  };
}

export default async function BlogPost({ params }: Props) {
  const blog = await getBlog(params.slug);
  if (!blog) return <main className="text-white p-8">Not found</main>;
  return (
    <main className="bg-[#111A28] text-white min-h-screen px-5 md:px-16 py-12">
      <article className="prose prose-invert max-w-none">
        <h1>{blog.title}</h1>
        {blog.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={blog.image} alt={blog.title} className="w-full rounded-md" />
        ) : null}
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </main>
  );
}


