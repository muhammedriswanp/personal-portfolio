"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "featured", "allprojects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", name: "Home", href: "#home" },
    { id: "about", name: "About", href: "#about" },
    { id: "skills", name: "Skills", href: "#skills" },
    { id: "featured", name: "Projects", href: "#featured" },
    { id: "contact", name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050811]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1020px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-display font-black text-xs text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
            MR
          </span>
          <span className="font-display font-extrabold text-base tracking-tight text-white">
            Muhammed <span className="gradient-text">Riswan P</span>
          </span>
        </a>

        {/* Desktop Menu Pills */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex items-center space-x-1 p-1 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-sans font-medium px-3.5 py-1.5 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Resume Download CTA */}
          <a
            href="/resume.pdf"
            download="Muhammed_Riswan_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-600 hover:opacity-95 text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Resume</span>
            <Download size={13} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2.5">
          <a
            href="/resume.pdf"
            download="Muhammed_Riswan_P_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center gap-1.5"
          >
            <span>Resume</span>
            <Download size={12} />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white cursor-pointer focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#050811]/95 border-b border-white/10 py-6 px-6 flex flex-col space-y-3 md:hidden backdrop-blur-2xl shadow-2xl"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-mono font-semibold tracking-wider text-slate-300 hover:text-white uppercase transition-colors py-2 border-b border-white/5 flex justify-between items-center"
              >
                <span>{item.name}</span>
                <span className="text-indigo-400">→</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
