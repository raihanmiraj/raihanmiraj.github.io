import { capabilities } from "@/data/profile";
import { BentoGrid, BentoCard } from "@/components/bento/BentoGrid";
import { SectionHeading } from "./SectionHeading";
export function CapabilitiesBento() {
  return (
    <section className="section container" id="capabilities">
      <SectionHeading number="02" title="A broad stack. A product mindset.">
        <p>
          The right tools depend on the problem. These are the systems,
          languages, and workflows I bring to the table.
        </p>
      </SectionHeading>
      <BentoGrid className="capability-grid">
        {capabilities.map((group) => (
          <BentoCard
            key={group.title}
            span={group.span}
            variant={group.number === "01" ? "featured" : "standard"}
          >
            <div className="tile-topline">
              <span>{group.number}</span>
              <span>↗</span>
            </div>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </BentoCard>
        ))}
      </BentoGrid>
    </section>
  );
}
