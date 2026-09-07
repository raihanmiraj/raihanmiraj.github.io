import { getBlogs } from "@/lib/data";
import { site } from "@/lib/site";
export const dynamic="force-dynamic";
const escape=(v:string)=>v.replace(/[<>&'\"]/g,c=>({"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"}[c]!));
export async function GET(){const articles=await getBlogs();const items=articles.map(a=>`<item><title>${escape(a.title)}</title><link>${site.url}/blogs/${a.slug}</link><guid>${site.url}/blogs/${a.slug}</guid><description>${escape(a.excerpt)}</description>${a.publishedAt?`<pubDate>${new Date(a.publishedAt).toUTCString()}</pubDate>`:""}</item>`).join("");const xml=`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Raihan Miraj — Journal</title><link>${site.url}/blogs</link><description>${escape(site.description)}</description>${items}</channel></rss>`;return new Response(xml,{headers:{"Content-Type":"application/rss+xml; charset=utf-8"}})}
