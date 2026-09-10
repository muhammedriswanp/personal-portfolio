"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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

export default function Projects() {
  const featuredProjects = [
    {
      badge: "⭐ Flagship GenAI",
      category: "GenAI · RAG · NLP",
      title: "JobFit RAG Assistant",
      subtitle: "AI-Powered Resume-to-Job Matching Engine",
      desc: "An intelligent assistant that analyzes job descriptions against resumes and portfolios. Built a semantic matching engine using Sentence-BERT embeddings and cosine similarity, with Hugging Face pipelines for JD summarization and QA in a modular package architecture.",
      highlights: [
        "Semantic matching with Sentence-BERT & cosine similarity",
        "Hugging Face transformers for summarization & QA",
        "Modular Python package architecture for LLM integration",
        "Prompt engineering for skill extraction & matching",
      ],
      tags: ["Python", "Hugging Face", "Sentence Transformers", "NLP", "Semantic Similarity", "Prompt Engineering", "RAG"],
      link: "https://github.com/muhammedriswanp/jobfit-rag-assistant",
      color: "#6366f1",
    },
    {
      badge: "👁️ Computer Vision",
      category: "Computer Vision · Deep Learning · Analytics",
      title: "Traffic Flow Analyzer",
      subtitle: "Vehicle Detection & Traffic Analytics Pipeline",
      desc: "End-to-end computer vision pipeline to detect, track, and count vehicles from traffic surveillance videos using YOLOv8n and ByteTrack multi-object tracking. Features virtual line-crossing logic with IN/OUT direction detection (tuned imgsz=1280 for 4K video) and a 4-panel analytics dashboard.",
      highlights: [
        "YOLOv8n object detection across 4 vehicle classes",
        "ByteTrack persistent multi-object tracking",
        "Virtual line-crossing direction logic with centroid history",
        "4-panel Matplotlib dashboard & CSV event logger",
      ],
      tags: ["Python", "YOLOv8", "ByteTrack", "OpenCV", "Pandas", "Matplotlib", "Docker"],
      link: "https://github.com/muhammedriswanp/traffic-flow-analyzer",
      color: "#f43f5e",
    },
    {
      badge: "☁️ MLOps Stack",
      category: "MLOps · Cloud · Data Drift",
      title: "Customer Segmentation MLOps Pipeline",
      subtitle: "Production ML Pipeline with Live REST API & Data Drift Alerts",
      desc: "Engineered 3 customer segments from 2,240 records using KMeans (k=3) & PCA (90% variance). Built a complete MLOps stack with DVC, MLflow, FastAPI, Docker, and GitHub Actions CI/CD deployed live on Render with EvidentlyAI p-value data drift monitoring across 25 features.",
      highlights: [
        "KMeans clustering & PCA dimensionality reduction",
        "FastAPI REST endpoint deployed live on Render",
        "Automated CI/CD with GitHub Actions & Docker",
        "EvidentlyAI data drift monitoring with KS-test p-value alerts",
      ],
      tags: ["Python", "KMeans", "PCA", "FastAPI", "Docker", "DVC", "MLflow", "GitHub Actions", "EvidentlyAI"],
      link: "https://github.com/muhammedriswanp/customer-segmentation-mlops",
      color: "#10b981",
    },
    {
      badge: "📊 BI & Analytics",
      category: "Business Intelligence · Analytics",
      title: "Olist E-Commerce Performance Dashboard",
      subtitle: "Executive 4-Page Power BI Dashboard & Logistics Analytics",
      desc: "Developed an interactive 4-page Power BI dashboard analyzing 100,000+ orders. Created KPI metrics and drill-down reports covering sales performance, delivery operations, customer satisfaction, and seller analytics with root-cause delivery estimation recommendations.",
      highlights: [
        "4-page interactive Power BI drill-down dashboard",
        "DAX metrics & Power Query ETL pipeline",
        "Root-cause analysis across 100,000+ e-commerce orders",
        "Operational recommendations for logistics & seller performance",
      ],
      tags: ["Power BI", "DAX", "Power Query", "SQL", "Business Intelligence"],
      link: "https://github.com/muhammedriswanp/powerbi-intern-project",
      color: "#f59e0b",
    },
  ];

  return (
    <section id="featured" className="relative bg-[#070a14] w-full py-20 border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="blob-2" />

      <div className="max-w-[1020px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <div className="px-3.5 py-1 rounded-full bg-[#13192b] border border-[#2b3553] text-[#818cf8] text-[11px] font-mono tracking-widest uppercase mb-3.5 shadow-sm inline-flex items-center gap-2">
            <span className="font-bold text-[#6366f1]">03</span>
            <span>FEATURED WORK</span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Flagship <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 font-mono text-xs md:text-sm max-w-lg mt-2.5">
            Production-grade implementations across Generative AI, Computer Vision, MLOps pipelines, and Business Intelligence.
          </p>
        </motion.div>

        {/* Featured Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-7 rounded-3xl bg-[#090e1c]/80 border border-white/10 hover:border-indigo-500/30 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-2xl relative overflow-hidden"
            >
              <div>
                {/* Meta Top Bar */}
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-[11px] font-mono font-bold px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-white">
                    {project.badge}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1 mb-3.5 font-semibold">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs font-mono text-slate-300 leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-1.5 mb-5 border-t border-b border-white/10 py-3.5">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-mono text-slate-400">
                      <span className="text-indigo-400 shrink-0">✦</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action Link */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-indigo-400 transition-colors"
                >
                  <GithubIcon size={16} />
                  <span>View Repository on GitHub</span>
                  <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
