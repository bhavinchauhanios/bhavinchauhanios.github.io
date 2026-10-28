import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../data/testimonials";
import { useReducedMotion } from "../hooks/useReducedMotion";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const current = testimonials[index];

  return (
    <section className="section-y">
      <div className="container-content">
        <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">What clients say</h2>

        <div className="relative mt-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="glass-card gradient-border mx-auto max-w-2xl rounded-lg p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal to-blue font-display text-lg font-semibold text-[#04110e]">
                {current.initials}
              </div>
              <blockquote className="font-display text-lg text-text-primary">“{current.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-text-muted">
                {current.name}
                {current.isPlaceholder && <span className="ml-1 text-[11px]">(placeholder)</span>}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-teal" : "w-2 bg-border-strong"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
