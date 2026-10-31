import { ExternalLink } from "lucide-react";
import Button from "./Button";
import { GithubIcon } from "./icons";

export default function ProjectCard({ project }) {
  const Icon = project.icon;
  const hasTech = project.tech && project.tech.length > 0;
  const hasLinks = project.github || project.demo;

  return (
    <article className="project-card">
      <div className="project-image">
        <Icon size={44} strokeWidth={1.25} aria-hidden="true" />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {hasTech && (
          <ul className="tag-list" aria-label="Technologies used">
            {project.tech.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        )}

        {hasLinks && (
          <div className="card-actions">
            {project.github && (
              <Button href={project.github} variant="secondary" small external>
                <GithubIcon size={16} /> Code
              </Button>
            )}
            {project.demo && (
              <Button href={project.demo} variant="secondary" small external>
                <ExternalLink size={16} aria-hidden="true" /> Live demo
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
