import { Link } from "react-router-dom";
import { certifications } from "../data/certifications";
import Certification from "./Certification";

interface CertificationsSectionProps {
  limit?: number;
  showHeader?: boolean;
}

export default function CertificationsSection({
  limit,
  showHeader = false,
}: CertificationsSectionProps) {
  const certsToShow = limit ? certifications.slice(0, limit) : certifications;

  return (
    <div id="certifications" className="space-y-6">
      {showHeader && (
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Certifications
        </h2>
      )}

      <div className="flex flex-col gap-4">
        {certsToShow.map((cert, idx) => (
          <Certification key={idx} cert={cert} />
        ))}
      </div>

      {limit && limit < certifications.length && (
        <div className="text-right">
          <Link
            to="/certifications"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            See all certifications →
          </Link>
        </div>
      )}
    </div>
  );
}
