import { projects, Project } from "../data/projects";
import { Skill } from "../data/skills";
import { Carousel } from 'react-responsive-carousel';

export default function ProjectSection() {
  function map_projects(project: Project, index: number) {
    return (<li key={index} className="border p-4 rounded-2xl shadow space-y-4">

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

      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
      {project.url && project.testStatusGithub && (<a href={project.url + "/actions"} target="_blank">
        <img
          src={project.testStatusGithub}
          alt="Build Status"
          className="h-6"
        />
      </a>
      )}

      <div className="text-m mt-4">Tech Stack</div>
      {project.skills && project.skills.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-4">
          {project.skills
            .filter((skill): skill is Skill => Boolean(skill))
            .map((skill, idx) => (
              <li key={idx}>
                <span className="px-2 py-1 text-s font-medium bg-blue-100 text-blue-800 rounded-lg">
                  {skill.title}
                </span>
              </li>
            ))}
        </ul>
      )
      }
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          className="text-blue-600 hover:underline text-sm"
        >
          View Project →
        </a>
      )}
    </li>
    )
  }
  return (
    <section className="mb-8" id="projects">
      <h2 className="text-2xl font-semibold mb-4">Showcase Projects</h2>
      <ul className="space-y-4">
        {projects.map(map_projects)}
      </ul>
    </section>
  )
}