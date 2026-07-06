"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      num: "01",
      title: "Customer Segmentation MLOps Pipeline",
      desc: "Engineered 3 customer segments from 2,240 records (29 features) using KMeans (k=3) and PCA retaining 90% variance. Built a complete MLOps stack, deployed a live REST API on Render with automated CI/CD and retraining pipelines. Implemented data drift monitoring with EvidentlyAI KS-test p-value alerts across 25 features.",
      tags: ["Python", "KMeans", "PCA", "FastAPI", "Docker", "DVC", "MLflow", "GitHub Actions", "EvidentlyAI"],
      link: "https://github.com/muhammedriswanp/customer-segmentation-mlops",
    },
    {
      num: "02",
      title: "Bank Marketing Subscription Prediction",
      desc: "Predicted term deposit subscriptions on 41,188 records with severe class imbalance. Evaluated 8 machine learning models and selected a tuned Random Forest achieving ROC-AUC of 0.806. Built a complete Scikit-learn Pipeline with leakage prevention. Deployed Flask API, Streamlit dashboard, and containerized app with GitHub Actions.",
      tags: ["Python", "Random Forest", "Scikit-Learn", "Flask", "Streamlit", "Docker", "GitHub Actions"],
      link: "https://github.com/muhammedriswanp/bankMarketing-subscription-prediction",
    },
    {
      num: "03",
      title: "Olist E-Commerce Sales Performance Dashboard",
      desc: "Developed an interactive 4-page Power BI dashboard analyzing 100,000+ orders. Created KPI metrics and drill-down reports covering sales performance, delivery operations, customer satisfaction, and seller analytics. Identified delivery estimation issues through root-cause analysis and provided executive-level recommendations.",
      tags: ["Power BI", "DAX", "Power Query", "SQL", "Business Intelligence"],
      link: "https://github.com/muhammedriswanp/powerbi-intern-project",
    },
    {
      num: "04",
      title: "Exploratory Data Analysis (EDA) — Stroke Prediction",
      desc: "Performed comprehensive EDA on a stroke prediction healthcare dataset using a structured day-wise workflow. Identified key risk factors including age, glucose level, BMI, hypertension, and smoking behavior through statistical testing and feature engineering.",
      tags: ["Python", "Jupyter Notebook", "pandas", "NumPy", "matplotlib", "seaborn", "Git"],
      link: "https://github.com/muhammedriswanp/Exploratory-Data-Analysis-EDA-Project",
    },
    {
      num: "05",
      title: "WasteCNN — Garbage Image Classifier",
      desc: "Built a 6-class garbage image classifier achieving approximately 76% validation accuracy using a custom CNN architecture in PyTorch. Structured the project as a modular src/ package following production-grade practices. Managed tracking with MLflow, versioning with DVC, containerization with Docker, and CI/CD with GitHub Actions.",
      tags: ["PyTorch", "CNN", "MLflow", "DVC", "Docker", "GitHub Actions"],
      link: "https://github.com/muhammedriswanp/waste-classification-cnn",
    },
  ];

  return (
    <section id="projects" className="relative bg-transparent w-full py-24 border-b border-white/10">
      {/* Background Grid */}
      <div className="absolute inset-0 portfolio-grid pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-4"
        >
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold font-mono">
              Selected Works
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter mt-2">
              Pipelines, models,<br />dashboards.
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500 max-w-xs leading-relaxed md:text-right">
            Machine learning implementations and automated workflows built with production-grade engineering principles.
          </span>
        </motion.div>

        {/* Project List */}
        <div className="flex flex-col border-t border-white/10">
          {projectList.map((project, i) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              className="group relative flex flex-col md:grid md:grid-cols-12 gap-6 py-12 border-b border-white/10 hover:bg-white/[0.01] transition-all duration-300 px-4 -mx-4 cursor-pointer overflow-hidden"
            >
              {/* Hover Diagonal Drafting Lines */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
                <div className="w-[150%] h-[1px] bg-white/5 rotate-[6deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="w-[150%] h-[1px] bg-white/5 -rotate-[6deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <span className="absolute top-2 right-4 text-[7px] font-mono text-white/20 tracking-widest">DIAG_ACTIVE // RETR_MODE</span>
              </div>

              {/* Project Number */}
              <div className="md:col-span-1 text-sm font-mono text-white/40 group-hover:text-white transition-colors duration-300 font-bold relative z-10">
                {project.num}
              </div>

              {/* Project Title */}
              <div className="md:col-span-5 relative z-10">
                <h3 className="font-display font-black text-2xl text-white/80 group-hover:text-white transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
              </div>

              {/* Description & Tags */}
              <div className="md:col-span-5 flex flex-col justify-between gap-4 relative z-10">
                <p className="text-xs font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono tracking-wider text-zinc-500 border border-white/5 px-2 py-0.5 rounded-sm bg-white/[0.01] group-hover:border-white/20 group-hover:text-white transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link Arrow */}
              <div className="md:col-span-1 flex items-start md:justify-end justify-start pt-1 relative z-10">
                <div className="w-7 h-7 rounded-full border border-white/10 group-hover:border-white flex items-center justify-center text-zinc-500 group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
