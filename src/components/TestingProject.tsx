import SkillSection from "../components/SkillsSection";

import ResultSection from "./ResultSection";


export default function TestingProject({
  title,
  description,
  skills,
  results,
  learnings,
}: {
  title: string;
  description: string;
  skills: string[];
  results: { type: "image" | "link" | "text"; content: string }[];
  learnings?: string;
}) {
  return (
    <section className="border rounded-lg shadow p-6 bg-white space-y-4">
      <header>
        <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </header>

      <SkillSection skills={skills} />

      <ResultSection results={results} />

      {learnings && (
        <section>
          <h4 className="text-md font-semibold text-gray-700">Learnings</h4>
          <p className="text-sm text-gray-600">{learnings}</p>
        </section>
      )}
    </section>
  );
}
