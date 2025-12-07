"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Fragment, useMemo, useRef } from "react";

const PERSONAS = [
  {
    title: "Freelancers",
    description: "Automate proposals, invoicing, and client updates with a single orchestrated agent stack.",
    image: "/roo2.jpg",
  },
  {
    title: "Founders",
    description: "Connect product analytics, support, and ops tools so RacoAI can triage and execute instantly.",
    image: "/roo3.jpg",
  },
  {
    title: "RevOps Leaders",
    description: "Keep Salesforce, billing, and outreach perfectly in sync without manual spreadsheet glue.",
    image: "/roo4.jpg",
  },
  {
    title: "Product Teams",
    description: "Ship faster with agents that watch metrics, open issues, and call internal tooling on demand.",
    image: "/roo5.jpg",
  },
  {
    title: "Support Leads",
    description: "Route conversations, summarize threads, and trigger playbooks across every channel automatically.",
    image: "/deliveroo1.jpg",
  },
];

const PersonaParallax = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const segmentLength = 1 / PERSONAS.length;

  const leftTransforms = useMemo(
    () =>
      PERSONAS.map((_, i) => {
        const start = i * segmentLength;
        const mid = start + segmentLength * 0.5;
        const end = start + segmentLength;

        return {
          x: useTransform(scrollYProgress, [start, mid, end], ["-25vw", "-10vw", "-22vw"]),
          y: useTransform(scrollYProgress, [start, mid, end], ["20vh", "0vh", "-20vh"]),
          opacity: useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]),
        };
      }),
    [scrollYProgress, segmentLength]
  );

  const rightTransforms = useMemo(
    () =>
      PERSONAS.map((_, i) => {
        const start = i * segmentLength;
        const mid = start + segmentLength * 0.5;
        const end = start + segmentLength;

        return {
          x: useTransform(scrollYProgress, [start, mid, end], ["25vw", "10vw", "22vw"]),
          y: useTransform(scrollYProgress, [start, mid, end], ["-20vh", "0vh", "20vh"]),
          opacity: useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]),
        };
      }),
    [scrollYProgress, segmentLength]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] w-full bg-black overflow-hidden z-[30]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative h-full w-full flex items-center justify-center">
          {PERSONAS.map((persona, index) => (
            <Fragment key={`${persona.title}-${index}`}>
              <motion.div
                key={`left-${persona.title}-${index}`}
                style={{
                  x: leftTransforms[index].x,
                  y: leftTransforms[index].y,
                  opacity: leftTransforms[index].opacity,
                }}
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
                </div>
              </motion.div>

              <motion.div
                key={`right-${persona.title}-${index}`}
                style={{
                  x: rightTransforms[index].x,
                  y: rightTransforms[index].y,
                  opacity: rightTransforms[index].opacity,
                }}
                className="absolute"
              >
                <div className="w-[320px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl text-white">
                  <h3 className="text-xl font-semibold mb-2">{persona.title}</h3>
                  <p className="text-sm text-gray-200/80 leading-relaxed">{persona.description}</p>
                </div>
              </motion.div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonaParallax;
