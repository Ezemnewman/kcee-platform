import { useState } from "react";
import Icon from "./Icon";

/**
 * Site-wide navigation. Used on every page, so any nav change
 * (new tab, renamed link, login state) happens in exactly one place.
 *
 * navLinks is passed in as data rather than hardcoded JSX, so adding
 * a page (e.g. "New Developments") later is a one-line data change,
 * not a markup edit on every page that renders the navbar.
 */
const DEFAULT_LINKS = [
  { label: "Buy", href: "/buy", active: true },
  { label: "Rent", href: "/rent" },
  { label: "Shortlet", href: "/shortlet" },
  { label: "Land", href: "/land" },
  { label: "Agents", href: "/agents" },
];

export default function Navbar({ links = DEFAULT_LINKS, onListPropertyClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-surface sticky top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">
        <a href="/" className="text-headline-md font-headline-md font-bold text-primary">
          KCEE
        </a>

        <ul className="hidden md:flex items-center gap-gutter font-label-md text-label-md">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  link.active
                    ? "text-primary border-b-2 border-primary pb-1 transition-colors"
                    : "text-on-surface-variant hover:text-primary transition-colors"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={onListPropertyClick}
            className="hidden md:block bg-primary text-on-primary font-label-md text-label-md px-6 py-2.5 rounded-full hover:opacity-90 active:scale-95 transition-all"
          >
            List Your Property
          </button>

          <div className="flex items-center text-on-surface-variant">
            <Icon name="person" />
          </div>

          <button
            className="md:hidden flex items-center"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <Icon name="menu" />
          </button>
        </div>
      </nav>

      {/* Mobile menu — Stitch export didn't include this, added so the
          hamburger button actually does something instead of being decorative */}
      {mobileOpen && (
        <ul className="md:hidden flex flex-col gap-stack-sm px-margin-mobile pb-4 font-label-md text-label-md">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="block py-2 text-on-surface-variant">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={onListPropertyClick}
              className="w-full bg-primary text-on-primary px-6 py-2.5 rounded-full mt-stack-sm"
            >
              List Your Property
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}
