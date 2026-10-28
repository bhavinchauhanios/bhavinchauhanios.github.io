import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navSections } from "../../data/navigation";
import { profile } from "../../data/profile";
import { useTheme } from "../../hooks/useTheme";
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from "../ui/icons";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

interface NavbarProps {
  onLogoMultiClick?: () => void;
  onOpenCommandPalette?: () => void;
}

export function Navbar({ onLogoMultiClick, onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLogoClick = () => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      onLogoMultiClick?.();
      setLogoClicks(0);
    }
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={false}
          animate={{
            paddingInline: scrolled ? 14 : 20,
            paddingBlock: scrolled ? 8 : 12,
          }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card flex w-full max-w-content items-center justify-between gap-4 rounded-full"
        >
          <button
            onClick={handleLogoClick}
            className="font-display text-sm sm:text-base font-semibold tracking-tight"
            aria-label="Bhavin Chauhan — click 5 times for a surprise"
          >
            Bhavin<span className="text-teal">.</span>Chauhan
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {navSections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollToSection(s.id)}
                  className="rounded-full px-3 py-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary hover:bg-bg-card-hover"
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-text-secondary hover:border-border-strong hover:text-text-primary transition-colors"
              aria-label="Open command palette"
            >
              <span>⌘K</span>
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-text-secondary hover:text-text-primary hover:bg-bg-card-hover transition-colors"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <SunIcon width={18} height={18} /> : <MoonIcon width={18} height={18} />}
            </button>
            <a
              href={`#contact`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="hidden sm:inline-flex items-center rounded-full bg-gradient-to-r from-teal to-blue px-4 py-1.5 text-sm font-medium text-[#04110e] shadow-glow-teal transition-transform hover:scale-105"
            >
              Book a call
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden rounded-full p-2 text-text-primary"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex flex-col bg-bg-elevated md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg font-semibold">Bhavin.Chauhan</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="rounded-full p-2 text-text-primary"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-center justify-center gap-6">
              {navSections.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    scrollToSection(s.id);
                    setMobileOpen(false);
                  }}
                  className="font-display text-3xl font-medium text-text-primary"
                >
                  {s.label}
                </motion.button>
              ))}
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-full bg-gradient-to-r from-teal to-blue px-6 py-2.5 text-[#04110e] font-medium"
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
