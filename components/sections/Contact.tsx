"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <h2 className="text-5xl font-black mb-8">Let&apos;s <span className="text-gradient">Connect</span></h2>
                        <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                            Have a project in mind or just want to say hi? Feel free to reach out.
                            I&apos;m always open to discussing new ideas and opportunities.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: "Email", value: "shijincht65@gmail.com", href: "mailto:shijincht65@gmail.com" },
                                { icon: Phone, label: "Call", value: "+91 8848217507", href: "tel:+918848217507" },
                                { icon: MapPin, label: "Location", value: "Mannarkkad, Kerala", href: "https://goo.gl/maps/..." },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</div>
                                        <div className="text-white font-medium group-hover:text-blue-400 transition-colors">{item.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-12 flex items-center gap-4">
                            {[
                                { icon: Github, href: "https://github.com/Shijin65" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/shijin-puthur-4056ab239" },
                                { icon: Instagram, href: "https://instagram.com/_shijin_sjn" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <form className="glass-dark p-8 md:p-12 rounded-3xl border border-slate-800 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="How can I help you?"
                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Your message details..."
                                    className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-500/20"
                            >
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
