"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

function ThumbReact() {
  return (
    <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* bg glow */}
      <ellipse cx="160" cy="80" rx="120" ry="60" fill="rgba(124,58,237,0.08)" />
      {/* component tree */}
      {/* App */}
      <rect x="120" y="20" width="80" height="28" rx="6" fill="rgba(124,58,237,0.35)" stroke="rgba(168,85,247,0.5)" strokeWidth="1" />
      <rect x="130" y="28" width="42" height="6" rx="2" fill="rgba(255,255,255,0.3)" />
      <rect x="130" y="36" width="26" height="4" rx="1" fill="rgba(168,85,247,0.5)" />
      {/* connector line */}
      <line x1="160" y1="48" x2="160" y2="60" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="80" y1="60" x2="240" y2="60" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" />
      <line x1="80" y1="60" x2="80" y2="72" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="160" y1="60" x2="160" y2="72" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="240" y1="60" x2="240" y2="72" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" strokeDasharray="3 2" />
      {/* Navbar */}
      <rect x="36" y="72" width="88" height="26" rx="5" fill="rgba(109,40,217,0.3)" stroke="rgba(168,85,247,0.35)" strokeWidth="1" />
      <rect x="44" y="79" width="40" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="44" y="87" width="24" height="4" rx="1" fill="rgba(168,85,247,0.4)" />
      {/* Main */}
      <rect x="116" y="72" width="88" height="26" rx="5" fill="rgba(109,40,217,0.3)" stroke="rgba(168,85,247,0.35)" strokeWidth="1" />
      <rect x="124" y="79" width="40" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="124" y="87" width="24" height="4" rx="1" fill="rgba(168,85,247,0.4)" />
      {/* Footer */}
      <rect x="196" y="72" width="88" height="26" rx="5" fill="rgba(109,40,217,0.3)" stroke="rgba(168,85,247,0.35)" strokeWidth="1" />
      <rect x="204" y="79" width="40" height="5" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="204" y="87" width="24" height="4" rx="1" fill="rgba(168,85,247,0.4)" />
      {/* leaf nodes */}
      <line x1="80" y1="98" x2="80" y2="110" stroke="rgba(168,85,247,0.25)" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="160" y1="98" x2="130" y2="110" stroke="rgba(168,85,247,0.25)" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="160" y1="98" x2="190" y2="110" stroke="rgba(168,85,247,0.25)" strokeWidth="1.5" strokeDasharray="3 2" />
      <rect x="46" y="110" width="68" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(168,85,247,0.2)" strokeWidth="1" />
      <rect x="54" y="116" width="36" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="96" y="110" width="68" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(168,85,247,0.2)" strokeWidth="1" />
      <rect x="104" y="116" width="36" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="156" y="110" width="68" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(168,85,247,0.2)" strokeWidth="1" />
      <rect x="164" y="116" width="36" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
      {/* React logo hint */}
      <circle cx="274" cy="30" r="18" fill="rgba(124,58,237,0.1)" />
      <ellipse cx="274" cy="30" rx="16" ry="7" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" fill="none" />
      <ellipse cx="274" cy="30" rx="16" ry="7" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" fill="none" transform="rotate(60 274 30)" />
      <ellipse cx="274" cy="30" rx="16" ry="7" stroke="rgba(168,85,247,0.4)" strokeWidth="1.5" fill="none" transform="rotate(120 274 30)" />
      <circle cx="274" cy="30" r="3" fill="rgba(168,85,247,0.7)" />
    </svg>
  );
}

