import Image from "next/image";
import type { ProjectData } from "@/types/content";

function youtubeId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1).split("/")[0];
    if (parsed.pathname.includes("shorts")) return parsed.pathname.split("/").pop() || null;
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
}

function youtubeEmbed(url: string) {
  const id = youtubeId(url);
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
}

export function ProjectMedia({ project }: { project: ProjectData }) {
  if (!project.gallery.length && !project.videos.length) return null;
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <h2>Product media</h2>
          <p>Selected screens and supplied product videos.</p>
        </div>
        <div className="media-grid">
          {project.gallery.map((item) => (
            <figure key={item.url}>
              <Image src={item.url} alt={item.alt} width={1400} height={900} />
              {item.caption ? <figcaption>{item.caption}</figcaption> : null}
            </figure>
          ))}
          {project.videos.map((url) => {
            const embed = youtubeEmbed(url);
            return embed ? (
              <figure className="video" key={url}>
                <iframe
                  src={embed}
                  title={`${project.title} video`}
                  loading="lazy"
                  allow="encrypted-media; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <figcaption>
                  <a href={url} target="_blank" rel="noreferrer">
                    Watch on YouTube ↗
                  </a>
                </figcaption>
              </figure>
            ) : (
              <a className="button secondary" href={url} key={url}>
                Watch project video ↗
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
