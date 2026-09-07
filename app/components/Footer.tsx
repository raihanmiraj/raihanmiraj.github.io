import Link from "next/link";
import { profile } from "@/data/profile";
export default function Footer() {
  return (
    <footer className="site-footer footer-v3">
      <div className="container footer-grid">
        <div className="footer-identity">
          <Link className="footer-name" href="/">
            {profile.name}
            <span>↗</span>
          </Link>
          <p>
            {profile.title}
            <br />
            {profile.neighborhood}
          </p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
        <nav aria-label="Professional profiles">
          <p className="section-index">Work & connect</p>
          <a href={profile.socials.github}>GitHub ↗</a>
          <a href={profile.socials.linkedin}>LinkedIn ↗</a>
          <a href={profile.resume}>Resume ↗</a>
        </nav>
        <nav aria-label="Elsewhere">
          <p className="section-index">Elsewhere</p>
          <a href={profile.socials.youtube}>YouTube ↗</a>
          <a href={profile.socials.x}>X / Twitter ↗</a>
          <a href={profile.socials.codeforces}>Codeforces ↗</a>
          <a href={profile.socials.beecrowd}>Beecrowd ↗</a>
        </nav>
      </div>
      <div className="container footer-base">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Software, with a sense of ownership.</span>
        <Link href="/login">Admin</Link>
      </div>
    </footer>
  );
}
