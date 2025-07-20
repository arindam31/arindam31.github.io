import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import TestingProject from "../components/TestingProject";

const testingDetails =
  "This page demos some Testing and automation results. \
UI tests with Playwright. Integration tests for GRPC running OEM. \
I try to show how can we test these and what can we cover.";

export default function TestingProjecPage() {
  return (
    <>
      <Header />
      <main className="p-4 max-w-4xl mx-auto space-y-12">
        <IntroSection
          headerText="Testing Projects and Results samples"
          bodyText={testingDetails}
          showImage={false}
        />
        <TestingProject
          title="Automated Testing with Pytest + Allure"
          description="A simple framework to run daily test jobs and generate reports."
          skills={["Pytest", "Allure", "gRPC"]}
          results={[
            { type: "image", content: "/screenshots/imt/admin.png" },
            {
              type: "link",
              content: "https://arindam31.github.io/embedded_device_testing/",
            },
            {
              type: "text",
              content: "Results available in allure report. Please visit link.",
            },
          ]}
          learnings="Allure integration with Pytest, tags for TestCase marking...I find this very useful in tracking test coverage."
        />
      </main>
    </>
  );
}
