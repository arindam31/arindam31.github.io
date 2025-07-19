import { Carousel } from 'react-responsive-carousel';
import { SkillProps } from "../data/skills";
import { ProjectType } from "../data/projects";

export default function Project({ project, skills }: { project: ProjectType, skills: SkillProps[] }) {
  return (
    <li className="border p-4 rounded-2xl shadow space-y-4">

      {/* Image Carousel */}
      {project.images && (
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          showStatus={false}
          showIndicators={true} // dots
          showArrows={true}
          swipeable={true}
          emulateTouch={true}
        >
          {project.images.map((imgSrc, idx) => (
            <div
              key={idx}
              className="relative w-[auto] h-[auto] overflow-auto rounded-lg"
            >
              <img
                src={imgSrc}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="max-w-full max-h-full"
              />
            </div>
          ))}
        </Carousel>
      )}

      {/* Project Title */}
      <h3 className="text-xl font-bold">{project.title}</h3>

      {/* Project Description */}
      <p className="text-gray-700">{project.description}</p>

      {/* Tech Stack Label */}
      <div className="text-m mt-4 font-semibold">Tech Stack</div>

      {/* Skill Tags */}
      {skills.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, idx) => (
            <li key={idx}>
              <span className="px-2 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-lg">
                {skill.title}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* External Links and Build Status */}
      <div className="mt-4 flex items-center space-x-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm font-semibold"
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
              className="h-6"
            />
          </a>
        )}
      </div>
    </li>
  );
}
