import { workHistory } from "../data/workHistory";
import WorkPlace from "./WorkPlace";

export default function WorkExperienceSection({ limit }: { limit?: number }) {
  const worksToShow = limit ? workHistory.slice(0, limit) : workHistory;

  return (
    <section id="work-experience" className="space-y-8 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>

      <div className="flex flex-col gap-8">
        {worksToShow.map((work, idx) => (
          <WorkPlace key={idx} work={work} />
        ))}
      </div>

      {limit && (
        <div className="mt-4 text-right">
          <a
            href="/work"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            See all work experience →
          </a>
        </div>
      )}
    </section>
  );
}
