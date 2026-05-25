"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Empress Cybernetic Systems",
    date: "Aug 2024 – Present",
    highlights: [
      "Built production applications from architecture to deployment",
      "Designed project management systems",
      "Built Socket.IO live features",
      "Implemented JWT + SSO + RBAC",
      "Automated CI/CD workflows",
      "AWS deployment"
    ]
  },
  {
    role: "Junior MERN Stack Developer",
    company: "Credot",
    date: "Previous",
    highlights: [
      "Developed full-stack web applications using the MERN stack",
      "Collaborated with cross-functional teams to define and implement new features",
      "Optimized application performance and database queries",
      "Participated in code reviews and agile methodologies"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-slate-400 text-lg">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
          />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.2 }}
                    className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 w-10 h-10 bg-black border-4 border-blue-500 rounded-full flex items-center justify-center z-10"
                  >
                    <Briefcase className="w-4 h-4 text-white" />
                  </motion.div>

                  {/* Content Card Container */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.3 }}
                      className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-2xl hover:border-blue-500/30 transition-colors"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-blue-400 font-medium mb-2">{exp.company}</h4>
                      <span className="inline-block text-xs font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-full mb-6">
                        {exp.date}
                      </span>
                      
                      <ul className={`space-y-3 ${isEven ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {exp.highlights.map((item, i) => (
                          <li key={i} className={`flex items-start text-sm text-slate-400 max-w-md ${isEven ? 'md:text-right md:flex-row-reverse' : ''}`}>
                            <span className={`min-w-[6px] h-[6px] rounded-full bg-blue-500 mt-1.5 ${isEven ? 'md:ml-3 mr-3 md:mr-0' : 'mr-3'}`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
