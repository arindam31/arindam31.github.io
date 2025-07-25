import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestingProjectPage from "./pages/TestingProjectsPage"
import WorkExperiencePage from "./pages/WorkExperiencePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/testing-demos" element={<TestingProjectPage />} />
      <Route path="/work" element={<WorkExperiencePage  />} />
    </Routes>
  );
}
