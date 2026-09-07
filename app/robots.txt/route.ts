export function GET() {
  const body = `User-agent: *\nAllow: /\nDisallow: /dashboard\nDisallow: /api\nSitemap: https://www.raihanmiraj.com/sitemap.xml`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}


