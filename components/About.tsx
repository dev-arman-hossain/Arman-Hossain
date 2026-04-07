"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, Coffee, Gamepad2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed"
          >
            <p>
              Hello! I'm <span className="text-white font-semibold flex-nowrap shrink-0">Arman Hossain</span>, a passionate Full Stack Developer based in Savar, Dhaka. My programming journey started with a curiosity about how websites work, which quickly evolved into a deep dive into modern web technologies.
            </p>
            <p>
              I specialize in building full-stack applications using <span className="text-blue-400 font-medium">TypeScript, Next.js, Node.js, and PostgreSQL</span>. I love tackling complex problems, architecting clean database schemas with Prisma ORM, and crafting beautiful responsive UIs.
            </p>
            <p>
              Currently, I am pursuing a BBA in Management (1st Year) at Dhamrai Government College while simultaneously advancing my software engineering skills through rigorous project-based learning and the Next Level Web Development program at Programming Hero.
            </p>
          </motion.div>

          {/* Cards for work and hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <Card
              icon={<Code2 size={24} className="text-blue-400" />}
              title="Clean Code"
              desc="Writing maintainable & scalable code."
            />
            <Card
              icon={<PenTool size={24} className="text-emerald-400" />}
              title="Creative UI"
              desc="Designing intuitive user experiences."
            />
            <Card
              icon={<Gamepad2 size={24} className="text-purple-400" />}
              title="Gaming"
              desc="Unwinding with strategic games."
            />
            <Card
              icon={<Coffee size={24} className="text-amber-400" />}
              title="Tech Blogs"
              desc="Constantly learning & reading."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="glass-card p-5 md:p-6 flex flex-col gap-3 group">
      <div className="p-2 md:p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-white">{title}</h3>
      <p className="text-zinc-400 text-sm">{desc}</p>
    </div>
  );
}
