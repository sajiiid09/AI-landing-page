"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const capabilities = [
  {
    title: "Ingest your docs & sites",
    description: "Plug in drives, URLs, and wikis for continuous learning.",
    position:
      "md:absolute md:left-[6%] md:top-[32%] md:max-w-xs md:-translate-x-4",
  },
  {
    title: "Summarize long reports instantly",
    description: "Condense hours of reading into crisp briefs and takeaways.",
    position: "md:absolute md:left-1/2 md:top-[12%] md:-translate-x-1/2",
  },
  {
    title: "Draft emails & outreach campaigns",
    description: "Personalized copy that aligns with your tone and goals.",
    position:
      "md:absolute md:right-[6%] md:top-[32%] md:max-w-xs md:translate-x-4",
  },
  {
    title: "Answer questions from your knowledge base",
    description: "Confident responses grounded in your sources and tools.",
    position: "md:absolute md:left-[16%] md:bottom-[18%]",
  },
  {
    title: "Generate workflows & task plans",
    description: "Break down complex asks into clear, executable steps.",
    position: "md:absolute md:right-[16%] md:bottom-[12%]",
  },
  {
    title: "Create meeting notes & action items",
    description: "Track decisions, owners, and deadlines automatically.",
    position: "md:absolute md:left-1/2 md:bottom-[6%] md:-translate-x-1/2",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * index, duration: 0.35, ease: "easeOut" },
  }),
};

const Taskmaster = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[#050816]/95 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.25em] text-violet-300">
          Taskmaster
        </p>
        <h2 className="mb-6 text-center text-3xl font-semibold text-white md:text-4xl">
          Your AI that orchestrates every task.
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-slate-300 md:text-base">
          Describe what you want in natural language and Taskmaster coordinates documents, tools, and people to get it done.
        </p>

        <div className="relative mx-auto flex max-w-6xl flex-col items-center md:min-h-[540px]">
          <motion.div
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#8b5cf6]/30 via-[#0ea5e9]/25 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.03, 0.98, 1],
              opacity: [0.5, 0.7, 0.6, 0.5],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#a855f7] via-[#22d3ee] to-[#1e293b] opacity-80 shadow-[0_0_60px_rgba(168,85,247,0.45)]"
            animate={{ y: [-6, 6, -4, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-black/70 backdrop-blur-xl"
            animate={{ scale: [1, 1.02, 0.99, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-white/80 via-violet-200/70 to-[#0f172a] shadow-[0_0_30px_rgba(255,255,255,0.45)]" />
          </motion.div>

          <div className="relative hidden w-full md:block">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className={`rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-xl backdrop-blur-xl ${capability.position}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <div className="text-base font-semibold text-white">{capability.title}</div>
                <p className="mt-1 text-[13px] text-slate-300">{capability.description}</p>
              </motion.div>
            ))}

            <AnimatePresence>
              <motion.div
                className="pointer-events-none absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute left-1/2 top-[14%] h-[14%] w-px -translate-x-1/2 bg-gradient-to-b from-white/50 via-white/20 to-transparent" />
                <div className="absolute left-[18%] top-[40%] h-[1px] w-[20%] bg-gradient-to-r from-transparent via-white/30 to-white/60" />
                <div className="absolute right-[18%] top-[40%] h-[1px] w-[20%] bg-gradient-to-l from-transparent via-white/30 to-white/60" />
                <div className="absolute left-1/2 bottom-[16%] h-[18%] w-px -translate-x-1/2 bg-gradient-to-t from-white/50 via-white/20 to-transparent" />
                <div className="absolute left-[34%] bottom-[28%] h-[1px] w-[12%] bg-gradient-to-r from-transparent via-white/25 to-white/50" />
                <div className="absolute right-[34%] bottom-[22%] h-[1px] w-[12%] bg-gradient-to-l from-transparent via-white/25 to-white/50" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-5 md:hidden">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100 shadow-xl backdrop-blur-xl"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <div className="text-base font-semibold text-white">{capability.title}</div>
                <p className="mt-1 text-[13px] text-slate-300">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Taskmaster;
