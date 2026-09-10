"use client";

import { motion } from "framer-motion";
import { Mail, Phone, ExternalLink, Send } from "lucide-react";

const GithubIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
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

const LinkedinIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
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

export default function Footer() {
  const targetRoles = [
    "Data Scientist",
    "ML Engineer",
    "GenAI Developer",
    "AI Engineer",
    "MLOps Engineer",
  ];

  return (
    <footer id="contact" className="relative bg-[#070a14] w-full pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="blob-1" />

      <div className="max-w-[1020px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Centered Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="px-3.5 py-1 rounded-full bg-[#13192b] border border-[#2b3553] text-[#818cf8] text-[11px] font-mono tracking-widest uppercase mb-3.5 shadow-sm inline-flex items-center gap-2">
            <span className="font-bold text-[#6366f1]">05</span>
            <span>CONTACT</span>
          </div>

          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <p className="text-slate-400 font-mono text-xs md:text-sm max-w-lg mt-3 leading-relaxed">
            Open to Data Science, ML Engineering, GenAI Developer, and AI Engineer roles. Let's build something great together.
          </p>
        </motion.div>

        {/* 2-Column Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-14">
          
          {/* Left Column: Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-7 rounded-3xl bg-[#090e1c]/80 border border-white/10 backdrop-blur-md flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062419]/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono tracking-wide mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for opportunities</span>
              </div>

              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">
                Ready to make an impact
              </h3>
              <p className="text-xs font-mono text-slate-400 leading-relaxed mb-5">
                I'm actively seeking roles in Data Science, Machine Learning, Generative AI, and AI Engineering. With 10+ real-world projects, I'm ready to contribute from day one.
              </p>

              {/* Contact Info Items */}
              <div className="space-y-2.5 font-mono text-xs">
                
                {/* Email Item */}
                <a
                  href="mailto:muhammedriswanp7@gmail.com"
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/40 hover:bg-white/5 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Mail size={15} />
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block uppercase tracking-wider">EMAIL</span>
                      <span className="text-slate-200 group-hover:text-white font-semibold truncate block">muhammedriswanp7@gmail.com</span>
                    </div>
                  </div>
                </a>

                {/* Phone Item */}
                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-500 block uppercase tracking-wider">PHONE</span>
                    <span className="text-slate-200 font-semibold">+91 95623 69644</span>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <a
                  href="https://linkedin.com/in/muhammed-riswanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 hover:bg-white/5 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <LinkedinIcon size={15} />
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block uppercase tracking-wider">LINKEDIN</span>
                      <span className="text-slate-200 group-hover:text-white font-semibold">muhammed-riswanp</span>
                    </div>
                  </div>
                  <ExternalLink size={13} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </a>

                {/* GitHub Item */}
                <a
                  href="https://github.com/muhammedriswanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-white/5 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                      <GithubIcon size={15} />
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block uppercase tracking-wider">GITHUB</span>
                      <span className="text-slate-200 group-hover:text-white font-semibold">muhammedriswanp</span>
                    </div>
                  </div>
                  <ExternalLink size={13} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
                </a>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Challenge & Role Focus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-7 rounded-3xl bg-[#090e1c]/80 border border-white/10 backdrop-blur-md flex flex-col justify-between shadow-2xl"
          >
            <div>
              {/* Stats Bar Top */}
              <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-5 mb-5 text-center">
                <div>
                  <span className="font-display font-black text-2xl text-white gradient-text">10+</span>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase mt-0.5">PROJECTS</span>
                </div>
                <div className="border-l border-r border-white/10">
                  <span className="font-display font-black text-2xl text-white gradient-text">1+</span>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase mt-0.5">YEARS EXP</span>
                </div>
                <div>
                  <span className="font-display font-black text-2xl text-white gradient-text">15+</span>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase mt-0.5">TECH STACKS</span>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2.5">
                Ready for the Next Challenge
              </h3>
              <p className="text-xs font-mono text-slate-300 leading-relaxed mb-5">
                Whether it's building a RAG pipeline, deploying ML models to production, orchestrating data workflows on cloud, or crafting BI dashboards — I bring hands-on expertise and relentless curiosity to every project.
              </p>

              {/* Target Role Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {targetRoles.map((role) => (
                  <span
                    key={role}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-indigo-300 font-semibold"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Send Email Gradient Button */}
            <a
              href="mailto:muhammedriswanp7@gmail.com?subject=Opportunity%20-%20Muhammed%20Riswan%20P"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] hover:opacity-90 text-white font-mono text-xs md:text-sm font-bold shadow-lg shadow-indigo-500/30 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.01]"
            >
              <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Send me an email</span>
            </a>
          </motion.div>

        </div>

        {/* Lower Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7 border-t border-white/10 text-[10px] font-mono text-slate-500 tracking-wider">
          <div>
            © {new Date().getFullYear()} MUHAMMED RISWAN P. ALL RIGHTS RESERVED.
          </div>
          <div>
            Kozhikode, Kerala, India 🇮🇳
          </div>
        </div>

      </div>
    </footer>
  );
}
