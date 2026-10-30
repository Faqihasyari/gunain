"use client";

import { useState } from "react";
import { Search, MapPin, Package, Building2 } from "lucide-react";
import { ShieldCheck, CreditCard, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    id: "barang",
    label: "Barang",
    icon: Package,
    placeholder: "Kamera, smartphone, gaun pesta ...",
    suggestions: ["Kamera Mirrorless", "Smartphone", "Gaun Pesta", "Tenda Camping"],
  },
  {
    id: "ruang",
    label: "Ruang & Properti",
    icon: Building2,
    placeholder: "Gudang transit, studio foto ...",
    suggestions: ["Gudang Mini", "Studio Foto", "Ruko Pop-up", "Ruang Meeting"],
  },
] as const;

const trustBadges = [
  { icon: ShieldCheck, text: "Rekening Bersama Penjamin" },
  { icon: UserCheck, text: "Verifikasi Identitas Resmi" },
  { icon: CreditCard, text: "Pilihan Cicilan Terdaftar OJK" },
];

export default function HeroSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const current = categories[activeCategory];

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
    >
      {/* Background decoration: soft gradient circles for energy */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary-soft/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary-subtle/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full bg-primary-soft
                        px-5 py-2 text-sm font-semibold text-title"
          >
            <ShieldCheck size={16} className="text-primary-deep" />
            Platform Sewa Terpercaya &amp; Berasuransi
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-4xl font-extrabold leading-tight tracking-tight
                     text-title md:text-5xl lg:text-[56px] lg:leading-[1.12]"
        >
          Solusi Sewa Serba Ada
          <br />
          <span className="text-primary-deep">di Seluruh Indonesia</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-center text-lg text-body"
        >
          Akses praktis penyewaan barang gaya hidup, ruang transit, dan layanan jasa terpercaya
          dengan jaminan keamanan transaksi serta opsi pembayaran berkala.
        </motion.p>

        {/* Search bar */}
        <motion.div
          id="hero-search"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-primary/60
                     bg-surface-card shadow-lg shadow-primary/5 overflow-hidden"
        >
          {/* Category tabs */}
          <div className="flex border-b border-surface-border">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = idx === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold
                              transition-colors ${
                                isActive
                                  ? "bg-primary text-title"
                                  : "text-body hover:bg-primary-subtle"
                              }`}
                  aria-pressed={isActive}
                >
                  <Icon size={16} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Input row */}
          <div className="flex flex-col sm:flex-row items-stretch">
            {/* Search input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b sm:border-b-0 sm:border-r border-surface-border">
              <Search size={18} className="text-muted flex-shrink-0" />
              <input
                type="text"
                placeholder={current.placeholder}
                aria-label="Cari kebutuhan sewa"
                className="w-full bg-transparent text-sm text-title placeholder:text-muted
                           focus:outline-none"
              />
            </div>

            {/* Region selector */}
            <div className="flex items-center gap-2 px-4 py-3 border-b sm:border-b-0 sm:border-r border-surface-border sm:w-52">
              <MapPin size={18} className="text-muted flex-shrink-0" />
              <select
                aria-label="Pilih wilayah"
                className="w-full bg-transparent text-sm text-title focus:outline-none cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>
                  Seluruh Indonesia
                </option>
                <option value="jakarta">Jakarta</option>
                <option value="surabaya">Surabaya</option>
                <option value="bandung">Bandung</option>
                <option value="yogyakarta">Yogyakarta</option>
                <option value="bali">Bali</option>
                <option value="medan">Medan</option>
                <option value="makassar">Makassar</option>
                <option value="semarang">Semarang</option>
              </select>
            </div>

            {/* Search button */}
            <button
              className="bg-primary-deep text-white px-6 py-3 text-sm font-semibold
                         hover:bg-primary-dark transition-colors flex items-center justify-center gap-2
                         sm:rounded-none"
              onClick={() => {
                /* Search bar is demonstrative for landing page: scrolls to categories */
                document.getElementById("kategori")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Search size={16} />
              Cari
            </button>
          </div>

          {/* Popular suggestions */}
          <div className="px-4 py-3 flex flex-wrap gap-2 bg-primary-subtle/30">
            <span className="text-xs text-muted font-medium">Populer:</span>
            {current.suggestions.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-full bg-primary-soft/60 text-title
                           font-medium cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.text} className="flex items-center gap-2 text-sm text-body font-medium">
                <Icon size={18} className="text-primary-deep" />
                {badge.text}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
