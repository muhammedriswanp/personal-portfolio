"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Terminal as TerminalIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Trailer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const pipelineLogs = [
    "Initializing MLOps pipeline runner...",
    "Connecting to remote artifact repository... SUCCESS",
    "Fetching database records from PostgreSQL: [Olist Sales Dataset]",
    "Loading 100,000 rows into training memory...",
    "Running ETL: Data validation & schema assertions... PASSED",
    "Fitting StandardScaler pipeline on training subset...",
    "Training Model: Initiating PyTorch CNN model optimization...",
    "Epoch 1/5 | Loss: 0.6842 | Accuracy: 64.2%",
    "Epoch 2/5 | Loss: 0.4109 | Accuracy: 81.7%",
    "Epoch 3/5 | Loss: 0.2201 | Accuracy: 90.1%",
    "Epoch 4/5 | Loss: 0.1293 | Accuracy: 95.8%",
    "Epoch 5/5 | Loss: 0.0894 | Accuracy: 97.4%",
    "Evaluating Model: Calculating confusion matrices...",
    "Validation Results: F1-Score: 0.968 | ROC-AUC: 0.982",
    "Model Registry: Archiving model artifact to MLflow server...",
    "MLflow Run registered under ID: run_b471a_8892f",
    "Generating Docker Image for microservice serving...",
    "Command: docker build -t mlo-predictor:latest .",
    "Docker Image built. Size: 412 MB",
    "Pushing container registry image to AWS ECR...",
    "Pushing layers: [========================>] 100% SUCCESS",
    "Deploying API container to AWS ECS clusters...",
    "Task Definition: ecs-task-model-v3",
    "API Health Check: http://api.shippable.ml/health... OK",
    "API Logs: [Uvicorn] Running on http://0.0.0.0:8000 (Press CTRL+C to quit)",
    "API Logs: [FastAPI] Loading model weights from storage...",
    "API Logs: [FastAPI] Prediction Engine online. Ready for inputs.",
    "=================== DEPLOYMENT COMPLETED SUCCESS ===================",
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && logIndex < pipelineLogs.length) {
      timer = setTimeout(() => {
        setLogs((prev) => [...prev, pipelineLogs[logIndex]]);
        setLogIndex((prev) => prev + 1);
        setProgress(((logIndex + 1) / pipelineLogs.length) * 100);
      }, 700);
    } else if (logIndex === pipelineLogs.length) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, logIndex]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleStart = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setLogs([]);
    setLogIndex(0);
    setProgress(0);
  };

  return (
    <section id="imax" className="relative bg-black w-full py-24 border-b border-white/5 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 cinematic-grid pointer-events-none opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-red/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent-red font-bold font-mono">
            IMAX Experience
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter mt-2 mb-4">
            Interactive Trailer
          </h2>
          <p className="text-sm font-mono text-brand-muted max-w-lg mx-auto">
            Simulate a model training & deployment pipeline live on the digital screen. Watch the MLOps pipeline compile in real-time.
          </p>
        </div>

        {/* Video / Terminal Screen Container */}
        <div className="w-full max-w-4xl mx-auto aspect-video bg-[#050507] border border-white/10 rounded-lg shadow-2xl relative flex flex-col overflow-hidden group">
          {/* Neon deep red screen border glow */}
          <div className="absolute inset-0 border border-accent-red/20 group-hover:border-accent-red/45 transition-colors pointer-events-none z-10" />

          {/* Screen Top Bar */}
          <div className="bg-[#0b0b0e] border-b border-white/10 px-4 py-3 flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <TerminalIcon size={14} className="text-accent-red" />
              <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
                Pipeline Runner // mlo-v3.0.1
              </span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
          </div>

          {/* Terminal Display */}
          <div className="flex-1 p-6 overflow-y-auto font-mono text-xs text-white/80 space-y-2 select-text no-scrollbar bg-black/60">
            {logs.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center text-brand-muted space-y-4">
                <TerminalIcon size={48} className="text-accent-red/40 animate-pulse" />
                <p className="text-sm">Click play below to run the model deployment trailer</p>
              </div>
            )}
            {logs.map((log, index) => {
              const isSuccess = log.includes("SUCCESS") || log.includes("PASSED") || log.includes("OK") || log.includes("COMPLETED");
              const isEpoch = log.includes("Epoch");
              return (
                <div key={index} className="flex items-start">
                  <span className="text-accent-red/40 mr-3 select-none">$</span>
                  <span
                    className={`${
                      isSuccess
                        ? "text-emerald-400 font-bold"
                        : isEpoch
                        ? "text-yellow-400"
                        : "text-white/90"
                    }`}
                  >
                    {log}
                  </span>
                </div>
              );
            })}
            <div ref={terminalEndRef} />
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/5 relative z-10">
            <motion.div
              className="h-full bg-accent-red"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Control Bar */}
          <div className="bg-[#0b0b0e] border-t border-white/10 px-6 py-4 flex items-center justify-between z-10">
            {/* Playback Buttons */}
            <div className="flex items-center space-x-4">
              {isPlaying ? (
                <button
                  onClick={handlePause}
                  className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full cursor-pointer transition-colors"
                  aria-label="Pause"
                >
                  <Pause size={16} />
                </button>
              ) : (
                <button
                  onClick={handleStart}
                  className="bg-accent-red hover:bg-accent-red-hover text-white p-2.5 rounded-full cursor-pointer transition-colors shadow-[0_0_15px_rgba(200,16,58,0.4)]"
                  aria-label="Play"
                >
                  <Play size={16} fill="currentColor" />
                </button>
              )}
              <button
                onClick={handleReset}
                className="bg-white/5 hover:bg-white/10 text-white/60 hover:text-white p-2.5 rounded-full cursor-pointer transition-colors"
                aria-label="Reset"
              >
                <RotateCcw size={16} />
              </button>
            </div>

            {/* Status indicators */}
            <div className="flex items-center space-x-6 text-[10px] font-mono tracking-wider text-white/50">
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-red mr-2 animate-ping" />
                STATUS: {isPlaying ? "TRAINING_RUNNER" : logIndex === pipelineLogs.length ? "DEPLOYED" : "READY"}
              </div>
              <div>
                PROGRESS: {Math.round(progress)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
