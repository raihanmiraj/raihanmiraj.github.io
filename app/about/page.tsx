import type { Metadata } from "next";
import { Story, IndependentWork } from "@/components/about/Story";
import { PersonalStory } from "@/components/about/PersonalStory";
import { ContactSection } from "@/components/home/ContactSection";
import { profile } from "@/data/profile";
export const metadata: Metadata = {
  title: "About",
  description:
    "The engineer, musician, and explorer behind the work. Raihan Miraj on building SaaS, recording music, and travelling Bangladesh.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Raihan Islam Miraj", url: `${profile.url}/about` },
};
export default function AboutPage() {
  return (
    <main id="main" className="public-v3">
      <Story />
      <IndependentWork />
      <PersonalStory />
      <ContactSection />
    </main>
  );
}
