import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";
import { skillGroups } from "../../data/portfolio";

export const metadata = { title: "Skills" };

export default function SkillsPage() {
  return (
    <section className="section page">
      <div className="container">
        <Reveal>
          <SectionHead
            page
            title="Skills"
            sub="Growing with focus and consistency."
          />
          <div className="skill-groups">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <article key={title} className="skill-group">
                <div className="skill-group-head">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{title}</h3>
                </div>
                <div className="skill-list">
                  {items.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
