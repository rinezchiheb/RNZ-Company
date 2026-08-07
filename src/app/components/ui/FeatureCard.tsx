"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type Accent = "blue" | "cyan";

const accentStyles: Record<Accent, string> = {
  blue: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
  cyan: "bg-cyan-400/10 text-cyan-300 ring-cyan-400/20",
};

export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: Accent;
  showArrow?: boolean;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = "blue",
  showArrow = false,
}: FeatureCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-white/20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(160px_100px_at_15%_0%,rgba(96,165,250,0.10),transparent)]"
        aria-hidden="true"
      />

      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-lg ring-1 ${accentStyles[accent]}`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
      </span>

      <h3 className="relative mt-5 font-heading text-base font-semibold text-white">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">{description}</p>

      {showArrow && (
        <ArrowUpRight
          className="relative mt-4 h-4 w-4 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
          aria-hidden="true"
        />
      )}
    </motion.article>
  );
}
