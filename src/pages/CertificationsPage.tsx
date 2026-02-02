import Header from "../components/Header";
import CertificationsSection from "../components/CertificationsSection";

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Certifications
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Professional certifications and credentials.
          </p>
        </div>
        <CertificationsSection />
      </main>
    </div>
  );
}
