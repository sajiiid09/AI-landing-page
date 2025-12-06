import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
// import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import StarsCanvas from "@/components/main/StarBackground";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Hero />

      <section className="relative">
        <StarsCanvas />
        <div className="relative z-10 flex flex-col gap-20">
          <Skills />
          <Encryption />
          {/* <Projects /> */}
        </div>
      </section>
    </main>
  );
}
