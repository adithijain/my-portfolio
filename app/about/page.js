import { Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";
import { GithubIcon, LinkedinIcon } from "../../components/icons";
import { profile, about, education } from "../../data/portfolio";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <section className="section page">
      <div className="container">
        <Reveal>
          <SectionHead
            page
            title="About"
            sub="Curious, motivated, and constantly learning."
          />

          <div className="about-grid">
            <div className="about-box">
              <p>{about.summary}</p>

              <h3 className="box-title">Interests</h3>
              <div className="skill-list">
                {about.interests.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="box-title">Career goals</h3>
              <p>{about.goals}</p>
            </div>

            <div className="detail-box">
              <ul className="detail-list">
                <li>
                  <Mail size={18} aria-hidden="true" />
                  <a className="text-link" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </li>
                <li>
                  <Phone size={18} aria-hidden="true" />
                  <a className="text-link" href={`tel:${profile.phoneLink}`}>
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <MapPin size={18} aria-hidden="true" />
                  <span>{profile.location}</span>
                </li>
                <li>
                  <LinkedinIcon size={18} />
                  <a
                    className="text-link"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    adithi-jain-labb26381
                  </a>
                </li>
                <li>
                  <GithubIcon size={18} />
                  <a
                    className="text-link"
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    adithijain
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="block-gap">
          <SectionHead title="Education" sub="Where I am studying." />
          <div className="timeline">
            {education.map((item) => (
              <article key={item.title} className="timeline-item">
                <GraduationCap size={26} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p className="meta">
                    {[item.detail, item.institution, item.period]
                      .filter(Boolean)
                      .join(" • ")}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
