"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Kategori Layanan", href: "#kategori" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Simulasi Pendapatan", href: "#simulasi" },
  { label: "Jaminan Keamanan", href: "#keamanan" },
  { label: "Tanya Jawab", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-surface-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0" aria-label="GUNAIN Beranda">
          <Image
            src="/logo.png"
            alt="GUNAIN"
            width={130}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-body rounded-lg
                           hover:bg-primary-subtle hover:text-title transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#hero-search"
            className="rounded-lg border-2 border-primary-deep px-5 py-2 text-sm font-semibold
                       text-primary-deep hover:bg-primary-deep hover:text-white
                       transition-all duration-200 hover:-translate-y-0.5
                       hover:shadow-[0_4px_14px_rgba(18,179,18,0.25)]"
          >
            Mulai Sewa
          </a>
          <a
            href="#simulasi"
            className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white
                       hover:bg-accent-hover transition-all duration-200
                       hover:scale-[1.02] hover:shadow-[0_4px_14px_rgba(242,96,34,0.3)]"
          >
            Daftar Jadi Mitra
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-title hover:bg-primary-subtle transition-colors"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-surface-border overflow-hidden"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-body
                             rounded-lg hover:bg-primary-subtle hover:text-title transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="#hero-search"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border-2 border-primary-deep px-5 py-3 text-center
                             text-sm font-semibold text-primary-deep
                             hover:bg-primary-deep hover:text-white transition-colors"
                >
                  Mulai Sewa
                </a>
                <a
                  href="#simulasi"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-accent px-5 py-3 text-center
                             text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
                >
                  Daftar Jadi Mitra
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
