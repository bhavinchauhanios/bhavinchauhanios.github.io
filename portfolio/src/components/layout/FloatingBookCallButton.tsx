import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Sticky floating "Book a call" pill that appears once the visitor scrolls
 * past the hero section. Hidden while the contact section itself is in view.
 */
export function FloatingBookCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    observer.observe(hero);

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
      },
      { threshold: 0.3 },
    );
    contactObserver.observe(contact);

    return () => {
      observer.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          onClick={scrollToContact}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-blue px-5 py-3 text-sm font-medium text-[#04110e] shadow-glow-blue transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-[#04110e]" />
          </span>
          Book a call
        </motion.button>
      )}
    </AnimatePresence>
  );
}
