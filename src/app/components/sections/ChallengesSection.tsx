"use client";

import { motion } from "framer-motion";
import { Repeat, Unplug, Brain, Hourglass } from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

const challenges = [
  {
    icon: Repeat,
    title: "Repetitive Tasks",
    description: "Manual data entry, document processing, reporting and follow-ups.",
  },
  {
    icon: Unplug,
    title: "Disconnected Systems",
    description: "Your tools don't communicate? We connect them into one workflow.",
  },
  {
    icon: Brain,
    title: "AI Opportunities",
    description: "Extract, classify, summarize and make decisions automatically.",
  },
  {
    icon: Hourglass,
    title: "Operational Bottlenecks",
    description: "Reduce delays, errors and unnecessary operational costs.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function ChallengesSection() {
  return (
    <section
      aria-labelledby="challenges-heading"
      className="relative border-t border-white/5 bg-[#05070d] py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute left-[-10%] top-1/3 -z-10 h-[24rem] w-[24rem] rounded-full bg-blue-600/10 blur-[120px]"
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
          <h2
            id="challenges-heading"
            className="font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            Your workflows shouldn&apos;t depend on manual work.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            We identify repetitive processes, connect your systems and automate
            the work — with AI where it creates real value.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20"
        >
          {challenges.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
