"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useRef } from "react";

const PERSONAS = [
  {
    title: "Freelancers",
    description:
      "Automate proposals, invoicing, and client updates with a single orchestrated agent stack.",
    image: "/roo2.jpg",
  },
  {
    title: "Founders",
    description:
      "Connect product analytics, support, and ops tools so RacoAI can triage and execute instantly.",
    image: "/roo3.jpg",
  },
  {
    title: "RevOps Leaders",
    description:
      "Keep Salesforce, billing, and outreach perfectly in sync without manual spreadsheet glue.",
    image: "/roo4.jpg",
  },
  {
    title: "Product Teams",
    description:
      "Ship faster with agents that watch metrics, open issues, and call internal tooling on demand.",
    image: "/roo5.jpg",
  },
  {
    title: "Support Leads",
    description:
      "Route conversations, summarize threads, and trigger playbooks across every channel automatically.",
    image: "/deliveroo1.jpg",
  },
];

const PersonaParallax = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const count = PERSONAS.length;
  if (count === 0) return null;

  const segmentLength = 1 / count;

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] w-full bg-black overflow-hidden z-[30]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative h-full w-full flex items-center justify-center">
          {PERSONAS.map((persona, index) => {
            const start = index * segmentLength;
            const mid = start + segmentLength * 0.5;
            const end = start + segmentLength;

            // LEFT (image) arc: bottom-left → center-left → top-left
            const xLeft = useTransform(
              scrollYProgress,
              [start, mid, end],
              ["-25vw", "-12vw", "-24vw"]
            );
            const yLeft = useTransform(
              scrollYProgress,
              [start, mid, end],
              ["20vh", "0vh", "-20vh"]
            );
            const opacityLeft = useTransform(
              scrollYProgress,
              [start, start + segmentLength * 0.15, end - segmentLength * 0.15, end],
              [0, 1, 1, 0]
            );

            // RIGHT (text) arc: top-right → center-right → bottom-right
            const xRight = useTransform(
              scrollYProgress,
              [start, mid, end],
              ["25vw", "12vw", "24vw"]
            );
            const yRight = useTransform(
              scrollYProgress,
              [start, mid, end],
              ["-20vh", "0vh", "20vh"]
            );
            const opacityRight = useTransform(
              scrollYProgress,
              [start, start + segmentLength * 0.15, end - segmentLength * 0.15, end],
              [0, 1, 1, 0]
            );

            return (
              <Fragment key={`${persona.title}-${index}`}>
                {/* LEFT: image card */}
                <motion.div
                  style={{ x: xLeft, y: yLeft, opacity: opacityLeft }}
                  className="absolute"
                >
                  <div className="relative h-[300px] w-[220px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur">
                    <Image
                      src={persona.image}
                      alt={persona.title}
                      fill
                      className="object-cover"
                      sizes="220px"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                </motion.div>

                {/* RIGHT: text card */}
                <motion.div
                  style={{ x: xRight, y: yRight, opacity: opacityRight }}
                  className="absolute"
                >
                  <div className="w-[320px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl text-white">
                    <h3 className="text-xl font-semibold mb-2">{persona.title}</h3>
                    <p className="text-sm text-gray-200/80 leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </motion.div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PersonaParallax;
