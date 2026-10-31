import { Briefcase } from "lucide-react";
import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";
import { experience } from "../../data/portfolio";

export const metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <section className="section page">
      <div className="container">
        <Reveal>
          <SectionHead
            page
            title="Experience"
            sub="Exposure beyond the classroom."
          />
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.title} className="timeline-item">
                <Briefcase size={26} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p className="meta">
                    {item.type} • {item.period}
                  </p>
                  <p className="body-text">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
