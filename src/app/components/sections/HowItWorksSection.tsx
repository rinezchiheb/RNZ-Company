"use client";

import { motion } from "framer-motion";
import ProcessTimeline from "../how-it-works/ProcessTimeline";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[#05070d] py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute right-[-10%] top-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-blue-600/10 blur-[120px]"
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
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-4 font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            From idea to automation in four steps.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            We turn repetitive processes into intelligent workflows — from
            discovery to continuous optimization.
          </p>
        </motion.div>

        <ProcessTimeline />
      </div>
    </section>
  );
}
