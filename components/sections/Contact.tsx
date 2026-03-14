"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <h2 className="text-4xl font-black mb-8">Let&apos;s <span className="text-gradient">Connect</span></h2>
                        <p className="text-slate-400 text-lg mb-16 leading-relaxed max-w-2xl mx-auto">
                            Have a project in mind or just want to say hi? Feel free to reach out.
                            I&apos;m always open to discussing new ideas and opportunities.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
                            {[
                                { icon: Mail, label: "Email", value: "shijincht65@gmail.com", href: "mailto:shijincht65@gmail.com" },
                                { icon: Phone, label: "Call", value: "+91 8848217507", href: "tel:+918848217507" },
                                { icon: MapPin, label: "Location", value: "Mannarkkad, Kerala", href: "https://goo.gl/maps/..." },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="flex flex-col items-center p-8 rounded-3xl bg-slate-900/30 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group"
                                >
                                    <div className="w-14 h-14 mb-6 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-sm text-slate-500 uppercase tracking-widest mb-2">{item.label}</div>
                                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors text-center">{item.value}</div>
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            {[
                                { icon: Github, href: "https://github.com/Shijin65" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/shijin-puthur-4056ab239" },
                                { icon: Instagram, href: "https://instagram.com/_shijin_sjn" },
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    href={social.href}
                                    target="_blank"
                                    className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-slate-800 transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
