"use client";
import { useState } from "react";

// Simple HTML sanitization function
function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[^>]*>.*?<\/script>/gi, '')
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/on\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '');
}

interface BlogContentProps {
  blog: {
    title: string;
    content: string;
    image?: string;
    metaDescription?: string;
    publishedAt?: string;
    author?: string;
    readTime?: number;
  };
}

export default function BlogContent({ blog }: BlogContentProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const estimatedReadTime = blog.readTime || Math.ceil(blog.content.split(' ').length / 200);

  return (
    <article className="relative">
      {/* Article Header */}
      <header className="mb-12">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#64ffda] rounded-full"></div>
            <span>Blog Post</span>
          </div>
          <span>•</span>
          <span>{estimatedReadTime} min read</span>
          {blog.publishedAt && (
            <>
              <span>•</span>
              <time>{new Date(blog.publishedAt).toLocaleDateString()}</time>
            </>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {blog.title}
        </h1>

        {/* Description */}
        {blog.metaDescription && (
          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
            {blog.metaDescription}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
              isBookmarked 
                ? 'bg-[#64ffda]/10 border-[#64ffda]/30 text-[#64ffda]' 
                : 'border-gray-700/50 text-gray-400 hover:border-gray-600/50 hover:text-gray-300'
            }`}
          >
            <svg className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span>{isBookmarked ? 'Saved' : 'Save'}</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700/50 text-gray-400 hover:border-gray-600/50 hover:text-gray-300 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span>Share</span>
          </button>
        </div>

        {/* Featured Image */}
        {blog.image && (
          <div className="relative rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
          </div>
        )}
      </header>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <style jsx>{`
          .prose-content {
            max-width: none;
            color: #e5e7eb;
            line-height: 1.75;
          }
          .prose-content h1, .prose-content h2, .prose-content h3 {
            color: #64ffda;
            font-weight: 700;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          .prose-content h1 { font-size: 2.25rem; }
          .prose-content h2 { font-size: 1.875rem; }
          .prose-content h3 { font-size: 1.5rem; }
          .prose-content p { margin: 1.5rem 0; }
          .prose-content a {
            color: #64ffda;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: border-color 0.2s;
          }
          .prose-content a:hover { border-bottom-color: #64ffda; }
          .prose-content blockquote {
            border-left: 4px solid #64ffda;
            padding-left: 1.5rem;
            margin: 2rem 0;
            font-style: italic;
            color: #d1d5db;
            background: rgba(100, 255, 218, 0.05);
            padding: 1rem 1.5rem;
            border-radius: 0 0.5rem 0.5rem 0;
          }
          .prose-content code {
            background: #374151;
            padding: 0.25rem 0.5rem;
            border-radius: 0.375rem;
            font-size: 0.875rem;
            color: #f9fafb;
          }
          .prose-content pre {
            background: #1f2937;
            padding: 1.5rem;
            border-radius: 0.75rem;
            overflow-x: auto;
            margin: 2rem 0;
            border: 1px solid #374151;
          }
          .prose-content img {
            width: 100%;
            border-radius: 0.75rem;
            margin: 2rem 0;
            border: 1px solid #374151;
          }
          .prose-content ul, .prose-content ol { margin: 1.5rem 0; padding-left: 2rem; }
          .prose-content li { margin: 0.5rem 0; }
        `}</style>
        
        <div 
          className="prose-content text-gray-200"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(blog.content) }}
        />
      </div>

      {/* Article Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-800/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Was this helpful?</span>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-gray-700/50 text-gray-400 hover:text-green-400 hover:border-green-400/30 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
              <button className="p-2 rounded-lg border border-gray-700/50 text-gray-400 hover:text-red-400 hover:border-red-400/30 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06L20 4m-10 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-10 10h2m10-4H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            <span>Share this article</span>
          </div>
        </div>
      </footer>
    </article>
  );
}