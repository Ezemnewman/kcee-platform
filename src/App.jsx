import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import AgentProfilePage from "./pages/AgentProfilePage";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import CareersPage from "./pages/CareersPage";

/**
 * Real routing, replacing the temporary dev-only page switcher.
 * Buy/Rent/Shortlet/Land all currently point at SearchResultsPage —
 * once the backend exists, each route can pass a default filter
 * (e.g. /rent pre-filters listingType="For Rent") rather than each
 * needing a separate page component.
 *
 * The static content pages (About/Privacy/Terms/etc.) are placeholders
 * per the person's request — real copy will replace the filler text
 * inside each page file, but the routes and navigation are real now.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buy" element={<SearchResultsPage />} />
      <Route path="/rent" element={<SearchResultsPage />} />
      <Route path="/shortlet" element={<SearchResultsPage />} />
      <Route path="/land" element={<SearchResultsPage />} />
      <Route path="/listing/:id" element={<PropertyDetailPage />} />
      <Route path="/agents/:id" element={<AgentProfilePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/careers" element={<CareersPage />} />
    </Routes>
  );
}
