"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiGit, SiDocker, SiNestjs, SiRedux,
} from "react-icons/si";

function IconFigma() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83"/>
      <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF"/>
      <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E"/>
      <path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" fill="#FF7262"/>
      <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE"/>
    </svg>
  );
}

const skills = [
  { Icon: SiReact,       label: "React",       color: "#61DAFB" },
  { Icon: SiNextdotjs,   label: "Next.js",     color: "#ffffff" },
  { Icon: SiTypescript,  label: "TypeScript",  color: "#3178C6" },
  { Icon: SiNodedotjs,   label: "Node.js",     color: "#68A063" },
  { Icon: SiTailwindcss, label: "Tailwind",    color: "#38BDF8" },
  { Icon: SiMongodb,     label: "MongoDB",     color: "#47A248" },
  { Icon: SiPostgresql,  label: "PostgreSQL",  color: "#4169E1" },
  { Icon: SiGit,         label: "Git",         color: "#F05032" },
  { Icon: SiDocker,      label: "Docker",      color: "#2496ED" },
  { Icon: SiNestjs,      label: "NestJS",      color: "#E0234E" },
  { Icon: SiRedux,       label: "Redux",       color: "#764ABC" },
  { Icon: IconFigma,     label: "Figma",       color: "" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          {/* ── Left: About ── */}
          <div className="flex flex-col gap-5">
            <p className="section-label">+ About Me</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Crafting solutions that<br />make an impact.
            </h2>
            <p className="text-slate-400 text-sm leading-7">
              I&apos;m a passionate Full Stack Developer with hands-on experience building
              production-grade web applications using React, Next.js, NestJS and more.
              Currently finishing my degree in Information Security at{" "}
              <span className="text-slate-300">Danang University of Science &amp; Technology</span>.
            </p>
            <p className="text-slate-400 text-sm leading-7">
              I worked at <span className="text-[#a855f7] font-medium">Openverse.Tech</span> (2024–2025)
              delivering e-commerce platforms with AI chatbot integration, RBAC systems, and
              scalable REST APIs. I love turning complex problems into clean, user-friendly interfaces.
            </p>
            <motion.a
              href="#experience"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#a855f7] hover:text-white transition-colors w-fit mt-1"
            >
              More About Me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.a>
          </div>

          {/* ── Right: Skills ── */}
          <div className="flex flex-col gap-5">
            <p className="section-label">+ Skills</p>
            <div className="grid grid-cols-4 gap-3">
              {skills.map(({ Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.75 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.055, duration: 0.4, ease: "backOut" }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/[0.04] border border-white/[0.07] hover:border-[#7c3aed]/40 hover:bg-[#7c3aed]/[0.06] transition-all duration-200 cursor-default"
                >
                  {color
                    ? <Icon size={26} style={{ color }} />
                    : <Icon />
                  }
                  <span className="text-[10px] text-slate-400 font-medium text-center leading-tight">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
