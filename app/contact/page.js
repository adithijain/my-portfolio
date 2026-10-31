import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";
import ContactForm from "../../components/ContactForm";
import { GithubIcon, LinkedinIcon } from "../../components/icons";
import { profile } from "../../data/portfolio";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="section page">
      <div className="container">
        <Reveal>
          <SectionHead
            page
            title="Contact"
            sub="Let’s talk about projects, internships, or ideas."
          />

          <div className="contact-grid">
            <div className="about-box">
              <ContactForm to={profile.email} />
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
                    LinkedIn
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
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
