import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface KineticHeadlineProps {
  text: string;
  className?: string;
}

/**
 * Splits text into words and reveals them with a staggered rise-and-fade.
 * Skips animation entirely under prefers-reduced-motion.
 */
export function KineticHeadline({ text, className = "" }: KineticHeadlineProps) {
  const words = text.split(" ");
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <h1 className={className}>{text}</h1>;
  }

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
