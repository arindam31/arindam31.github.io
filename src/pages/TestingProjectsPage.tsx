import Header from "../components/Header";
import TestingProject from "../components/TestingProject";

export default function TestingProjectPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Testing Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Demos of testing and automation results — UI tests, integration tests, and more.
          </p>
        </div>

        <TestingProject
          title="Automated Testing with Pytest + Allure"
          description="Test services on an embedded hardware system running gRPC, using pytest and allure. Project shows use of allure to mark tests with TestCase ids, severity, and tags."
          skills={["Pytest", "Allure", "gRPC"]}
          results={[
            { type: "image", content: "/screenshots/Pytest_Projects/grpc_test_suite.png" },
            {
              type: "link",
              content: "https://arindam31.github.io/Testing_Examples/embedded_device_testing/",
            },
            {
              type: "text",
              content: "Test Report available after every test run. Please visit link.",
            },
          ]}
          learnings="Using Allure with Pytest provides better reports with more options for tagging tests. I found this very useful in tracking test coverage."
        />
      </main>
    </div>
  );
}
