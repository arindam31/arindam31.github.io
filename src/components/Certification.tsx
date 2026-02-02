import { CertificationProps } from "../data/certifications";

export default function Certification({ cert }: { cert: CertificationProps }) {
  return (
    <article className="border rounded-2xl p-6 shadow-sm bg-white dark:bg-gray-600">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">
            {cert.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-gray-100 text-gray-800 dark:bg-gray-500 dark:text-gray-100 rounded-full px-3 py-1 text-sm">
              {cert.issuer}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              {cert.dateObtained}
            </span>
          </div>
          {cert.description && (
            <p className="mt-2 text-gray-700 dark:text-gray-100 text-sm">
              {cert.description}
            </p>
          )}
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline text-sm"
            >
              View Credential →
            </a>
          )}
        </div>
        {cert.image && (
          <div className="md:w-48 flex-shrink-0">
            <a href={cert.image} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
