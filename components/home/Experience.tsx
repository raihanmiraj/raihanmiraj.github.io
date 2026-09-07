import Link from "next/link";
import { SectionHeading } from "./SectionHeading";
export function Experience() {
  return (
    <section className="section container" id="experience">
      <SectionHeading number="03" title="Experience, with ownership.">
        <p>
          Client work since 2020. Integration-heavy platforms. Cross-functional
          teams. Now, AI SaaS products.
        </p>
      </SectionHeading>
      <div className="experience-layout">
        <div className="experience-list">
          <article>
            <div className="experience-date">SEP 2025 — PRESENT</div>
            <h3>
              NexiBy LLC <span>Dhaka</span>
            </h3>
            <h4>Full Stack Developer</h4>
            <p>
              Building Lupofy, Kbixy, and Webwatchly. Full-stack product
              engineering with Next.js, React, Node.js, PostgreSQL, OpenAI, and
              Stripe.
            </p>
          </article>
          <article>
            <div className="experience-date">APR 2023 — AUG 2025</div>
            <h3>
              Asian Group Italy <span>Remote</span>
            </h3>
            <h4>Software Engineer</h4>
            <p>
              Travel agency systems, cargo management, e-commerce, flight
              booking, FlixBus ticketing, mobile recharge, bill payments, DHL
              integration, and automated cargo pricing.
            </p>
          </article>
          <article>
            <div className="experience-date">SINCE 2020</div>
            <h3>Independent & client work</h3>
            <h4>From custom websites to full-stack applications</h4>
            <p>
              WordPress plugins, themes and customization; PHP, Laravel,
              JavaScript, React, and custom client software.
            </p>
          </article>
        </div>
        <aside className="experience-aside">
          <div className="bento-card leadership-card">
            <p className="eyebrow">Working across disciplines</p>
            <h3>Good software is a team effort.</h3>
            <p>
              At Asian Group Italy, I led a project team of{" "}
              <strong>
                2 developers, 1 graphic designer, and 1 UI/UX designer.
              </strong>
            </p>
            <p>
              That experience shaped how I approach project ownership,
              collaboration, and product delivery.
            </p>
          </div>
          <div className="integration-note">
            <p className="section-index">Integration-heavy systems</p>
            <p>
              Amadeus · Flight.io · Zendit · Reloadly · DingConnect · Telecom
              APIs · DHL APIs · Stripe
            </p>
            <Link className="text-link" href="/about#journey">
              The longer story ↗
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
