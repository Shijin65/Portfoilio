"use client";

import React, { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
            <nav className="max-w-6xl mx-auto glass rounded-full px-8 py-4 flex items-center justify-between pointer-events-auto border border-white/10 shadow-2xl backdrop-blur-xl relative">
                {/* Logo */}
                <a href="#hero" className="text-white font-black tracking-tighter text-2xl hover:text-blue-400 transition-all transform hover:scale-110">
                    SP<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-slate-400 hover:text-white text-sm font-bold transition-all uppercase tracking-widest hover:translate-y-[-2px]"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black px-6 py-3 rounded-full transition-all hover:scale-110 active:scale-95 shadow-lg shadow-blue-600/20 uppercase tracking-tight"
                    >
                        Contact Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-4 p-10 bg-[#0f172a] border border-slate-800 rounded-3xl md:hidden flex flex-col items-center gap-8 shadow-2xl backdrop-blur-2xl"
                        >
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-slate-300 hover:text-white text-lg font-bold uppercase tracking-widest transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-blue-600/20 uppercase"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
