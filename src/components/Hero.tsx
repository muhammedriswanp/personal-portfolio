import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll Transforms for Parallax Storytelling
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const webScale = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const webRotate = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const statsY = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const statsScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const descOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const stats = [
    { value: "10+", label: "Months Hands-on Exp." },
    { value: "15+", label: "Models Trained & Tracked" },
    { value: "4", label: "End-to-End Pipelines" },
    { value: "100k+", label: "Orders Data Analyzed" },
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
    "POSTGRESQL",
    "GITHUB ACTIONS",
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-transparent overflow-hidden flex flex-col justify-between pt-36 pb-12 px-6 md:px-12 md:max-w-7xl md:mx-auto"
    >
      {/* Background Grid & Light Glow */}
      <div className="absolute inset-0 portfolio-grid pointer-events-none opacity-40" />
      <div className="absolute inset-0 portfolio-radial-glow pointer-events-none" />

      {/* Decorative Circles Parallax on Left */}
      <motion.div
        style={{ scale: webScale, rotate: webRotate, x: xLeft }}
        className="absolute top-[10%] left-[-120px] md:left-[-180px] w-[450px] h-[450px] md:w-[550px] md:h-[550px] border border-white/10 border-dashed rounded-full pointer-events-none flex items-center justify-center opacity-[0.12] z-0"
      >
        <div className="w-[80%] h-[80%] border border-white/5 rounded-full flex items-center justify-center relative">
          <div className="w-[60%] h-[60%] border border-white/5 border-dashed rounded-full" />
          <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 tracking-widest">DIA_REF_500</span>
          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20 tracking-widest">ANGLE: 45.0°</span>
        </div>
      </motion.div>

      {/* Main Hero Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 w-full flex-1 my-auto pt-6">
        {/* Left Name Column */}
        <div className="lg:col-span-7 flex flex-col items-start w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full font-display"
          >
            {/* Name typography split apart on scroll */}
            <motion.h3 
              style={{ x: xLeft }}
              className="font-black text-6xl md:text-[5rem] lg:text-[6rem] leading-[0.85] tracking-tighter text-white uppercase select-none"
            >
              MUHAMMED
            </motion.h3>
            <motion.h4 
              style={{ x: xRight }}
              className="font-light italic text-white/95  tracking-[0.1em] text-5xl md:text-[4rem] lg:text-[5rem] leading-[0.85] select-none mt-2 flex items-center gap-4 pl-4 md:pl-8"
            >
              RISWAN P
            </motion.h4>
            
          </motion.div>
        </div>

        {/* Right Info Column */}
        <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col items-start justify-end lg:justify-center gap-8 w-full mt-10 lg:mt-0 lg:pl-8">
          <div className="flex flex-col items-start border-l border-white/20 pl-6">
            <motion.h3 style={{ x: xRight }} className="font-display font-black text-4xl md:text-[4.5rem] text-white tracking-widest leading-none">
              AI /
            </motion.h3>
            <motion.h3 style={{ x: xLeft }} className="font-display font-black text-4xl md:text-[4.5rem] text-white tracking-widest leading-none mt-2">
              ML ENGINEER
            </motion.h3>
          </div>
          <motion.p
            style={{ y: descY, opacity: descOpacity }}
            className="text-zinc-400 font-mono text-xs md:text-sm max-w-sm leading-relaxed"
          >
            Data Science professional with hands-on experience building end-to-end machine learning pipelines and MLOps systems. Proficient in Python, Scikit-learn, PyTorch, and the full MLOps stack. Seeking to deliver scalable, data-driven solutions.
          </motion.p>
        </div>
      </div>

      {/* Stats and Ticker Block */}
      <div className="w-full mt-16 relative z-10">
        {/* Stats Row */}
        <motion.div 
          style={{ y: statsY, scale: statsScale }}
          className="relative border border-white/10 border-dashed py-8 px-6 md:px-8 bg-[#070708]/40 backdrop-blur-sm rounded-sm"
        >
          {/* Corner Crosshairs */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white/40 font-mono text-sm select-none font-bold">+</div>
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white/40 font-mono text-sm select-none font-bold">+</div>
          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-white/40 font-mono text-sm select-none font-bold">+</div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-white/40 font-mono text-sm select-none font-bold">+</div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                style={{ x: i % 2 === 0 ? xLeft : xRight }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex flex-col md:border-r md:border-white/5 md:last:border-none md:px-4 first:pl-0 last:pr-0"
              >
                <span className="font-display font-black text-3xl md:text-4xl text-white tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[9px] font-mono text-zinc-500 mt-1 uppercase tracking-widest">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Marquee Ticker */}
        <div className="relative mt-8 w-full overflow-hidden flex items-center py-3 border-t border-b border-white/5 border-dashed">
          {/* Fades using theme color */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#070708] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#070708] to-transparent z-10 pointer-events-none" />

          <div className="flex w-[200%] animate-marquee">
            {/* First loop */}
            <div className="flex justify-around items-center min-w-full gap-8 shrink-0">
              {tickerItems.map((item) => (
                <span
                  key={`ticker-1-${item}`}
                  className="text-[9px] font-mono font-bold tracking-[0.25em] text-zinc-500 hover:text-white transition-colors duration-300 flex items-center uppercase shrink-0"
                >
                  {item} <span className="text-zinc-600 ml-8 font-light">+</span>
                </span>
              ))}
            </div>
            {/* Second loop */}
            <div className="flex justify-around items-center min-w-full gap-8 shrink-0">
              {tickerItems.map((item) => (
                <span
                  key={`ticker-2-${item}`}
                  className="text-[9px] font-mono font-bold tracking-[0.25em] text-zinc-500 hover:text-white transition-colors duration-300 flex items-center uppercase shrink-0"
                >
                  {item} <span className="text-zinc-600 ml-8 font-light">+</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
