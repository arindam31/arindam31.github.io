import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TestingProjectPage from "./pages/TestingProjectsPage"
import WorkExperiencePage from "./pages/WorkExperiencePage";
import CertificationsPage from "./pages/CertificationsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/testing-demos" element={<TestingProjectPage />} />
      <Route path="/work" element={<WorkExperiencePage  />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
