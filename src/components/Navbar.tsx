"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "#home"       },
  { label: "About",      href: "#about"      },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Blog",       href: "#blog"       },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [active,    setActive]    = useState("Home");
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          const label = navLinks.find((l) => l.href === `#${visible.target.id}`)?.label;
          if (label) setActive(label);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-2xl shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => setActive("Home")}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#a855f7] font-bold text-white text-base glow-sm"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          NP
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                active === link.label
                  ? "text-white active"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: "0 0 22px rgba(124,58,237,.6)" }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white text-sm font-semibold transition-all duration-300"
          >
            Let&apos;s Talk <ArrowUpRight size={14} />
          </motion.a>

          <button
            className="md:hidden w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(link.label);
                    setMenuOpen(false);
                    setTimeout(() => {
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white text-sm font-semibold text-center"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
