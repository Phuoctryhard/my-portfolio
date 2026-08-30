"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = ["Full Stack Developer", "React Developer", "Node.js Developer", "UI/UX Enthusiast"];

function TypewriterRoles() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => { setPause(false); setDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }
    const current = ROLES[roleIdx];
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        setPause(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }
    }
  }, [displayed, deleting, pause, roleIdx]);

  return (
    <span>
      {displayed}
      <span
        style={{
          display: "inline-block", width: 3, height: "0.85em",
          marginLeft: 3, verticalAlign: "middle", borderRadius: 2,
          background: "linear-gradient(180deg,#c084fc,#7c3aed)",
          animation: "cursor-blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

const CODE_LINES = [
  { tokens: [{ t: "const ", c: "#c084fc" }, { t: "dev", c: "#e2e8f0" }, { t: " = {", c: "#94a3b8" }] },
  { tokens: [{ t: "  name", c: "#7dd3fc" }, { t: ": ", c: "#94a3b8" }, { t: '"Ngô Phước"', c: "#86efac" }] },
  { tokens: [{ t: "  role", c: "#7dd3fc" }, { t: ": ", c: "#94a3b8" }, { t: '"FullStack Dev"', c: "#86efac" }] },
  { tokens: [{ t: "  love", c: "#7dd3fc" }, { t: ": ", c: "#94a3b8" }, { t: "() =>", c: "#c084fc" }, { t: " 🚀", c: "#e2e8f0" }] },
  { tokens: [{ t: "}", c: "#94a3b8" }] },
  { tokens: [{ t: "dev", c: "#e2e8f0" }, { t: ".love()", c: "#fbbf24" }] },
];

const OUTPUT_LINES = [
  { text: '> "Hello, World! 🌍"',      color: "#86efac", delay: 0   },
  { text: '> status: "Ready to build"', color: "#7dd3fc", delay: 400 },
  { text: '> passion: 100% 🔥',         color: "#fbbf24", delay: 800 },
];

function FloatingCodeCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount]       = useState(0);
  const [done, setDone]                 = useState(false);
  const [running, setRunning]           = useState(false);
  const [outputIdx, setOutputIdx]       = useState(-1);
  const [manualRun, setManualRun]       = useState(false);

  /* auto-type logic */
  useEffect(() => {
    if (running || manualRun) return;
    if (done) {
      const t = setTimeout(() => {
        setVisibleLines(0); setCharCount(0); setDone(false); setOutputIdx(-1);
      }, 3500);
      return () => clearTimeout(t);
    }
    if (visibleLines >= CODE_LINES.length) { setDone(true); return; }
    const fullText = CODE_LINES[visibleLines].tokens.map(tk => tk.t).join("");
    if (charCount < fullText.length) {
      const t = setTimeout(() => setCharCount(c => c + 1), 42);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => { setVisibleLines(l => l + 1); setCharCount(0); }, 110);
      return () => clearTimeout(t);
    }
  }, [visibleLines, charCount, done, running, manualRun]);

  /* output reveal after done */
  useEffect(() => {
    if (!done) return;
    OUTPUT_LINES.forEach((_, i) => {
      const t = setTimeout(() => setOutputIdx(i), OUTPUT_LINES[i].delay + 200);
      return () => clearTimeout(t);
    });
  }, [done]);

  const handleRun = () => {
    setManualRun(true);
    setVisibleLines(CODE_LINES.length);
    setCharCount(0);
    setDone(true);
    setOutputIdx(-1);
    setRunning(true);
    setTimeout(() => setRunning(false), 100);
    OUTPUT_LINES.forEach((_, i) => {
      setTimeout(() => setOutputIdx(i), OUTPUT_LINES[i].delay + 200);
    });
  };

  const renderLine = (lineIdx: number) => {
    const line = CODE_LINES[lineIdx];
    const fullText = line.tokens.map(tk => tk.t).join("");
    const isActive = lineIdx === visibleLines && !done;
    const chars = isActive ? charCount : fullText.length;
    let rendered = 0;
    return (
      <div
        key={lineIdx}
        style={{
          display: "flex", alignItems: "center", minHeight: 20,
          borderRadius: 4, padding: "0 4px",
          background: isActive ? "rgba(168,85,247,0.08)" : "transparent",
          transition: "background 0.2s",
        }}
      >
        <span style={{ color: "#334155", fontSize: 9, marginRight: 10, userSelect: "none", minWidth: 10, textAlign: "right" }}>
          {lineIdx + 1}
        </span>
        <span>
          {line.tokens.map((tk, ti) => {
            const start = rendered;
            rendered += tk.t.length;
            const slice = tk.t.slice(0, Math.max(0, chars - start));
            return slice ? <span key={ti} style={{ color: tk.c }}>{slice}</span> : null;
          })}
          {isActive && (
            <span style={{
              display: "inline-block", width: 2, height: "0.9em", verticalAlign: "middle",
              background: "#a855f7", animation: "cursor-blink 0.8s step-end infinite", borderRadius: 1,
            }} />
          )}
        </span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6 }}
      className="absolute float-animation"
      style={{ top: "36%", left: "-2%", zIndex: 4, minWidth: 220 }}
    >
      <div style={{
        background: "rgba(8,6,24,0.95)",
        border: "1px solid rgba(168,85,247,0.28)",
        borderRadius: 14,
        boxShadow: "0 8px 40px rgba(0,0,0,0.65), 0 0 24px rgba(124,58,237,0.18)",
        overflow: "hidden",
        backdropFilter: "blur(16px)",
      }}>
        {/* Title bar */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "7px 10px",
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
            <span style={{ color: "#475569", fontSize: 10, marginLeft: 5, fontFamily: "monospace" }}>phuoc.ts</span>
          </div>
          {/* Run button */}
          <button
            onClick={handleRun}
            style={{
              display: "flex", alignItems: "center", gap: 3,
              padding: "2px 8px", borderRadius: 5, border: "none", cursor: "pointer",
              background: done ? "rgba(34,197,94,0.15)" : "rgba(168,85,247,0.15)",
              color: done ? "#4ade80" : "#c084fc",
              fontSize: 9, fontWeight: 700, fontFamily: "monospace",
              transition: "all 0.2s",
            }}
          >
            <span style={{ fontSize: 8 }}>▶</span> Run
          </button>
        </div>

        {/* Code */}
        <div style={{ padding: "8px 10px 6px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.75, letterSpacing: 0.2 }}>
          {Array.from({ length: Math.min(visibleLines + (done ? 0 : 1), CODE_LINES.length) }, (_, i) =>
            renderLine(i)
          )}
        </div>

        {/* Output console */}
        {done && (
          <div style={{
            margin: "0 10px 10px",
            background: "rgba(0,0,0,0.35)",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "7px 10px",
            fontFamily: "monospace", fontSize: 10, lineHeight: 1.8,
          }}>
            <div style={{ color: "#334155", fontSize: 9, marginBottom: 3 }}>// output</div>
            {OUTPUT_LINES.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: outputIdx >= i ? 1 : 0, x: outputIdx >= i ? 0 : -6 }}
                transition={{ duration: 0.3 }}
                style={{ color: o.color }}
              >
                {o.text}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function IconGithub() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>;
}
function IconLinkedin() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function IconTwitter() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const socials = [
  { Icon: IconGithub,  href: "https://github.com/Phuoctryhard", label: "GitHub"   },
  { Icon: IconLinkedin, href: "#",                               label: "LinkedIn" },
  { Icon: IconTwitter,  href: "#",                               label: "Twitter"  },
  { Icon: () => <Mail size={16} />, href: "mailto:ngodinhphuoc100@gmail.com", label: "Email" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden" style={{ minHeight: "calc(100vh - 64px)", paddingTop: 0 }}>

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse 55% 70% at 65% 55%, rgba(88,28,220,0.2) 0%, transparent 60%)," +
            "radial-gradient(ellipse 40% 50% at 90% 30%, rgba(124,58,237,0.12) 0%, transparent 55%)",
        }} />
        <div className="dot-grid absolute inset-0 opacity-25" />
      </div>

      {/* ── Fixed social sidebar — only 2xl+ ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center gap-3"
      >
        {socials.map(({ Icon, href, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
            className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-[#a855f7] transition-colors duration-200"
          >
            <Icon />
          </a>
        ))}
        <div className="w-px h-12 mt-1" style={{ background: "linear-gradient(to bottom, rgba(168,85,247,0.4), transparent)" }} />
      </motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center" style={{ minHeight: "calc(100vh - 64px)" }}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 items-center">

          {/* ═══ LEFT ═══ */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-4 order-2 lg:order-1 pb-8 lg:pb-0"
          >
            <motion.p variants={fadeUp} className="text-[#a855f7] font-medium" style={{ fontSize: "0.9rem" }}>
              Hello, I&apos;m
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-0.5">
              <h1
                className="font-bold text-white"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)", lineHeight: 1.05, fontFamily: "var(--font-space-grotesk)" }}
              >
                Ngô Phước
              </h1>
              <h2
                className="font-bold"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.1,
                  fontFamily: "var(--font-space-grotesk)",
                  background: "linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                <TypewriterRoles />
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed" style={{ fontSize: "0.9rem", maxWidth: 360 }}>
              I build exceptional digital experiences<br />with modern technologies.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(124,58,237,.65)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold text-sm"
                style={{ background: "linear-gradient(135deg, #7c3aed, #a855f7)", boxShadow: "0 4px 20px rgba(124,58,237,0.4)" }}
              >
                View My Work <ArrowRight size={15} />
              </motion.a>
              <motion.a
                href="/CV.pdf"
                download="NgoPhUoc_CV.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                Download CV <Download size={15} />
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-0.5 pt-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                <span className="text-green-400 text-sm font-medium">Available for work</span>
              </div>
              <span className="text-slate-500 text-sm pl-4">Freelance / Full-time</span>
            </motion.div>
          </motion.div>

          {/* ═══ RIGHT — Photo ═══ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            style={{ height: "calc(100vh - 100px)", maxHeight: 600, minHeight: 380 }}
          >
            {/* Purple glow behind */}
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse 80% 90% at 60% 60%, rgba(109,40,217,0.22) 0%, transparent 65%)",
              pointerEvents: "none",
            }} />

            {/* Dot grid */}
            <div className="dot-grid absolute right-4 top-12 w-32 h-32 opacity-50 pointer-events-none rounded-lg" />

            {/* Person */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/CVmain.png"
              alt="Ngo Dinh Phuoc"
              style={{
                height: "100%",
                width: "auto",
                maxWidth: "100%",
                objectFit: "contain",
                objectPosition: "bottom center",
                display: "block",
                position: "relative",
                zIndex: 2,
              }}
            />

            {/* Badge — 3+ Years */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="absolute glass rounded-2xl px-4 py-3 flex flex-col items-start float-animation"
              style={{
                top: "18%", left: "8%", zIndex: 4,
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)",
              }}
            >
              <span className="text-2xl font-bold text-white leading-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>3+</span>
              <span className="text-[11px] text-slate-400 mt-1 whitespace-nowrap">Years Experience</span>
            </motion.div>

{/* Badge — 20+ Projects */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute glass rounded-2xl px-4 py-3 flex flex-col items-start"
              style={{
                bottom: "14%", right: "4%", zIndex: 4,
                boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)",
              }}
            >
              <span className="text-2xl font-bold text-white leading-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>20+</span>
              <span className="text-[11px] text-slate-400 mt-1 whitespace-nowrap">Projects Completed</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
