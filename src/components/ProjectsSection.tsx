import { projects } from "../data/projects";
import Project from "./project";


export default function ProjectSection() {
  return (
    <section className="mb-8" id="projects">
      <h2 className="text-2xl font-semibold mb-4">Showcase Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <Project key={project.slug} project={project} skills={project.skills || []} />
        ))}
      </ul>
    </section>
  );
}