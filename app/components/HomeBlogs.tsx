export const revalidate = 60;
import { getBaseUrl } from "@/lib/baseUrl";

async function getBlogs() {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/blogs`, { next: { revalidate: 60 }, cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export default async function HomeBlogs() {
  const blogs = await getBlogs();
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {blogs.slice(0, 3).map((b: any) => (
        <a key={b._id} href={`/blogs/${b.slug}`} className="rounded-lg bg-gray-800 hover:shadow-lg">
          {b.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={b.image} alt={b.title} className="w-full aspect-video object-cover rounded-t-lg" />
          ) : null}
          <div className="p-4 space-y-2">
            <h3 className="text-lg font-semibold">{b.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-2">{b.metaDescription || ""}</p>
          </div>
        </a>
      ))}
    </div>
  );
}


