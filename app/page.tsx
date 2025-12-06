"use client";

import { useEffect, useState } from "react";
import Encryption from "@/components/main/Encryption";
import FooterGradient from "@/components/main/FooterGradient";
import Hero from "@/components/main/Hero";
// import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import StarsCanvas from "@/components/main/StarBackground";
import Taskmaster from "@/components/main/Taskmaster";

export default function Home() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerElement = document.getElementById("site-footer");
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsFooterVisible(entries.some((entry) => entry.isIntersecting));
      },
      {
        root: null,
        rootMargin: "0px 0px -25% 0px",
        threshold: [0, 0.25, 0.5, 1],
      }
    );

    observer.observe(footerElement);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="h-full w-full">
      <Hero />

      <section className="relative">
        <StarsCanvas />
        <FooterGradient isVisible={isFooterVisible} />
        <div className="relative z-10 flex flex-col gap-20 pb-24">
          <Skills />
          <Encryption />
          <Taskmaster />
          {/* <Projects /> */}
        </div>
      </section>
    </main>
  );
}
