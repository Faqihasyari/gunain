"use client";

import { useState } from "react";
import { Package, Building2, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OptionData {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Package;
  description: string;
  benefits: string[];
  examples: string[];
  ctaText: string;
}

const interactiveOptions: OptionData[] = [
  {
    id: "barang",
    title: "Jasa Sewa Barang",
    subtitle: "Peralatan & Gadget Harian",
    icon: Package,
    description:
      "Temukan berbagai macam barang berkualitas tinggi untuk kebutuhan temporer Anda—mulai dari kamera profesional, smartphone, gaun pesta, hingga perlengkapan outdoor.",
    benefits: [
      "Dilindungi asuransi kerusakan dan kehilangan selama masa sewa",
      "Proses verifikasi cepat & aman dengan Rekening Bersama",
      "Pilihan durasi fleksibel (harian, mingguan, bulanan)",
    ],
    examples: ["Kamera & Lensa Mirrorless", "Smartphone Flagship", "Busana & Gaun Pesta", "Peralatan Camping & Outdoor"],
    ctaText: "Jelajahi Katalog Barang",
  },
  {
    id: "properti",
    title: "Jasa Sewa Properti",
    subtitle: "Ruang & Tempat Fleksibel",
    icon: Building2,
    description:
      "Solusi sewa ruang tanpa ikatan kontrak tahunan yang rumit. Ideal untuk UMKM, kreator konten, penyelenggara event, atau kebutuhan transit sementara.",
    benefits: [
      "Tanpa uang jaminan sewa tahunan yang memberatkan",
      "Lokasi strategis di berbagai kota besar di Indonesia",
      "Siap pakai dengan fasilitas pendukung lengkap",
    ],
    examples: ["Gudang Transit UMKM", "Studio Foto & Konten", "Ruko Pop-up Event", "Ruang Meeting Harian"],
    ctaText: "Jelajahi Ruang & Properti",
  },
];

export default function InteractiveDecisionSection() {
  const [selectedId, setSelectedId] = useState<string | null>("barang");
  const selectedOption = interactiveOptions.find((opt) => opt.id === selectedId);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-primary-subtle/20 to-white relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        
        {/* Header ala sketsa: "Mau Gunain Apa Hari Ini?" */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft text-primary-deep text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Sparkles size={14} /> Pilihan Cepat &amp; Praktis
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-title tracking-tight"
          >
            Mau Gunain Apa Hari Ini?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-body max-w-lg mx-auto text-sm md:text-base"
          >
            Pilih kategori layanan di bawah untuk melihat detail penawaran dan rekomendasi terbaik dari Gunain.
          </motion.p>
        </div>

        {/* 2 Buletan Pilihan */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-10">
          {interactiveOptions.map((opt) => {
            const Icon = opt.icon;
            const isSelected = selectedId === opt.id;

            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setSelectedId(isSelected ? null : opt.id)}
              >
                <div
                  className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    isSelected
                      ? "bg-primary-deep text-white shadow-lg shadow-primary-deep/30 ring-4 ring-primary/50 scale-105"
                      : "bg-white text-title border-2 border-primary/40 group-hover:border-primary-deep group-hover:bg-primary-soft/30"
                  }`}
                >
                  <Icon size={36} className={`transition-transform duration-300 ${isSelected ? "scale-110" : "group-hover:scale-110"}`} />
                </div>
                <span className={`mt-3 font-bold text-base md:text-lg transition-colors ${isSelected ? "text-primary-deep" : "text-title"}`}>
                  {opt.title}
                </span>
                <span className="text-xs text-muted font-medium mt-0.5">
                  {isSelected ? "Ketuk untuk menutup" : "Ketuk untuk detail"}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Card Expand di Bawah Buletan */}
        <AnimatePresence mode="wait">
          {selectedOption && (
            <motion.div
              key={selectedOption.id}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-2xl border-2 border-primary/40 shadow-xl p-6 md:p-8 relative">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-soft/30 rounded-bl-full pointer-events-none" />

                <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-deep bg-primary-soft px-3 py-1 rounded-md">
                      {selectedOption.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-title mt-3 mb-3">
                      {selectedOption.title}
                    </h3>
                    <p className="text-body text-sm md:text-base leading-relaxed mb-6">
                      {selectedOption.description}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {selectedOption.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-title font-medium">
                          <CheckCircle2 size={18} className="text-primary-deep flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="#kategori"
                      className="inline-flex items-center gap-2 bg-primary-deep text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors shadow-sm"
                    >
                      {selectedOption.ctaText}
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* Right side: Example tags / card preview */}
                  <div className="bg-primary-subtle/40 rounded-xl p-5 border border-primary/20">
                    <h4 className="text-sm font-bold text-title uppercase tracking-wider mb-4">
                      Contoh Kategori Populer
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedOption.examples.map((ex, idx) => (
                        <div key={idx} className="bg-white p-3 rounded-lg border border-surface-border shadow-sm text-xs md:text-sm font-semibold text-title flex items-center justify-between">
                          <span>{ex}</span>
                          <span className="w-2 h-2 rounded-full bg-primary-deep" />
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-primary/20 text-xs text-muted text-center font-medium">
                      Semua penyedia terverifikasi resmi oleh tim Gunain.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
