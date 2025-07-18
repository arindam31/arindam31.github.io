import Header from "../components/Header";
import ProjectSection from "../components/ProjectsSection";
import IntroSection from "../components/IntroSection";
import SkillSection from "../components/SkillsSection";
import WorkHistorySection from "../components/WorkHistorySection";
import ContactSection from "../components/ContactSection";

const testingDetails =
  "I have been hanging out with Python since 2012 — my \
favorite sidekick for solving problems and building things that make life easier. \
 I use Django, FastAPI, or Flask to whip up REST APIs, and I’m a big fan of writing tests \
 (yes, really!) with unittest. You’ll usually find me poking around GitHub or answering \
 questions on Stack Overflow just for fun.";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-4 max-w-4xl mx-auto space-y-12">
        <IntroSection
            headerText="Hey, I'm Arindam 👋"
            bodyText={testingDetails}
            showImage={true}
          />
        <SkillSection />
        <WorkHistorySection />
        <ProjectSection />
        <ContactSection />
      </main>
    </>
  );
}
