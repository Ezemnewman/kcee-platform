import HomePage from "./pages/HomePage";

/**
 * Single-route for now. Once you bring more Stitch screens (search
 * results, listing detail, agent dashboard...), this is where we add
 * react-router and a <Routes> block — the page components themselves
 * won't need to change.
 */
export default function App() {
  return <HomePage />;
}
