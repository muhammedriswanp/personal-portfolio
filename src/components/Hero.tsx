"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import CanvasConstellation from "./CanvasConstellation";

const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const roles = [
    "AI / ML Engineer",
    "GenAI Developer",
    "MLOps Specialist",
    "Data Scientist",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(role.substring(0, currentText.length + 1));
        if (currentText.length === role.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(role.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  const stats = [
    { value: "10+", label: "PROJECTS BUILT" },
    { value: "1+", label: "YEARS HANDS-ON EXP" },
    { value: "15+", label: "MODELS TRAINED" },
    { value: "15+", label: "TECH STACKS" },
  ];

  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[680px] w-full bg-[#070a14] text-white flex flex-col justify-between items-center pt-20 md:pt-24 pb-6 overflow-hidden text-center"
    >
      {/* Interactive Background Particle Constellation & Blobs */}
      <CanvasConstellation />
      <div className="blob-1" />
      <div className="blob-2" />

      {/* Main Centered Hero Content */}
      <div className="relative z-10 flex flex-col items-center max-w-[1020px] w-full mx-auto px-6 md:px-10 my-auto">
        
        {/* Avatar glowing circle ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-4"
        >
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_35px_rgba(99,102,241,0.5)] flex items-center justify-center overflow-hidden">
            <img
              src="/me.png"
              alt="Muhammed Riswan P"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#062419]/90 border border-emerald-500/40 text-emerald-400 text-[11px] font-sans tracking-wide mb-4 shadow-inner"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for opportunities</span>
        </motion.div>

        {/* Centered Name Headline - Single Line horizontal layout */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white select-none whitespace-nowrap leading-tight"
        >
          Muhammed <span className="gradient-text">Riswan P</span>
        </motion.h1>

        {/* Typewriter Role Subtitle - Clean without underline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-1.5 mt-2.5 text-lg md:text-xl font-sans text-slate-300 font-medium h-7"
        >
          <span>I am a</span>
          <span className="text-[#818cf8] font-bold">
            {currentText}
          </span>
          <span className="w-[2px] h-5 bg-[#818cf8] inline-block animate-pulse ml-0.5" />
        </motion.div>

        {/* Centered Bio Paragraph - Clean sans-serif text matching reference */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-400 text-xs md:text-sm max-w-xl leading-relaxed mt-4 font-sans"
        >
          Passionate AI/ML engineer who has built <strong className="text-white font-semibold">10+ projects</strong> spanning Generative AI, RAG systems, MLOps pipelines, computer vision models, and full-stack ML applications. Based in Kozhikode, Kerala, India 🇮🇳
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-6"
        >
          <a
            href="#featured"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] hover:opacity-90 text-white font-sans text-xs md:text-sm font-bold shadow-lg shadow-indigo-500/30 transition-all duration-300 group hover:scale-[1.02] cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#080d1a]/90 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-sans text-xs md:text-sm font-semibold transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats Bar Grid - Clean without dark card background */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 w-full grid grid-cols-2 md:grid-cols-4 gap-3 mt-7 pt-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center p-1.5 md:border-r md:border-white/10 md:last:border-none">
              <span className="font-display font-black text-2xl md:text-3xl text-white tracking-tight gradient-text">
                {stat.value}
              </span>
              <span className="text-[9px] font-sans uppercase text-slate-400 tracking-wider mt-1 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-3.5 mt-7"
        >
          <a
            href="https://github.com/muhammedriswanp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#090e1c]/80 border border-white/10 hover:border-indigo-500/40 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/muhammed-riswanp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#090e1c]/80 border border-white/10 hover:border-indigo-500/40 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="mailto:muhammedriswanp7@gmail.com"
            className="w-10 h-10 rounded-xl bg-[#090e1c]/80 border border-white/10 hover:border-indigo-500/40 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-md"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-6 text-[9px] font-mono tracking-widest text-slate-500 uppercase flex flex-col items-center gap-1.5 opacity-60">
          <div className="w-[1px] h-6 bg-gradient-to-b from-indigo-500 to-transparent animate-pulse" />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
}
