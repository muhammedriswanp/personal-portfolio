"use client";

import { motion } from "framer-motion";

export default function SkillsGrid() {
  const skillGroups = [
    {
      title: "LANGUAGES",
      skills: ["Python", "SQL (PostgreSQL)"],
    },
    {
      title: "NLP & LLMs",
      skills: [
        "Hugging Face Transformers",
        "BERT",
        "RoBERTa",
        "DistilBERT",
        "Tokenization",
        "Sentence Transformers (SBERT)",
        "Sentence Embeddings",
        "Semantic Similarity",
        "Transformer Architecture",
        "Attention Mechanism",
        "Prompt Engineering",
        "Function Calling",
        "Local LLMs (Ollama)",
        "Mistral 7B",
      ],
    },
    {
      title: "GENERATIVE AI & RAG",
      skills: [
        "Retrieval-Augmented Generation (RAG)",
        "ChromaDB",
        "Vector Search",
        "Semantic Search",
        "Vector Embeddings",
        "LangChain",
        "RecursiveCharacterTextSplitter",
        "PDF Ingestion",
        "Query Rewriting",
        "Token Budgeting",
        "Context Window Management",
      ],
    },
    {
      title: "MACHINE LEARNING",
      skills: [
        "Scikit-learn",
        "Linear & Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "Gradient Boosting",
        "XGBoost",
        "K-Nearest Neighbors (KNN)",
        "Ridge & Lasso Regression",
        "SMOTE",
        "Cross-Validation",
        "Hyperparameter Tuning (GridSearchCV, RandomizedSearchCV)",
        "Model Evaluation",
      ],
    },
    {
      title: "UNSUPERVISED LEARNING",
      skills: [
        "K-Means Clustering",
        "Hierarchical Clustering",
        "DBSCAN",
        "PCA",
        "Dimensionality Reduction",
        "Elbow Method",
        "Silhouette Score",
      ],
    },
    {
      title: "DEEP LEARNING",
      skills: [
        "PyTorch",
        "Artificial Neural Networks (ANN)",
        "Convolutional Neural Networks (CNNs)",
        "Transfer Learning (ResNet18, VGG16, MobileNet)",
        "Dropout",
        "Batch Normalization",
        "Adam & RMSProp Optimizers",
      ],
    },
    {
      title: "COMPUTER VISION",
      skills: [
        "YOLOv5 (Object Detection)",
        "U-Net (Image Segmentation)",
        "OpenCV",
        "Face Recognition",
        "Grad-CAM",
        "Inference Optimization",
      ],
    },
    {
      title: "MLOPS & DEPLOYMENT",
      skills: [
        "Git",
        "Docker",
        "DVC",
        "MLflow",
        "FastAPI",
        "Flask",
        "GitHub Actions (CI/CD)",
        "EvidentlyAI",
        "REST APIs",
        "Cloud Deployment (Render)",
      ],
    },
    {
      title: "ANALYTICS & BI",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Power BI",
        "DAX",
        "Power Query",
      ],
    },
    {
      title: "STATISTICS",
      skills: [
        "Hypothesis Testing (Z-Test, T-Test, Chi-Square, ANOVA)",
        "Bayesian Statistics",
        "Confidence Intervals",
        "Correlation Analysis",
      ],
    },
    {
      title: "OTHER",
      skills: [
        "BeautifulSoup",
        "Selenium",
        "Exploratory Data Analysis (EDA)",
        "Feature Engineering",
        "Data Wrangling",
        "Data Preprocessing",
      ],
    },
  ];

  return (
    <section id="skills" className="relative bg-transparent w-full py-24 border-b border-white/10 overflow-hidden">
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
            Technical Specs
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter mt-2">
            Stamped & sealed.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.05,
                    staggerChildren: 0.05
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="bg-[#070708] border border-white/5 p-6 rounded-sm relative group overflow-hidden"
            >
              {/* Corner Indicators */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-white/20 group-hover:bg-white rounded-full transition-colors" />

              {/* Group Title */}
              <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-2">
                <span className="font-mono text-[9px] text-zinc-600 font-bold">
                  0{index + 1} //
                </span>
                <h3 className="font-display font-bold tracking-widest text-[10px] text-zinc-400">
                  {group.title}
                </h3>
              </div>

              {/* Skill list */}
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      show: { opacity: 1, scale: 1, transition: { duration: 0.25 } }
                    }}
                    className="text-[10px] font-mono text-zinc-400 bg-white/[0.01] border border-white/5 px-2 py-0.5 rounded-sm group-hover:text-white group-hover:bg-white/[0.03] transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
