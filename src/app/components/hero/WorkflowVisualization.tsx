"use client";

import { motion } from "framer-motion";
import { Inbox, Sparkles, Workflow, TrendingUp, type LucideIcon } from "lucide-react";

type Accent = "blue" | "cyan" | "emerald";

type Stage = {
  id: string;
  label: string;
  icon: LucideIcon;
  tags: string[];
  accent: Accent;
  live?: boolean;
};

const stages: Stage[] = [
  {
    id: "input",
    label: "Input",
    icon: Inbox,
    tags: ["Emails", "Documents", "Data"],
    accent: "blue",
  },
  {
    id: "ai",
    label: "AI",
    icon: Sparkles,
    tags: ["Understand", "Classify", "Extract"],
    accent: "cyan",
    live: true,
  },
  {
    id: "automation",
    label: "Automation",
    icon: Workflow,
    tags: ["Route", "Execute", "Integrate"],
    accent: "blue",
  },
  {
    id: "impact",
    label: "Impact",
    icon: TrendingUp,
    tags: ["Save time", "Reduce costs", "Scale operations"],
    accent: "emerald",
  },
];

const accentStyles: Record<Accent, { icon: string; ring: string; dot: string }> = {
  blue: {
    icon: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
    ring: "group-hover:ring-blue-400/40",
    dot: "bg-blue-400",
  },
  cyan: {
    icon: "bg-cyan-400/10 text-cyan-300 ring-cyan-400/20",
    ring: "group-hover:ring-cyan-300/40",
    dot: "bg-cyan-300",
  },
  emerald: {
    icon: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
    ring: "group-hover:ring-emerald-300/40",
    dot: "bg-emerald-300",
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function FlowConnector() {
  return (
    <div
      className="relative mx-5 h-8 w-px bg-gradient-to-b from-white/15 via-white/10 to-white/15"
      aria-hidden="true"
    >
      <motion.span
        className="absolute -left-[3px] top-0 h-[7px] w-[7px] rounded-full bg-blue-400 shadow-[0_0_8px_2px_rgba(96,165,250,0.6)]"
        animate={{ y: [0, 32], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default function WorkflowVisualization() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-blue-600/10 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8"
        role="img"
        aria-label="Diagram showing how RNZ transforms business operations: input data flows through AI understanding, into automation, resulting in measurable business impact."
      >
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
          Live automation pipeline
        </p>

        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const styles = accentStyles[stage.accent];
          return (
            <div key={stage.id}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 ring-1 ring-transparent transition-shadow"
              >
                <span
                  className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ring-1 ${styles.icon} ${styles.ring}`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  {stage.live && (
                    <span className="absolute -right-1 -top-1 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300" />
                    </span>
                  )}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{stage.label}</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {index < stages.length - 1 && <FlowConnector />}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
