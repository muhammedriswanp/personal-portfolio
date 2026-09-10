"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Market Entry Framework Comparison (CrewAI vs LangGraph)",
      domain: "Generative AI",
      desc: "Head-to-head comparison of CrewAI role-based multi-agent system vs LangGraph stateful graph workflow using the same D2C market entry expansion dataset, complete with Architecture Decision Record (ADR).",
      tags: ["Python", "CrewAI", "LangGraph", "Multi-Agent Systems", "LangChain", "Groq"],
      link: "https://github.com/muhammedriswanp/Market-Entry-Framework-Comparison-",
      color: "#f59e0b",
    },
    {
      title: "AI Customer Support Agent with Conversation Memory",
      domain: "Generative AI",
      desc: "Customer support AI agent upgraded with stateful conversation memory using LangChain checkpointer (InMemorySaver) and thread_id for contextual multi-turn dialogue persistence.",
      tags: ["Python", "LangChain", "Conversation Memory", "Checkpointer", "Thread Persistence"],
      link: "https://github.com/muhammedriswanp/agent-memory",
      color: "#8b5cf6",
    },
    {
      title: "Enterprise MCP & A2A Agent Demo",
      domain: "Generative AI",
      desc: "Enterprise HR AI agent implementing Model Context Protocol (MCP) tool discovery and Agent-to-Agent (A2A) escalation workflows using Groq LLM and custom MCP tools.",
      tags: ["Python", "MCP Protocol", "A2A Protocol", "Groq", "AI Agents", "LLM Tool Calling"],
      link: "https://github.com/muhammedriswanp/enterprise-mcp-agent-demo",
      color: "#10b981",
    },
    {
      title: "Multi-Agent Code Review with AutoGen",
      domain: "Generative AI",
      desc: "Conversational multi-agent AI system built with Microsoft AutoGen for automated code review, static analysis, and multi-perspective code optimization workflows.",
      tags: ["Python", "AutoGen", "AI Agents", "Multi-Agent Systems", "Code Review", "LLMs"],
      link: "https://github.com/muhammedriswanp/AutoGen",
      color: "#06b6d4",
    },
    {
      title: "Agentic RAG HR Assistant Demo",
      domain: "Generative AI",
      desc: "Self-evaluating Agentic RAG with query reformulation, ChromaDB vs Pinecone vector DB benchmarking, and Langfuse @observe() execution tracing.",
      tags: ["Python", "LangChain", "Agentic RAG", "ChromaDB", "Pinecone", "Langfuse"],
      link: "https://github.com/muhammedriswanp/agentic-rag-hr-assistant-demo",
      color: "#6366f1",
    },
    {
      title: "LLM-as-a-Judge Evaluation Framework",
      domain: "Generative AI",
      desc: "Automated AI evaluation benchmark scoring responses on Correctness, Relevance, Completeness, and Faithfulness, optimizing prompt adherence to 5.00.",
      tags: ["Python", "LLM-as-a-Judge", "Prompt Engineering", "Benchmarking", "JSON"],
      link: "https://github.com/muhammedriswanp/llm-evaluation",
      color: "#8b5cf6",
    },
    {
      title: "Guardrail-Enabled AI Customer Support Agent",
      domain: "Generative AI",
      desc: "Production safety wrapper for AI agents featuring zero-latency pre-LLM prompt injection defense, PII redaction, Pydantic validation, and 100% red-team pass rate.",
      tags: ["Python", "Guardrails", "Pydantic", "Prompt Injection", "PII Redaction", "Groq"],
      link: "https://github.com/muhammedriswanp/Guardrail-enabled-AI-assistant",
      color: "#10b981",
    },
    {
      title: "JobFit RAG Assistant",
      domain: "Generative AI",
      desc: "AI-powered assistant analyzing job descriptions against resumes & portfolios with Sentence-BERT embeddings, Hugging Face transformers, and semantic matching.",
      tags: ["Python", "Hugging Face", "Sentence-BERT", "RAG", "Prompt Engineering"],
      link: "https://github.com/muhammedriswanp/jobfit-rag-assistant",
      color: "#6366f1",
    },
    {
      title: "Traffic Flow Analyzer",
      domain: "Computer Vision",
      desc: "End-to-end CV pipeline to detect, track, & count vehicles using YOLOv8n with ByteTrack tracking, virtual line-crossing logic, and 4-panel dashboard.",
      tags: ["Python", "YOLOv8", "ByteTrack", "OpenCV", "Matplotlib", "Docker"],
      link: "https://github.com/muhammedriswanp/traffic-flow-analyzer",
      color: "#f43f5e",
    },
    {
      title: "Waste Classification PyTorch CNN",
      domain: "Computer Vision",
      desc: "Convolutional Neural Network (CNN) built with PyTorch to classify 6 waste categories (battery, glass, metal, organic, paper, plastic) across 4,650 images, achieving 70.97% validation accuracy.",
      tags: ["Python", "PyTorch", "CNN", "Computer Vision", "Deep Learning", "TorchVision"],
      link: "https://github.com/muhammedriswanp/waste-classification-cnn",
      color: "#ec4899",
    },
    {
      title: "Customer Segmentation MLOps Pipeline",
      domain: "MLOps",
      desc: "KMeans & PCA segmentation pipeline deployed on Render via FastAPI and Docker with automated CI/CD and EvidentlyAI p-value data drift monitoring.",
      tags: ["FastAPI", "Docker", "DVC", "MLflow", "GitHub Actions", "EvidentlyAI"],
      link: "https://github.com/muhammedriswanp/customer-segmentation-mlops",
      color: "#06b6d4",
    },
    {
      title: "Bank Marketing Subscription Prediction",
      domain: "Machine Learning",
      desc: "Term deposit subscription predictor on 41,188 records using tuned Random Forest (ROC-AUC 0.806), Scikit-learn Pipeline, Flask API, and Streamlit.",
      tags: ["Python", "Random Forest", "Scikit-Learn", "Flask", "Streamlit", "Docker"],
      link: "https://github.com/muhammedriswanp/bank-marketing-subscription-prediction",
      color: "#ec4899",
    },
    {
      title: "Olist E-Commerce Sales Performance Dashboard",
      domain: "BI & Analytics",
      desc: "Interactive 4-page Power BI dashboard analyzing 100,000+ orders with DAX KPIs, delivery estimation root-cause analysis, and operational insights.",
      tags: ["Power BI", "DAX", "Power Query", "SQL", "Business Intelligence"],
      link: "https://github.com/muhammedriswanp/powerbi-intern-project",
      color: "#f59e0b",
    },
    {
      title: "Stroke Prediction Healthcare EDA",
      domain: "EDA & Foundations",
      desc: "Comprehensive exploratory data analysis on a healthcare dataset identifying stroke risk factors through statistical hypothesis testing and feature engineering.",
      tags: ["Python", "Jupyter Notebook", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      link: "https://github.com/muhammedriswanp/Exploratory-Data-Analysis-EDA-Project",
      color: "#3b82f6",
    },
  ];

  const categories = [
    { name: "All", count: projects.length },
    { name: "Generative AI", count: projects.filter((p) => p.domain === "Generative AI").length },
    { name: "Computer Vision", count: projects.filter((p) => p.domain === "Computer Vision").length },
    { name: "MLOps", count: projects.filter((p) => p.domain === "MLOps").length },
    { name: "Machine Learning", count: projects.filter((p) => p.domain === "Machine Learning").length },
    { name: "BI & Analytics", count: projects.filter((p) => p.domain === "BI & Analytics").length },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.domain === activeFilter);

  return (
    <section id="allprojects" className="relative bg-[#070a14] w-full py-20 border-t border-white/10 overflow-hidden">
      {/* Ambient background blob */}
      <div className="blob-3" />

      <div className="max-w-[1020px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="px-3.5 py-1 rounded-full bg-[#13192b] border border-[#2b3553] text-[#818cf8] text-[11px] font-mono tracking-widest uppercase mb-3.5 shadow-sm inline-flex items-center gap-2">
            <span className="font-bold text-[#6366f1]">04</span>
            <span>ALL PROJECTS</span>
          </div>
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-tight">
            Complete <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-slate-400 font-mono text-xs md:text-sm max-w-lg mt-2.5">
            Browse all projects organized by technology domain.
          </p>
        </motion.div>

        {/* Filter Bar Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 pb-4 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveFilter(cat.name)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeFilter === cat.name
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-500"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <span>{cat.name}</span>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded ${
                  activeFilter === cat.name
                    ? "bg-white/20 text-white"
                    : "bg-white/5 text-slate-500"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Filterable Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="p-5.5 rounded-3xl bg-[#090e1c]/80 border border-white/10 hover:border-indigo-500/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border"
                      style={{
                        borderColor: `${project.color}30`,
                        backgroundColor: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {project.domain}
                    </span>
                    <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                  </div>

                  <h4 className="font-display font-bold text-base md:text-lg text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {project.title}
                  </h4>

                  <p className="text-xs font-mono text-slate-400 leading-relaxed mb-5">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
