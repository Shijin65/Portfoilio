"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />

      <footer className="py-12 border-t border-slate-900 bg-darker">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-black mb-4 tracking-tighter">
            Shijin<span className="text-blue-500">.</span>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            &copy; {new Date().getFullYear()} Shijin Puthur. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-6 text-slate-500">
            <a href="#hero" className="hover:text-white text-xs uppercase tracking-widest transition-colors">Home</a>
            <a href="#about" className="hover:text-white text-xs uppercase tracking-widest transition-colors">About</a>
            <a href="#projects" className="hover:text-white text-xs uppercase tracking-widest transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white text-xs uppercase tracking-widest transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
