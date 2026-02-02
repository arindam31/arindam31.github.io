import { projects } from "../data/projects";
import Project from "./project";

interface ProjectSectionProps {
  showHeader?: boolean;
}

export default function ProjectSection({ showHeader = false }: ProjectSectionProps) {
  return (
    <div id="projects">
      {showHeader && (
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Showcase Projects
        </h2>
      )}
      <div className="space-y-6">
        {projects.map((project) => (
          <Project key={project.slug} project={project} skills={project.skills || []} />
        ))}
      </div>
    </div>
  );
}
