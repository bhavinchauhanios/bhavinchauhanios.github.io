import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient progress bar fixed to the top of the viewport, tracking scroll depth.
 */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-teal to-blue"
      aria-hidden="true"
    />
  );
}
