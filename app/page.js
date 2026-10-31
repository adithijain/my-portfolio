import {
  User,
  Code,
  Wrench,
  Briefcase,
  Award,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHead from "../components/SectionHead";
import { GithubIcon, LinkedinIcon } from "../components/icons";
import { profile } from "../data/portfolio";

const explore = [
  {
    href: "/about",
    title: "About",
    text: "Who I am, what I study, and where I want to go.",
    icon: User,
  },
  {
    href: "/projects",
    title: "Projects",
    text: "Things I have built, with code and live links.",
    icon: Code,
  },
  {
    href: "/skills",
    title: "Skills",
    text: "Languages, web tools, and how I work.",
    icon: Wrench,
  },
  {
    href: "/experience",
    title: "Experience",
    text: "Events and activities beyond the classroom.",
    icon: Briefcase,
  },
  {
    href: "/achievements",
    title: "Achievements",
    text: "Certifications I have completed.",
    icon: Award,
  },
  {
    href: "/contact",
    title: "Contact",
    text: "Send me a message or find me online.",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow hero-item" style={{ "--d": "0s" }}>
              Undergraduate Student
            </p>

            <h1 className="hero-item" style={{ "--d": "0.08s" }}>
              Designing
              <span className="highlight">quietly bold</span>
              digital experiences.
            </h1>

            <p className="intro hero-item" style={{ "--d": "0.16s" }}>
              I’m Adithi Jain, a second-year undergraduate student with a strong interest
              in design, development, and problem solving. I enjoy building clean digital
              experiences and learning through practical project work.
            </p>

            <div className="cta-row hero-item" style={{ "--d": "0.24s" }}>
              <Button href="/projects">View Work</Button>
              <Button href="/contact" variant="secondary">
                Contact Me
              </Button>
            </div>

            <div className="social-row hero-item" style={{ "--d": "0.32s" }}>
              <a
                className="social-pill"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adithi Jain on LinkedIn"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a
                className="social-pill"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adithi Jain on GitHub"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
            </div>
          </div>

          <div className="profile-card hero-item" style={{ "--d": "0.2s" }}>
            <div className="photo-wrap">
              <img src="/profile.jpg" alt="Adithi Jain portrait" />
              <div className="info-box">
                <small>Profile</small>
                <strong>Student • Developer • Learner</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead
              title="Explore"
              sub="Everything is a click away."
            />
            <div className="explore-grid">
              {explore.map(({ href, title, text, icon: Icon }) => (
                <Link key={href} href={href} className="explore-card">
                  <Icon size={24} strokeWidth={1.5} className="lead" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="go">
                    Open <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
