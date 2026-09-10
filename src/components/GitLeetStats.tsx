"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Flame, GitBranch } from "lucide-react";

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

const LeetCodeIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.375 1.375 0 0 0 0 1.945l1.8 1.8a1.375 1.375 0 0 0 1.945 0L15.343 5.09a1.375 1.375 0 0 0 0-1.945l-1.8-1.8a1.374 1.374 0 0 0-.96-.414zM10.8 7.34a1.375 1.375 0 0 0-1.945 0L3.1 13.1a1.375 1.375 0 0 0 0 1.945l1.8 1.8a1.375 1.375 0 0 0 1.945 0l5.756-5.756a1.375 1.375 0 0 0 0-1.945l-1.8-1.8a1.373 1.373 0 0 0-.96-.414z" />
    <path d="M12 9.515c-.157.001-.31.063-.424.177L6.343 14.93a1.375 1.375 0 0 0 0 1.945l1.8 1.8a1.375 1.375 0 0 0 1.945 0l4.135-4.135 4.135 4.135a1.375 1.375 0 0 0 1.945 0l1.8-1.8a1.375 1.375 0 0 0 0-1.945L12.424 9.692a1.374 1.374 0 0 0-.424-.177z" />
  </svg>
);

export default function GitLeetStats() {
  // Simulating GitHub Commits Grid
  const commitGrid = [
    [2, 3, 0, 1, 4, 2, 3],
    [1, 0, 2, 3, 1, 0, 2],
    [3, 4, 1, 2, 0, 3, 1],
    [0, 1, 3, 0, 2, 1, 4],
  ];

  const getColorClass = (intensity: number) => {
    switch (intensity) {
      case 0: return "bg-zinc-900 border border-white/5";
      case 1: return "bg-emerald-950/40 border border-emerald-900/30";
      case 2: return "bg-emerald-900/60 border border-emerald-800/45";
      case 3: return "bg-emerald-800/80 border border-emerald-700/60";
      case 4: return "bg-emerald-600 border border-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.3)]";
      default: return "bg-zinc-900";
    }
  };

  return (
    <section id="telemetry" className="relative bg-transparent w-full py-24 border-b border-white/10 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 portfolio-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold font-mono">
            Telemetry // Activity
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter mt-2">
            Engines in motion.
          </h2>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative bg-[#070708] border border-white/5 p-8 rounded-sm flex flex-col justify-between hover:border-white/10 transition-all duration-300 min-h-[380px]"
          >
            {/* Crosshair Corner Indicators */}
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/20 group-hover:bg-white rounded-full transition-colors" />
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10" />

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center">
                    <GithubIcon className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">
                      PLATFORM // GITHUB
                    </span>
                    <span className="text-sm font-display font-bold text-white tracking-wide">
                      @muhammedriswanp
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-2 py-0.5 rounded-sm">
                  SYNC_ACTIVE
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="border border-white/5 bg-white/[0.01] p-3 rounded-sm">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-1">REPOSITORIES</span>
                  <span className="text-xl font-display font-black text-white">15+</span>
                </div>
                <div className="border border-white/5 bg-white/[0.01] p-3 rounded-sm">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-1">ANNUAL COMMITS</span>
                  <span className="text-xl font-display font-black text-white">600+</span>
                </div>
                <div className="border border-white/5 bg-white/[0.01] p-3 rounded-sm">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-1">MAIN STACK</span>
                  <span className="text-[10px] font-mono font-bold text-white truncate block mt-1">PYTHON / GENAI / MLOPS</span>
                </div>
              </div>

              {/* simulated commit board */}
              <div>
                <span className="text-[9px] font-mono text-zinc-500 block mb-3 uppercase tracking-wider">
                  Contribution Stream (Recent Weeks)
                </span>
                <div className="flex gap-2 items-center">
                  <div className="grid grid-rows-4 grid-flow-col gap-1.5">
                    {commitGrid.map((row, rIdx) => 
                      row.map((val, cIdx) => (
                        <div
                          key={`commit-${rIdx}-${cIdx}`}
                          className={`w-3.5 h-3.5 rounded-[2px] transition-all duration-300 ${getColorClass(val)}`}
                        />
                      ))
                    )}
                  </div>
                  <div className="ml-4 flex flex-col justify-between h-full py-1 text-[8px] font-mono text-zinc-500 gap-1">
                    <div className="flex items-center gap-1.5">
                      <GitBranch className="w-3 h-3 text-white/40" />
                      <span>Continuous Integration Dev</span>
                    </div>
                    <div>
                      <span>Deployments: 100% successful</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[8px] font-mono text-zinc-600">
                URL // github.com/muhammedriswanp
              </span>
              <a
                href="https://github.com/muhammedriswanp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider text-zinc-400 hover:text-white transition-colors group/link"
              >
                DISCOVER REPOS
                <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative bg-[#070708] border border-white/5 p-8 rounded-sm flex flex-col justify-between hover:border-white/10 transition-all duration-300 min-h-[380px]"
          >
            {/* Crosshair Corner Indicators */}
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/20 group-hover:bg-white rounded-full transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10" />

            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm border border-white/10 bg-white/[0.02] flex items-center justify-center">
                    <LeetCodeIcon className="w-4 h-4 text-amber-500/80 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">
                      PLATFORM // LEETCODE
                    </span>
                    <span className="text-sm font-display font-bold text-white tracking-wide">
                      @muhammed_riswan_p
                    </span>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-amber-400 bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded-sm">
                  COMPILER_ONLINE
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="border border-white/5 bg-white/[0.01] p-3 rounded-sm">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-1">PROBLEMS SOLVED</span>
                  <span className="text-xl font-display font-black text-white">153</span>
                </div>
                <div className="border border-white/5 bg-white/[0.01] p-3 rounded-sm">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-1">STREAK STATUS</span>
                  <span className="text-xl font-display font-black text-white flex items-center gap-1">
                    ACTIVE <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                  </span>
                </div>
                <div className="border border-white/5 bg-white/[0.01] p-3 rounded-sm">
                  <span className="text-[9px] font-mono text-zinc-500 block mb-1">RANK STATUS</span>
                  <span className="text-[10px] font-mono font-bold text-white truncate block mt-1">TOP 15% SOLVER</span>
                </div>
              </div>

              {/* Difficulty breakdown list */}
              <div>
                <span className="text-[9px] font-mono text-zinc-500 block mb-3 uppercase tracking-wider">
                  Algorithmic Load & Difficulty distribution
                </span>
                <div className="space-y-3">
                  {/* Easy */}
                  <div>
                    <div className="flex justify-between text-[9px] font-mono mb-1 text-zinc-400">
                      <span>EASY (FOUNDATIONAL)</span>
                      <span className="text-white">129 Solved</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "84.3%" }} />
                    </div>
                  </div>

                  {/* Medium */}
                  <div>
                    <div className="flex justify-between text-[9px] font-mono mb-1 text-zinc-400">
                      <span>MEDIUM (ALGORITHMIC)</span>
                      <span className="text-white">22 Solved</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "14.4%" }} />
                    </div>
                  </div>

                  {/* Hard */}
                  <div>
                    <div className="flex justify-between text-[9px] font-mono mb-1 text-zinc-400">
                      <span>HARD (OPTIMIZATION)</span>
                      <span className="text-white">2 Solved</span>
                    </div>
                    <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 rounded-full" style={{ width: "2%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[8px] font-mono text-zinc-600">
                URL // leetcode.com/u/muhammed_riswan_p/
              </span>
              <a
                href="https://leetcode.com/u/muhammed_riswan_p/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-mono font-bold tracking-wider text-zinc-400 hover:text-white transition-colors group/link"
              >
                COMPILE SOLUTIONS
                <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
