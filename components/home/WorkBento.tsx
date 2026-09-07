import Link from "next/link";
import type { ProjectData } from "@/types/content";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "./SectionHeading";
export function WorkBento({ projects }: { projects: ProjectData[] }) {
  return (
    <section className="section container" id="work">
      <SectionHeading number="01" title="Selected work">
        <p>
          Real products. Different problems.
          <br />
          Engineering from the interface to the infrastructure.
        </p>
      </SectionHeading>
      <div className="work-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project._id} project={project} index={index} />
        ))}
      </div>
      {!projects.length && (
        <p className="empty">
          New case studies are on the way. In the meantime, let’s talk about
          what you’re building.
        </p>
      )}
      <Link className="text-link" href="/projects">
        All projects <span>↗</span>
      </Link>
    </section>
  );
}
