"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const experiences = [
  {
    period: "2024 – 2025",
    role: "Fullstack Developer",
    company: "Openverse.Tech",
    location: "Da Nang, Vietnam",
    type: "Full-time",
    description:
      "Built a full-featured e-commerce platform with customer storefront (Next.js), admin dashboard (ReactJS), and scalable NestJS backend. Integrated AI chatbot via n8n workflow + RAG, SPU/SKU inventory, order tracking, and PayOS checkout.",
    tags: ["Next.js", "NestJS", "ReactJS", "PostgreSQL", "TypeScript", "MobX", "JWT"],
    icon: "OV",
    accent: "#a855f7",
    current: true,
  },
  {
    period: "2024",
    role: "Frontend Intern",
    company: "Inotev Company",
    location: "Da Nang, Vietnam",
    type: "Internship",
    description:
      "Gained hands-on experience in frontend development. Worked on real-world web projects, improving skills in React, modern UI libraries, and agile workflows.",
    tags: ["ReactJS", "Tailwind CSS", "REST API", "Git"],
    icon: "IN",
    accent: "#38bdf8",
    current: false,
  },
  {
    period: "2023",
    role: "Open Source Contributor",
    company: "DUT Hackathon",
    location: "Da Nang, Vietnam",
    type: "Competition",
    description:
      "Participated in DUT Hackathon 2023 Tech in Real Life. Designed and developed a full-stack web solution under time constraints, collaborating with a cross-functional team.",
    tags: ["ReactJS", "Node.js", "MongoDB", "Teamwork"],
    icon: "DH",
    accent: "#34d399",
    current: false,
  },
  {
    period: "2021 – Present",
    role: "Computer Science Student",
    company: "Danang University of Science and Technology",
    location: "Da Nang, Vietnam",
    type: "Education",
    description:
      "Studying Information Security. GPA 3.33/4.0. Academic Scholarship HK1 2024–2025. First Prize in Database Competition – Storm House Club 2022. TOEIC 550.",
    tags: ["Information Security", "Algorithms", "Databases", "Networks"],
    icon: "DUT",
    accent: "#f59e0b",
    current: false,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col gap-1 mb-16"
        >
          <p className="section-label">+ My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Experience
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-md">
            Here&apos;s a timeline of my work experience and the companies I&apos;ve worked with
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, rgba(168,85,247,0.6) 0%, rgba(168,85,247,0.15) 80%, transparent 100%)",
              transform: "translateX(-50%)",
            }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 ${
                    isLeft ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-6 lg:left-1/2 w-3 h-3 rounded-full border-2 z-10"
                    style={{
                      top: "28px",
                      transform: "translate(-50%, 0)",
                      background: exp.accent,
                      borderColor: exp.accent,
                      boxShadow: `0 0 12px ${exp.accent}80`,
                    }}
                  />

                  {/* Card */}
                  <div className={`pl-14 lg:pl-0 ${isLeft ? "lg:pr-8" : "lg:pl-8 [direction:ltr]"}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="glass rounded-2xl p-6 shine-card"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-base text-white">{exp.role}</h3>
                            {exp.current && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-green-500/15 text-green-400 border border-green-500/25">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium" style={{ color: exp.accent }}>
                            {exp.company}
                          </p>
                        </div>

                        {/* Company icon */}
                        <div
                          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                          style={{
                            background: `linear-gradient(135deg, ${exp.accent}30, ${exp.accent}10)`,
                            border: `1px solid ${exp.accent}30`,
                            fontFamily: "var(--font-space-grotesk)",
                          }}
                        >
                          {exp.icon}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <span
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold"
                          style={{
                            background: `${exp.accent}18`,
                            color: exp.accent,
                            border: `1px solid ${exp.accent}30`,
                          }}
                        >
                          {exp.period}
                        </span>
                        <span className="text-xs text-slate-500">{exp.type}</span>
                        <span className="text-xs text-slate-500">· {exp.location}</span>
                      </div>

                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="tech-tag">{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
