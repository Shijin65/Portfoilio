"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-xl font-black mb-4 md:mb-0 tracking-tighter text-white">
            Shijin<span className="text-blue-500">.</span>
          </div>

          <div className="flex items-center gap-6 text-slate-500 mb-4 md:mb-0">
            <a href="https://github.com/Shijin65" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/shijin-puthur-4056ab239" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:shijinputhur480@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Shijin Puthur. Built with Next.js.
          </p>
        </div>
      </footer>
    </main>
  );
}
