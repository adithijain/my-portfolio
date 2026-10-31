export default function Home() {
  const skills = ["Communication", "Python", "C++", "Java", "Problem Solving"];

  const links = {
    linkedin: "https://www.linkedin.com/in/adithi-jain-labb26381",
    github: "https://github.com/adithijain",
  };

  const projects = [
    {
      title: "Expense Tracker",
      description:
        "Built a practical expense-tracking app to manage spending, categorize expenses, and improve personal budgeting habits.",
    },
    {
      title: "Donation Tracker",
      description:
        "Created a donation tracking system to monitor contributions, totals, and records in a structured and efficient way.",
    },
    {
      title: "Ongoing Project Work",
      description:
        "Continuously improving my development skills by building small, problem-solving-focused projects and learning through hands-on practice.",
    },
  ];

  const certifications = [
    {
      title: "Claude 101",
      issuer: "Anthropic",
      detail: "Certificate No: 8wmexwimoh22",
      image: "/certificates/claude-101.png",
      file: "/certificates/claude-101.pdf",
    },
    {
      title: "Programming in C",
      issuer: "CodeChef",
      detail: "Completed 20 May 2026 • ID: b3f67cf",
      image: "/certificates/codechef-c.png",
      file: "/certificates/codechef-c.pdf",
    },
  ];

  return (
    <main className="portfolio">
      <header className="topbar">
        <div className="container nav">
          <div className="brand">ADITHI JAIN</div>

          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Undergraduate Student</p>

            <h1>
              Designing
              <span className="highlight">quietly bold</span>
              digital experiences.
            </h1>

            <p className="intro">
              I’m Adithi Jain, a second-year undergraduate student with a strong interest
              in design, development, and problem solving. I enjoy building clean digital
              experiences and learning through practical project work.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="#work">View Work</a>
              <a className="btn btn-secondary" href="#contact">Contact Me</a>
            </div>

            <div className="social-row">
              <a
                className="social-pill"
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adithi Jain on LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
                LinkedIn
              </a>
              <a
                className="social-pill"
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Adithi Jain on GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="profile-card">
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

      <section id="about" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">About</h2>
            <span className="section-sub">Curious, motivated, and constantly learning.</span>
          </div>

          <div className="about-grid">
            <div className="about-box">
              <p>
                I am a second-year undergraduate student with a growing interest in software,
                problem solving, and digital creation. I enjoy building useful systems,
                understanding real-world problems, and turning ideas into practical solutions.
                My strengths include communication, structured thinking, and consistent learning.
              </p>
            </div>

            <div className="detail-box">
              <ul>
                <li>Email: adithij04@gmail.com</li>
                <li>Phone: +91 9353260983</li>
                <li>Location: India</li>
                <li>
                  LinkedIn:{" "}
                  <a
                    className="text-link"
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    adithi-jain-labb26381
                  </a>
                </li>
                <li>
                  GitHub:{" "}
                  <a
                    className="text-link"
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    adithijain
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Skills</h2>
            <span className="section-sub">Growing with focus and consistency.</span>
          </div>

          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Projects</h2>
            <span className="section-sub">Hands-on learning and practical problem solving.</span>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-image" />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Certifications</h2>
            <span className="section-sub">Learning with purpose.</span>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.title} className="cert-card">
                <a
                  className="cert-preview"
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${cert.title} certificate`}
                >
                  <img src={cert.image} alt={`${cert.title} certificate preview`} />
                </a>
                <div className="cert-body">
                  <div>
                    <h3>{cert.title}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                    <p className="cert-detail">{cert.detail}</p>
                  </div>
                  <a
                    className="btn btn-secondary btn-small"
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Experience</h2>
            <span className="section-sub">Exposure beyond the classroom.</span>
          </div>

          <div className="event-box">
            Attended the TechFest at IIT Bombay in 2025, where I had the opportunity to
            explore innovation, technology, and inspiring ideas from the wider student
            and developer community.
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <p>© 2026 Adithi Jain</p>
          <div className="socials">
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
