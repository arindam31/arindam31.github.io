import { skills as defaultSkills, SkillProps } from "../data/skills";
import Skill from "../components/Skill";

type SkillGroup = {
  name: string;
  categories: string[];
};

const skillGroups: SkillGroup[] = [
  {
    name: "Test Automation",
    categories: ["Testing"],
  },
  {
    name: "Backend Development",
    categories: ["Backend Framework", "Database", "Web Services", "Task Scheduling"],
  },
  {
    name: "DevOps & Infrastructure",
    categories: ["Container Technologies", "Cloud Services", "Monitoring & Observability", "CI/CD"],
  },
  {
    name: "Frontend",
    categories: ["Frontend Framework"],
  },
  {
    name: "Languages",
    categories: ["Languages"],
  },
  {
    name: "AI Tools",
    categories: ["AI Tools"],
  },
];

interface SkillSectionProps {
  skills?: string[];
  showHeader?: boolean;
  compact?: boolean;
}

export default function SkillSection({ skills, showHeader = true, compact = false }: SkillSectionProps) {
  const visibleSkills = defaultSkills.filter((skill) => skill.show !== false);

  // Compact mode: all skills as a flat inline tag list
  if (compact) {
    return (
      <section className="mb-6" id="skills">
        {showHeader && (
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
            Skills
          </h2>
        )}
        <ul className="flex flex-wrap gap-2">
          {visibleSkills.map((skill) => (
            <Skill key={skill.title} title={skill.title} />
          ))}
        </ul>
      </section>
    );
  }

  // If custom skills list is provided, use simple flat display
  if (skills) {
    return (
      <section className="mb-10" id="skills">
        {showHeader && (
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Skills
          </h2>
        )}
        <ul className="flex flex-wrap gap-2">
          {skills.map((title) => (
            <Skill key={title} title={title} />
          ))}
        </ul>
      </section>
    );
  }

  // Group skills by category groups
  const getSkillsForGroup = (group: SkillGroup): SkillProps[] => {
    return visibleSkills.filter((skill) =>
      group.categories.includes(skill.category)
    );
  };

  return (
    <section className="mb-10" id="skills">
      {showHeader && (
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          Skills
        </h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillGroups.map((group) => {
          const groupSkills = getSkillsForGroup(group);
          if (groupSkills.length === 0) return null;

          return (
            <div
              key={group.name}
              className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                {group.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {groupSkills.map((skill) => (
                  <Skill key={skill.title} title={skill.title} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
