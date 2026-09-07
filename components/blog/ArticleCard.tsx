import Link from "next/link";
import type { BlogData } from "@/types/content";
import { readingTime } from "@/lib/data";
export function ArticleCard({ article }: { article: BlogData }) { const date = article.publishedAt || article.createdAt; return <article className="article-card"><div className="article-meta">{date ? <time dateTime={date}>{new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(new Date(date))}</time> : null}<span>{readingTime(article.content)} min read</span></div><h3><Link href={`/blogs/${article.slug}`}>{article.title}</Link></h3><p>{article.excerpt}</p><Link className="text-link" href={`/blogs/${article.slug}`}>Read article →</Link></article>; }
