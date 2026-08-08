"use client";

import { motion } from "framer-motion";
import {
  Inbox,
  ListChecks,
  GitMerge,
  AlertTriangle,
  User,
  Sparkles,
  GitBranch,
  Workflow,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import WorkflowDiagram, { type DiagramNode } from "../ai-comparison/WorkflowDiagram";

const traditionalNodes: DiagramNode[] = [
  { label: "Input", icon: Inbox },
  { label: "Rule", icon: ListChecks },
  { label: "Workflow", icon: GitMerge },
  { label: "Exception", icon: AlertTriangle },
  { label: "Manual", icon: User },
];

const aiNodes: DiagramNode[] = [
  { label: "Input", icon: Inbox },
  { label: "AI Understands", icon: Sparkles, ai: true },
  { label: "Decision", icon: GitBranch, ai: true },
  { label: "Automation", icon: Workflow },
  { label: "Exception Handling", icon: ShieldCheck, ai: true },
  { label: "Action", icon: CheckCircle2 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const traditionalContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const aiContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
};

export default function AIComparisonSection() {
  return (
    <section
      aria-labelledby="ai-comparison-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[#05070d] py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[-10%] bottom-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
            AI + Automation
          </p>
          <h2
            id="ai-comparison-heading"
            className="mt-4 font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            AI doesn&apos;t replace your workflow. It makes your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              workflow intelligent
            </span>
            .
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Combine reliable automation with AI capabilities to handle
            information, decisions and exceptions that traditional workflows
            can&apos;t.
          </p>
        </motion.div>

        <div className="relative mt-16 lg:mt-20">
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#05070d] text-[11px] font-semibold uppercase tracking-wide text-zinc-500 lg:flex"
            aria-hidden="true"
          >
            vs
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={traditionalContainer}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Traditional automation
              </span>
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
                <WorkflowDiagram variant="traditional" nodes={traditionalNodes} />
              </div>
            </motion.div>

            <div className="flex items-center justify-center lg:hidden" aria-hidden="true">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                vs
              </span>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={aiContainer}
              className="relative"
            >
              <div
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-cyan-500/10 blur-3xl"
                aria-hidden="true"
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                AI-powered automation
              </span>
              <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
                <WorkflowDiagram variant="ai" nodes={aiNodes} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
