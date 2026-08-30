"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function PreviewRecruitment() {
  return (
    <svg viewBox="0 0 320 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* navbar */}
      <rect width="320" height="28" fill="rgba(124,58,237,0.15)" />
      <rect x="12" y="9" width="32" height="10" rx="3" fill="rgba(168,85,247,0.6)" />
      <rect x="200" y="9" width="28" height="10" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="234" y="9" width="28" height="10" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="268" y="9" width="40" height="10" rx="3" fill="rgba(168,85,247,0.5)" />

      {/* search bar */}
      <rect x="12" y="38" width="200" height="20" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
      <circle cx="26" cy="48" r="5" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" />
      <line x1="30" y1="52" x2="33" y2="55" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" />
      <rect x="38" y="44" width="60" height="8" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="218" y="38" width="90" height="20" rx="5" fill="rgba(124,58,237,0.5)" />
      <rect x="236" y="44" width="54" height="8" rx="2" fill="rgba(255,255,255,0.3)" />

      {/* job card 1 */}
      <rect x="12" y="68" width="138" height="54" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(168,85,247,0.25)" strokeWidth="1" />
      <rect x="20" y="76" width="20" height="20" rx="4" fill="rgba(124,58,237,0.4)" />
      <rect x="20" y="76" width="20" height="20" rx="4" fill="rgba(168,85,247,0.2)" />
      <text x="25" y="90" fontSize="10" fill="rgba(168,85,247,0.9)" fontFamily="monospace">&lt;/&gt;</text>
      <rect x="46" y="78" width="68" height="7" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="46" y="89" width="44" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="20" y="104" width="36" height="12" rx="3" fill="rgba(124,58,237,0.4)" />
      <rect x="62" y="104" width="36" height="12" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
      <rect x="104" y="104" width="36" height="12" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

      {/* job card 2 */}
      <rect x="158" y="68" width="150" height="54" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(168,85,247,0.15)" strokeWidth="1" />
      <rect x="166" y="76" width="20" height="20" rx="4" fill="rgba(59,130,246,0.3)" />
      <text x="170" y="90" fontSize="10" fill="rgba(96,165,250,0.9)" fontFamily="monospace">JS</text>
      <rect x="192" y="78" width="78" height="7" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="192" y="89" width="52" height="5" rx="2" fill="rgba(255,255,255,0.07)" />
      <rect x="166" y="104" width="36" height="12" rx="3" fill="rgba(59,130,246,0.35)" />
      <rect x="208" y="104" width="36" height="12" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />

      {/* job card 3 */}
      <rect x="12" y="130" width="296" height="36" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(168,85,247,0.12)" strokeWidth="1" />
      <rect x="20" y="139" width="16" height="16" rx="3" fill="rgba(168,85,247,0.25)" />
      <rect x="42" y="141" width="80" height="6" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="42" y="151" width="52" height="5" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="262" y="139" width="38" height="18" rx="4" fill="rgba(124,58,237,0.4)" />
    </svg>
  );
}

