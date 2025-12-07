"use client";

import { motion } from "framer-motion";
import React from "react";

const TASKS = [
  {
    title: "Brand website",
    subtitle: "Docs, wikis, knowledge base",
    position: "top-center",
  },
  {
    title: "Client proposals",
    subtitle: "Summaries, drafts, follow-ups",
    position: "right-middle",
  },
  {
    title: "Team handbook",
    subtitle: "Policies, onboarding, SOPs",
    position: "left-middle",
  },
  {
    title: "Services pricing",
    subtitle: "Plans, quotes, comparables",
    position: "left-bottom",
  },
  {
    title: "Conversations",
    subtitle: "Email, chat, tickets",
    position: "right-bottom",
  },
];

const positionToClasses: Record<string, string> = {
  "top-center": "left-1/2 -translate-x-1/2 top-4 md:top-0",
  "left-middle": "left-[8%] md:left-[6%] top-1/3",
  "left-bottom": "left-[10%] md:left-[8%] bottom-6 md:bottom-10",
  "right-middle": "right-[8%] md:right-[6%] top-1/3",
  "right-bottom": "right-[10%] md:right-[8%] bottom-6 md:bottom-10",
};

const Taskmaster = () => {
  return (
    <section className="relative w-full bg-black py-24 md:py-32 overflow-hidden">
      {/* radial glow background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[480px] w-[480px] md:h-[620px] md:w-[620px] rounded-full bg-[radial-gradient(circle_at_center,#4c1d95_0,#020617_55%,#000000_100%)] opacity-60 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:px-8">
        {/* Section heading */}
        <div className="text-center max-w-2xl">
          <p className="text-xs tracking-[0.25em] text-violet-300 uppercase mb-2">Taskmaster</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            One brain that keeps every task connected.
          </h2>
          <p className="text-sm md:text-base text-slate-300">
            Taskmaster takes your documents, tools, and conversations and turns them into an orchestrated AI that can plan, execute, and report on work automatically.
          </p>
        </div>

        {/* Main visual */}
        <div className="relative h-[420px] md:h-[520px] w-full">
          {/* Center brain container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {/* breathing glow */}
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.06, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-16 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.55),rgba(15,23,42,0))] blur-3xl"
            />

            {/* glow behind brain */}
            <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.7),rgba(15,23,42,0))] blur-2xl opacity-80" />

            {/* brain icon placeholder */}
            <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full border border-violet-400/40 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-950 shadow-[0_0_40px_rgba(168,85,247,0.55)] flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-[radial-gradient(circle_at_top,#e5e7eb,#7c3aed_45%,#1f2937_85%)] opacity-95" />
            </div>
          </motion.div>

          {/* Branches + cards */}
          {TASKS.map((task, index) => {
            const posClass = positionToClasses[task.position];
            const delay = 0.4 + index * 0.12;

            return (
              <React.Fragment key={task.title}>
                {/* Branch line */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.5, delay, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                  className={`
                    pointer-events-none absolute origin-center
                    ${task.position === "top-center" ? "left-1/2 -translate-x-1/2 top-1/2 h-28 w-px" : ""}
                    ${task.position === "left-middle" ? "left-1/2 top-1/2 h-px w-[20%] -translate-y-1/2 -translate-x-[45%]" : ""}
                    ${task.position === "left-bottom" ? "left-1/2 bottom-[20%] h-px w-[24%] -translate-x-[45%]" : ""}
                    ${task.position === "right-middle" ? "right-1/2 top-1/2 h-px w-[20%] -translate-y-1/2 translate-x-[45%]" : ""}
                    ${task.position === "right-bottom" ? "right-1/2 bottom-[20%] h-px w-[24%] translate-x-[45%]" : ""}
                  `}
                >
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-400/0 via-violet-400/60 to-violet-400/0 opacity-70" />
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: delay + 0.1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.4 }}
                  className={`absolute ${posClass}`}
                >
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 md:px-5 md:py-4 shadow-[0_18px_60px_rgba(0,0,0,0.75)] backdrop-blur-2xl min-w-[220px] max-w-xs">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-300/80 mb-1">
                      {task.title}
                    </p>
                    <p className="text-sm text-slate-100/90">{task.subtitle}</p>
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Taskmaster;
