/**
 * Subtle animated aurora / mesh-gradient background. Kept low-contrast so text
 * stays readable; respects prefers-reduced-motion via the `animate-aurora`
 * Tailwind utility being neutralized globally in tokens.css.
 */
export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-1/4 left-1/4 h-[36rem] w-[36rem] animate-aurora rounded-full bg-teal/20 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 h-[30rem] w-[30rem] animate-aurora rounded-full bg-blue/20 blur-[120px] [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] animate-aurora rounded-full bg-warm/10 blur-[120px] [animation-delay:-12s]" />
    </div>
  );
}
