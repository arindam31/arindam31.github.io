import { skills, Skill } from "../data/skills";

export default function SkillSection() {
  function mapSkills (skill:Skill, index:number) {
    return (<button key={index} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
      {skill.title}
      </span>
      </button>
    )
  }
  return (
    <section className="mb-8" id="skills">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <ul className="space-y-4">
        {skills.map(mapSkills)}
      </ul>
    </section>
  )
}