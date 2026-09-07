import type { Metadata } from "next";
import { getBlogs } from "@/lib/data";
import { ArticleCard } from "@/components/blog/ArticleCard";
export const metadata: Metadata = {
  title: "Journal",
  description:
    "Writing by Raihan Miraj about AI product architecture, SaaS engineering, and full-stack systems.",
  alternates: { canonical: "/blogs" },
};
export const dynamic = "force-dynamic";
export default async function BlogsPage() {
  const articles = await getBlogs();
  return (
    <main id="main" className="archive public-v3">
      <div className="container">
        <p className="eyebrow">Journal</p>
        <h1 className="page-title">Notes from building.</h1>
        <p className="archive-intro">
          Technical writing about product architecture, multi-tenant SaaS, AI
          integrations, payments, and lessons from shipping software.
        </p>
        {articles.length ? (
          <div className="article-grid">
            {articles.map((a) => (
              <ArticleCard key={a._id} article={a} />
            ))}
          </div>
        ) : (
          <div className="empty">The first notes are on their way.</div>
        )}
      </div>
    </main>
  );
}
