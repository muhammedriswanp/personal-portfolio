"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const statsList = [
    { value: "10+", label: "ACTIVE PROJECTS", sub: "Production Repos" },
    { value: "15+", label: "MODELS DEPLOYED", sub: "Deep & Classical ML" },
    { value: "4", label: "DATA PIPELINES", sub: "Automated ETL/ELT" },
    { value: "100K+", label: "DAILY PREDICTIONS", sub: "In Production" },
  ];

  const tickerItems = [
    "DOCKER",
    "PYTORCH",
    "SCIKIT-LEARN",
    "POWER BI",
    "DATA SCIENTIST",
    "ML ENGINEER",
    "KUBERNETES",
    "MLFLOW",
    "FASTAPI",
    "GIT",
    "PYTHON",
  ];

  return (
    <section id="production" className="relative bg-black w-full py-16 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 cinematic-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-b border-white/10 py-12">
          {statsList.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/4 md:after:h-1/2 md:after:w-[1px] md:after:bg-white/10 last:after:hidden"
            >
              <span className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter mb-2">
                {stat.value}
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-accent-red mb-1 uppercase">
                {stat.label}
              </span>
              <span className="text-[10px] text-brand-muted font-mono tracking-wider">
                {stat.sub}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Horizontal Ticker */}
      <div className="relative mt-16 w-full border-t border-b border-white/5 py-4 bg-brand-dark overflow-hidden flex items-center">
        {/* Shadow Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200%] animate-marquee">
          {/* First loop */}
          <div className="flex justify-around items-center min-w-full gap-8 shrink-0">
            {tickerItems.map((item) => (
              <span
                key={`ticker-1-${item}`}
                className="text-xs md:text-sm font-display font-black tracking-[0.3em] text-brand-muted hover:text-accent-red transition-colors duration-300 flex items-center uppercase shrink-0"
              >
                {item} <span className="text-accent-red ml-8 font-light">+</span>
              </span>
            ))}
          </div>
          {/* Second loop */}
          <div className="flex justify-around items-center min-w-full gap-8 shrink-0">
            {tickerItems.map((item) => (
              <span
                key={`ticker-2-${item}`}
                className="text-xs md:text-sm font-display font-black tracking-[0.3em] text-brand-muted hover:text-accent-red transition-colors duration-300 flex items-center uppercase shrink-0"
              >
                {item} <span className="text-accent-red ml-8 font-light">+</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
