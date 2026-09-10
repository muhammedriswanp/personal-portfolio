"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SkillsGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "AI / LLMs",
      icon: "🤖",
      color: "#6366f1",
      skills: [
        "LangChain",
        "LangGraph",
        "CrewAI",
        "Hugging Face",
        "RAG Systems",
        "Agentic RAG",
        "AI Agents",
        "MCP Protocol",
        "A2A Protocol",
        "ChromaDB",
        "Pinecone",
        "Knowledge Graphs",
        "Graph RAG",
        "LoRA / QLoRA Fine-tuning",
        "Ollama",
        "Sentence-Transformers",
        "Prompt Engineering",
      ],
    },
    {
      title: "Machine Learning",
      icon: "🧠",
      color: "#8b5cf6",
      skills: [
        "Scikit-learn",
        "Supervised Learning",
        "Unsupervised Learning",
        "XGBoost",
        "Random Forest",
        "Gradient Boosting",
        "K-Means Clustering",
        "PCA",
        "SMOTE",
        "Cross-Validation",
        "Hyperparameter Tuning",
        "Model Evaluation",
      ],
    },
    {
      title: "Computer Vision & DL",
      icon: "👁️",
      color: "#ec4899",
      skills: [
        "YOLOv8",
        "ByteTrack",
        "U-Net",
        "PyTorch",
        "Artificial Neural Networks",
        "CNNs",
        "Transfer Learning",
        "OpenCV",
        "TorchVision",
        "Face Recognition",
        "Grad-CAM",
        "Inference Optimization",
      ],
    },
    {
      title: "Cloud / MLOps",
      icon: "☁️",
      color: "#10b981",
      skills: [
        "Git",
        "DVC",
        "MLflow",
        "Docker",
        "FastAPI",
        "Flask",
        "Pydantic",
        "LLM API Development",
        "GitHub Actions (CI/CD)",
        "EvidentlyAI",
        "ETL Pipelines",
        "AWS",
        "Render",
      ],
    },
    {
      title: "BI & Analytics",
      icon: "📊",
      color: "#f59e0b",
      skills: [
        "Power BI",
        "DAX",
        "Power Query",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "EDA",
        "Data Wrangling",
      ],
    },
    {
      title: "Backend & Core",
      icon: "⚙️",
      color: "#06b6d4",
      skills: [
        "Python",
        "PostgreSQL",
        "DDL",
        "Relational Data Modeling",
        "BeautifulSoup",
        "Selenium",
        "REST APIs",
        "Hypothesis Testing",
        "Bayesian Statistics",
      ],
    },
  ];

  return (
    <section id="skills" className="relative bg-[#070a14] w-full py-20 border-t border-white/10 overflow-hidden">
      {/* Background ambient radial glow */}
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
            <span className="font-bold text-[#6366f1]">02</span>
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            My <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 font-mono text-xs md:text-sm max-w-lg mt-2.5">
            A comprehensive toolkit spanning AI/ML, computer vision, MLOps infrastructure, and data analytics.
          </p>
        </motion.div>

        {/* 3-Column Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-5 rounded-2xl bg-[#090e1c]/80 backdrop-blur-md transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden ${isHovered ? "scale-[1.015]" : ""
                  }`}
                style={{
                  border: isHovered ? `1.5px solid ${cat.color}` : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isHovered ? `0 0 25px ${cat.color}30` : "none",
                }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-3.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-md"
                      style={{
                        backgroundColor: `${cat.color}18`,
                        border: `1px solid ${cat.color}35`,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <h3
                      className="font-display font-bold text-lg"
                      style={{ color: cat.color }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skill Tag Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
