export const revalidate = 60;
import { getBaseUrl } from "@/lib/baseUrl";
import Link from "next/link";

async function getProjects() {
  const base = await getBaseUrl();
  const res = await fetch(`${base}/api/projects`, { next: { revalidate: 60 }, cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function HomeProjects() {
  const projects = await getProjects();
  return (
    <>
      {/* Project Cards Grid with 5% size reduction */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {projects.slice(0, 6).map((p: { _id: string; title: string; description: string; coverImage?: string; githubUrl?: string; liveUrl?: string; technologies?: string[] }) => (
          <div className="rounded-lg bg-gray-800 transform scale-95 hover:scale-100 transition-transform duration-300" key={p._id}>
            <div className="filter grayscale hover:filter-none aspect-video rounded-md overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {p.coverImage ? <img className="aspect-video object-cover" src={p.coverImage} alt={p.title} /> : null}
            </div>
            <div className="px-4 py-3 flex-col flex gap-3">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-base line-clamp-2">{p.description}</p>
              <div className="flex items-center gap-2">
                {p.githubUrl ? (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 inline fill-white"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path></svg>
                  </a>
                ) : null}
                {p.liveUrl ? (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" aria-label="External">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>
                  </a>
                ) : null}
              </div>
              <div className="text-sm text-light flex gap-2 flex-wrap pb-4">
                {(p.technologies || []).map((t: string) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Professional Show All Projects Button - Golden Ratio Design */}
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
            href="/projects" 
            className="relative bg-transparent border-2 border-[#64ffda]/60 text-[#64ffda] hover:text-[#111A28] px-12 py-2 rounded-lg font-mono text-sm font-medium transition-all duration-300 ease-out group-hover:border-[#64ffda] group-hover:bg-[#64ffda] group-hover:shadow-2xl group-hover:shadow-[#64ffda]/25 flex items-center gap-3"
          >
            {/* Left decorative element */}
            <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse group-hover:bg-[#111A28] transition-colors duration-300"></div>
            
            <span className="relative z-10">Show All Projects</span>
            
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
              <span className="text-[#64ffda] font-mono text-xs">{projects.length}+ Projects</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


