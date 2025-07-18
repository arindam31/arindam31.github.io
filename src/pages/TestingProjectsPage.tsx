import Header from "../components/Header";
import ProjectSection from "../components/ProjectsSection";
import IntroSection from "../components/IntroSection";
import SkillSection from "../components/SkillsSection";
import WorkHistorySection from "../components/WorkHistorySection";
import ContactSection from "../components/ContactSection";

const testingDetails =
  "This page demos some Testing and automation demos.";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-4 max-w-4xl mx-auto space-y-12">
        <IntroSection
          headerText="Testing Projects and Results samples"
          bodyText={testingDetails}
          showImage={false}
        />

        <SkillSection />
        <WorkHistorySection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
