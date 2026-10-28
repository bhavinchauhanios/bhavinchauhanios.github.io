import { useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { useLenis } from "./hooks/useLenis";
import { useKonamiCode } from "./hooks/useKonamiCode";
import { initAnalytics } from "./lib/analytics";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { ScrollProgressBar } from "./components/layout/ScrollProgressBar";
import { CustomCursor } from "./components/layout/CustomCursor";
import { CommandPalette } from "./components/layout/CommandPalette";
import { FloatingBookCallButton } from "./components/layout/FloatingBookCallButton";
import { ConfettiBurst } from "./components/ui/ConfettiBurst";

import { Hero } from "./sections/Hero";
import { ImpactStats } from "./sections/ImpactStats";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { AiEdge } from "./sections/AiEdge";
import { Work } from "./sections/Work";
import { Journey } from "./sections/Journey";
import { Testimonials } from "./sections/Testimonials";
import { BlogTeaser } from "./sections/BlogTeaser";
import { Contact } from "./sections/Contact";

function AppShell() {
  useLenis();

  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const triggerConfetti = useCallback(() => setConfettiActive(true), []);
  useKonamiCode(triggerConfetti);

  return (
    <div className="relative min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-[#04110e]"
      >
        Skip to main content
      </a>
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar onLogoMultiClick={triggerConfetti} onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <CommandPalette open={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
      <ConfettiBurst active={confettiActive} onDone={() => setConfettiActive(false)} />

      <main id="main-content">
        <Hero />
        <ImpactStats />
        <About />
        <Skills />
        <AiEdge />
        <Work />
        <Journey />
        <Testimonials />
        <BlogTeaser />
        <Contact />
      </main>

      <Footer />
      <FloatingBookCallButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

export default App;
