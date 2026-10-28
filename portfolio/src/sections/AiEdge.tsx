import { motion } from "framer-motion";
import { aiEdgeCards } from "../data/content";
import { AnomalyDetectionDemo } from "../components/ui/AnomalyDetectionDemo";
import { SparklesIcon, EyeIcon, CodeIcon, ShieldIcon } from "../components/ui/icons";

const iconMap = {
  sparkles: SparklesIcon,
  eye: EyeIcon,
  code: CodeIcon,
  shield: ShieldIcon,
};

export function AiEdge() {
  return (
    <section id="ai-edge" className="section-y">
      <div className="container-content">
        <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
          What makes this profile AI-ready
        </h2>
        <p className="mt-2 max-w-2xl text-text-secondary">
          Clear positioning, visible case-study thinking, strong mobile proof, and credible AI capability —
          built into production apps, not just demos.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiEdgeCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card gradient-border rounded-lg p-6"
              >
                <div className="mb-4 inline-flex rounded-full bg-teal/10 p-2.5 text-teal">
                  <Icon width={22} height={22} />
                </div>
                <h3 className="font-display text-base font-semibold text-text-primary">{card.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <AnomalyDetectionDemo />
        </motion.div>
      </div>
    </section>
  );
}
