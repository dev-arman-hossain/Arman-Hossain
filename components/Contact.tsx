"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-zinc-400 max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard
            icon={<Mail size={28} className="text-blue-400" />}
            title="Email"
            value="web.devarman@gmail.com"
            href="mailto:web.devarman@gmail.com"
          />
          <ContactCard
            icon={<Phone size={28} className="text-emerald-400" />}
            title="Phone"
            value="01733695357"
            href="tel:+8801733695357"
          />
          <ContactCard
            icon={<MessageCircle size={28} className="text-green-500" />}
            title="WhatsApp"
            value="01733695357"
            href="https://wa.me/8801733695357"
          />
          <ContactCard
            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>}
            title="Telegram"
            value="@webdev_arman"
            href="https://t.me/webdev_arman"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
      <div className="p-4 bg-white/5 rounded-full mb-4 group-hover:bg-white/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-zinc-400">{value}</p>
    </a>
  );
}
