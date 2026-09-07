import { getBlogs, getProjects } from "@/lib/data";
import { site } from "@/lib/site";
export const dynamic = "force-dynamic";
export async function GET() {
  const [projects,blogs]=await Promise.all([getProjects(),getBlogs()]);
  const urls = ["/", "/about", "/blogs", "/projects",...projects.map(p=>`/projects/${p.slug}`),...blogs.map(b=>`/blogs/${b.slug}`)].map((p) => `${site.url}${p}`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `<url><loc>${u}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>`).join("\n")} 
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control":"public, s-maxage=3600, stale-while-revalidate=86400" } });
}


