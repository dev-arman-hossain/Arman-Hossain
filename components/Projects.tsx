"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-4.2 5.2 5.2 0 0 0-.1-4.1s-1.2-.3-3.9 1.5a13.3 13.3 0 0 0-7 0C6.2 3.2 5 3.5 5 3.5a5.2 5.2 0 0 0-.1 4.1A5.2 5.2 0 0 0 3 11.8c0 5.2 3 6.4 6 6.76-.7.7-1 1.7-1 3.24v4"></path><path d="M9 18c-4.5 1.5-5-2-7-2"></path></svg>
);

import { projectsData } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-[#020202]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter">
              Featured <span className="text-blue-500">Projects</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              A curated selection of my professional work, focusing on robust architecture, clean code, and exceptional user experiences.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 mx-12 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projectsData.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              key={project.id}
              className="group flex flex-col h-full hover-card-glow rounded-3xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-[250px] md:h-[320px] w-full overflow-hidden rounded-t-3xl border-x border-t border-white/10 bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  priority={index < 2}
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Tech Badges on Image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                   {project.techStack.slice(0, 2).map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-widest font-bold text-white bg-black/60 backdrop-blur-xl px-3 py-1.5 rounded-lg border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1 p-8 md:p-10 bg-[#09090b]/60 backdrop-blur-md rounded-b-3xl border-x border-b border-white/10 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zinc-500 hover:text-white transition-colors"
                      title="View GitHub"
                    >
                      <GithubIcon />
                    </a>
                    {project.liveLink !== "#" && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-zinc-500 hover:text-white transition-colors"
                        title="Live Preview"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-1">
                  {project.shortDesc}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <div className="flex -space-x-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <div 
                        key={tech} 
                        className="w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-[8px] font-bold text-zinc-400"
                        title={tech}
                      >
                        {tech.charAt(0)}
                      </div>
                    ))}
                    {project.techStack.length > 4 && (
                      <div className="w-8 h-8 rounded-full bg-zinc-900 border border-black flex items-center justify-center text-[10px] font-bold text-zinc-500">
                        +{project.techStack.length - 4}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-all group/link"
                  >
                    View Project 
                    <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

