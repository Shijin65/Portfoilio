"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "CatersHub",
    description: "Catering staff management platform with role-based access and workforce management.",
    image: "/catershub.png", // Will use fallback if not found
    fallbackBg: "from-blue-500/20 to-indigo-500/20",
    tech: ["Next.js", "Node.js", "MongoDB", "JWT"],
    features: [
      "JWT authentication",
      "RBAC",
      "Staff management",
      "Production workflows"
    ],
    github1: "https://github.com/Shijin65/Staff-Track-X-client",
    github2: "https://github.com/Shijin65/Staff-Track-X-Server",
    demo: "https://staff-track-x-client.vercel.app/"
  },
  {
    title: "GoEat",
    description: "Food ordering platform with secure payments and admin management.",
    image: "/goeat.png", // Will use fallback if not found
    fallbackBg: "from-purple-500/20 to-pink-500/20",
    tech: ["React", "Express", "Stripe", "PostgreSQL"],
    features: [
      "Stripe integration",
      "Authentication",
      "Admin dashboard"
    ],
    github: "https://github.com/Shijin65/GoEat",
    demo: "https://goeat.netlify.app/"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of production-grade systems and applications I&apos;ve built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-colors duration-500 rounded-3xl" />

              {/* Image Section */}
              <div className={`relative h-64 w-full overflow-hidden bg-gradient-to-br ${project.fallbackBg}`}>
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
                {/* Image placeholder text or actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/30 font-bold text-2xl tracking-widest uppercase">
                  {project.title} Preview
                </div>
                {/* Hover zoom effect wrapper */}
                <div className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                  {/* If image exists, it would render here */}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-8 space-y-2">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-4 py-2.5 rounded-xl font-medium transition-colors hover:bg-slate-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>

                  {project.github2 ? <div className="flex gap-3">
                    <a
                      href={project.github1}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-4 py-2.5 rounded-xl font-medium transition-colors hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                      Client
                    </a> <a
                      href={project.github2}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-4 py-2.5 rounded-xl font-medium transition-colors hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                      Server
                    </a>
                  </div> :
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 px-4 py-2.5 rounded-xl font-medium transition-colors hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