function ThumbTypeScript() {
  return (
    <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* editor window */}
      <rect x="20" y="12" width="280" height="136" rx="8" fill="rgba(15,23,42,0.7)" stroke="rgba(234,179,8,0.2)" strokeWidth="1" />
      {/* title bar */}
      <rect x="20" y="12" width="280" height="22" rx="8" fill="rgba(255,255,255,0.04)" />
      <rect x="20" y="26" width="280" height="8" fill="rgba(255,255,255,0.04)" />
      <circle cx="34" cy="23" r="4" fill="rgba(255,95,87,0.6)" />
      <circle cx="46" cy="23" r="4" fill="rgba(254,188,46,0.6)" />
      <circle cx="58" cy="23" r="4" fill="rgba(40,200,64,0.6)" />
      <rect x="108" y="19" width="104" height="8" rx="2" fill="rgba(255,255,255,0.06)" />

      {/* TS badge */}
      <rect x="270" y="42" width="22" height="22" rx="4" fill="rgba(59,130,246,0.7)" />
      <text x="274" y="57" fontSize="11" fontWeight="bold" fill="white" fontFamily="monospace">TS</text>

      {/* code lines */}
      <rect x="32" y="44" width="44" height="6" rx="2" fill="rgba(234,179,8,0.5)" />
      <rect x="80" y="44" width="20" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="104" y="44" width="56" height="6" rx="2" fill="rgba(134,239,172,0.4)" />
      <rect x="164" y="44" width="8" height="6" rx="2" fill="rgba(255,255,255,0.15)" />

      <rect x="40" y="56" width="36" height="6" rx="2" fill="rgba(147,197,253,0.5)" />
      <rect x="80" y="56" width="8" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="92" y="56" width="28" height="6" rx="2" fill="rgba(196,181,253,0.5)" />
      <rect x="124" y="56" width="60" height="6" rx="2" fill="rgba(134,239,172,0.35)" />

      <rect x="40" y="68" width="28" height="6" rx="2" fill="rgba(147,197,253,0.5)" />
      <rect x="72" y="68" width="8" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="84" y="68" width="20" height="6" rx="2" fill="rgba(196,181,253,0.5)" />
      <rect x="108" y="68" width="80" height="6" rx="2" fill="rgba(134,239,172,0.35)" />

      <rect x="40" y="80" width="44" height="6" rx="2" fill="rgba(147,197,253,0.5)" />
      <rect x="88" y="80" width="8" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
      <rect x="100" y="80" width="36" height="6" rx="2" fill="rgba(196,181,253,0.5)" />
      <rect x="32" y="80" width="4" height="6" rx="1" fill="rgba(255,255,255,0.08)" />

      <rect x="32" y="92" width="6" height="6" rx="1" fill="rgba(255,255,255,0.15)" />

      <rect x="32" y="104" width="52" height="6" rx="2" fill="rgba(234,179,8,0.4)" />
      <rect x="88" y="104" width="20" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="112" y="104" width="32" height="6" rx="2" fill="rgba(196,181,253,0.4)" />
      <rect x="148" y="104" width="8" height="6" rx="2" fill="rgba(255,255,255,0.15)" />

      <rect x="40" y="116" width="120" height="6" rx="2" fill="rgba(134,239,172,0.3)" />
      <rect x="40" y="128" width="80" height="6" rx="2" fill="rgba(134,239,172,0.25)" />

      {/* cursor */}
      <rect x="164" y="128" width="2" height="8" rx="1" fill="rgba(234,179,8,0.8)" />

      {/* line numbers */}
      <rect x="20" y="34" width="8" height="110" fill="rgba(255,255,255,0.02)" />
    </svg>
  );
}

