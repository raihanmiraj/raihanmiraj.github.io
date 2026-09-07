import { z } from "zod";
import { topicValues } from "@/data/contact-topics";

const safeUrl = z.union([z.literal(""), z.url({ protocol: /^https?$/ })]).optional();
const text = (max: number) => z.string().trim().max(max);
const stringList = z.array(text(100)).max(40).default([]);
export const slugSchema = z.string().trim().min(1).max(100).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const projectInput = z.object({
  title: text(120).min(2), slug: slugSchema, subtitle: text(180).optional(), summary: text(360).min(10), description: text(12000).min(20),
  type: text(160).optional(), company: text(120).optional(), role: text(120).optional(),
  ownership: z.enum(["company", "personal", "client", "university"]), status: z.enum(["live", "development", "completed", "archived"]),
  featured: z.boolean(), published: z.boolean(), sortOrder: z.number().int().min(0).max(999), coverImage: safeUrl, coverImageAlt: text(180).optional(),
  gallery: z.array(z.object({ url: z.url({ protocol: /^https?$/ }), alt: text(180), caption: text(240).optional() })).max(20).default([]),
  videos: z.array(z.url({ protocol: /^https?$/ })).max(10).default([]), technologies: stringList, highlights: stringList, responsibilities: stringList,
  liveUrl: safeUrl, githubUrl: safeUrl, seoTitle: text(70).optional(), metaDescription: text(170).optional(),
});

const editorBlock = z.object({ id: z.string().optional(), type: z.string().min(1).max(40), data: z.record(z.string(), z.unknown()) });
export const blogInput = z.object({
  title: text(140).min(2), slug: slugSchema, excerpt: text(360).min(10), coverImage: safeUrl, coverImageAlt: text(180).optional(), socialImage: safeUrl,
  content: z.object({ time: z.number().optional(), version: z.string().optional(), blocks: z.array(editorBlock).max(1000) }), contentFormat: z.literal("editorjs"),
  tags: stringList, seoTitle: text(70).optional(), metaDescription: text(170).optional(), seoKeywords: stringList, canonicalUrl: safeUrl,
  featured: z.boolean(), status: z.enum(["draft", "published"]),
});
export const contactInput = z.object({ name: text(80).min(2), email: z.email().max(160), message: text(4000).min(20), topic: z.enum(topicValues).default("general"), website: z.string().max(0).optional() });
export const loginInput = z.object({ email: z.email().max(160), password: z.string().min(8).max(200) });
