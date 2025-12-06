"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section
      id="about-me"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-gradient-to-tr from-[#050816] via-[#101827] to-[#4f46e5] opacity-40 blur-3xl"
          animate={{ x: [0, 40, -20, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-[-200px] top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-white via-[#e5e7eb] to-[#111827] opacity-70 blur-3xl"
          animate={{ x: [0, -40, 10, 0], y: [0, 30, -10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-8">
        <HeroContent />
      </div>

      <div className="pointer-events-auto absolute inset-x-0 bottom-16 z-20 flex justify-center px-4">
        <div className="flex w-full max-w-3xl items-center justify-between rounded-[32px] border border-white/15 bg-white/5 px-6 py-3 sm:py-4 backdrop-blur-2xl shadow-[0_18px_60px_rgba(0,0,0,0.75)]">
          <p className="text-sm text-slate-200/80 truncate md:text-base">
            What do you want to know?
          </p>

          <button
            className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-colors hover:bg-white/20"
            aria-label="Send prompt"
          >
            <span className="text-xs text-slate-100">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
