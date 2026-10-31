import Reveal from "../../components/Reveal";
import SectionHead from "../../components/SectionHead";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/portfolio";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="section page">
      <div className="container">
        <Reveal>
          <SectionHead
            page
            title="Projects"
            sub="Hands-on learning and practical problem solving."
          />
          <div className="projects">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
