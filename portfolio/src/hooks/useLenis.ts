import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Initializes Lenis smooth scrolling for the whole app.
 * Skips entirely when the user prefers reduced motion.
 */
export function useLenis() {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    let rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [reducedMotion]);
}
