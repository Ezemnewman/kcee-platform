import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import AgentProfilePage from "./pages/AgentProfilePage";

/**
 * Real routing, replacing the temporary dev-only page switcher.
 * Buy/Rent/Shortlet/Land all currently point at SearchResultsPage —
 * once the backend exists, each route can pass a default filter
 * (e.g. /rent pre-filters listingType="For Rent") rather than each
 * needing a separate page component.
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
    </Routes>
  );
}
