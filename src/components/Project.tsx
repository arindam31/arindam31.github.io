import { Carousel } from "react-responsive-carousel";
import { SkillProps } from "../data/skills";
import { ProjectType } from "../data/projects";

export default function Project({
  project,
  skills,
}: {
  project: ProjectType;
  skills: SkillProps[];
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-xl shadow-sm bg-white dark:bg-gray-800 space-y-4">
      {/* Image Carousel */}
      {project.images && project.images.length > 0 && (
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
          <Carousel
            showThumbs={false}
            infiniteLoop
            useKeyboardArrows
            showStatus={false}
            showIndicators={project.images.length > 1}
            showArrows={project.images.length > 1}
            swipeable={true}
            emulateTouch={true}
            className="project-carousel"
          >
            {project.images.map((imgSrc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-64 sm:h-80"
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {/* Project Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h3>

      {/* Project Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {project.description}
      </p>

      {/* Tech Stack */}
      {skills.length > 0 && (
        <div>
          <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
            Tech Stack
          </div>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <li key={idx}>
                <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md">
                  {skill.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* External Links and Build Status */}
      <div className="flex items-center gap-4 pt-2">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            View Project →
          </a>
        )}

        {project.testStatusGithub && (
          <a
            href={project.url ? `${project.url}/actions` : "#"}
            target="_blank"
            rel="noopener noreferrer"
            title="Build Status"
          >
            <img
              src={project.testStatusGithub}
              alt={`${project.title} Build Status`}
              className="h-5"
            />
          </a>
        )}
      </div>
    </div>
  );
}
