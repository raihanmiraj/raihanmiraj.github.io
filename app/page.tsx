import { HomeView } from "@/components/home/HomeView";
import { getBlogs, getProjects } from "@/lib/data";
export const dynamic = "force-dynamic";
export default async function Home() {
  const [projects, blogs] = await Promise.all([getProjects(), getBlogs({ limit: 3 })]);
  const featured = projects.filter(project => project.featured);
  return <HomeView projects={(featured.length ? featured : projects).slice(0, 6)} blogs={blogs} />;
}
