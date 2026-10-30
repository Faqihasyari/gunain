"use client";

import Image from "next/image";
import { Camera, Building2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const pillars = [
  {
    badge: "Barang Gaya Hidup & Gadget",
    badgeColor: "bg-primary text-title",
    title: "Sewa Praktis untuk Kebutuhan Temporer",
    description:
      "Kamera mirrorless, smartphone premium, gaun pesta, tenda camping, dan perlengkapan harian lainnya. Bayar hanya selama Anda membutuhkannya.",
    highlights: ["Kamera & Lensa", "Smartphone", "Pakaian Pesta", "Peralatan Outdoor"],
    icon: Camera,
    images: [
      {
        src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
        alt: "Kamera mirrorless profesional",
      },
      {
        src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80",
        alt: "Koleksi busana formal berkualitas",
      },
    ],
  },
  {
    badge: "Ruang & Properti Transit",
    badgeColor: "bg-primary-deep text-white",
    title: "Sewa Ruang Fleksibel, Tanpa Kontrak Tahunan",
    description:
      "Gudang transit mini untuk UMKM, studio konten dengan pencahayaan profesional, atau ruko pop-up untuk event. Sewa per hari atau per minggu.",
    highlights: ["Gudang UMKM", "Studio Foto", "Ruko Pop-up", "Ruang Meeting"],
    icon: Building2,
    images: [
      {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
        alt: "Gudang logistik rapi untuk sewa transit",
      },
      {
        src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
        alt: "Studio kreatif modern siap pakai",
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.15 },
  }),
};

export default function PillarSection() {
  return (
    <section id="kategori" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-deep mb-3">
            Dua Pilar Utama Layanan
          </p>
          <h2 className="text-3xl md:text-[38px] font-bold text-title leading-snug">
            Solusi Sewa Barang &amp; Properti Terbaik
          </h2>
          <p className="mt-4 text-body text-lg">
            Temukan barang atau ruang yang Anda butuhkan dari mitra terverifikasi di seluruh Indonesia.
          </p>
        </div>

        {/* Pillar grid: 2 columns */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.badge}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={cardVariants}
                className="group rounded-2xl border border-surface-border bg-surface-card
                            overflow-hidden hover:shadow-xl hover:shadow-primary/5
                            transition-shadow duration-300 flex flex-col justify-between"
              >
                {/* Dual image header */}
                <div className="grid grid-cols-2 gap-0.5 bg-surface-border">
                  {pillar.images.map((img) => (
                    <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-bold ${pillar.badgeColor}`}
                    >
                      <Icon size={14} />
                      {pillar.badge}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-title leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-body leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pillar.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2.5 py-1 rounded-md bg-primary-subtle text-title font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#hero-search"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold
                               text-primary-deep hover:text-primary-dark transition-colors"
                  >
                    Jelajahi Kategori
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
