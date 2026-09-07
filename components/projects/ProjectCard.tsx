import Link from "next/link";
import type { ProjectData } from "@/types/content";
import { ProjectImage } from "./ProjectImage";
export function ProjectCard({
  project,
  index = 0,
}: {
  project: ProjectData;
  index?: number;
}) {
  const founder = project.ownership === "personal";
  return (
    <article
      className={`work-card work-position-${index % 6} ${project.coverImage ? "has-media" : "text-project"} ${founder ? "founder-card" : ""}`}
    >
      <div className="work-card-top">
        <span className="section-index">
          {String(index + 1).padStart(2, "0")} /{" "}
          {founder ? "Founder product" : project.company || project.ownership}
        </span>
        <span className="project-state">
          {project.status === "development" ? "In development" : project.status}
        </span>
      </div>
      <div className="work-card-copy">
        <p className="project-category">{project.type}</p>
        <h3>
          <Link href={`/projects/${project.slug}`}>
            {project.title} <span>↗</span>
          </Link>
        </h3>
        <p>{project.summary}</p>
      </div>
      {project.coverImage ? (
        <Link
          className="work-image-link"
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.title} case study`}
        >
          <ProjectImage
            src={project.coverImage}
            alt={project.coverImageAlt || `${project.title} product interface`}
          />
        </Link>
      ) : (
        <div className="project-scope">
          <p className="section-index">Engineering scope</p>
          <ul>
            {(project.highlights.length
              ? project.highlights
              : project.technologies
            )
              .slice(0, 3)
              .map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
        </div>
      )}
      <div className="work-card-footer">
        <Link href={`/projects/${project.slug}`}>
          Case study <span>→</span>
        </Link>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Visit product ↗
          </a>
        )}
      </div>
    </article>
  );
}
