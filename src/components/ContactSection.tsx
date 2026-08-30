"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

function IconGithub() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>;
}
function IconLinkedin() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
}
function IconTwitter() {
  return <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const contactItems = [
  { Icon: Mail,    label: "Email",        value: "ngodinhphuoc100@gmail.com", href: "mailto:ngodinhphuoc100@gmail.com" },
  { Icon: Phone,   label: "Phone",        value: "+84 865 446 276",            href: "tel:+84865446276"               },
  { Icon: MapPin,  label: "Location",     value: "Da Nang City, Vietnam",      href: null                             },
  { Icon: Clock,   label: "Availability", value: "Available for freelance / full-time", href: null                   },
];

const socials = [
  { Icon: IconGithub,  href: "https://github.com/Phuoctryhard", label: "GitHub"   },
  { Icon: IconLinkedin, href: "#",                              label: "LinkedIn"  },
  { Icon: IconTwitter,  href: "#",                              label: "Twitter"   },
  { Icon: () => <Mail size={16} />, href: "mailto:ngodinhphuoc100@gmail.com", label: "Email" },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div style={{
          position: "absolute",
          top: "30%", left: "10%",
          width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col gap-1 mb-12"
        >
          <p className="section-label">+ Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let&apos;s Work Together
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Have a project in mind or want to collaborate?<br />
            Feel free to reach out. I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr_300px] gap-8">

          {/* ── Left: Info ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="flex flex-col gap-5"
          >
            {contactItems.map(({ Icon, label, value, href }) => (
              <motion.div key={label} variants={fadeUp} className="flex items-start gap-4">
                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={16} className="text-[#a855f7]" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-slate-500 font-medium">{label}</span>
                  {href ? (
                    <a href={href} className="text-sm text-slate-200 hover:text-[#a855f7] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-200">{value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social icons */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-[#a855f7] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Center: Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="glass rounded-2xl p-7 flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-300">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="contact-input"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-300">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="contact-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-300">Subject</label>
              <input
                type="text"
                placeholder="Project Inquiry"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="contact-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-300">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="contact-input resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={sending || sent}
              whileHover={{ scale: 1.02, boxShadow: "0 0 28px rgba(124,58,237,.6)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                background: sent
                  ? "linear-gradient(135deg, #22c55e, #16a34a)"
                  : "linear-gradient(135deg, #7c3aed, #a855f7)",
                opacity: sending ? 0.8 : 1,
              }}
            >
              {sent ? "Message Sent!" : sending ? "Sending..." : <>Send Message <ArrowRight size={15} /></>}
            </motion.button>
          </motion.form>

          {/* ── Right: Decorative envelope ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-72 flex items-center justify-center">
              {/* Glow orb */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(ellipse 80% 80% at 50% 60%, rgba(109,40,217,0.35) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* Envelope SVG */}
              <svg
                viewBox="0 0 200 160"
                width="200"
                height="160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 0 32px rgba(168,85,247,0.6))" }}
              >
                {/* Envelope body */}
                <rect x="10" y="30" width="180" height="120" rx="16" fill="rgba(88,28,220,0.25)" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" />
                {/* Envelope flap */}
                <path d="M10 46 L100 100 L190 46" stroke="rgba(168,85,247,0.6)" strokeWidth="1.5" fill="none" />
                {/* Sparkles */}
                <circle cx="160" cy="20" r="2.5" fill="#a855f7" opacity="0.8" />
                <circle cx="40" cy="15" r="1.5" fill="#c084fc" opacity="0.6" />
                <circle cx="175" cy="55" r="1.5" fill="#7c3aed" opacity="0.7" />
                <circle cx="30" cy="100" r="2" fill="#a855f7" opacity="0.5" />
                {/* Stars */}
                <path d="M155 12 L156.5 16 L160 16 L157.5 18.5 L158.5 22 L155 20 L151.5 22 L152.5 18.5 L150 16 L153.5 16Z" fill="#c084fc" opacity="0.7" />
                <path d="M35 8 L36 11 L39 11 L37 13 L38 16 L35 14.5 L32 16 L33 13 L31 11 L34 11Z" fill="#a855f7" opacity="0.5" />
              </svg>

              {/* Stars in background */}
              <div style={{ position: "absolute", inset: 0 }} className="pointer-events-none">
                {[
                  { top: "10%", left: "15%", size: 2 },
                  { top: "25%", right: "10%", size: 1.5 },
                  { bottom: "20%", left: "10%", size: 2 },
                  { bottom: "10%", right: "20%", size: 1.5 },
                  { top: "50%", left: "5%", size: 1 },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="absolute rounded-full bg-[#c084fc]"
                    style={{ ...s, width: s.size, height: s.size, opacity: 0.6 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
