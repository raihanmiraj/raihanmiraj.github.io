import type { Metadata } from "next";
import { getProjects } from "@/lib/data";
import { ProjectCard } from "@/components/projects/ProjectCard";
export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected AI SaaS, commerce, marketplace, and platform engineering work by Raihan Miraj.",
  alternates: { canonical: "/projects" },
};
export const revalidate = 3600;
export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main id="main" className="archive public-v3">
      <div className="container">
        <p className="eyebrow">Product engineering</p>
        <h1 className="page-title">Work with real depth.</h1>
        <p className="archive-intro">
          AI SaaS, multi-tenant products, payments, marketplaces, commerce, and
          complex third-party integrations—built across company, founder, and
          client contexts.
        </p>
        {projects.length ? (
          <div className="work-grid">
            {projects.map((p, index) => (
              <ProjectCard key={p._id} project={p} index={index} />
            ))}
          </div>
        ) : (
          <div className="empty">No published projects yet.</div>
        )}
      </div>
    </main>
  );
}
