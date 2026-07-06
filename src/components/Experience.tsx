"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Bridgeon Solutions",
      role: "Data Science Intern",
      period: "JUL 2025 — PRESENT",
      location: "Kozhikode, Kerala",
      type: "Professional Experience",
      desc: [
        "Completed a structured 26-week intensive bootcamp covering statistics, SQL, Python, machine learning, deep learning, computer vision, and MLOps through hands-on projects.",
        "Designed and deployed an end-to-end MLOps pipeline using DVC, MLflow, Docker, FastAPI, and GitHub Actions with a live cloud REST API on Render serving real-time ML cluster predictions.",
        "Implemented automated CI/CD workflows and weekly data drift monitoring using EvidentlyAI with KS-test p-value alerting across 25 features.",
        "Trained and evaluated 15+ machine learning models across supervised, unsupervised, and deep learning paradigms with MLflow experiment tracking.",
      ],
    },
    {
      company: "WMO Arts and Science College, Muttil",
      role: "B.Sc. Electronics",
      period: "2022 — 2025",
      location: "University of Calicut",
      type: "Academic Background",
      desc: [
        "Graduated in Electronics with a CGPA of 6.0.",
        "Coursework included solid-state electronics, mathematics, computer programming, digital systems, and data processing.",
        "Developed analytical problem-solving skills and technical competencies in database management, algorithmic reasoning, and hardware-software architectures.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative bg-transparent w-full py-24 border-b border-white/10">
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
            Chronology
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter mt-2">
            A short, sharp arc.
          </h2>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          {/* Vertical Separator Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 origin-top"
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col relative"
            >
              {/* Giant numeral indicators */}
              <div className="absolute top-0 right-0 text-stroke-thin font-display font-black text-7xl md:text-8xl select-none leading-none opacity-25 pointer-events-none text-white">
                0{index + 1}
              </div>

              {/* Sub-label */}
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5 block">
                {exp.type}
              </span>

              {/* Period Badge */}
              <div className="inline-flex items-center self-start px-2 py-0.5 rounded-sm border border-white/20 bg-white/[0.02] text-white text-[9px] font-mono tracking-widest mb-4">
                {exp.period}
              </div>

              {/* Title & Role */}
              <h3 className="font-display font-black text-2xl text-white mb-0.5 leading-tight">
                {exp.company}
              </h3>
              <h4 className="text-xs font-semibold tracking-wider text-zinc-500 mb-6 uppercase">
                {exp.role} — <span className="italic font-light text-[10px] text-white/50">{exp.location}</span>
              </h4>

              {/* Bullets */}
              <motion.ul
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                  }
                }}
                className="space-y-4"
              >
                {exp.desc.map((bullet, bIndex) => (
                  <motion.li
                    key={bIndex}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                    className="flex items-start text-xs font-mono text-zinc-400 leading-relaxed"
                  >
                    <span className="w-1.5 h-1.5 bg-white rounded-full mr-3 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
