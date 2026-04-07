"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST API", "Prisma ORM", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker (basics)"],
  },
  {
    category: "Authentication",
    skills: ["Better Auth", "JWT", "NextAuth"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((group, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={group.category}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-zinc-800/80 border border-zinc-700/50 rounded-full text-zinc-300 text-sm font-medium hover:bg-zinc-700 hover:text-white transition-colors cursor-default shadow-sm"
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
