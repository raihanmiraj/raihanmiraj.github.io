export async function GET() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const urls = ["/", "/blogs", "/projects"].map((p) => `${base}${p}`);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `<url><loc>${u}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>`).join("\n")} 
</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}


