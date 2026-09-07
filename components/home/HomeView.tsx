import type { BlogData, ProjectData } from "@/types/content";
import { Hero } from "./Hero";
import { WorkBento } from "./WorkBento";
import { CapabilitiesBento } from "./CapabilitiesBento";
import { Experience } from "./Experience";
import { JournalPreview } from "./JournalPreview";
import { BeyondCodePreview } from "./BeyondCodePreview";
import { ContactSection } from "./ContactSection";
export function HomeView({
  projects,
  blogs,
}: {
  projects: ProjectData[];
  blogs: BlogData[];
}) {
  return (
    <main id="main" className="public-v3">
      <Hero />
      <WorkBento projects={projects} />
      <CapabilitiesBento />
      <Experience />
      <JournalPreview blogs={blogs} />
      <BeyondCodePreview />
      <ContactSection />
    </main>
  );
}