function ThumbDevSetup() {
  return (
    <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* VS Code window */}
      <rect x="14" y="8" width="292" height="144" rx="8" fill="rgba(10,20,30,0.8)" stroke="rgba(20,184,166,0.2)" strokeWidth="1" />
      {/* title bar */}
      <rect x="14" y="8" width="292" height="20" rx="8" fill="rgba(255,255,255,0.04)" />
      <rect x="14" y="20" width="292" height="8" fill="rgba(255,255,255,0.04)" />
      <circle cx="26" cy="18" r="3.5" fill="rgba(255,95,87,0.5)" />
      <circle cx="36" cy="18" r="3.5" fill="rgba(254,188,46,0.5)" />
      <circle cx="46" cy="18" r="3.5" fill="rgba(40,200,64,0.5)" />

      {/* activity bar */}
      <rect x="14" y="28" width="28" height="124" fill="rgba(255,255,255,0.025)" />
      <rect x="20" y="36" width="16" height="16" rx="3" fill="rgba(20,184,166,0.35)" />
      <rect x="20" y="58" width="16" height="16" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="20" y="78" width="16" height="16" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="20" y="98" width="16" height="16" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="20" y="128" width="16" height="16" rx="3" fill="rgba(255,255,255,0.04)" />

      {/* sidebar */}
      <rect x="42" y="28" width="70" height="124" fill="rgba(255,255,255,0.02)" />
      <rect x="48" y="36" width="54" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="48" y="48" width="8" height="8" rx="1" fill="rgba(20,184,166,0.3)" />
      <rect x="60" y="50" width="36" height="5" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="52" y="60" width="8" height="8" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="64" y="62" width="28" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="52" y="72" width="8" height="8" rx="1" fill="rgba(255,255,255,0.08)" />
      <rect x="64" y="74" width="32" height="5" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="52" y="84" width="8" height="8" rx="1" fill="rgba(20,184,166,0.2)" />
      <rect x="64" y="86" width="26" height="5" rx="2" fill="rgba(20,184,166,0.3)" />
      <rect x="48" y="96" width="8" height="8" rx="1" fill="rgba(255,255,255,0.06)" />
      <rect x="60" y="98" width="40" height="5" rx="2" fill="rgba(255,255,255,0.07)" />
      <rect x="48" y="108" width="8" height="8" rx="1" fill="rgba(255,255,255,0.06)" />
      <rect x="60" y="110" width="34" height="5" rx="2" fill="rgba(255,255,255,0.07)" />

      {/* editor */}
      <rect x="112" y="28" width="194" height="104" fill="rgba(255,255,255,0.01)" />
      {/* tab */}
      <rect x="112" y="28" width="80" height="16" rx="0" fill="rgba(20,184,166,0.12)" />
      <rect x="118" y="33" width="48" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="192" y="28" width="60" height="16" rx="0" fill="rgba(255,255,255,0.03)" />
      <rect x="198" y="33" width="36" height="6" rx="2" fill="rgba(255,255,255,0.07)" />

      {/* code */}
      <rect x="120" y="52" width="50" height="5" rx="2" fill="rgba(20,184,166,0.5)" />
      <rect x="174" y="52" width="16" height="5" rx="2" fill="rgba(255,255,255,0.15)" />
      <rect x="194" y="52" width="40" height="5" rx="2" fill="rgba(134,239,172,0.4)" />
      <rect x="120" y="62" width="16" height="5" rx="2" fill="rgba(196,181,253,0.4)" />
      <rect x="140" y="62" width="60" height="5" rx="2" fill="rgba(147,197,253,0.4)" />
      <rect x="120" y="72" width="24" height="5" rx="2" fill="rgba(196,181,253,0.4)" />
      <rect x="148" y="72" width="80" height="5" rx="2" fill="rgba(134,239,172,0.35)" />
      <rect x="120" y="82" width="40" height="5" rx="2" fill="rgba(20,184,166,0.45)" />
      <rect x="164" y="82" width="50" height="5" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="120" y="92" width="100" height="5" rx="2" fill="rgba(147,197,253,0.35)" />
      <rect x="120" y="102" width="70" height="5" rx="2" fill="rgba(196,181,253,0.35)" />
      <rect x="194" y="102" width="2" height="7" rx="1" fill="rgba(20,184,166,0.8)" />
      <rect x="120" y="112" width="30" height="5" rx="2" fill="rgba(255,255,255,0.1)" />

      {/* terminal */}
      <rect x="112" y="132" width="194" height="40" fill="rgba(0,0,0,0.3)" />
      <rect x="112" y="132" width="194" height="10" fill="rgba(255,255,255,0.03)" />
      <rect x="118" y="135" width="36" height="4" rx="1" fill="rgba(20,184,166,0.4)" />
      <rect x="118" y="146" width="16" height="4" rx="1" fill="rgba(20,184,166,0.6)" />
      <rect x="138" y="146" width="80" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
      <rect x="118" y="154" width="16" height="4" rx="1" fill="rgba(20,184,166,0.6)" />
      <rect x="138" y="154" width="50" height="4" rx="1" fill="rgba(134,239,172,0.4)" />
      <rect x="192" y="154" width="2" height="5" rx="1" fill="rgba(20,184,166,0.8)" />
    </svg>
  );
}

const articles = [
  {
    category: "Web Development",
    categoryColor: "bg-violet-500/20 text-violet-300 border border-violet-500/30",
    title: "Building Scalable React Applications with Clean Architecture",
    description:
      "How to structure React apps for scalability, maintainability, and team collaboration using modern patterns.",
    date: "May 19, 2024",
    readTime: "6 min read",
    gradient: "from-violet-900/40 via-purple-950/30 to-[#080812]",
    Thumb: ThumbReact,
  },
  {
    category: "JavaScript",
    categoryColor: "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
    title: "TypeScript Best Practices for Better Code",
    description:
      "Essential TypeScript tips and patterns that will make your code more reliable and maintainable.",
    date: "May 15, 2024",
    readTime: "8 min read",
    gradient: "from-yellow-900/30 via-orange-950/20 to-[#080812]",
    Thumb: ThumbTypeScript,
  },
  {
    category: "Tools",
    categoryColor: "bg-teal-500/20 text-teal-300 border border-teal-500/30",
    title: "My Developer Setup 2024 — Tools & Extensions",
    description:
      "A complete guide to my dev environment, VS Code extensions, and productivity tools.",
    date: "May 11, 2024",
    readTime: "5 min read",
    gradient: "from-teal-900/30 via-cyan-950/20 to-[#080812]",
    Thumb: ThumbDevSetup,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 relative">
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
            <p className="section-label">+ Latest Articles</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              My Thoughts &amp; Insights
            </h2>
          </div>
          <a
            href="/blog"
            className="hidden md:inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#a855f7] transition-colors font-medium"
          >
            View All Articles <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl overflow-hidden shine-card cursor-pointer group flex flex-col"
            >
              {/* Thumbnail */}
              <div className={`relative h-40 bg-gradient-to-br ${article.gradient} border-b border-white/[0.06] overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0">
                  <article.Thumb />
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold ${article.categoryColor}`}>
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <h3 className="font-semibold text-sm text-white group-hover:text-[#a855f7] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-1">
                  {article.description}
                </p>
                <div className="flex items-center gap-3 text-slate-500 text-xs pt-2 border-t border-white/[0.05]">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="flex items-center gap-1">
                    <Clock size={10} /> {article.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
