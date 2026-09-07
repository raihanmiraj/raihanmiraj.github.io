import Link from "next/link";
import { profile } from "@/data/profile";
import { BentoCard, BentoGrid } from "@/components/bento/BentoGrid";
export function Story() {
  return (
    <>
      <header className="about-hero container">
        <p className="eyebrow">About / {profile.name}</p>
        <h1>
          Curiosity.
          <br />A little ownership.
          <br />
          <span>A lot of making.</span>
        </h1>
        <div className="about-hero-bottom">
          <p>
            I’m a full-stack developer in Dhaka. I build AI SaaS products, play
            music, and find reasons to take the long way home.
          </p>
          <nav aria-label="About sections">
            <a href="#journey">The engineering ↙</a>
            <a href="#music">The music ↙</a>
            <a href="#road">The road ↙</a>
          </nav>
        </div>
      </header>
      <section className="section container" id="journey">
        <div className="section-heading">
          <div>
            <p className="section-index">01 / The path here</p>
            <h2>
              From client work
              <br />
              to product ownership.
            </h2>
          </div>
          <p className="section-description">
            I like understanding what connects the interface, the data, the
            business logic, and the person using it.
          </p>
        </div>
        <div className="story-columns">
          <p>
            Professional work started in {profile.startYear}: WordPress plugins,
            themes, customization, and custom PHP applications. Laravel,
            JavaScript, and React opened up more of the stack. Each project made
            me more interested in the decisions behind the software.
          </p>
          <p>
            At Asian Group Italy, that grew into integration-heavy systems and
            team leadership. Now at NexiBy LLC, I work on AI SaaS products.
            Alongside my job, I’m building{" "}
            <Link href="/projects/dokaneasy">Dokaneasy</Link>, my own
            multi-tenant commerce platform, currently in development.
          </p>
        </div>
        <BentoGrid className="story-bento">
          <BentoCard span={7}>
            <p className="eyebrow">The way I work</p>
            <h3>
              Own the problem.
              <br />
              Follow it through.
            </h3>
            <p>
              Product decisions, UI implementation, backend logic, database
              design, AI integrations, payments, deployment, and ongoing
              iteration. I enjoy working across those boundaries.
            </p>
            <p>
              Fast learning and problem solving matter, but so does
              collaboration. Leading two developers, a graphic designer, and a
              UI/UX designer taught me to see delivery through more than one
              discipline.
            </p>
          </BentoCard>
          <BentoCard span={5} variant="quiet">
            <p className="eyebrow">Education</p>
            <h3>{profile.education.degree}</h3>
            <p>{profile.education.institution}</p>
            <p className="education-result">
              {profile.education.status}{" "}
              <span>CGPA {profile.education.cgpa}</span>
            </p>
          </BentoCard>
        </BentoGrid>
      </section>
    </>
  );
}
export function IndependentWork() {
  return (
    <section className="section container">
      <div className="section-heading">
        <div>
          <p className="section-index">02 / Along the way</p>
          <h2>
            Other problems.
            <br />
            More ways to learn.
          </h2>
        </div>
        <p className="section-description">
          Independent work and earlier experiments sit alongside the main
          products. Each explored a different part of building software.
        </p>
      </div>
      <BentoGrid>
        <BentoCard span={7}>
          <h3>Client & independent work</h3>
          <ul className="work-notes">
            <li>
              <strong>Mavin Agency</strong>
              <span>
                Custom video conferencing with JavaScript, Socket.IO, and
                Webpack.
              </span>
            </li>
            <li>
              <strong>CareNexio</strong>
              <span>
                React Native doctor consultation app with real-time
                functionality.
              </span>
            </li>
            <li>
              <strong>Freelance projects</strong>
              <span>
                AGM voting with Socket.IO, a JavaScript Astrology Calculator,
                WordPress automation plugins, a Laravel + React School
                Management System, and a React + PHP + MySQL Shop Management
                System.
              </span>
            </li>
          </ul>
        </BentoCard>
        <BentoCard span={5}>
          <p className="eyebrow">Problem-solving practice</p>
          <h3>
            A different kind
            <br />
            of exercise.
          </h3>
          <p>
            I use competitive programming to practise algorithms and work
            through small, well-defined problems.
          </p>
          <a className="text-link" href={profile.socials.codeforces}>
            Codeforces ↗
          </a>
          <p className="small-note">Shared profile rating: 828.</p>
          <a className="text-link" href={profile.socials.beecrowd}>
            Beecrowd ↗
          </a>
        </BentoCard>
      </BentoGrid>
      <details className="earlier-work">
        <summary>
          Earlier engineering experiments <span>+</span>
        </summary>
        <div className="story-columns">
          <p>
            Meal Management System — React, PHP, MySQL, custom multi-auth,
            roles, and face-recognition attendance.
            <br />
            Quiz Management System — React and Laravel.
            <br />
            Vote Online — biometric voting with MERN.
            <br />
            Multiplayer Chess — JavaScript and Socket.IO.
          </p>
          <p>
            Incourse Management System — JavaFX, PHP, and MySQL.
            <br />
            Simple Game With Chat — Java and Socket.IO.
            <br />
            BonVoyage — C++ and SDL obstacle-avoidance game.
            <br />
            Virtual Assistant — Python.
          </p>
        </div>
      </details>
    </section>
  );
}
