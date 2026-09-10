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
  const commitGrid = [
    [2, 3, 0, 1, 4, 2, 3],
    [1, 0, 2, 3, 1, 0, 2],
    [3, 4, 1, 2, 0, 3, 1],
    [0, 1, 3, 0, 2, 1, 4],
  ];

  const getColorClass = (intensity: number) => {
    switch (intensity) {
      case 0: return "bg-slate-900 border border-white/5";
      case 1: return "bg-emerald-950/40 border border-emerald-900/30";
      case 2: return "bg-emerald-900/60 border border-emerald-800/45";
      case 3: return "bg-emerald-800/80 border border-emerald-700/60";
      case 4: return "bg-emerald-500 border border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.4)]";
      default: return "bg-slate-900";
    }
  };

  return (
    <section id="telemetry" className="relative bg-[#060913] w-full py-24 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1020px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase mb-3 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20">
            <span>05 // Telemetry</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Activity <span className="gradient-text">Telemetry</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-500/30 backdrop-blur-md transition-all duration-300 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <GithubIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                      Platform // GitHub
                    </span>
                    <span className="text-base font-display font-bold text-white tracking-wide">
                      @muhammedriswanp
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  SYNC_ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="border border-white/10 bg-white/5 p-3 rounded-xl">
                  <span className="text-[9px] font-mono text-slate-400 block mb-1">REPOSITORIES</span>
                  <span className="text-xl font-display font-black text-white">15+</span>
                </div>
                <div className="border border-white/10 bg-white/5 p-3 rounded-xl">
                  <span className="text-[9px] font-mono text-slate-400 block mb-1">COMMITS</span>
                  <span className="text-xl font-display font-black text-white">600+</span>
                </div>
                <div className="border border-white/10 bg-white/5 p-3 rounded-xl">
                  <span className="text-[9px] font-mono text-slate-400 block mb-1">STACK</span>
                  <span className="text-[10px] font-mono font-bold text-indigo-300 truncate block mt-1">PYTHON / MLOPS</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 block mb-3 uppercase tracking-wider">
                  Contribution Stream (Recent Activity)
                </span>
                <div className="flex gap-2 items-center">
                  <div className="grid grid-rows-4 grid-flow-col gap-1.5">
                    {commitGrid.map((row, rIdx) => 
                      row.map((val, cIdx) => (
                        <div
                          key={`commit-${rIdx}-${cIdx}`}
                          className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 ${getColorClass(val)}`}
                        />
                      ))
                    )}
                  </div>
                  <div className="ml-4 flex flex-col justify-between h-full py-1 text-[10px] font-mono text-slate-400 gap-1">
                    <div className="flex items-center gap-1.5">
                      <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Continuous Integration</span>
                    </div>
                    <span className="text-emerald-400">Deployments: 100% Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500">
                github.com/muhammedriswanp
              </span>
              <a
                href="https://github.com/muhammedriswanp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-indigo-400 hover:text-white transition-colors"
              >
                <span>Discover Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-500/30 backdrop-blur-md transition-all duration-300 flex flex-col justify-between shadow-2xl"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <LeetCodeIcon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                      Platform // LeetCode
                    </span>
                    <span className="text-base font-display font-bold text-white tracking-wide">
                      @muhammed_riswan_p
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">
                  COMPILER_ONLINE
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="border border-white/10 bg-white/5 p-3 rounded-xl">
                  <span className="text-[9px] font-mono text-slate-400 block mb-1">SOLVED</span>
                  <span className="text-xl font-display font-black text-white">153</span>
                </div>
                <div className="border border-white/10 bg-white/5 p-3 rounded-xl">
                  <span className="text-[9px] font-mono text-slate-400 block mb-1">STREAK</span>
                  <span className="text-xl font-display font-black text-white flex items-center gap-1">
                    ACTIVE <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                  </span>
                </div>
                <div className="border border-white/10 bg-white/5 p-3 rounded-xl">
                  <span className="text-[9px] font-mono text-slate-400 block mb-1">RANK</span>
                  <span className="text-[10px] font-mono font-bold text-amber-300 truncate block mt-1">TOP 15%</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                  Algorithmic Problem Distribution
                </span>
                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-1 text-slate-300">
                    <span>EASY</span>
                    <span className="text-emerald-400 font-bold">129 Solved</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: "84.3%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-1 text-slate-300">
                    <span>MEDIUM</span>
                    <span className="text-amber-400 font-bold">22 Solved</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: "14.4%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[10px] font-mono mb-1 text-slate-300">
                    <span>HARD</span>
                    <span className="text-rose-400 font-bold">2 Solved</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: "2%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-500">
                leetcode.com/u/muhammed_riswan_p/
              </span>
              <a
                href="https://leetcode.com/u/muhammed_riswan_p/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-400 hover:text-white transition-colors"
              >
                <span>Compile Solutions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
