"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, type LucideIcon } from "lucide-react";
import { cardVariants } from "./FeatureCard";

export type WorkflowStep = {
  label: string;
  ai?: boolean;
};

type UseCaseCardProps = {
  icon: LucideIcon;
  title: string;
  workflow: WorkflowStep[];
  description: string;
};

export default function UseCaseCard({ icon: Icon, title, workflow, description }: UseCaseCardProps) {
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

      <div className="relative flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="font-heading text-base font-semibold text-white">{title}</h3>
      </div>

      <div
        className="relative mt-5 flex flex-wrap items-center gap-x-1.5 gap-y-2"
        aria-label={`${title} workflow`}
      >
        {workflow.map((step, index) => (
          <div key={step.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <ArrowRight
                className="h-3 w-3 shrink-0 text-zinc-700 transition-colors duration-300 group-hover:text-zinc-500"
                style={{ transitionDelay: `${index * 70}ms` }}
                strokeWidth={2}
                aria-hidden="true"
              />
            )}
            <span
              className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs transition-colors duration-300 ${
                step.ai
                  ? "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 group-hover:border-white/20 group-hover:text-zinc-200"
              }`}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              {step.ai && <Sparkles className="h-3 w-3" strokeWidth={1.75} aria-hidden="true" />}
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <p className="relative mt-5 text-sm leading-relaxed text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
        {description}
      </p>
    </motion.article>
  );
}
