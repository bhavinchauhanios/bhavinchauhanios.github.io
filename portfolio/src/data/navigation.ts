/**
 * Section navigation config — single source of truth for the Navbar,
 * mobile menu, and the Command Palette's "jump to section" list.
 */

export interface NavSection {
  id: string;
  label: string;
}

export const navSections: NavSection[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "ai-edge", label: "AI Edge" },
  { id: "work", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];
