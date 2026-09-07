import Link from "next/link";
import type { BlogData } from "@/types/content";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { SectionHeading } from "./SectionHeading";
export function JournalPreview({ blogs }: { blogs: BlogData[] }) {
  return (
    <section className="section container">
      <SectionHeading number="04" title="Notes from building.">
        <p>
          Writing about SaaS architecture, AI integrations, and the engineering
          decisions behind useful products.
        </p>
      </SectionHeading>
      {blogs.length ? (
        <div className="article-grid">
          {blogs.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      ) : (
        <div className="journal-empty">
          <span className="section-index">Journal / In progress</span>
          <p>
            Some lessons need a little space.
            <br />
            The first notes are on their way.
          </p>
        </div>
      )}
      <Link className="text-link" href="/blogs">
        Read all writing ↗
      </Link>
    </section>
  );
}
