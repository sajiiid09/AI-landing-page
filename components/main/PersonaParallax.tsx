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

export default PersonaParallax;"use client";

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

  const count = PERSONAS.length;
  const segmentLength = 1 / count;

  const leftTransforms = useMemo(
    () =>
      PERSONAS.map((_, i) => {
        const start = i * segmentLength;
        const mid = start + segmentLength * 0.5;
        const end = start + segmentLength;
        const fadeInEnd = start + segmentLength * 0.2;
        const fadeOutStart = end - segmentLength * 0.2;

        return {
          x: useTransform(scrollYProgress, [start, mid, end], ["-15vw", "-6vw", "-14vw"]),
          y: useTransform(scrollYProgress, [start, mid, end], ["18vh", "0vh", "-18vh"]),
          opacity: useTransform(scrollYProgress, [start, fadeInEnd, fadeOutStart, end], [0, 1, 1, 0]),
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
        const fadeInEnd = start + segmentLength * 0.2;
        const fadeOutStart = end - segmentLength * 0.2;

        return {
          x: useTransform(scrollYProgress, [start, mid, end], ["15vw", "6vw", "14vw"]),
          y: useTransform(scrollYProgress, [start, mid, end], ["-18vh", "0vh", "18vh"]),
          opacity: useTransform(scrollYProgress, [start, fadeInEnd, fadeOutStart, end], [0, 1, 1, 0]),
        };
      }),
    [scrollYProgress, segmentLength]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[260vh] w-full bg-black overflow-hidden z-[30]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center px-4 z-20">
          <p className="text-xs tracking-[0.25em] text-violet-300 uppercase mb-2">Built for teams like</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Who RacoAI is made for</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            As you scroll, see the personas and workflows RacoAI is designed to orchestrate.
          </p>
        </div>
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
                <div className="relative h-[260px] w-[200px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur">
                  <Image
                    src={persona.image}
                    alt={persona.title}
                    fill
                    className="object-cover"
                    sizes="200px"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
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
                <div className="w-[260px] md:w-[320px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 md:p-6 shadow-xl text-white">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{persona.title}</h3>
                  <p className="text-xs md:text-sm text-gray-200/80 leading-relaxed">{persona.description}</p>
                </div>
              </motion.div>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default PersonaParallax;
