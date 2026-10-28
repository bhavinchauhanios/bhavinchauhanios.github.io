import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { experience, education, certifications } from "../data/experience";

export function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.8"],
  });
  const lineHeight = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="journey" className="section-y">
      <div className="container-content">
        <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
          Experience and education timeline
        </h2>

        <div ref={containerRef} className="relative mt-12">
          {/* Track */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-border sm:left-[7px]" aria-hidden="true" />
          {/* Progress fill */}
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-[7px] top-0 w-[2px] origin-top bg-gradient-to-b from-teal to-blue"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {experience.map((entry, i) => (
              <motion.li
                key={`${entry.company}-${entry.period}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-8"
              >
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-teal bg-bg-elevated" aria-hidden="true" />
                <div className="glass-card rounded-lg p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-base font-semibold text-text-primary">{entry.role}</h3>
                    <span className="text-sm text-text-muted">{entry.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-text-secondary">
                    {entry.company} · {entry.location}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Education & certifications */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="glass-card rounded-lg p-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-text-muted">Education</h3>
            {education.map((ed) => (
              <div key={ed.title} className="mb-1">
                <p className="font-display font-medium text-text-primary">{ed.title}</p>
                <p className="text-sm text-text-secondary">{ed.institution}</p>
                <p className="text-xs text-text-muted">{ed.period}</p>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-lg p-6">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-text-muted">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title}>
                  <p className="font-display text-sm font-medium text-text-primary">{cert.title}</p>
                  <p className="text-xs text-text-muted">
                    {cert.issuer} · {cert.issued}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
