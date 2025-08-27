import type { Metadata } from "next";
import Link from "next/link";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blogs | Raihan Miraj",
  description: "Read recent blogs by Raihan Miraj",
};

import { getBaseUrl } from "@/lib/baseUrl";

async function getBlogs() {
  const res = await fetch(`${await getBaseUrl()}/api/blogs`, { next: { revalidate: 60 }, cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function BlogsPage() {
  const blogs = await getBlogs();
  return (
    <main className="bg-[#111A28] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#111A28] via-[#0a1628] to-[#111A28] px-5 md:px-16 py-16 md:py-24">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-[#64ffda]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-[#64ffda]/8 rounded-full blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="text-gray-400 hover:text-[#64ffda] transition-colors">Home</Link>
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#64ffda] font-medium">Blogs</span>
          </nav>

          {/* Header Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-[#64ffda] font-mono text-lg mb-2 block">03.</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                Latest <span className="text-[#64ffda]">Insights</span>
              </h1>
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent mx-auto mb-6"></div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Thoughts, tutorials, and insights about web development, technology, and the journey of building digital experiences.
            </p>
            
            {/* Blog Stats */}
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse"></div>
                <span className="text-gray-400">{blogs.length} Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse delay-300"></div>
                <span className="text-gray-400">Regular Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="px-5 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {blogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog: { _id: string; slug: string; title: string; image?: string; metaDescription?: string; createdAt: string }, index: number) => (
                <article key={blog._id} className="group relative">
                  <a 
                    href={`/blogs/${blog.slug}`} 
                    className="block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden hover:border-[#64ffda]/30 hover:shadow-2xl hover:shadow-[#64ffda]/10 transition-all duration-500 transform hover:scale-[1.02]"
                  >
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Blog Image */}
                    <div className="relative overflow-hidden h-48">
                      {blog.image ? (
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="w-full h-full object-cover filter grayscale group-hover:filter-none transition-all duration-500 transform group-hover:scale-105" 
                        />
                      ) : (
                        <div className="h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                          <div className="text-4xl text-gray-500 opacity-50">
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Article Number Badge */}
                      <div className="absolute top-3 left-3 bg-[#64ffda]/90 backdrop-blur-sm text-[#111A28] px-2 py-1 rounded-md font-mono text-xs font-bold">
                        #{(index + 1).toString().padStart(2, '0')}
                      </div>
                      
                      {/* Read Time Badge */}
                      <div className="absolute top-3 right-3 bg-[#111A28]/80 backdrop-blur-sm text-[#64ffda] px-2 py-1 rounded-md font-mono text-xs">
                        5 min read
                      </div>
                    </div>

                    {/* Blog Content */}
                    <div className="relative p-6 space-y-4">
                      {/* Date */}
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <time>{new Date(blog.createdAt).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</time>
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors duration-300 line-clamp-2 leading-tight">
                        {blog.title}
                      </h2>
                      
                      {/* Decorative Line */}
                      <div className="w-12 h-[1px] bg-gradient-to-r from-[#64ffda] to-transparent group-hover:w-full transition-all duration-500"></div>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                        {blog.metaDescription || "Discover insights and learn something new with this detailed article."}
                      </p>
                      
                      {/* Read More */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-2 text-[#64ffda] text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>Read Article</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        
                        {/* Reading Progress Indicator */}
                        <div className="w-8 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-[#64ffda] w-0 group-hover:w-full transition-all duration-1000 delay-200"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner Decoration */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <svg className="w-full h-full text-[#64ffda]" fill="currentColor" viewBox="0 0 100 100">
                        <polygon points="100,0 100,50 50,100 0,50 0,0" opacity="0.3"/>
                      </svg>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No Articles Yet</h3>
              <p className="text-gray-400">Stay tuned for upcoming insights and tutorials!</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-[#0a1628] to-[#111A28] px-5 md:px-16 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with Latest <span className="text-[#64ffda]">Insights</span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development, technology trends, and coding best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-white placeholder:text-gray-400 text-sm focus:border-[#64ffda] focus:outline-none focus:ring-1 focus:ring-[#64ffda]/20 transition-colors"
              />
              <button className="bg-[#64ffda] hover:bg-[#64ffda]/90 text-[#111A28] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#64ffda]/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


