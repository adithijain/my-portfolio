import { Award } from "lucide-react";
import Button from "./Button";

export default function CertCard({ cert }) {
  return (
    <article className="cert-card">
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
          <p className="cert-issuer">
            <Award size={15} aria-hidden="true" /> {cert.issuer}
          </p>
          <p className="cert-detail">{cert.detail}</p>
        </div>
        <Button href={cert.file} variant="secondary" small external>
          View certificate
        </Button>
      </div>
    </article>
  );
}
