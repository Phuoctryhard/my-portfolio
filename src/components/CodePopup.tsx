"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const CODE_LINES = [
  { tokens: [{ t: "async ", c: "#c084fc" }, { t: "function ", c: "#c084fc" }, { t: "hire", c: "#fbbf24" }, { t: "(", c: "#e2e8f0" }, { t: "dev", c: "#f97316" }, { t: ") {", c: "#e2e8f0" }] },
  { tokens: [{ t: "  const ", c: "#c084fc" }, { t: "skills", c: "#7dd3fc" }, { t: " = ", c: "#94a3b8" }, { t: "await ", c: "#c084fc" }, { t: "dev", c: "#f97316" }, { t: ".getSkills()", c: "#fbbf24" }] },
  { tokens: [{ t: "  // React · Next.js · NestJS ✨", c: "#475569" }] },
  { tokens: [{ t: "  if ", c: "#c084fc" }, { t: "(skills", c: "#7dd3fc" }, { t: ".level ", c: "#e2e8f0" }, { t: "=== ", c: "#c084fc" }, { t: '"expert"', c: "#86efac" }, { t: ") {", c: "#e2e8f0" }] },
  { tokens: [{ t: "    return ", c: "#c084fc" }, { t: "{ decision", c: "#7dd3fc" }, { t: ": ", c: "#94a3b8" }, { t: '"hired! 🎉"', c: "#86efac" }, { t: " }", c: "#e2e8f0" }] },
  { tokens: [{ t: "  }", c: "#e2e8f0" }] },
  { tokens: [{ t: "}", c: "#e2e8f0" }] },
  { tokens: [{ t: "hire", c: "#fbbf24" }, { t: "(", c: "#e2e8f0" }, { t: "ngoPhuoc", c: "#f97316" }, { t: ")", c: "#e2e8f0" }] },
];

const OUTPUT_LINES = [
  { text: "> Scanning skills...  ⚡",    color: "#94a3b8", delay: 0    },
  { text: '> level: "expert" ✅',        color: "#86efac", delay: 600  },
  { text: '> decision: "hired! 🎉"',     color: "#fbbf24", delay: 1100 },
  { text: "> start: immediately 🚀",     color: "#c084fc", delay: 1600 },
];

export default function CodePopup() {
  const [visible, setVisible]         = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount]     = useState(0);
  const [done, setDone]               = useState(false);
  const [outputIdx, setOutputIdx]     = useState(-1);

  /* appear after 2s */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  /* auto-hide 4s after output finishes, then reset & show again */
  useEffect(() => {
    if (outputIdx >= OUTPUT_LINES.length - 1) {
      const t = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setVisibleLines(0);
          setCharCount(0);
          setDone(false);
          setOutputIdx(-1);
          setVisible(true);
        }, 5000);
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [outputIdx]);

  /* typewriter */
  useEffect(() => {
    if (!visible || done) return;
    if (visibleLines >= CODE_LINES.length) { setDone(true); return; }
    const fullText = CODE_LINES[visibleLines].tokens.map(tk => tk.t).join("");
    if (charCount < fullText.length) {
      const t = setTimeout(() => setCharCount(c => c + 1), 40);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => { setVisibleLines(l => l + 1); setCharCount(0); }, 100);
      return () => clearTimeout(t);
    }
  }, [visible, visibleLines, charCount, done]);

  /* output reveal */
  useEffect(() => {
    if (!done) return;
    OUTPUT_LINES.forEach((o, i) => {
      const t = setTimeout(() => setOutputIdx(i), o.delay + 300);
      return () => clearTimeout(t);
    });
  }, [done]);

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
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0,  scale: 1    }}
          exit={{   opacity: 0, y: 16,  scale: 0.95 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: "fixed",
            bottom: 28, right: 28,
            zIndex: 999,
            minWidth: 230,
          }}
        >
          <div style={{
            background: "rgba(8,6,24,0.96)",
            border: "1px solid rgba(168,85,247,0.3)",
            borderRadius: 14,
            boxShadow: "0 8px 40px rgba(0,0,0,0.7), 0 0 28px rgba(124,58,237,0.2)",
            overflow: "hidden",
            backdropFilter: "blur(18px)",
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
              <button
                onClick={() => setVisible(false)}
                style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", fontSize: 14, lineHeight: 1, padding: "0 2px" }}
              >
                ×
              </button>
            </div>

            {/* Code */}
            <div style={{ padding: "8px 10px 6px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.75 }}>
              {Array.from({ length: Math.min(visibleLines + (done ? 0 : 1), CODE_LINES.length) }, (_, i) =>
                renderLine(i)
              )}
            </div>

            {/* Output */}
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
      )}
    </AnimatePresence>
  );
}
