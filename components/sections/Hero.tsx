"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, MonitorPlay } from "lucide-react";
import { useEffect, useState } from "react";

const TypeWriter = ({ words, delay = 100 }: { words: string[], delay?: number }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        timeout = setTimeout(() => {}, 500);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, delay / 2);
      }
    } else {
      if (currentText === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay]);

  return (
    <span className="inline-block min-w-[20px] text-blue-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-black z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] opacity-50 mix-blend-screen" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 w-fit backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-sm text-slate-300 font-medium tracking-wide">Available for new opportunities</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-4"
            >
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">SHIJIN PUTHUR</h1>
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Full Stack Engineer
              </h3>
              <h2 className="text-2xl lg:text-3xl text-slate-300 font-medium">
                Building scalable real-time applications using <br className="hidden md:block" />
                <TypeWriter words={["React", "Next.js", "Node.js", "AWS", "Socket.IO"]} />
              </h2>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-slate-400 max-w-xl leading-relaxed"
            >
              2+ years building production-grade systems, optimizing performance, and architecting modern cloud technologies for robust user experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#projects" className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:bg-slate-200 hover:scale-105 active:scale-95">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 bg-white/10 text-white border border-white/10 hover:bg-white/20 px-6 py-3 rounded-full font-medium transition-all backdrop-blur-sm hover:scale-105 active:scale-95">
                <Download className="w-4 h-4" />
                Resume
              </a>
              <a href="#contact" className="flex items-center gap-2 bg-transparent text-white border border-transparent hover:border-white/20 px-6 py-3 rounded-full font-medium transition-all hover:bg-white/5 active:scale-95">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative lg:ml-auto w-full max-w-md mx-auto lg:mr-0"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square sm:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-tr from-blue-900/40 to-indigo-900/40 border border-white/10 backdrop-blur-md p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 z-10 rounded-3xl"></div>
              {/* If user has an image, they can replace the div below with next/image */}
              <div className="w-full h-full bg-slate-900 rounded-2xl overflow-hidden relative flex items-center justify-center">
                {/* Fallback pattern or actual image */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
                <MonitorPlay className="w-32 h-32 text-blue-500/50" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                  <div className="flex gap-4 justify-center">
                    <a href="https://github.com/Shijin65" target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/shijin-puthur-4056ab239" target="_blank" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating decoration cards */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-30"
            >
              <div className="bg-blue-500/20 p-3 rounded-xl">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Full Stack</p>
                <p className="text-xs text-slate-400">Development</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
