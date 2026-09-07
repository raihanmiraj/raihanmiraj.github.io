import "server-only";
import { connectToDatabase } from "@/lib/db";
import { Project } from "@/models/Project";
import { Blog } from "@/models/Blog";
import { Contact } from "@/models/Contact";
import type { BlogData, EditorData, ProjectData } from "@/types/content";
import { slugify } from "@/lib/site";
import { normalizeContactTopic, type ContactMessage } from "@/data/contact-topics";

function plain<T>(value: unknown): T { return JSON.parse(JSON.stringify(value)) as T; }
function normalizeProject(raw: Record<string, unknown>): ProjectData {
  const title = String(raw.title || "Untitled project");
  return plain({ gallery: [], videos: [], technologies: [], highlights: [], responsibilities: [], featured: false, published: false,
    sortOrder: 0, ownership: "client", status: "completed", summary: String(raw.summary || raw.description || ""), slug: raw.slug || slugify(title), ...raw });
}
function normalizeBlog(raw: Record<string, unknown>): BlogData {
  const legacyPublished = raw.published === true;
  const content = raw.content;
  const isStructured = Boolean(content && typeof content === "object" && "blocks" in content);
  return plain({ excerpt: String(raw.excerpt || raw.metaDescription || ""), tags: [], seoKeywords: [], featured: false, ...raw,
    coverImage: raw.coverImage || raw.image, contentFormat: raw.contentFormat || (isStructured ? "editorjs" : "legacy-html"), status: raw.status || (legacyPublished ? "published" : "draft") });
}

const publishedBlogQuery = { published: true };
export async function getProjects(options: { admin?: boolean; featured?: boolean; limit?: number } = {}) {
  await connectToDatabase();
  const query: Record<string, unknown> = options.admin ? {} : { published: true };
  if (options.featured) query.featured = true;
  const rows = await Project.find(query).sort({ sortOrder: 1, createdAt: -1 }).limit(options.limit || 0).lean();
  return rows.map((row) => normalizeProject(row as unknown as Record<string, unknown>));
}
export async function getProject(identifier: string, admin = false) {
  await connectToDatabase();
  const objectId = /^[a-f\d]{24}$/i.test(identifier);
  const match = objectId ? { $or: [{ _id: identifier }, { slug: identifier }] } : { slug: identifier };
  const row = await Project.findOne(admin ? match : { ...match, published: true }).lean();
  return row ? normalizeProject(row as unknown as Record<string, unknown>) : null;
}
export async function getBlogs(options: { admin?: boolean; featured?: boolean; limit?: number } = {}) {
  await connectToDatabase();
  const query: { published?: boolean; featured?: boolean } = options.admin ? {} : { ...publishedBlogQuery };
  if (options.featured) query.featured = true;
  const rows = await Blog.find(query).sort({ publishedAt: -1, createdAt: -1 }).limit(options.limit || 0).lean();
  return rows.map((row) => normalizeBlog(row as unknown as Record<string, unknown>));
}
export async function getBlog(identifier: string, admin = false) {
  await connectToDatabase();
  const objectId = /^[a-f\d]{24}$/i.test(identifier);
  const match = objectId ? { $or: [{ _id: identifier }, { slug: identifier }] } : { slug: identifier };
  const row = await Blog.findOne(admin ? match : { ...match, published: true }).lean();
  return row ? normalizeBlog(row as unknown as Record<string, unknown>) : null;
}
export async function getContacts(): Promise<ContactMessage[]> {
  await connectToDatabase();
  const rows = plain<ContactMessage[]>(await Contact.find({}).sort({ createdAt: -1 }).lean());
  return rows.map(normalizeContactTopic);
}
export async function getDashboardCounts() {
  await connectToDatabase();
  const [projects, publishedProjects, blogs, publishedBlogs, contacts, unread] = await Promise.all([
    Project.countDocuments(), Project.countDocuments({ published: true }), Blog.countDocuments(), Blog.countDocuments(publishedBlogQuery), Contact.countDocuments(), Contact.countDocuments({ read: false }),
  ]);
  return { projects, publishedProjects, draftProjects: projects - publishedProjects, blogs, publishedBlogs, draftBlogs: blogs - publishedBlogs, contacts, unread };
}
export function readingTime(content: EditorData | string) {
  const raw = typeof content === "string" ? content : content.blocks.map((b) => JSON.stringify(b.data)).join(" ");
  return Math.max(1, Math.ceil(raw.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length / 220));
}
