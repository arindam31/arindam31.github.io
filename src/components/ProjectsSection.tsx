import { projects, Project } from "../data/projects";

export default function ProjectSection() {
  function map_projects (project:Project, index:number) {
    return (<li key={index} className="border p-4 rounded-2xl shadow">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-700">{project.description}</p>
    </li>
    )
  }
  return (
    <section className="mb-8" id="projects">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <ul className="space-y-4">
        {projects.map(map_projects)}
      </ul>
    </section>
  )
}