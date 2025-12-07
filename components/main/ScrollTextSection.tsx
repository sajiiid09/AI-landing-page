"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollTextSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.35], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [20, -20]);

  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.65], [20, -20]);

  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.95], [20, -20]);

  return (
    <div
      ref={containerRef}
      className="relative z-[20] h-[400vh] bg-black text-white"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute max-w-4xl px-4 text-center"
        >
          <p className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            We know the pain of messy, disconnected workflows that slow your team
            down.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2, y: y2 }}
          className="absolute max-w-4xl px-4 text-center"
        >
          <p className="bg-gradient-to-r from-purple-200 via-purple-300 to-blue-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            RacoAI is your agentic operating system— orchestrating every tool and
            data stream for you.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3, y: y3 }}
          className="absolute max-w-4xl px-4 text-center"
        >
          <p className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Built for teams like product, ops, and GTM who need AI that works the
            way they do.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollTextSection;
