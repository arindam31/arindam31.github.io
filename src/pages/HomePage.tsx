import Header from "../components/Header";
import ProjectSection from "../components/ProjectsSection";
import IntroSection from "../components/IntroSection";
import SkillSection from "../components/SkillsSection";
import WorkHistorySection from "../components/WorkHistorySection";
import ContactSection from "../components/ContactSection";

const testingDetails =
  "Welcome to my cozy corner on the internet. \
I’m not here to sell anything — just to share. \
Over the years, I’ve built projects that reflect how I think, \
solve problems, and have fun with code. This site is a space to \
show you those projects — complete, imperfect, and real — \
so you can get a broader idea of the kind of solutions I enjoy building. \
It’s less of a portfolio, more of a playground. And if you happen to find \
something useful, inspiring, or just interesting — even better.";

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
