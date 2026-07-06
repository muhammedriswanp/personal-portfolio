"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsGrid from "@/components/SkillsGrid";
import Director from "@/components/Director";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <Director />
        <Projects />
        <SkillsGrid />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
