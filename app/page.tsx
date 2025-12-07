import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
// import Projects from "@/components/main/Projects";
import PersonaParallax from "@/components/main/PersonaParallax";
import ScrollTextSection from "@/components/main/ScrollTextSection";
import Skills from "@/components/main/Skills";
import StarsCanvas from "@/components/main/StarBackground";

export default function Home() {
  return (
    <main className="h-full w-full bg-black">
      <div className="flex flex-col gap-20">
        <Hero />
        <ScrollTextSection />
        <PersonaParallax />

        <section className="relative">
          <StarsCanvas />
          <div className="relative z-10 flex flex-col gap-20">
            <Skills />
            <Encryption />
            {/* <Projects /> */}
          </div>
        </section>
      </div>
    </main>
  );
}
