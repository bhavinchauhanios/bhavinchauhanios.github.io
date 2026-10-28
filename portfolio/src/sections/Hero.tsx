import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { KineticHeadline } from "../components/ui/KineticHeadline";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import { TechMarquee } from "../components/ui/TechMarquee";
import { AuroraBackground } from "../components/ui/AuroraBackground";
import { useTypewriter } from "../hooks/useTypewriter";
import { ArrowUpRightIcon, WhatsappIcon } from "../components/ui/icons";

const ORBIT_CHIPS = ["SwiftUI", "Core ML", "LLM"];

function scrollToWork() {
  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const typed = useTypewriter(profile.specialties);
  const heroScreenshots = projects
    .filter((p) => p.featured)
    .flatMap((p) => p.screenshots.slice(0, 2));

  return (
    <section id="hero" className="relative overflow-hidden pt-40 pb-20 sm:pt-48">
      <AuroraBackground />
      <div className="noise-overlay" />

      <div className="container-content relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-text-secondary"
          >
            {profile.eyebrow}
          </motion.p>

          <KineticHeadline
            text={profile.headline}
            className="font-display text-4xl font-semibold leading-[1.05] text-text-primary sm:text-5xl lg:text-[3.4rem]"
          />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 space-y-2 text-base text-text-secondary sm:text-lg"
          >
            {profile.subCopy.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 flex h-7 items-center font-display text-lg text-teal sm:text-xl"
          >
            <span aria-live="polite">{typed}</span>
            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-teal" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal to-blue px-6 py-3 text-sm font-medium text-[#04110e] shadow-glow-teal transition-transform hover:scale-105"
            >
              Book a call <ArrowUpRightIcon width={16} height={16} />
            </button>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-bg-card-hover"
            >
              Download CV
            </a>
            <a
              href={profile.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full p-3 text-text-secondary transition-colors hover:bg-bg-card-hover hover:text-text-primary"
              aria-label="Message on WhatsApp"
            >
              <WhatsappIcon width={20} height={20} />
            </a>
          </motion.div>

          <motion.button
            onClick={scrollToWork}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm text-text-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-success" />
            </span>
            {profile.availability.label}
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          <PhoneMockup screenshots={heroScreenshots} />

          {ORBIT_CHIPS.map((chip, i) => (
            <motion.div
              key={chip}
              className="glass-card absolute rounded-full px-3 py-1.5 text-xs font-medium text-text-primary"
              style={
                i === 0
                  ? { top: "8%", left: "-4%" }
                  : i === 1
                    ? { top: "42%", right: "-8%" }
                    : { bottom: "10%", left: "-2%" }
              }
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            >
              {chip}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16">
        <TechMarquee />
      </div>
    </section>
  );
}
