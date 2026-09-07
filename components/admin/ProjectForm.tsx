"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ProjectData } from "@/types/content";
import { slugify } from "@/lib/site";

const empty = { title:"", slug:"", subtitle:"", summary:"", description:"", type:"", company:"", role:"Full Stack Developer", ownership:"company", status:"completed", featured:false, published:false, sortOrder:0, coverImage:"", coverImageAlt:"", gallery:[], videos:[], technologies:[], highlights:[], responsibilities:[], liveUrl:"", githubUrl:"", seoTitle:"", metaDescription:"" } as unknown as ProjectData;
const lines=(v:string)=>v.split("\n").map(x=>x.trim()).filter(Boolean);
const csv=(v:string)=>v.split(",").map(x=>x.trim()).filter(Boolean);
const parseGallery=(v:string)=>v.split("\n").map(row=>{const [url,alt,caption]=row.split("|").map(x=>x.trim());return {url,alt:alt||"Project screenshot",caption:caption||undefined}}).filter(x=>x.url);

export function ProjectForm({initial}:{initial?:ProjectData}){
  const router=useRouter(); const [data,setData]=useState(initial||empty); const [message,setMessage]=useState(""); const [busy,setBusy]=useState(false);
  const set=(key:keyof ProjectData,value:unknown)=>setData(prev=>({...prev,[key]:value}));
  async function save(event:React.FormEvent){event.preventDefault();setBusy(true);setMessage("");const response=await fetch(initial?`/api/projects/${initial._id}`:"/api/projects",{method:initial?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});const result=await response.json().catch(()=>({}));setBusy(false);if(!response.ok){setMessage(result.error||"Could not save project.");return}router.push("/dashboard/projects");router.refresh()}
  return <form className="dashboard-form" onSubmit={save}><div className="editor-layout"><div className="form-stack">
    <section className="form-card"><h2>Identity</h2>
      <label>Title<input required value={data.title} onChange={e=>{set("title",e.target.value);if(!initial)set("slug",slugify(e.target.value))}}/></label>
      <label>Slug<input required value={data.slug} onChange={e=>set("slug",slugify(e.target.value))}/></label>
      <label>Subtitle<input value={data.subtitle||""} onChange={e=>set("subtitle",e.target.value)}/></label>
      <div className="form-row"><label>Type<input value={data.type||""} onChange={e=>set("type",e.target.value)}/></label><label>Company<input value={data.company||""} onChange={e=>set("company",e.target.value)}/></label></div>
      <div className="form-row"><label>Role<input value={data.role||""} onChange={e=>set("role",e.target.value)}/></label><label>Ownership<select value={data.ownership} onChange={e=>set("ownership",e.target.value)}><option value="company">Company</option><option value="personal">Personal / founder</option><option value="client">Client</option><option value="university">University</option></select></label></div>
    </section>
    <section className="form-card"><h2>Story</h2>
      <label>Summary<textarea required minLength={10} rows={3} value={data.summary} onChange={e=>set("summary",e.target.value)}/></label>
      <label>Detailed description<textarea required minLength={20} rows={10} value={data.description} onChange={e=>set("description",e.target.value)}/></label>
      <label>Highlights — one per line<textarea rows={7} value={data.highlights.join("\n")} onChange={e=>set("highlights",lines(e.target.value))}/></label>
      <label>Responsibilities — one per line<textarea rows={7} value={data.responsibilities.join("\n")} onChange={e=>set("responsibilities",lines(e.target.value))}/></label>
    </section>
    <section className="form-card"><h2>Technology & media</h2>
      <label>Technologies — comma separated<input value={data.technologies.join(", ")} onChange={e=>set("technologies",csv(e.target.value))}/></label>
      <label>Cover image URL<input type="url" value={data.coverImage||""} onChange={e=>set("coverImage",e.target.value)}/></label>
      <label>Cover image alt<input value={data.coverImageAlt||""} onChange={e=>set("coverImageAlt",e.target.value)}/></label>
      <label>Gallery — one “URL | alt | caption” per line<textarea rows={6} value={data.gallery.map(x=>[x.url,x.alt,x.caption].filter(Boolean).join(" | ")).join("\n")} onChange={e=>set("gallery",parseGallery(e.target.value))}/></label>
      <label>Video URLs — one per line<textarea rows={4} value={data.videos.join("\n")} onChange={e=>set("videos",lines(e.target.value))}/></label>
    </section>
  </div><aside className="form-stack">
    <section className="form-card"><h2>Publishing</h2>
      <label>Status<select value={data.status} onChange={e=>set("status",e.target.value)}><option value="live">Live</option><option value="development">In development</option><option value="completed">Completed</option><option value="archived">Archived</option></select></label>
      <label>Sort order<input type="number" min={0} max={999} value={data.sortOrder} onChange={e=>set("sortOrder",Number(e.target.value))}/></label>
      <label className="check"><input type="checkbox" checked={data.published} onChange={e=>set("published",e.target.checked)}/> Published</label>
      <label className="check"><input type="checkbox" checked={data.featured} onChange={e=>set("featured",e.target.checked)}/> Featured</label>
    </section>
    <section className="form-card"><h2>Links & SEO</h2>
      <label>Live URL<input type="url" value={data.liveUrl||""} onChange={e=>set("liveUrl",e.target.value)}/></label>
      <label>GitHub URL<input type="url" value={data.githubUrl||""} onChange={e=>set("githubUrl",e.target.value)}/></label>
      <label>SEO title <small>{(data.seoTitle||"").length}/70</small><input maxLength={70} value={data.seoTitle||""} onChange={e=>set("seoTitle",e.target.value)}/></label>
      <label>Meta description <small>{(data.metaDescription||"").length}/170</small><textarea maxLength={170} value={data.metaDescription||""} onChange={e=>set("metaDescription",e.target.value)}/></label>
    </section>
    <button className="button" disabled={busy}>{busy?"Saving…":"Save project"}</button>{message?<p className="form-error" role="alert">{message}</p>:null}
  </aside></div></form>
}
