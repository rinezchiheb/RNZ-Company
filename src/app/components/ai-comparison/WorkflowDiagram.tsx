"use client";

import { motion } from "framer-motion";
import { Sparkles, type LucideIcon } from "lucide-react";
import { useSafeReducedMotion } from "../hooks/useSafeReducedMotion";

export type DiagramNode = {
  label: string;
  icon: LucideIcon;
  ai?: boolean;
};

type WorkflowDiagramProps = {
  variant: "traditional" | "ai";
  nodes: DiagramNode[];
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

function Connector({ animated }: { animated: boolean }) {
  const shouldReduceMotion = useSafeReducedMotion();
  return (
    <div
      className={`relative mx-auto h-6 w-px ${
        animated ? "bg-gradient-to-b from-cyan-400/20 via-cyan-300/15 to-cyan-400/20" : "bg-white/10"
      }`}
      aria-hidden="true"
    >
      {animated && !shouldReduceMotion && (
        <motion.span
          className="absolute -left-[3px] top-0 h-[7px] w-[7px] rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(103,232,249,0.5)]"
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: 24, opacity: [0, 1, 1, 0] }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: "linear", repeat: 2, repeatDelay: 0.6 }}
        />
      )}
    </div>
  );
}

export default function WorkflowDiagram({ variant, nodes }: WorkflowDiagramProps) {
  const isAI = variant === "ai";

  return (
    <div className="flex flex-col">
      {nodes.map((node, index) => {
        const Icon = node.icon;
        const highlight = isAI && node.ai;

        return (
          <div key={node.label}>
            <motion.div
              variants={itemVariants}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-colors duration-300 ${
                highlight
                  ? "border-cyan-400/30 bg-cyan-400/[0.06]"
                  : isAI
                    ? "border-white/10 bg-white/[0.03]"
                    : "border-white/5 bg-white/[0.02]"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ${
                  highlight
                    ? "bg-cyan-400/10 text-cyan-300 ring-cyan-400/25"
                    : isAI
                      ? "bg-blue-500/10 text-blue-400 ring-blue-500/20"
                      : "bg-white/5 text-zinc-500 ring-white/10"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span
                className={`text-sm font-medium ${
                  highlight ? "text-white" : isAI ? "text-zinc-200" : "text-zinc-400"
                }`}
              >
                {node.label}
              </span>
              {highlight && (
                <Sparkles
                  className="ml-auto h-3.5 w-3.5 text-cyan-300"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              )}
            </motion.div>

            {index < nodes.length - 1 && <Connector animated={isAI} />}
          </div>
        );
      })}
    </div>
  );
}
