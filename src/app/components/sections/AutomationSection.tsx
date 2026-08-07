"use client";

import { motion } from "framer-motion";
import { FileText, MailCheck, GitMerge, Bot, BarChart3, Network } from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

const capabilities = [
  {
    icon: FileText,
    title: "Document Processing",
    description:
      "Extract and structure information from invoices, contracts and documents.",
    accent: "blue" as const,
  },
  {
    icon: MailCheck,
    title: "Email Automation",
    description:
      "Classify emails, extract information and trigger actions automatically.",
    accent: "cyan" as const,
  },
  {
    icon: GitMerge,
    title: "Workflow Automation",
    description: "Connect your business applications and eliminate repetitive tasks.",
    accent: "blue" as const,
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Deploy AI agents that can understand, decide and execute tasks.",
    accent: "cyan" as const,
  },
  {
    icon: BarChart3,
    title: "Data & Reporting",
    description: "Turn operational data into automated reports and actionable insights.",
    accent: "blue" as const,
  },
  {
    icon: Network,
    title: "System Integration",
    description: "Connect APIs, CRM, ERP and internal tools into a unified workflow.",
    accent: "cyan" as const,
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

export default function AutomationSection() {
  return (
    <section
      aria-labelledby="automation-heading"
      className="relative overflow-hidden border-t border-white/5 bg-[#05070d] py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-10%] bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[120px]"
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
            id="automation-heading"
            className="text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            Automate the work that slows you down.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3"
        >
          {capabilities.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              accent={item.accent}
              showArrow
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
