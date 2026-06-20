import { useState } from "react";
import HomePage from "./pages/HomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import AgentProfilePage from "./pages/AgentProfilePage";

/**
 * Minimal hand-rolled "router" for now — just enough to preview both
 * pages while we're still bringing in Stitch screens. Once there are
 * more pages with real navigation (clicking a property card should
 * actually go to a detail page, etc.), this is where react-router
 * comes in and replaces this switch entirely.
 */
export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {/* Temporary page switcher for development only — not part of
          the real site design, just lets us preview both pages */}
      <div className="fixed bottom-4 left-4 z-[100] flex gap-2 bg-black/80 text-white text-xs rounded-full px-3 py-2 shadow-lg">
        <button onClick={() => setPage("home")} className={page === "home" ? "font-bold underline" : ""}>
          Home
        </button>
        <button onClick={() => setPage("search")} className={page === "search" ? "font-bold underline" : ""}>
          Search
        </button>
        <button onClick={() => setPage("detail")} className={page === "detail" ? "font-bold underline" : ""}>
          Detail
        </button>
        <button onClick={() => setPage("agent")} className={page === "agent" ? "font-bold underline" : ""}>
          Agent
        </button>
      </div>

      {page === "home" && <HomePage />}
      {page === "search" && <SearchResultsPage />}
      {page === "detail" && <PropertyDetailPage />}
      {page === "agent" && <AgentProfilePage />}
    </div>
  );
}
