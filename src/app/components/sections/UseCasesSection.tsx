"use client";

import { motion } from "framer-motion";
import { Target, Receipt, Headphones, Users, Settings2, BarChart3 } from "lucide-react";
import UseCaseCard, { type WorkflowStep } from "../ui/UseCaseCard";

type UseCase = {
  icon: typeof Target;
  title: string;
  workflow: WorkflowStep[];
  description: string;
};

const useCases: UseCase[] = [
  {
    icon: Target,
    title: "Sales",
    workflow: [
      { label: "Lead" },
      { label: "Qualification" },
      { label: "CRM" },
      { label: "Follow-up" },
    ],
    description:
      "Automatically qualify leads, enrich information and trigger the right follow-up.",
  },
  {
    icon: Receipt,
    title: "Finance",
    workflow: [
      { label: "Invoice" },
      { label: "Extraction" },
      { label: "Validation" },
      { label: "Accounting" },
    ],
    description:
      "Extract invoice data, validate information and route transactions automatically.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    workflow: [
      { label: "Email" },
      { label: "AI classification", ai: true },
      { label: "Response" },
      { label: "Ticket" },
    ],
    description:
      "Understand incoming requests, classify them and route or respond automatically.",
  },
  {
    icon: Users,
    title: "HR",
    workflow: [
      { label: "CV" },
      { label: "AI screening", ai: true },
      { label: "Classification" },
      { label: "Interview" },
    ],
    description:
      "Analyze applications, classify candidates and streamline the recruitment workflow.",
  },
  {
    icon: Settings2,
    title: "Operations",
    workflow: [
      { label: "Request" },
      { label: "Processing" },
      { label: "Approval" },
      { label: "Notification" },
    ],
    description:
      "Connect operational requests to the right processes, people and systems.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    workflow: [
      { label: "Data" },
      { label: "Analysis" },
      { label: "Report" },
      { label: "Distribution" },
    ],
    description:
      "Turn raw data into automated reports and deliver insights to the right people.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export default function UseCasesSection() {
  return (
    <section
      aria-labelledby="use-cases-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[#05070d] py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute right-[-10%] top-1/4 -z-10 h-[26rem] w-[26rem] rounded-full bg-blue-600/10 blur-[120px]"
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
            Use cases
          </p>
          <h2
            id="use-cases-heading"
            className="mt-4 font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            What can we automate?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            From sales and finance to operations and reporting, we automate
            the repetitive work behind your business.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-2"
        >
          {useCases.map((useCase) => (
            <UseCaseCard
              key={useCase.title}
              icon={useCase.icon}
              title={useCase.title}
              workflow={useCase.workflow}
              description={useCase.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
