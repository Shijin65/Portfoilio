"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "shijinputhur480@gmail.com",
    href: "mailto:shijinputhur480@gmail.com",
    color: "group-hover:text-red-400"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "shijin-puthur-4056ab239",
    href: "https://www.linkedin.com/in/shijin-puthur-4056ab239",
    color: "group-hover:text-blue-500"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "Shijin65",
    href: "https://github.com/Shijin65",
    color: "group-hover:text-white"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let&apos;s Connect</h2>
          <p className="text-xl text-blue-400 font-medium">Interested in building something together?</p>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-4 transition-colors">
                <method.icon className={`w-6 h-6 text-slate-400 transition-colors ${method.color}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{method.title}</h3>
              <p className="text-sm text-slate-400 break-all">{method.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Send me a message</h3>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            My inbox is always open. Whether you have an exciting project in mind or just want to chat about tech.
          </p>
          <a
            href="mailto:shijinputhur480@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 active:scale-95"
          >
            Say Hello
            <Send className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
