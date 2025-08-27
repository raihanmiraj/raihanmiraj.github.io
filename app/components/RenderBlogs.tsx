"use client";
import Image from "next/image";

// Simple HTML sanitization function
function sanitizeHtml(html: string): string {
  // Basic sanitization - remove script tags and on* attributes
  return html
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '');
}

interface Blog {
  _id?: string;
  slug: string;
  title: string;
  content?: string;
  image?: string;
  publishedAt?: string;
  tags?: string[];
}

interface RenderBlogsProps {
  blogs: Blog[];
}

export default function RenderBlogs({ blogs }: RenderBlogsProps) {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No blogs found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <style jsx>{`
        .prose-content h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin: 2rem 0 1rem 0;
          color: #0A69DC;
        }
        .prose-content h2 {
          font-size: 2rem;
          font-weight: bold;
          margin: 1.5rem 0 1rem 0;
          color: #0A69DC;
        }
        .prose-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 1.5rem 0 0.5rem 0;
          color: #0A69DC;
        }
        .prose-content p {
          margin: 1rem 0;
          line-height: 1.7;
          color: #e5e7eb;
        }
        .prose-content ul, .prose-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        .prose-content li {
          margin: 0.5rem 0;
          color: #e5e7eb;
        }
        .prose-content a {
          color: #0A69DC;
          text-decoration: underline;
        }
        .prose-content a:hover {
          color: #3b82f6;
        }
        .prose-content blockquote {
          border-left: 4px solid #0A69DC;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #d1d5db;
        }
        .prose-content code {
          background-color: #374151;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          color: #f9fafb;
        }
        .prose-content pre {
          background-color: #1f2937;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        .prose-content img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
        .prose-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
        }
        .prose-content th, .prose-content td {
          border: 1px solid #374151;
          padding: 0.75rem;
          text-align: left;
        }
        .prose-content th {
          background-color: #374151;
          font-weight: bold;
        }
      `}</style>
      
      {blogs.map((blog) => (
        <article 
          key={blog._id || blog.slug} 
          className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-[#0A69DC] transition-colors duration-300"
        >
          {/* Blog Header */}
          <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              <a 
                href={`/blogs/${blog.slug}`} 
                className="text-white hover:text-[#0A69DC] transition-colors duration-300"
              >
                {blog.title}
              </a>
            </h2>
            
            {blog.publishedAt && (
              <p className="text-gray-400 text-sm mb-3">
                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            )}
          </div>

          {/* Blog Image */}
          {blog.image && (
            <div className="mb-4">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                width={800}
                height={400}
                className="w-full h-48 md:h-64 object-cover rounded-md"
              />
            </div>
          )}

          {/* Blog Content Preview */}
          {blog.content && (
            <div 
              className="prose-content text-white leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ 
                __html: sanitizeHtml(
                  blog.content.length > 300 
                    ? blog.content.substring(0, 300) + '...' 
                    : blog.content
                )
              }}
            />
          )}

          {/* Read More Link */}
          <div className="mt-4">
            <a 
              href={`/blogs/${blog.slug}`}
              className="inline-flex items-center text-[#0A69DC] hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              Read More
              <svg 
                className="ml-2 w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </a>
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-xs bg-[#0A69DC]/20 text-[#0A69DC] rounded-full border border-[#0A69DC]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}