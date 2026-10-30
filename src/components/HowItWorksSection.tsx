"use client";

import { useState } from "react";
import { Search, UserCheck, CreditCard, PackageCheck, FileText, Bell, Handshake, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type TabKey = "penyewa" | "mitra";

const tabs: { key: TabKey; label: string }[] = [
  { key: "penyewa", label: "Alur Penyewa" },
  { key: "mitra", label: "Alur Mitra" },
];

const flows: Record<
  TabKey,
  { icon: React.ElementType; title: string; description: string }[]
> = {
  penyewa: [
    {
      icon: Search,
      title: "Telusuri Kebutuhan",
      description:
        "Pilih kategori (barang, ruang, atau jasa) dan temukan mitra terdekat yang sesuai kebutuhan Anda.",
    },
    {
      icon: UserCheck,
      title: "Verifikasi Identitas Kilat",
      description:
        "Unggah KTP dan selfie sekali saja. Proses verifikasi berlangsung otomatis dalam hitungan menit.",
    },
    {
      icon: CreditCard,
      title: "Pembayaran Aman via Rekening Bersama",
      description:
        "Dana Anda ditahan di rekening bersama penjamin. Mitra baru menerima dana setelah serah terima selesai.",
    },
    {
      icon: PackageCheck,
      title: "Terima Aset dengan Inspeksi Digital",
      description:
        "Kondisi barang didokumentasikan via foto dan video saat serah terima, melindungi kedua pihak secara objektif.",
    },
  ],
  mitra: [
    {
      icon: FileText,
      title: "Daftarkan Aset secara Gratis",
      description:
        "Isi formulir singkat dan unggah foto aset Anda. Tidak ada biaya pendaftaran atau biaya bulanan.",
    },
    {
      icon: Bell,
      title: "Terima Konfirmasi Pesanan",
      description:
        "Notifikasi langsung setiap ada penyewa yang tertarik. Anda bebas menerima atau menolak permintaan.",
    },
    {
      icon: Handshake,
      title: "Serah Terima Terverifikasi",
      description:
        "Inspeksi digital otomatis mencatat kondisi aset saat dikirim dan dikembalikan sebagai bukti sah.",
    },
    {
      icon: Wallet,
      title: "Pencairan Saldo Otomatis",
      description:
        "Dana masuk ke rekening Anda setelah penyewa mengonfirmasi pengembalian. Proses cepat dan transparan.",
    },
  ],
};

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("penyewa");

  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-deep mb-3">
            Cara Kerja
          </p>
          <h2 className="text-3xl md:text-[38px] font-bold text-title leading-snug">
            Proses Sewa yang Aman dan Transparan
          </h2>
          <p className="mt-4 text-body text-lg">
            Baik Anda ingin menyewa atau menjadi mitra pemilik aset, GUNAIN memastikan
            setiap langkah berjalan aman dan terverifikasi.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-white border border-surface-border p-1.5 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-primary text-title shadow-sm"
                    : "text-body hover:text-title"
                }`}
                aria-pressed={activeTab === tab.key}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {flows[activeTab].map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-surface-border bg-white p-6
                             hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5
                             transition-all duration-300"
                >
                  {/* Step number */}
                  <span className="absolute -top-3 -left-1 text-[56px] font-extrabold text-primary-soft/60 leading-none select-none pointer-events-none">
                    {idx + 1}
                  </span>

                  <div className="relative">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                        activeTab === "penyewa"
                          ? "bg-primary-soft"
                          : "bg-accent-soft"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={
                          activeTab === "penyewa"
                            ? "text-primary-deep"
                            : "text-accent"
                        }
                      />
                    </div>
                    <h3 className="text-base font-bold text-title mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
