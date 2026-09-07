import { profile } from "@/data/profile";
export const site = profile;
export function absoluteUrl(path = "") {
  return new URL(path, site.url).toString();
}
export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 100);
}
