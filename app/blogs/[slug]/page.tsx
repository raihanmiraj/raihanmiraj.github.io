import type { Metadata } from "next";
import BlogContent from "@/app/components/BlogContent";
import { getBaseUrl } from "@/lib/baseUrl";
import Link from "next/link";

export const revalidate = 60;

type Props = { params: { slug: string } };

async function getBlog(slug: string) {
  const base = await getBaseUrl();
  const res = await fetch(`${base}/api/blogs/${slug}`, { next: { revalidate: 60 }, cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

// Get all blogs for related posts
async function getAllBlogs() {
  const base = await getBaseUrl();
  const res = await fetch(`${base}/api/blogs`, { next: { revalidate: 60 }, cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = await getBlog(params.slug);
  if (!blog) return { title: "Blog not found" };
  return {
    title: `${blog.title} | Raihan Miraj Blog`,
    description: blog.metaDescription || undefined,
    keywords: blog.seoKeywords || undefined,
    openGraph: {
      title: blog.title,
      description: blog.metaDescription || undefined,
      images: blog.image ? [{ url: blog.image }] : undefined,
      type: 'article',
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const [blog, allBlogs] = await Promise.all([
    getBlog(params.slug),
    getAllBlogs()
  ]);
  
  if (!blog) {
    return (
      <main className="bg-[#111A28] text-white min-h-screen flex items-center justify-center px-5">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 text-[#64ffda]/20">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Sorry, the blog post you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 bg-[#64ffda] text-[#111A28] px-6 py-3 rounded-lg font-semibold hover:bg-[#64ffda]/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  // Get related blogs (excluding current blog)
  const relatedBlogs = allBlogs
    .filter((b: { slug: string }) => b.slug !== params.slug)
    .slice(0, 3);

  return (
    <main className="bg-[#111A28] text-white min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-[#64ffda]/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-[#64ffda]/3 rounded-full blur-xl"></div>
      </div>

      {/* Navigation Breadcrumb */}
      <div className="relative z-10 border-b border-gray-800/50">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-[#64ffda] transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/blogs" className="text-gray-400 hover:text-[#64ffda] transition-colors">
              Blogs
            </Link>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#64ffda] font-medium truncate">{blog.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 py-12">
        <BlogContent blog={blog} />

        {/* Related Posts Section */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16 pt-16 border-t border-gray-800/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 bg-[#64ffda] rounded-full"></div>
              <h2 className="text-2xl font-bold text-white">Related Articles</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog: { _id: string; slug: string; title: string; image?: string; metaDescription?: string }) => (
                <Link 
                  key={relatedBlog._id}
                  href={`/blogs/${relatedBlog.slug}`}
                  className="group bg-gray-800/40 rounded-xl border border-gray-700/40 overflow-hidden hover:bg-gray-800/60 hover:border-gray-600/40 transition-all duration-300"
                >
                  {relatedBlog.image && (
                    <div className="aspect-video overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={relatedBlog.image} 
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-semibold text-white group-hover:text-[#64ffda] transition-colors line-clamp-2 mb-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                      {relatedBlog.metaDescription || "Read more about this topic..."}
                    </p>
                    <div className="flex items-center gap-2 text-[#64ffda] text-sm font-medium">
                      <span>Read More</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Blogs Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-3 bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white hover:border-[#64ffda]/50 px-6 py-3 rounded-lg transition-all duration-300 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to All Blogs</span>
          </Link>
        </div>
      </div>
    </main>
  );
}