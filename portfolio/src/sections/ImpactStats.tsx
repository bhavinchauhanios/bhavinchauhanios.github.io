import { stats } from "../data/stats";
import { useCountUp } from "../hooks/useCountUp";

function StatCard({ value, suffix, label, big }: { value: number; suffix: string; label: string; big?: boolean }) {
  const { ref, value: animated } = useCountUp(value);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card gradient-border flex flex-col justify-center rounded-lg p-6 ${
        big ? "sm:col-span-2 sm:row-span-2 sm:p-10" : ""
      }`}
    >
      <span className={`font-display font-semibold gradient-text ${big ? "text-5xl sm:text-6xl" : "text-3xl sm:text-4xl"}`}>
        {animated}
        {suffix}
      </span>
      <span className="mt-2 text-sm text-text-secondary">{label}</span>
    </div>
  );
}

export function ImpactStats() {
  return (
    <section className="section-y">
      <div className="container-content">
        <h2 className="mb-10 font-display text-2xl font-semibold text-text-primary sm:text-3xl">
          Impact, in numbers
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} big={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
