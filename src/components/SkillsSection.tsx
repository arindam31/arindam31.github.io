import { skills as defaultSkills } from "../data/skills";
import Skill from "../components/Skill";


export default function SkillSection( {skills} : {skills?: string []}) {
  // Create list of skills from received list of from data file.
  const skillList: string[] = skills ?? defaultSkills
    .filter((skill) => skill.show !== false)
    .map((skill => skill.title))

  function mapSkills(title: string) {
    return <Skill key={title} title={title}/>
    }

  return (
    <section className="mb-16" id="skills">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skillList.map(mapSkills)}
      </ul>
    </section>
  );
}
