import Link from "next/link";
import { photos, profile } from "@/data/profile";
import { MediaCard } from "@/components/media/MediaCard";
import { SectionHeading } from "./SectionHeading";
export function BeyondCodePreview() {
  return (
    <section className="section container" id="beyond-code">
      <SectionHeading number="05" title="Away from the screen.">
        <p>
          Music is the constant. The road brings a change of pace. There’s a
          little more to my life than what I ship.
        </p>
      </SectionHeading>
      <div className="beyond-preview">
        <MediaCard photo={photos.find((p) => p.id === "guitar")!} />
        <div className="bento-card personal-intro">
          <p className="eyebrow">Music, machines & open roads</p>
          <h3>
            Another side
            <br />
            of the same person.
          </h3>
          <p>
            {profile.music.guitarYears} years on guitar.{" "}
            {profile.music.keyboardYears} on keys. Singing, ukulele, and a
            recording setup. Motorcycle trips across Bangladesh, and time behind
            the wheel.
          </p>
          <Link className="text-link" href="/about#beyond-code">
            Explore beyond code ↗
          </Link>
        </div>
        <MediaCard photo={photos.find((p) => p.id === "bike-travel")!} />
      </div>
    </section>
  );
}
