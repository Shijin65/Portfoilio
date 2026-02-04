import { motion } from "framer-motion";
import { Server, Monitor, Terminal } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend Development",
        icon: Monitor,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
        color: "blue"
    },
    {
        title: "Backend Development",
        icon: Server,
        skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Socket.IO"],
        color: "indigo"
    },
    {
        title: "Tools & DevOps",
        icon: Terminal,
        skills: ["Git", "Docker", "OpenSearch", "JWT", "Sequelize", "Postman"],
        color: "cyan"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 sm:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 sm:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6"
                    >
                        Skills & <span className="text-gradient">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto px-4"
                    >
                        Equipped with a diverse range of technical skills across the full development stack.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group glass-dark p-8 sm:p-10 rounded-[2rem] hover:border-blue-500/50 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                                <div className={`p-3 sm:p-4 rounded-2xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500`}>
                                    <category.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-white/30 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