function PreviewMedicare() {
  return (
    <svg viewBox="0 0 320 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* header */}
      <rect width="320" height="30" fill="rgba(14,165,233,0.12)" />
      <rect x="12" y="10" width="50" height="10" rx="3" fill="rgba(56,189,248,0.6)" />
      <rect x="220" y="10" width="30" height="10" rx="3" fill="rgba(255,255,255,0.07)" />
      <rect x="256" y="10" width="24" height="10" rx="3" fill="rgba(255,255,255,0.07)" />
      <circle cx="298" cy="15" r="8" fill="rgba(56,189,248,0.25)" stroke="rgba(56,189,248,0.4)" strokeWidth="1" />

      {/* hero banner */}
      <rect x="12" y="38" width="296" height="50" rx="7" fill="rgba(14,165,233,0.1)" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
      <rect x="24" y="48" width="80" height="9" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="24" y="61" width="120" height="7" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="24" y="72" width="56" height="12" rx="4" fill="rgba(14,165,233,0.6)" />
      {/* pill illustration */}
      <ellipse cx="260" cy="60" rx="18" ry="10" fill="rgba(56,189,248,0.3)" />
      <rect x="242" y="55" width="18" height="10" rx="5" fill="rgba(56,189,248,0.4)" />
      <rect x="260" y="55" width="18" height="10" rx="5" fill="rgba(14,165,233,0.5)" />
      <ellipse cx="288" cy="68" rx="12" ry="7" fill="rgba(34,211,238,0.2)" />

      {/* product grid */}
      <rect x="12" y="96" width="60" height="72" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.2)" strokeWidth="1" />
      <rect x="20" y="104" width="44" height="28" rx="4" fill="rgba(14,165,233,0.15)" />
      <ellipse cx="42" cy="118" rx="12" ry="8" fill="rgba(56,189,248,0.25)" />
      <rect x="20" y="136" width="44" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="20" y="146" width="28" height="5" rx="2" fill="rgba(56,189,248,0.4)" />
      <rect x="20" y="155" width="44" height="9" rx="3" fill="rgba(14,165,233,0.4)" />

      <rect x="80" y="96" width="60" height="72" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
      <rect x="88" y="104" width="44" height="28" rx="4" fill="rgba(56,189,248,0.1)" />
      <rect x="96" y="110" width="28" height="14" rx="3" fill="rgba(56,189,248,0.2)" />
      <rect x="88" y="136" width="44" height="6" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="88" y="146" width="28" height="5" rx="2" fill="rgba(56,189,248,0.35)" />
      <rect x="88" y="155" width="44" height="9" rx="3" fill="rgba(14,165,233,0.35)" />

      <rect x="148" y="96" width="60" height="72" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
      <rect x="156" y="104" width="44" height="28" rx="4" fill="rgba(6,182,212,0.12)" />
      <circle cx="178" cy="118" r="10" fill="rgba(56,189,248,0.2)" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
      <rect x="156" y="136" width="44" height="6" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="156" y="146" width="28" height="5" rx="2" fill="rgba(56,189,248,0.35)" />
      <rect x="156" y="155" width="44" height="9" rx="3" fill="rgba(14,165,233,0.35)" />

      {/* cart sidebar */}
      <rect x="216" y="96" width="92" height="72" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(56,189,248,0.15)" strokeWidth="1" />
      <rect x="224" y="104" width="60" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="224" y="114" width="76" height="1" fill="rgba(255,255,255,0.05)" />
      <rect x="224" y="118" width="44" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="224" y="127" width="36" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="224" y="136" width="52" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="224" y="148" width="76" height="1" fill="rgba(255,255,255,0.05)" />
      <rect x="224" y="152" width="40" height="7" rx="2" fill="rgba(56,189,248,0.5)" />
      <rect x="270" y="152" width="30" height="7" rx="2" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

function PreviewEcommerce() {
  return (
    <svg viewBox="0 0 320 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* sidebar */}
      <rect width="72" height="176" fill="rgba(5,46,37,0.4)" />
      <rect x="10" y="16" width="52" height="8" rx="2" fill="rgba(52,211,153,0.5)" />
      <rect x="10" y="32" width="52" height="7" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="10" y="44" width="52" height="7" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="10" y="56" width="52" height="7" rx="2" fill="rgba(52,211,153,0.2)" />
      <rect x="10" y="68" width="52" height="7" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="10" y="80" width="52" height="7" rx="2" fill="rgba(255,255,255,0.06)" />
      <rect x="10" y="92" width="52" height="7" rx="2" fill="rgba(255,255,255,0.06)" />
      {/* avatar */}
      <circle cx="36" cy="156" r="14" fill="rgba(52,211,153,0.2)" stroke="rgba(52,211,153,0.4)" strokeWidth="1" />
      <rect x="28" y="162" width="16" height="6" rx="2" fill="rgba(52,211,153,0.3)" />

      {/* main area */}
      {/* top bar */}
      <rect x="80" y="0" width="240" height="24" fill="rgba(255,255,255,0.025)" />
      <rect x="90" y="8" width="70" height="8" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="278" y="8" width="32" height="8" rx="4" fill="rgba(52,211,153,0.45)" />

      {/* stats row */}
      <rect x="80" y="32" width="52" height="40" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.2)" strokeWidth="1" />
      <rect x="88" y="40" width="30" height="6" rx="2" fill="rgba(52,211,153,0.4)" />
      <rect x="88" y="50" width="20" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="138" y="32" width="52" height="40" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.15)" strokeWidth="1" />
      <rect x="146" y="40" width="30" height="6" rx="2" fill="rgba(52,211,153,0.3)" />
      <rect x="146" y="50" width="20" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="196" y="32" width="52" height="40" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.15)" strokeWidth="1" />
      <rect x="204" y="40" width="30" height="6" rx="2" fill="rgba(52,211,153,0.3)" />
      <rect x="204" y="50" width="20" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="254" y="32" width="60" height="40" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(52,211,153,0.15)" strokeWidth="1" />
      <rect x="262" y="40" width="36" height="6" rx="2" fill="rgba(52,211,153,0.3)" />
      <rect x="262" y="50" width="22" height="5" rx="2" fill="rgba(255,255,255,0.1)" />

      {/* chart area */}
      <rect x="80" y="80" width="152" height="90" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(52,211,153,0.15)" strokeWidth="1" />
      <rect x="88" y="88" width="50" height="6" rx="2" fill="rgba(255,255,255,0.12)" />
      {/* bar chart */}
      <rect x="92" y="152" width="12" height="16" rx="2" fill="rgba(52,211,153,0.3)" />
      <rect x="108" y="140" width="12" height="28" rx="2" fill="rgba(52,211,153,0.4)" />
      <rect x="124" y="132" width="12" height="36" rx="2" fill="rgba(52,211,153,0.5)" />
      <rect x="140" y="120" width="12" height="48" rx="2" fill="rgba(52,211,153,0.65)" />
      <rect x="156" y="128" width="12" height="40" rx="2" fill="rgba(52,211,153,0.55)" />
      <rect x="172" y="112" width="12" height="56" rx="2" fill="rgba(52,211,153,0.7)" />
      <rect x="188" y="100" width="12" height="68" rx="2" fill="rgba(52,211,153,0.8)" />
      <line x1="88" y1="168" x2="222" y2="168" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {/* product list */}
      <rect x="240" y="80" width="74" height="90" rx="5" fill="rgba(255,255,255,0.03)" stroke="rgba(52,211,153,0.12)" strokeWidth="1" />
      <rect x="248" y="88" width="44" height="6" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="248" y="100" width="58" height="12" rx="3" fill="rgba(52,211,153,0.1)" />
      <rect x="248" y="102" width="24" height="8" rx="2" fill="rgba(52,211,153,0.25)" />
      <rect x="276" y="102" width="30" height="4" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="248" y="116" width="58" height="12" rx="3" fill="rgba(52,211,153,0.08)" />
      <rect x="248" y="118" width="24" height="8" rx="2" fill="rgba(52,211,153,0.2)" />
      <rect x="248" y="132" width="58" height="12" rx="3" fill="rgba(52,211,153,0.06)" />
      <rect x="248" y="134" width="24" height="8" rx="2" fill="rgba(52,211,153,0.18)" />
      <rect x="248" y="148" width="58" height="16" rx="3" fill="rgba(52,211,153,0.3)" />
      <rect x="256" y="153" width="42" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}

