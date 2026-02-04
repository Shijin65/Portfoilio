"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Play } from "lucide-react";

const projects = [
    {
        title: "Movie HuB",
        description: "A movie discovery platform using React and TMDB API. Features include searching, category filtering, and detailed movie information.",
        tech: ["React", "Styled Components", "TMDB API"],
        github: "https://github.com/Shijin65/Movie_HuB",
        live: "#",
        image: "/project-movie.jpg", // Placeholders
    },
    {
        title: "Weather App",
        description: "A sleek weather forecasting application built with pure JavaScript to demonstrate DOM manipulation and API integration.",
        tech: ["JavaScript", "CSS3", "OpenWeatherMap API"],
        github: "https://github.com/Shijin65/Weather_App",
        live: "#",
        image: "/project-weather.jpg",
    },
    {
        title: "Contact Manager",
        description: "A full-stack application for managing contacts with CRUD operations, built using the MERN stack.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        github: "https://github.com/Shijin65/ContactApp-MERN",
        live: "#",
        image: "/project-contact.jpg",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 bg-darker">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl font-black mb-6"
                        >
                            Selected <span className="text-gradient">Projects</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-xl"
                        >
                            A showcase of my recent work in web development, ranging from frontend experiments to full-stack applications.
                        </motion.p>
                    </div>

                    <motion.a
                        href="https://github.com/Shijin65"
                        target="_blank"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold transition-all border-b-2 border-blue-400/20 pb-2 hover:border-blue-400 group"
                    >
                        View More on GitHub <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </motion.a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500"
                        >
                            <div className="relative h-56 bg-slate-800 overflow-hidden">
                                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/0 transition-colors duration-500 flex items-center justify-center">
                                    <Code className="w-12 h-12 text-blue-500/50 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                {/* Image overlay for buttons */}
                                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/80 to-transparent flex gap-3">
                                    <a href={project.github} target="_blank" className="flex-1 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-xs font-bold py-2 rounded-lg text-center flex items-center justify-center gap-2 transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                    <a href={project.live} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded-lg text-center flex items-center justify-center gap-2 transition-colors">
                                        <Play className="w-4 h-4" /> Demo
                                    </a>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-slate-800/50 px-2.5 py-1 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
