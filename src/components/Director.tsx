import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

export default function Director() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Scroll Parallax logic for Character Card & Text Reveal
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const mrY = useTransform(scrollYProgress, [0.1, 0.7], [25, -25]);
  const mrScale = useTransform(scrollYProgress, [0.1, 0.7], [0.9, 1.2]);
  const mrOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [0.4, 1.0, 0.4]);
  const bioScale = useTransform(scrollYProgress, [0.1, 0.5], [0.96, 1.0]);
  const bioY = useTransform(scrollYProgress, [0.1, 0.5], [30, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Calculate rotation angles (max 20 degrees)
    const rX = -(mouseY / height) * 25;
    const rY = (mouseX / width) * 25;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative bg-transparent w-full py-24 border-b border-white/10 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 portfolio-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Info Column */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-8 flex flex-col justify-center"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold font-mono mb-2">
            SPECIFICATION // THE_VISION
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter mb-8 leading-none">
            Drawn in ink,<br />shipped in production.
          </h2>

          <motion.div 
            style={{ scale: bioScale, y: bioY }}
            className="relative border border-white/10 border-dashed p-6 md:p-8 space-y-6 text-zinc-400 font-mono text-xs md:text-sm leading-relaxed max-w-2xl bg-white/[0.01] rounded-sm"
          >
            {/* Corner Crosshairs */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white/30 font-mono text-xs select-none font-bold">+</div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-white/30 font-mono text-xs select-none font-bold">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-white/30 font-mono text-xs select-none font-bold">+</div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-white/30 font-mono text-xs select-none font-bold">+</div>

            <p>
              An analytical mind with a passion for building robust and scalable machine learning systems. Experienced in data science, MLOps, and database architectures, specializing in bringing models from Jupyter notebooks directly to production environments.
            </p>
            <p>
              Completed a structured 26-week intensive bootcamp covering statistics, SQL, Python, machine learning, deep learning, computer vision, and MLOps through hands-on projects, enabling a solid understanding of model governance and deployment cycles.
            </p>
            <p>
              Proficient in Python, Scikit-learn, PyTorch, and the full MLOps stack including Docker, FastAPI, GitHub Actions, DVC, and MLflow, with hands-on experience in supervised, unsupervised, and deep learning model engineering.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Placehodler MR Card */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[280px]"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="w-full aspect-[4/5] bg-white/[0.02] border border-white/10 border-dashed rounded-sm flex flex-col justify-between p-6 relative group cursor-crosshair"
            >
              {/* Corner Indicators */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/30" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/30" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/30" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/30" />

              {/* Giant Graphic "MR" with schematic guidelines */}
              <div className="flex-1 flex items-center justify-center select-none relative overflow-hidden" style={{ transform: "translateZ(30px)" }}>
                {/* Background schematic lines */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] pointer-events-none">
                  <div className="w-[140%] h-[1px] bg-white/25 rotate-12 absolute" />
                  <div className="w-[140%] h-[1px] bg-white/25 -rotate-12 absolute" />
                  <div className="w-32 h-32 border border-white/25 border-dashed rounded-full absolute" />
                  <div className="w-16 h-16 border border-white/20 rounded-full absolute flex items-center justify-center">
                    <span className="text-[6px] text-white/20 font-mono tracking-widest">GRID_REF</span>
                  </div>
                </div>
                <motion.span 
                  style={{ y: mrY, scale: mrScale, opacity: mrOpacity }}
                  className="font-display font-black text-9xl text-white/5 tracking-tighter group-hover:text-white/15 transition-all duration-500 relative z-10 block"
                >
                  MR
                </motion.span>
              </div>

              {/* Signature name */}
              <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
                <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                  SYS_RECORDS // VERIFIED_ID
                </span>
                <span className="text-sm font-display font-bold text-white uppercase tracking-wider">
                  Muhammed Riswan P
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
