import type { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Projects | Raihan Miraj",
  description: "Browse my portfolio of web development projects and applications",
};

import { getBaseUrl } from "@/lib/baseUrl";
import Link from "next/link";

async function getProjects() {
  const res = await fetch(`${await getBaseUrl()}/api/projects`, { next: { revalidate: 60 }, cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function ProjectsPage() {
  const projects = await getProjects();
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
            <span className="text-[#64ffda] font-medium">Projects</span>
          </nav>

          {/* Header Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-[#64ffda] font-mono text-lg mb-2 block">02.</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                My <span className="text-[#64ffda]">Projects</span>
              </h1>
              <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#64ffda] to-transparent mx-auto mb-6"></div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              A collection of projects showcasing my skills in web development, from full-stack applications to modern UI/UX implementations.
            </p>
            
            {/* Project Stats */}
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse"></div>
                <span className="text-gray-400">{projects.length} Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse delay-300"></div>
                <span className="text-gray-400">Full Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse delay-500"></div>
                <span className="text-gray-400">Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="px-5 md:px-16 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p: { _id: string; title: string; description: string; coverImage?: string; githubUrl?: string; liveUrl?: string; technologies?: string[] }, index: number) => (
                <article key={p._id} className="group relative">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-xl overflow-hidden transform scale-95 hover:scale-100 transition-all duration-500 hover:border-[#64ffda]/30 hover:shadow-2xl hover:shadow-[#64ffda]/10">
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-48">
                      <div className="h-full filter grayscale group-hover:filter-none transition-all duration-500">
                        {p.coverImage ? (
                          <img 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                            src={p.coverImage} 
                            alt={p.title} 
                          />
                        ) : (
                          <div className="h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                            <div className="text-3xl text-gray-500 opacity-50">
                              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8zm2 2v4h4v-4h-4z"/>
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Project Number Badge */}
                      <div className="absolute top-3 left-3 bg-[#64ffda]/90 backdrop-blur-sm text-[#111A28] px-2 py-1 rounded-md font-mono text-xs font-bold">
                        #{(index + 1).toString().padStart(2, '0')}
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-3 right-3 bg-[#111A28]/80 backdrop-blur-sm text-[#64ffda] px-2 py-1 rounded-md font-mono text-xs">
                        Active
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="relative p-6 space-y-4">
                      {/* Title with Professional Typography */}
                      <div className="space-y-2">
                        <h2 className="text-xl font-bold text-white group-hover:text-[#64ffda] transition-colors duration-300 line-clamp-1">
                          {p.title}
                        </h2>
                        
                        {/* Decorative Line */}
                        <div className="w-12 h-[1px] bg-gradient-to-r from-[#64ffda] to-transparent group-hover:w-full transition-all duration-500"></div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                        {p.description}
                      </p>

                      {/* Technologies Stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {(p.technologies || []).map((tech: string) => (
                          <span 
                            key={tech} 
                            className="px-2 py-1 bg-gray-700/60 border border-gray-600/50 text-[#64ffda] text-xs font-mono rounded group-hover:bg-[#64ffda]/10 group-hover:border-[#64ffda]/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3">
                          {p.githubUrl && (
                            <a 
                              href={p.githubUrl} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="group/link flex items-center justify-center w-9 h-9 bg-gray-700/50 hover:bg-[#64ffda]/20 border border-gray-600/50 hover:border-[#64ffda]/50 rounded-lg transition-all duration-300"
                              aria-label="GitHub Repository"
                            >
                              <svg className="w-4 h-4 text-gray-400 group-hover/link:text-[#64ffda] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/>
                              </svg>
                            </a>
                          )}
                          
                          {p.liveUrl && (
                            <a 
                              href={p.liveUrl} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="group/link flex items-center justify-center w-9 h-9 bg-gray-700/50 hover:bg-[#64ffda]/20 border border-gray-600/50 hover:border-[#64ffda]/50 rounded-lg transition-all duration-300"
                              aria-label="Live Demo"
                            >
                              <svg className="w-4 h-4 text-gray-400 group-hover/link:text-[#64ffda] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                        </div>
                        
                        {/* Progress Indicator */}
                        <div className="w-12 h-1 bg-gray-700 rounded-full overflow-hidden">
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
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-800 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No Projects Yet</h3>
              <p className="text-gray-400">Check back soon for exciting new projects!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-[#0a1628] to-[#111A28] px-5 md:px-16 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Interested in <span className="text-[#64ffda]">Collaboration</span>?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, and ways we can work together to create something amazing.
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-2 bg-[#64ffda] hover:bg-[#64ffda]/90 text-[#111A28] font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#64ffda]/20 hover:scale-105"
            >
              <span>Get In Touch</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


