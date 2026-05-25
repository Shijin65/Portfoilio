"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Code2, Server, ShieldCheck, Cloud } from "lucide-react";

// CountUp hook
function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current && startOnView) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted && startOnView) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (percentage < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, hasStarted, startOnView]);

  return { count, ref };
}

const StatCard = ({ end, suffix = "", label, delay = 0 }: { end: number, suffix?: string, label: string, delay?: number }) => {
  const { count, ref } = useCountUp(end);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
    >
      <div ref={ref} className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-400 font-medium">{label}</div>
    </motion.div>
  );
};

const ExpertiseCard = ({ icon: Icon, title, desc, delay = 0 }: { icon: React.ElementType, title: string, desc: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-blue-500/50 transition-colors group"
  >
    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a Software Engineer currently building real-time solutions at <span className="text-blue-400 font-medium">Empress Cybernetic Systems</span>. With over 2 years of professional experience, I specialize in full-stack architecture, focusing on scalable performance and secure deployments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          <StatCard end={2} suffix="+" label="Years Experience" delay={0.1} />
          {/* <StatCard end={10} suffix="+" label="Projects" delay={0.2} /> */}
          <StatCard end={5} suffix="+" label="Technologies" delay={0.3} />
          <StatCard end={100} suffix="%" label="Passion" delay={0.4} />
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-8">Core Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExpertiseCard 
              icon={Server} 
              title="Real-time Systems" 
              desc="Building scalable websockets and live features with Socket.IO and Next.js." 
              delay={0.1} 
            />
            <ExpertiseCard 
              icon={ShieldCheck} 
              title="Authentication" 
              desc="Implementing secure JWT, SSO, and RBAC strategies for modern applications." 
              delay={0.2} 
            />
            <ExpertiseCard 
              icon={Code2} 
              title="Full-stack Architecture" 
              desc="Designing robust end-to-end solutions using the MERN stack and Next.js." 
              delay={0.3} 
            />
            <ExpertiseCard 
              icon={Cloud} 
              title="Cloud Deployment" 
              desc="Automating CI/CD workflows and deploying infrastructure on AWS." 
              delay={0.4} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
