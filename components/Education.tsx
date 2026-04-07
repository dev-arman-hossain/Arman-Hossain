"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Code2 } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      degree: "BBA in Management",
      institution: "Dhamrai Government College, National University",
      period: "2024 – Present (1st Year)",
      icon: <GraduationCap size={24} className="text-blue-400" />,
    },
    {
      degree: "Frontend Web Development",
      institution: "Creative IT Institute",
      period: "2023 – 2024",
      icon: <Code2 size={24} className="text-purple-400" />,
    },
    {
      degree: "Next Level Web Development",
      institution: "Programming Hero — Full Stack Course",
      period: "In Progress",
      icon: <BookOpen size={24} className="text-emerald-400" />,
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
          {educationData.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-900 bg-zinc-800 text-slate-500 group-hover:text-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors duration-300">
                {item.icon}
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                  <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                <p className="text-zinc-400">{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
