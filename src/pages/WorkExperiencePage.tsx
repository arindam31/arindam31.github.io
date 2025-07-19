import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import WorkHistorySection from "../components/WorkHistorySection";



const intro = "Here you will find my work details so far since 2010. 15 years and counting";

export default function WorkExperiencePage() {
  return (
    <>
      <Header />
      <main className="p-4 max-w-4xl mx-auto space-y-12">
        <IntroSection
          headerText="My journey so far as a professional"
          bodyText={intro}
          showImage={true}
        />
        <WorkHistorySection  />

      </main>
    </>
  );
}
