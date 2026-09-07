export type EditorBlock = { id?: string; type: string; data: Record<string, unknown> };
export type EditorData = { time?: number; version?: string; blocks: EditorBlock[] };
export type ProjectData = {
  _id: string; title: string; slug: string; subtitle?: string; summary: string; description: string;
  type?: string; company?: string; role?: string; ownership: "company" | "personal" | "client" | "university";
  status: "live" | "development" | "completed" | "archived"; featured: boolean; published: boolean; sortOrder: number;
  coverImage?: string; coverImageAlt?: string; gallery: { url: string; alt: string; caption?: string }[]; videos: string[];
  technologies: string[]; highlights: string[]; responsibilities: string[]; liveUrl?: string; githubUrl?: string;
  seoTitle?: string; metaDescription?: string; createdAt?: string; updatedAt?: string;
};
export type BlogData = {
  _id: string; title: string; slug: string; excerpt: string; coverImage?: string; coverImageAlt?: string; socialImage?: string;
  content: EditorData | string; contentFormat: "editorjs" | "legacy-html" | "markdown"; tags: string[];
  seoTitle?: string; metaDescription?: string; seoKeywords: string[]; canonicalUrl?: string;
  featured: boolean; status: "draft" | "published"; publishedAt?: string; createdAt?: string; updatedAt?: string;
};
