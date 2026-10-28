import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TiltCard } from "./TiltCard";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface PhoneMockupProps {
  screenshots: string[];
  intervalMs?: number;
}

/**
 * CSS 3D-tilt iPhone frame that auto-cycles through real app screenshots via crossfade.
 */
export function PhoneMockup({ screenshots, intervalMs = 2800 }: PhoneMockupProps) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || screenshots.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % screenshots.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [screenshots.length, intervalMs, reducedMotion]);

  return (
    <TiltCard maxTilt={8} className="mx-auto w-[240px] sm:w-[280px]">
      <div className="relative aspect-[9/19.5] w-full rounded-[2.5rem] border-[6px] border-[#1a1d24] bg-[#05070c] p-1.5 shadow-lg">
        {/* Notch */}
        <div className="absolute top-1.5 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#1a1d24]" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-bg-elevated">
          <AnimatePresence mode="wait">
            <motion.img
              key={screenshots[index]}
              src={screenshots[index]}
              alt="App screenshot preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="h-full w-full object-cover"
              loading="eager"
              width={280}
              height={606}
            />
          </AnimatePresence>
        </div>
      </div>
    </TiltCard>
  );
}
