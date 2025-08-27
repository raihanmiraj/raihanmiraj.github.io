export const revalidate = 60;
import { getBaseUrl } from "@/lib/baseUrl";
import Link from "next/link";

async function getBlogs() {
  const base = await getBaseUrl();
  const res = await fetch(`${base}/api/blogs`, { next: { revalidate: 60 }, cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function HomeBlogs() {
  const blogs = await getBlogs();
  return (
    <>
      {/* Blog Cards Grid with Professional Design */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {blogs.slice(0, 3).map((b: { _id: string; slug: string; title: string; image?: string; metaDescription?: string }) => (
          <Link 
            key={b._id} 
            href={`/blogs/${b.slug}`} 
            className="group rounded-lg bg-gray-800 hover:bg-gray-700 transform scale-95 hover:scale-100 transition-all duration-300 hover:shadow-2xl hover:shadow-[#64ffda]/10 overflow-hidden"
          >
            {/* Blog Image with Professional Overlay */}
            <div className="relative overflow-hidden">
              {b.image ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={b.image} 
                    alt={b.title} 
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Professional overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Read time badge */}
                  <div className="absolute top-4 right-4 bg-[#64ffda]/90 text-[#111A28] px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    5 min read
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-gray-900/90 text-[#64ffda] px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-[#64ffda]/30">
                    Blog
                  </div>
                </>
              ) : (
                <div className="w-full aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-gray-400">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                    <span className="text-sm">No Image</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Blog Content */}
            <div className="p-6 space-y-4">
              {/* Title with gradient accent */}
              <div className="relative">
                <h3 className="text-lg font-semibold text-white group-hover:text-[#64ffda] transition-colors duration-300 line-clamp-2">
                  {b.title}
                </h3>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#64ffda] to-[#64ffda]/50 group-hover:w-full transition-all duration-500"></div>
              </div>
              
              {/* Description */}
              <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                {b.metaDescription || "Discover insights and knowledge in this engaging blog post covering various aspects of web development and technology."}
              </p>
              
              {/* Blog Meta Information */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse"></div>
                  <span>Published</span>
                </div>
                
                <div className="flex items-center gap-1 text-[#64ffda] group-hover:gap-2 transition-all duration-300">
                  <span className="text-xs font-medium">Read More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Professional Show More Blogs Button - Golden Ratio Design */}
      <div className="flex justify-center items-center">
        <div className="relative group">
          {/* Decorative background elements following golden ratio */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#64ffda]/20 via-[#64ffda]/10 to-[#64ffda]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Golden ratio decorative lines */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#64ffda]/50"></div>
          </div>
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#64ffda]/50"></div>
          </div>
          
          {/* Main button */}
          <Link 
            href="/blogs" 
            className="relative bg-transparent border-2 border-[#64ffda]/60 text-[#64ffda] hover:text-[#111A28] px-12 py-2 rounded-lg font-mono text-sm font-medium transition-all duration-300 ease-out group-hover:border-[#64ffda] group-hover:bg-[#64ffda] group-hover:shadow-2xl group-hover:shadow-[#64ffda]/25 flex items-center gap-3"
          >
            {/* Left decorative element */}
            <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse group-hover:bg-[#111A28] transition-colors duration-300"></div>
            
            <span className="relative z-10">Show More Blogs</span>
            
            {/* Arrow icon */}
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Right decorative element */}
            <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse delay-500 group-hover:bg-[#111A28] transition-colors duration-300"></div>
          </Link>
          
          {/* Professional stats below button */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-[#111A28]/90 backdrop-blur-sm border border-[#64ffda]/30 rounded-full px-4 py-1">
              <span className="text-[#64ffda] font-mono text-xs">{blogs.length}+ Articles</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


