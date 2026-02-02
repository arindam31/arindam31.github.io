import { Link } from "react-router-dom";
import { workHistory } from "../data/workHistory";
import WorkPlace from "./WorkPlace";

interface WorkHistorySectionProps {
  limit?: number;
  showHeader?: boolean;
}

export default function WorkExperienceSection({
  limit,
  showHeader = false,
}: WorkHistorySectionProps) {
  const worksToShow = limit ? workHistory.slice(0, limit) : workHistory;

  return (
    <div id="work-experience" className="space-y-6">
      {showHeader && (
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Work Experience
        </h2>
      )}

      <div className="flex flex-col gap-6">
        {worksToShow.map((work, idx) => (
          <WorkPlace key={idx} work={work} />
        ))}
      </div>

      {limit && limit < workHistory.length && (
        <div className="text-right">
          <Link
            to="/work"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            See all work experience →
          </Link>
        </div>
      )}
    </div>
  );
}
