import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject } from "@/lib/data";
import { absoluteUrl, site } from "@/lib/site";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
export const dynamic="force-dynamic";
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const project=await getProject((await params).slug);if(!project)return{};const description=project.metaDescription||project.summary;return{title:project.seoTitle||project.title,description,alternates:{canonical:`/projects/${project.slug}`},openGraph:{title:project.seoTitle||project.title,description,images:project.coverImage?[project.coverImage]:[]}}}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
  const project=await getProject((await params).slug);if(!project)notFound();
  const jsonLd={"@context":"https://schema.org","@type":"CreativeWork",name:project.title,description:project.summary,url:absoluteUrl(`/projects/${project.slug}`),author:{"@type":"Person",name:site.name}};
  return <main id="main"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/>
    <header className="case-hero"><div className="container"><p className="eyebrow">{project.type||"Case study"}</p><h1>{project.title}</h1><p className="case-summary">{project.summary}</p><dl className="case-facts"><div><dt>Role</dt><dd>{project.role||"Full Stack Developer"}</dd></div><div><dt>Context</dt><dd>{project.ownership==="personal"?"Founder product":project.company?`Built for ${project.company}`:project.ownership}</dd></div><div><dt>Status</dt><dd>{project.status}</dd></div><div><dt>Stack</dt><dd>{project.technologies.slice(0,3).join(", ")}</dd></div></dl></div></header>
    <div className="container">{project.coverImage?<div className="case-cover"><Image src={project.coverImage} alt={project.coverImageAlt||`${project.title} interface`} fill priority sizes="100vw"/></div>:null}</div>
    <section className="section"><div className="container case-body"><h2>Overview</h2><div><p>{project.description}</p>{project.liveUrl?<a className="button" href={project.liveUrl} target="_blank" rel="noreferrer">Visit product ↗</a>:null}</div></div></section>
    {project.highlights.length?<section className="section"><div className="container case-body"><h2>Selected engineering</h2><ul>{project.highlights.map(item=><li key={item}>{item}</li>)}</ul></div></section>:null}
    {project.responsibilities.length?<section className="section"><div className="container case-body"><h2>What I built</h2><ul>{project.responsibilities.map(item=><li key={item}>{item}</li>)}</ul></div></section>:null}
    <ProjectMedia project={project}/>
  </main>
}
