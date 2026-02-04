"use client";

import { motion } from "framer-motion";
import { Layout, Globe, Smartphone, LineChart, Brush, Megaphone } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "Building fast, responsive, and secure web applications using modern stacks like MERN and Next.js.",
        icon: Globe,
    },
    {
        title: "UI/UX Implementation",
        description: "Translating sophisticated designs into pixel-perfect, interactive user interfaces with attention to detail.",
        icon: Brush,
    },
    {
        title: "MERN Stack Consulting",
        description: "Helping startups and small businesses architect and build scalable solutions using MongoDB, Express, React, and Node.js.",
        icon: Layout,
    },
    {
        title: "Real-time Solutions",
        description: "Implementing real-time features like chat, notifications, and live updates using Socket.IO and WebSockets.",
        icon: Megaphone,
    },
    {
        title: "Database Optimization",
        description: "Designing efficient database schemas and optimizing queries for PostgreSQL and MongoDB.",
        icon: LineChart,
    },
    {
        title: "Marketing & Strategy",
        description: "Promoting small startups through social media advertising and building digital presence.",
        icon: Smartphone,
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        My <span className="text-gradient">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        I provide comprehensive development and digital services tailored to help small-scale industries and startups grow.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-900/30 border border-slate-800 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                <service.icon className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 text-center"
                >
                    <h4 className="text-xl font-bold mb-2">Need a custom solution?</h4>
                    <p className="text-slate-400 mb-6 font-medium">I'm available for freelance opportunities and long-term collaborations.</p>
                    <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
                        Get in Touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
