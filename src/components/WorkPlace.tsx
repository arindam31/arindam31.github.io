import { WorkItem } from "../data/workHistory";

export default function WorkPlace({ work }: { work: WorkItem }) {
  return (
    <article className="border rounded-2xl p-6 shadow-sm bg-white dark:bg-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
            {work.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-100 font-medium">
            {work.company}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-100">
            {work.period} | {work.location}
          </p>
          {work.description && (
            <p className="mt-2 text-gray-700 dark:text-gray-100">
              {work.description}
            </p>
          )}

          {work.skills?.length && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-100">
                Tech Stack:
              </h4>
              <ul className="flex flex-wrap gap-2">
                {work.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-100 text-gray-800 dark:text-gray-800 dark:text-gray-100 rounded-full px-3 py-1 text-sm"
                  >
                    {skill.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - ACHIEVEMENTS */}
        {work.achievements?.length ? (
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-700 dark:text-gray-100 mb-2">
              Achievements
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-100 text-sm">
              {work.achievements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-sm text-gray-400 italic">
            No notable achievements listed
          </div>
        )}
      </div>
    </article>
  );
}
