import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Animates a number counting up to `target` once the element scrolls into view.
 * Jumps straight to the target under prefers-reduced-motion.
 */
export function useCountUp(target: number, durationMs = 1400) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      setValue(target);
      return;
    }

    let start: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, durationMs, reducedMotion]);

  return { ref, value };
}
