import Header from "../components/Header";
import ProjectSection from "../components/ProjectsSection";
import IntroSection from "../components/IntroSection";
import SkillSection from "../components/SkillsSection";
import WorkHistorySection from "../components/WorkHistorySection";
import ContactSection from "../components/ContactSection";

const introText =
  "QA Engineer & Python Developer with 15+ years of experience in test automation, backend development, and DevOps. I build reliable software and the tools to test it.";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Intro */}
        <IntroSection
          headerText="Hey, I'm Arindam"
          bodyText={introText}
          showImage={true}
        />

        {/* Divider */}
        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Skills */}
        <SkillSection />

        {/* Work History */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Recent Experience
          </h2>
          <WorkHistorySection limit={2} />
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <ProjectSection />
        </section>

        {/* Contact */}
        <ContactSection />
      </main>
    </div>
  );
}
