import Link from "next/link";
import { profile } from "@/data/profile";
export function Hero() {
  return (
    <section className="hero-v3 container">
      <div className="hero-topline">
        <p>{profile.name}</p>
        <span>
          {profile.location} · Since {profile.startYear}
        </span>
      </div>
      <p className="eyebrow">{profile.title}</p>
      <h1>
        I build AI-powered
        <br className="desktop-break" /> SaaS products{" "}
        <span>
          from
          <br className="desktop-break" /> idea to production.
        </span>
      </h1>
      <div className="hero-bottom">
        <p>
          I work across the full stack, from AI features and multi-tenant
          architecture to payments and the details of a useful product. I like
          owning the whole journey.
        </p>
        <div className="hero-links">
          <Link className="button" href="#work">
            View selected work <span>↗</span>
          </Link>
          <a href={profile.resume} className="quiet-link">
            Resume ↗
          </a>
          <a href={profile.socials.github} className="quiet-link">
            GitHub ↗
          </a>
          <a href="#contact" className="quiet-link">
            Let’s talk ↗
          </a>
        </div>
      </div>
      <div className="hero-signals">
        <span>
          <i /> Full Stack Developer at {profile.currentRole.company}
        </span>
        <span>Building Dokaneasy · My own commerce SaaS</span>
      </div>
    </section>
  );
}
