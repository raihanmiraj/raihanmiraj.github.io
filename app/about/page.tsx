import type { Metadata } from "next";
import { Story, IndependentWork } from "@/components/about/Story";
import { PersonalStory } from "@/components/about/PersonalStory";
import { ContactSection } from "@/components/home/ContactSection";
import { profile, videos } from "@/data/profile";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The engineer, musician, and explorer behind the work. Raihan Miraj on building SaaS, recording music, and travelling Bangladesh.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Raihan Islam Miraj", url: `${profile.url}/about` },
};

export default function AboutPage() {
  const videoLd = {
    "@context": "https://schema.org",
    "@graph": videos.map((video) => ({
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
      contentUrl: video.url,
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
      author: { "@type": "Person", name: profile.name, url: profile.url },
      publisher: { "@type": "Person", name: profile.name, url: profile.url },
      mainEntityOfPage: absoluteUrl("/about"),
    })),
  };

  return (
    <main id="main" className="public-v3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd).replace(/</g, "\\u003c") }}
      />
      <Story />
      <IndependentWork />
      <PersonalStory />
      <ContactSection />
    </main>
  );
}
