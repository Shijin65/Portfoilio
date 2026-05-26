"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript (ES6)" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "MUI" },
      { name: "Bootstrap" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: ".NET Core" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MS SQL Server" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "GitHub" },
      { name: "Azure DevOps" },
      { name: "AWS EC2" },
      { name: "Nginx" },
      { name: "IIS" },
      { name: "CI/CD" }
    ]
  },
  {
    title: "Other",
    skills: [
      { name: "Socket.IO" },
      { name: "JWT" },
      { name: "SSO" },
      { name: "RBAC" },
      { name: "REST APIs" },
      { name: "Redis" },
      { name: "OpenSearch" },
      { name: "Sequelize" },
      { name: "Stripe" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 text-lg">Technologies I work with on a daily basis</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + (index * 0.05), type: "spring", stiffness: 100 }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
