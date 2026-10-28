import { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "./icons";

interface RoutePoint {
  id: number;
  label: string;
  status: "normal" | "anomaly" | "checking";
}

const INITIAL_POINTS: RoutePoint[] = [
  { id: 1, label: "Warehouse A — check-in", status: "normal" },
  { id: 2, label: "Client site #142", status: "normal" },
  { id: 3, label: "Unplanned stop — 18 min idle", status: "normal" },
  { id: 4, label: "Client site #087", status: "normal" },
  { id: 5, label: "Route deviation — 2.3km off path", status: "normal" },
];

/**
 * Front-end-only "AI route & anomaly detection" simulation.
 * No API keys, no network calls — purely scripted for demonstration.
 * Mirrors the kind of field-activity monitoring built for Lystloc.
 */
export function AnomalyDetectionDemo() {
  const [points, setPoints] = useState<RoutePoint[]>(INITIAL_POINTS);
  const [running, setRunning] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  const runScan = async () => {
    setRunning(true);
    setSummary(null);
    setPoints(INITIAL_POINTS.map((p) => ({ ...p, status: "normal" })));

    for (let i = 0; i < INITIAL_POINTS.length; i++) {
      await new Promise((r) => setTimeout(r, 420));
      setPoints((prev) =>
        prev.map((p, idx) => (idx === i ? { ...p, status: "checking" } : p)),
      );
      await new Promise((r) => setTimeout(r, 380));
      const isAnomaly = INITIAL_POINTS[i].label.toLowerCase().includes("unplanned") ||
        INITIAL_POINTS[i].label.toLowerCase().includes("deviation");
      setPoints((prev) =>
        prev.map((p, idx) => (idx === i ? { ...p, status: isAnomaly ? "anomaly" : "normal" } : p)),
      );
    }

    setSummary("Scan complete — 2 anomalies flagged for field-manager review.");
    setRunning(false);
  };

  return (
    <div className="glass-card gradient-border rounded-lg p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <SparklesIcon className="text-teal" width={20} height={20} />
          <h3 className="font-display text-lg font-semibold text-text-primary">
            Try it: Smart Route Anomaly Detection
          </h3>
        </div>
        <button
          onClick={runScan}
          disabled={running}
          className="rounded-full bg-gradient-to-r from-teal to-blue px-4 py-2 text-sm font-medium text-[#04110e] disabled:opacity-60"
        >
          {running ? "Scanning…" : "Run scan"}
        </button>
      </div>
      <p className="mt-2 text-sm text-text-secondary">
        A simplified, front-end-only simulation of the field-activity monitoring pattern built for Lystloc.
        No live data or API calls — just a scripted demo you can replay.
      </p>

      <ul className="mt-6 space-y-2">
        {points.map((point) => (
          <motion.li
            key={point.id}
            layout
            className={`flex items-center justify-between rounded-md border px-4 py-2.5 text-sm transition-colors ${
              point.status === "anomaly"
                ? "border-warm/40 bg-warm/10 text-warm"
                : point.status === "checking"
                  ? "border-teal/40 bg-teal/10 text-teal"
                  : "border-border text-text-secondary"
            }`}
          >
            <span>{point.label}</span>
            <span className="text-xs font-medium uppercase tracking-wide">
              {point.status === "checking" ? "Checking…" : point.status === "anomaly" ? "Anomaly" : "OK"}
            </span>
          </motion.li>
        ))}
      </ul>

      {summary && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-md bg-bg-card px-4 py-2.5 text-sm text-text-primary"
        >
          {summary}
        </motion.p>
      )}
    </div>
  );
}
