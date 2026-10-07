export default function Home() {
  const skills = ["Communication", "Python", "C++", "Java", "Problem Solving"];
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
    "Claude AI Course Completion",
    "C Course Completion - CodeChef",
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

          <div className="cert-list">
            {certifications.map((item) => (
              <div key={item} className="cert-item">
                {item}
              </div>
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
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}