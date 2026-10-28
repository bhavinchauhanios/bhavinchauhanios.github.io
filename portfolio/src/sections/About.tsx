import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-xs"
          >
            <div className="gradient-border relative overflow-hidden rounded-xl">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={320}
                height={400}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-teal to-blue opacity-30 blur-2xl" aria-hidden="true" />
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="font-display text-2xl font-semibold text-text-primary sm:text-3xl"
            >
              Product-minded mobile engineer with an AI-ready execution style
            </motion.h2>

            <div className="mt-5 space-y-4 text-text-secondary">
              {profile.aboutStory.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* How I work timeline */}
            <div className="mt-10">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-text-muted">How I work</h3>
              <div className="flex flex-wrap gap-2">
                {profile.howIWork.map((step, i) => (
                  <div key={step.step} className="flex items-center gap-2">
                    <div
                      className="glass-card rounded-full px-4 py-2 text-sm text-text-primary"
                      title={step.description}
                    >
                      {step.step}
                    </div>
                    {i < profile.howIWork.length - 1 && (
                      <span className="text-text-muted" aria-hidden="true">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3 principles */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {profile.principles.map((p) => (
                <div key={p.title} className="glass-card rounded-md p-4">
                  <h4 className="font-display text-base font-semibold text-text-primary">{p.title}</h4>
                  <p className="mt-1.5 text-sm text-text-secondary">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
