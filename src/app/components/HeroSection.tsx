"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import WorkflowVisualization from "./hero/WorkflowVisualization";

const EYEBROW_ITEMS = ["AI", "AUTOMATION", "DIGITAL OPERATIONS"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#05070d]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[36rem] w-[36rem] rounded-full bg-blue-600/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 sm:py-28 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-32">
        <div className="max-w-xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400"
          >
            {EYEBROW_ITEMS.map((item, index) => (
              <span key={item} className="flex items-center gap-2.5">
                {index > 0 && (
                  <span className="h-1 w-1 rounded-full bg-blue-400/60" aria-hidden="true" />
                )}
                {item}
              </span>
            ))}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="mt-5 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
          >
            Turn your operations into an{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              intelligent advantage
            </span>
            .
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-6 text-lg leading-relaxed text-zinc-400"
          >
            RNZ helps businesses automate processes, optimize operations and
            unlock the value of AI — with a flexible technology team built
            for European and African businesses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="https://calendly.com/shyhebrinez/30-min-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#05070d] transition-colors hover:bg-zinc-200"
            >
              Book a free assessment
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-6 flex items-center gap-2 text-sm text-zinc-500"
          >
            <Clock className="h-4 w-4" aria-hidden="true" />
            30-minute discovery call · No commitment
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <WorkflowVisualization />
        </motion.div>
      </div>
    </section>
  );
}
