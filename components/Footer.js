import { Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 {profile.name}</p>
        <div className="socials">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {profile.instagram && (
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          <a href={`mailto:${profile.email}`} className="socials-mail">
            <Mail size={15} aria-hidden="true" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
