"use client";

import { motion } from "framer-motion";

export default function Director() {
  const timeline = [
    {
      icon: "🚀",
      org: "Bridgeon Solutions",
      year: "2025–Present",
      tag: "Ongoing",
      title: "Professional Data Science & AI Internship",
      desc: "Built and shipped 10+ end-to-end AI/ML projects spanning classical ML, deep learning, computer vision, MLOps, and Generative AI. Designed and deployed live REST APIs on Render with DVC, MLflow, Docker, FastAPI, and GitHub Actions CI/CD workflows with EvidentlyAI data drift monitoring.",
    },
    {
      icon: "🎓",
      org: "WMO Arts and Science College, Muttil",
      year: "2022–2025",
      tag: "Graduated",
      title: "B.Sc. Electronics (University of Calicut)",
      desc: "Completed B.Sc. degree in Electronics with distinction, laying a strong foundation in Mathematics, solid-state electronics, computer programming, digital systems, database management, and analytical thinking.",
    },
  ];

  return (
    <section id="about" className="relative bg-[#070a14] w-full py-20 border-t border-white/10 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="blob-3" />

      <div className="max-w-[1020px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Avatar & 3 Info Pills (No heavy card box) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6"
          >
            {/* Avatar Ring with orbiting glowing dots */}
            <div className="relative my-2">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-500 shadow-[0_0_40px_rgba(99,102,241,0.45)] flex items-center justify-center relative overflow-hidden">
                <img
                  src="/me.png"
                  alt="Muhammed Riswan P"
                  className="w-full h-full rounded-full object-cover"
                />
                {/* Orbiting colored dots matching reference */}
                <span className="absolute top-1 right-4 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-md" />
                <span className="absolute bottom-3 left-0 w-2.5 h-2.5 rounded-full bg-amber-400 shadow-md" />
                <span className="absolute top-1/2 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-md" />
              </div>
            </div>

            {/* 3 Vertically Stacked Info Pills */}
            <div className="flex flex-col gap-3 w-full max-w-xs font-sans text-xs text-slate-300">
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#090e1c]/90 border border-white/10 shadow-sm">
                <span className="text-sm">📍</span>
                <span>Kozhikode, Kerala, India 🇮🇳</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#090e1c]/90 border border-white/10 shadow-sm">
                <span className="text-sm">💼</span>
                <span>Open to Work</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#090e1c]/90 border border-white/10 shadow-sm">
                <span className="text-sm">🌐</span>
                <span>English · Malayalam</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Paragraphs & Timeline (No heavy outer cards) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 flex flex-col space-y-6"
          >
            {/* Bio Title */}
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Turning Data into Intelligence
            </h2>

            {/* Bio Copy Paragraphs */}
            <div className="text-slate-300 font-sans text-sm md:text-base leading-relaxed space-y-4">
              <p>
                I'm <strong className="text-white font-semibold">Muhammed Riswan P</strong>, a Data Scientist and AI Engineer based in Kozhikode, Kerala. Over the past year at Bridgeon Solutions, I've immersed myself in building production-ready AI systems — spanning multi-agent LLM workflows, computer vision pipelines, and automated cloud MLOps architectures.
              </p>
              <p>
                With <strong className="text-white font-semibold">10+ projects</strong> across Generative AI, Machine Learning, Computer Vision, BI dashboards, and MLOps, I don't just learn concepts — I build real systems that solve real problems.
              </p>
              <p>
                I'm passionate about bridging the gap between raw data and business value, whether that's through a production LLM API, an automated MLOps pipeline, or an interactive Power BI dashboard.
              </p>
            </div>

            {/* Clean Timeline List (No enclosing card boxes) */}
            <div className="relative pl-8 border-l border-indigo-500/30 space-y-8 pt-4 mt-4">
              {timeline.map((item) => (
                <div key={item.org} className="relative group">
                  {/* Node Icon on vertical line */}
                  <div className="absolute -left-[49px] top-0 w-8 h-8 rounded-full bg-[#070b19] border border-indigo-500/60 flex items-center justify-center text-xs shadow-md group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  {/* Node Item Content directly on background */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-xs font-sans font-bold text-indigo-400 block">
                          {item.org}
                        </span>
                        <span className="text-[11px] font-sans text-slate-500">
                          {item.year}
                        </span>
                      </div>
                      <span className="text-[10px] font-sans text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-0.5 rounded-full font-semibold">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base md:text-lg text-white mt-0.5">
                      {item.title}
                    </h3>

                    <p className="text-xs md:text-sm font-sans text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
