import { techMarquee } from "../../data/content";

/**
 * Infinite scrolling tech-logo/name strip. Uses a duplicated list + CSS animation
 * so the loop is seamless; pauses automatically under prefers-reduced-motion via
 * the global CSS override on animation-duration.
 */
export function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="relative overflow-hidden py-6" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap font-display text-lg text-text-muted sm:text-xl"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
