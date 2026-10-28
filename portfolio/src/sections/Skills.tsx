import { useState } from "react";
import { motion } from "framer-motion";
import { skillGroups, currentlyLearning, type Skill } from "../data/skills";

function SkillChip({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);
  const hasStats = skill.usedIn !== undefined && skill.years !== undefined;

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <button
        type="button"
        className="glass-card rounded-full px-4 py-2 text-sm text-text-primary transition-colors hover:bg-bg-card-hover"
        aria-describedby={hasStats ? `${skill.name}-tooltip` : undefined}
      >
        {skill.name}
      </button>
      {hovered && hasStats && (
        <div
          id={`${skill.name}-tooltip`}
          role="tooltip"
          className="absolute left-1/2 top-full z-10 mt-2 w-max -translate-x-1/2 whitespace-nowrap rounded-md bg-bg-elevated border border-border-strong px-3 py-1.5 text-xs text-text-secondary shadow-lg"
        >
          Used in {skill.usedIn}+ projects · {skill.years}+ yrs
        </div>
      )}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-y">
      <div className="container-content">
        <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
          Technical stack and engineering strengths
        </h2>
        <p className="mt-2 max-w-xl text-text-secondary">
          Hover a chip, where shown, for hands-on context: how many projects it's shipped in and how long I've used it.
        </p>

        <div className="mt-10 space-y-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
            >
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-text-muted">{group.group}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <SkillChip key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 glass-card rounded-md p-5">
          <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-text-muted">Currently learning</h3>
          <div className="flex flex-wrap gap-2.5">
            {currentlyLearning.map((item) => (
              <span
                key={item}
                className="rounded-full border border-dashed border-border-strong px-4 py-2 text-sm text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
