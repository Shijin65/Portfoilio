"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center space-y-8"
                >
                    <span className="inline-block px-6 py-2 text-sm font-semibold tracking-widest text-blue-400 uppercase glass rounded-full shadow-lg shadow-blue-500/10">
                        Available for Projects
                    </span>

                    <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight px-4">
                        I&apos;m <span className="text-gradient">Shijin Puthur</span>
                    </h1>

                    <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light px-6">
                        Software Engineer specializing in building modern web applications with
                        <span className="text-white font-semibold"> MERN</span>,
                        <span className="text-white font-semibold"> Postgres</span>, and
                        <span className="text-white font-semibold"> Next.js</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 w-full px-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-bold transition-colors shadow-xl shadow-blue-600/20"
                        >
                            View My Work
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="w-full sm:w-auto glass hover:bg-white/10 text-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-bold transition-colors flex justify-center"
                        >
                            Let&apos;s Talk
                        </motion.a>
                    </div>

                    <div className="flex items-center justify-center gap-8 sm:gap-10 pt-6">
                        <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://github.com/Shijin65" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                            <Github className="w-6 h-6 sm:w-7 sm:h-7" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://www.linkedin.com/in/shijin-puthur-4056ab239" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, rotate: 5 }} href="https://instagram.com/_shijin_sjn" target="_blank" className="text-slate-500 hover:text-white transition-colors">
                            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 ">
                <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-2">
                    <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
