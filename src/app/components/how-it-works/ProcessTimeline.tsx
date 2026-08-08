"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Layers, Workflow, TrendingUp, type LucideIcon } from "lucide-react";
import { useSafeReducedMotion } from "../hooks/useSafeReducedMotion";

type Accent = "blue" | "cyan" | "emerald";

type Step = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
};

const steps: Step[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    description: "We identify repetitive processes and automation opportunities.",
    icon: Search,
    accent: "blue",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    description: "We design the workflow, integrations and AI components.",
    icon: Layers,
    accent: "cyan",
  },
  {
    id: "automate",
    number: "03",
    title: "Automate",
    description: "We build, integrate and deploy your automation.",
    icon: Workflow,
    accent: "blue",
  },
  {
    id: "optimize",
    number: "04",
    title: "Optimize",
    description: "We monitor performance and continuously improve the workflow.",
    icon: TrendingUp,
    accent: "emerald",
  },
];

const accentStyles: Record<Accent, { active: string; text: string; dot: string }> = {
  blue: {
    active: "border-blue-400/40 bg-blue-500/10 text-blue-400 ring-blue-500/20",
    text: "text-blue-400",
    dot: "bg-blue-400",
  },
  cyan: {
    active: "border-cyan-300/40 bg-cyan-400/10 text-cyan-300 ring-cyan-400/20",
    text: "text-cyan-300",
    dot: "bg-cyan-300",
  },
  emerald: {
    active: "border-emerald-300/40 bg-emerald-400/10 text-emerald-300 ring-emerald-400/20",
    text: "text-emerald-300",
    dot: "bg-emerald-300",
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ProcessTimeline() {
  const [hovered, setHovered] = useState<number | null>(null);
  const shouldReduceMotion = useSafeReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="relative mt-16 flex flex-col gap-10 lg:mt-20 lg:grid lg:grid-cols-4 lg:gap-8"
    >
      {/* Desktop connecting line */}
      <div
        className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-white/10 lg:block"
        aria-hidden="true"
      >
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
        />
        {!shouldReduceMotion && (
          <motion.span
            className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]"
            initial={{ left: "0%", opacity: 0 }}
            whileInView={{ left: "100%", opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: "linear", delay: 0.3 }}
          />
        )}
      </div>

      {/* Mobile connecting line */}
      <div
        className="pointer-events-none absolute left-7 top-0 bottom-0 block w-px bg-white/10 lg:hidden"
        aria-hidden="true"
      />

      {steps.map((step, index) => {
        const Icon = step.icon;
        const styles = accentStyles[step.accent];
        const isDimmed = hovered !== null && hovered !== index;

        return (
          <motion.div
            key={step.id}
            variants={itemVariants}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(index)}
            onBlur={() => setHovered(null)}
            tabIndex={0}
            className={`group relative z-10 flex flex-row items-start gap-4 rounded-xl transition-opacity duration-300 focus:outline-none lg:flex-col lg:items-center lg:gap-0 lg:text-center ${
              isDimmed ? "opacity-50" : "opacity-100"
            }`}
          >
            <span
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border bg-[#05070d] ring-1 ring-transparent transition-all duration-300 ${
                hovered === index
                  ? styles.active
                  : "border-white/10 text-zinc-400"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </span>

            <div className="lg:mt-5">
              <p
                className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  hovered === index ? styles.text : "text-zinc-500"
                }`}
              >
                {step.number}
              </p>
              <h3 className="mt-1.5 font-heading text-lg font-semibold text-white lg:mt-2">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-zinc-400 lg:mt-2 lg:max-w-[220px]">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
