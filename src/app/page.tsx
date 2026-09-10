"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Director from "@/components/Director";
import SkillsGrid from "@/components/SkillsGrid";
import Projects from "@/components/Projects";
import AllProjects from "@/components/AllProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-[#060913]">
        <Hero />
        <Director />
        <SkillsGrid />
        <Projects />
        <AllProjects />
      </main>
      <Footer />
    </>
  );
}
