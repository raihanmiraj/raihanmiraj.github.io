import ContactForm from "@/app/components/ContactForm";
import { Suspense } from "react";
import { profile } from "@/data/profile";
export function ContactSection() {
  return (
    <section className="section container" id="contact">
      <div className="contact-composition">
        <div className="contact-intro">
          <p className="section-index">06 / Start a conversation</p>
          <h2>
            Let’s build,
            <br />
            create, or
            <br />
            <span>talk shop.</span>
          </h2>
          <p>
            AI SaaS teams are where I’m looking next. I’m also happy to swap
            musical ideas or talk bikes, cars, and the road.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} ↗
          </a>
          <a className="contact-phone" href={profile.phoneHref}>
            {profile.phone}
          </a>
        </div>
        <Suspense
          fallback={
            <div className="contact-form">Loading the contact form…</div>
          }
        >
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}
