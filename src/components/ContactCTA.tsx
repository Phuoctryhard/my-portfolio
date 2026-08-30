"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-3xl overflow-hidden glass p-10 md:p-14"
        >
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#7c3aed]/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#a855f7]/08 blur-3xl" />
            <div className="dot-grid absolute inset-0 opacity-20" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

            {/* Left */}
            <div className="flex flex-col gap-3 max-w-md">
              <p className="section-label">+ Let&apos;s Work Together</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                Have a project in mind?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                I&apos;m always open to discussing new opportunities and interesting projects. Let&apos;s build something great together.
              </p>
            </div>

            {/* Center */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ngodinhphuoc100@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-[#a855f7] transition-colors group"
              >
                <div className="w-9 h-9 glass rounded-xl flex items-center justify-center group-hover:border-[#7c3aed]/40 transition-colors">
                  <Mail size={15} className="text-[#a855f7]" />
                </div>
                ngodinhphuoc100@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-9 h-9 glass rounded-xl flex items-center justify-center">
                  <MapPin size={15} className="text-[#a855f7]" />
                </div>
                Da Nang City, Vietnam
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="mailto:ngodinhphuoc100@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: "0 0 32px rgba(124,58,237,.6)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white font-semibold text-sm transition-all duration-300 whitespace-nowrap flex-shrink-0"
            >
              Get In Touch <ArrowUpRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