const projects = [
  {
    title: "IT Recruitment Website",
    description:
      "A full-stack IT job platform with role-based access for candidates, HR, and admins. JWT auth, automated email notifications, and CronJob-based job alerts.",
    tags: ["NestJS", "MongoDB", "ReactJS", "Tailwind CSS", "Redux"],
    github: "https://github.com/Phuoctryhard/IT-JOB",
    live: "https://vietlamit.netlify.app/",
    gradient: "from-violet-900/40 via-purple-950/30 to-[#080812]",
    accent: "#a855f7",
    Preview: PreviewRecruitment,
  },
  {
    title: "Medicare Central",
    description:
      "E-commerce platform for medicines with a customer storefront and admin panel. Features JWT auth, React Query caching, and full SEO optimization.",
    tags: ["ReactJS", "Tailwind CSS", "React Query", "React Hook Form", "REST API"],
    github: "https://github.com/Phuoctryhard/PBL6_FE",
    live: null,
    gradient: "from-blue-900/40 via-cyan-950/30 to-[#080812]",
    accent: "#38bdf8",
    Preview: PreviewMedicare,
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured system built at Openverse.Tech — storefront, admin dashboard, NestJS backend with AI chatbot (n8n + RAG), SPU/SKU inventory, and PayOS checkout.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript", "PayOS"],
    github: null,
    live: null,
    gradient: "from-emerald-900/40 via-teal-950/30 to-[#080812]",
    accent: "#34d399",
    Preview: PreviewEcommerce,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex items-end justify-between mb-12"
        >
          <div className="flex flex-col gap-1">
            <p className="section-label">+ Featured Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Some Things I&apos;ve Built
            </h2>
          </div>
          <a
            href="#projects"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#a855f7] transition-colors font-medium"
          >
            View All Projects <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.13, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden shine-card group flex flex-col"
            >
              {/* Preview */}
              <div className={`relative h-44 bg-gradient-to-br ${project.gradient} border-b border-white/[0.06] overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0">
                  <project.Preview />
                </div>
                {(project.live || project.github) && (
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-7 h-7 glass rounded-lg flex items-center justify-center">
                      <ExternalLink size={12} className="text-slate-300" />
                    </div>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3
                  className="font-bold text-base leading-snug"
                  style={{ color: project.accent }}
                >
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-1 border-t border-white/[0.05]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <IconGithub /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#a855f7] transition-colors"
                    >
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-xs text-slate-600 italic">Private project</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
