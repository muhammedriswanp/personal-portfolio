"use client";

import { motion, type Easing } from "framer-motion";
import { Mail } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const GithubIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
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

const LinkedinIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
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

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: [0.645, 0.045, 0.355, 1] as Easing,
    },
  }),
};

function AnimatedHeading({ text }: { text: string }) {
  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative bg-transparent w-full pt-24 pb-12 border-t border-white/10 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 portfolio-grid pointer-events-none opacity-20" />

      {/* Mouse-tracking gradient glow */}
      <motion.div
        className="absolute pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,255,255,0.08), transparent 70%)`,
          inset: 0,
        }}
      />

      {/* Pulsing decorative radar circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
        <motion.div
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] border border-white/5 rounded-full"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-12 w-[calc(100%-96px)] h-[calc(100%-96px)] border border-white/[0.03] rounded-full"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between h-full relative z-10">
        {/* Contact Form & Call to Action */}
        <div className="flex flex-col items-center pb-20 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-4xl flex flex-col items-center text-center"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold font-mono"
            >
              Get in Touch
            </motion.span>

            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter mt-4 leading-none">
              <AnimatedHeading text="LET'S BUILD" />
              <br />
              <AnimatedHeading text="something —" />
              <br />
              <AnimatedHeading text="SHIPPABLE." />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm font-mono text-zinc-400 mt-8 max-w-xl leading-relaxed mx-auto"
            >
              Available for full-time roles, pipelines engineering, or general ML consultation. Let's build something shippable — together.
            </motion.p>

            {/* Direct Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 w-full max-w-3xl font-mono text-xs md:text-sm"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a
                  href="mailto:muhammedriswanp7@gmail.com"
                  className="group relative flex flex-col items-center text-center text-[#A1A1AA] hover:text-white transition-colors gap-2 py-4"
                >
                  <Mail size={18} className="text-zinc-500 group-hover:text-white group-hover:scale-110 transition-all" />
                  <span className="truncate w-full text-[11px]">muhammedriswanp7@gmail.com</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-3/4 transition-all duration-300" />
                </a>
                <div className="group relative flex flex-col items-center text-center text-[#A1A1AA] gap-2 py-4">
                  <span className="text-zinc-500 font-bold font-mono text-[10px] uppercase tracking-wider group-hover:text-white transition-colors">TEL</span>
                  <span className="text-[11px]">+91 95623 69644</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-3/4 transition-all duration-300" />
                </div>
                <a
                  href="https://github.com/muhammedriswanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center text-center text-[#A1A1AA] hover:text-white transition-colors gap-2 py-4"
                >
                  <GithubIcon size={18} className="text-zinc-500 group-hover:text-white group-hover:scale-110 transition-all" />
                  <span className="text-[11px]">GitHub</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-3/4 transition-all duration-300" />
                </a>
                <a
                  href="https://linkedin.com/in/muhammed-riswanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center text-center text-[#A1A1AA] hover:text-white transition-colors gap-2 py-4"
                >
                  <LinkedinIcon size={18} className="text-zinc-500 group-hover:text-white group-hover:scale-110 transition-all" />
                  <span className="text-[11px]">LinkedIn</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-3/4 transition-all duration-300" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Lower row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12 text-[9px] font-mono text-zinc-600 tracking-widest"
        >
          <div>
            © 1998 — 2026 MUHAMMED RISWAN P. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-4">
            <span>VER. 2.1.0 // SHIPPABLE</span>
            <span>•</span>
            <span>BUILT WITH NEXT.JS + TAILWIND</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
