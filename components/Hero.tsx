"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 order-2 md:order-1 text-center md:text-left"
        >
          <div>
            <h2 className="text-sm md:text-base font-medium text-blue-400 mb-2 tracking-widest uppercase">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 tracking-tighter">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-gradient">Md. Arman Hossain</span>
            </h1>
            <h3 className="text-xl md:text-3xl font-semibold text-zinc-300">
              Full Stack Web Developer
            </h3>
          </div>

          <p className="text-zinc-400 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            Passionate about building modern, scalable, and beautifully designed web applications using cutting-edge technologies like React, Next.js, and Node.js.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 justify-center md:justify-start">
            <a
              href="/Arman_Hossain_CV.pdf"
              download
              className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
            
            <div className="flex items-center gap-4">
              <SocialLink href="https://github.com/dev-arman-hossain" icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-4.2 5.2 5.2 0 0 0-.1-4.1s-1.2-.3-3.9 1.5a13.3 13.3 0 0 0-7 0C6.2 3.2 5 3.5 5 3.5a5.2 5.2 0 0 0-.1 4.1A5.2 5.2 0 0 0 3 11.8c0 5.2 3 6.4 6 6.76-.7.7-1 1.7-1 3.24v4"></path><path d="M9 18c-4.5 1.5-5-2-7-2"></path></svg>} />
              <SocialLink href="https://www.linkedin.com/in/dev-arman-hossain/" icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>} />
              <SocialLink href="https://t.me/webdev_arman" icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>} />
              <SocialLink href="https://www.facebook.com/share/1DdaKeVTfo/" icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full p-2 border-2 border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
            <Image
              src="/portfolio_Image.png"
              alt="Md. Arman Hossain"
              fill
              className="object-cover rounded-full select-none pointer-events-none"
              priority
              sizes="(max-width: 768px) 280px, 400px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
