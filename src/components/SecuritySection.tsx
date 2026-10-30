"use client";

import Image from "next/image";
import { ShieldCheck, CreditCard, Camera, FileCheck, Banknote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const shieldFeatures = [
  {
    icon: Camera,
    title: "Inspeksi Digital Serah Terima",
    description:
      "Foto dan video kondisi barang saat check-in dan check-out dicatat otomatis sebagai bukti objektif. Tidak ada lagi tuduhan sepihak.",
  },
  {
    icon: FileCheck,
    title: "Klaim Kerusakan Objektif",
    description:
      "Kerusakan dinilai berdasarkan bukti visual, bukan asumsi. Penyewa dilindungi dari tuduhan tak berdasar, mitra dilindungi dari penyangkalan.",
  },
  {
    icon: ShieldCheck,
    title: "Rekening Bersama Penjamin",
    description:
      "Dana penyewa ditahan di rekening bersama hingga serah terima selesai. Mitra hanya menerima dana setelah konfirmasi kondisi barang.",
  },
];

const flexiFeatures = [
  {
    icon: CreditCard,
    title: "Cicilan Tanpa Beban di Muka",
    description:
      "Penyewa dapat memilih skema pembayaran bertahap melalui penyedia pembiayaan berizin OJK tanpa harus membayar penuh di awal.",
  },
  {
    icon: Banknote,
    title: "Mitra Dibayar 100% di Depan",
    description:
      "Meski penyewa mencicil, pemilik aset tetap menerima pembayaran penuh saat transaksi dikonfirmasi. Risiko kredit ditanggung penyedia BNPL.",
  },
  {
    icon: CheckCircle2,
    title: "Terdaftar dan Diawasi OJK",
    description:
      "Seluruh mitra pembiayaan GUNAIN telah terdaftar resmi dan diawasi oleh Otoritas Jasa Keuangan Republik Indonesia.",
  },
];

export default function SecuritySection() {
  return (
    <section id="keamanan" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-deep mb-3">
            Jaminan Keamanan
          </p>
          <h2 className="text-3xl md:text-[38px] font-bold text-title leading-snug">
            Transaksi Aman untuk Kedua Belah Pihak
          </h2>
          <p className="mt-4 text-body text-lg">
            GUNAIN Shield dan FlexiRent hadir melindungi setiap transaksi sewa,
            baik dari sisi penyewa maupun pemilik aset.
          </p>
        </div>

        {/* Two-column: Shield + FlexiRent */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* GUNAIN Shield */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-primary/30 bg-primary-subtle/20 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-primary-deep flex items-center justify-center shrink-0">
                <ShieldCheck size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-title">GUNAIN Amanin</h3>
                <p className="text-xs text-body">Proteksi Inspeksi Digital</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Inspeksi detail kondisi perangkat untuk GUNAIN Shield"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="space-y-5">
              {shieldFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-primary-soft flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-primary-deep" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-title">{f.title}</h4>
                      <p className="text-sm text-body mt-0.5 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* FlexiRent */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-accent/30 bg-accent-soft/30 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center shrink-0">
                <CreditCard size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-title">Pake Dulu</h3>
                <p className="text-xs text-body">Pembiayaan Berizin OJK</p>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
                alt="Pembayaran digital nirsentuh untuk FlexiRent"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>

            <div className="space-y-5">
              {flexiFeatures.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-title">{f.title}</h4>
                      <p className="text-sm text-body mt-0.5 leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
