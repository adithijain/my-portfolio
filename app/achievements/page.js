import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";
import CertCard from "../../components/CertCard";
import { certifications } from "../../data/portfolio";

export const metadata = { title: "Achievements" };

export default function AchievementsPage() {
  return (
    <section className="section page">
      <div className="container">
        <Reveal>
          <SectionHead
            page
            title="Achievements"
            sub="Certifications and learning, with purpose."
          />
          <div className="cert-grid">
            {certifications.map((cert) => (
              <CertCard key={cert.title} cert={cert} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
