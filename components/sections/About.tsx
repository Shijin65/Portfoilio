"use client";

import { motion } from "framer-motion";
import { User, Code2, Rocket, Heart } from "lucide-react";

const stats = [
    { label: "Experience", value: "2+ Years", icon: Rocket },
    { label: "Expertise", value: "Full Stack", icon: Code2 },
    { label: "Projects", value: "10+", icon: Heart },
];

export default function About() {
    return (
        <section id="about" className="py-20 sm:py-32 bg-darker overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-dark rounded-3xl p-8 sm:p-14 border border-slate-800">
                                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div className="p-3 sm:p-4 bg-blue-500/10 rounded-2xl">
                                        <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
                                </div>

                                <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
                                    I am <span className="text-white font-medium">Shijin Puthur</span>, a passionate and tech-enthusiast self-taught developer.
                                    My journey began with a curiosity for how things work on the web, which led me to dive deep into modern technologies.
                                    Currently, I specialize in the <span className="text-white font-medium">MERN Stack</span> and <span className="text-white font-medium">Next.js</span>,
                                    building scalable and user-centric web applications. I love tackling complex problems and turning ideas into reality through elegant code.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="text-center p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-blue-500/30 transition-colors">
                                            <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mx-auto mb-2" />
                                            <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                                            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-blue-500 inline-block"></span>
                                My Philosophy
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                I believe that great software is not just about writing code, but about solving
                                real-world problems and creating seamless experiences. I am constantly learning
                                and evolving, staying up-to-date with the latest industry trends.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold mb-2">Self-Taught</h4>
                                <p className="text-sm text-slate-400 text-balance">Built strong foundations through continuous learning and practical building.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold mb-2">Tech Enthusiast</h4>
                                <p className="text-sm text-slate-400 text-balance">Always exploring new tools and frameworks to stay at the cutting edge.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
