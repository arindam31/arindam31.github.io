import { skills, Skill } from "../data/skills";

export default function SkillSection() {
  function mapSkills(skill: Skill, index: number) {
    if (skill.show === false) return null;
    return (
      
      <li
        key={index}
        className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-m font-medium"
      >
        {skill.title}
      </li>

    );
  }

  return (
    <section className="mb-16" id="skills">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map(mapSkills)}
      </ul>
    </section>
  );
}
