"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "Bagaimana mekanisme penggantian kerusakan aset melalui GUNAIN Shield?",
    answer:
      "Saat serah terima, kondisi aset didokumentasikan via foto dan video oleh kedua pihak (check-in dan check-out). Jika terjadi kerusakan, sistem membandingkan bukti visual sebelum dan sesudah penyewaan. Kerusakan akibat kelalaian penyewa ditanggung oleh penyewa sesuai estimasi biaya perbaikan. Kerusakan bawaan yang sudah ada sebelum sewa tidak dibebankan kepada penyewa.",
  },
  {
    question: "Bagaimana cara pencairan dana mitra jika penyewa membayar dengan cicilan?",
    answer:
      "Pemilik aset tetap menerima pembayaran penuh saat transaksi sewa dikonfirmasi, tanpa menunggu cicilan penyewa lunas. Risiko kredit ditanggung sepenuhnya oleh penyedia pembiayaan (BNPL) yang bekerja sama dengan GUNAIN. Dana mitra masuk ke rekening terdaftar dalam 1x24 jam setelah serah terima dikonfirmasi.",
  },
  {
    question: "Berapa besar potongan komisi operasional GUNAIN?",
    answer:
      "GUNAIN mengenakan komisi sebesar 10% dari nilai transaksi sewa. Komisi ini mencakup biaya verifikasi identitas, proteksi GUNAIN Shield, layanan pelanggan, serta pemeliharaan platform. Mitra menerima 90% dari nilai sewa secara bersih.",
  },
  {
    question: "Bagaimana prosedur verifikasi identitas untuk mitra dan penyewa?",
    answer:
      "Baik mitra maupun penyewa wajib mengunggah foto KTP dan melakukan verifikasi wajah (selfie) saat pertama kali mendaftar. Proses verifikasi berlangsung otomatis menggunakan teknologi pencocokan biometrik dan selesai dalam hitungan menit. Data identitas dienkripsi dan disimpan sesuai standar keamanan data pribadi yang berlaku.",
  },
  {
    question: "Apakah saya bisa membatalkan pesanan sewa setelah pembayaran?",
    answer:
      "Pembatalan dapat dilakukan sebelum serah terima aset dimulai. Dana akan dikembalikan penuh ke rekening penyewa dalam 2x24 jam kerja melalui rekening bersama penjamin. Setelah serah terima dimulai, pembatalan mengikuti ketentuan yang disepakati saat konfirmasi pemesanan.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-deep mb-3">
            Tanya Jawab
          </p>
          <h2 className="text-3xl md:text-[38px] font-bold text-title leading-snug">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-colors duration-200 ${
                  isOpen ? "border-primary/40 bg-primary-subtle/20" : "border-surface-border bg-surface-card"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start gap-3 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-sm font-semibold text-title leading-relaxed">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`mt-0.5 flex-shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary-deep" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-body leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
