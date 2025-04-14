import Header from "./components/Header";
import ProjectSection from "./components/ProjectsSection"
import IntroSection from "./components/IntroSection";
import SkillSection from "./components/SkillsSection";
import WorkHistorySection from "./components/WorkHistorySection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <>
      <Header />
      <main className="p-4  max-w-4xl mx-auto space-y-12">
        <IntroSection />
        <SkillSection />
        <WorkHistorySection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
