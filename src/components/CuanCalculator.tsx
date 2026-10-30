"use client";

import { useState, useCallback } from "react";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const assetCategories = [
  { id: "kamera", label: "Kamera & Gadget", dailyRate: 150_000 },
  { id: "ruang", label: "Ruang & Gudang", dailyRate: 250_000 },
  { id: "peralatan", label: "Peralatan Khusus", dailyRate: 200_000 },
];

function formatRupiah(n: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

export default function CuanCalculator() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [days, setDays] = useState(10);
  const [showModal, setShowModal] = useState(false);

  const category = assetCategories[categoryIndex];

  /* Rumus: Nilai Sewa Harian x Jumlah Hari x 0.90 */
  const grossIncome = category.dailyRate * days;
  const netIncome = Math.round(grossIncome * 0.9);
  const commission = Math.round(grossIncome * 0.1);

  const handleSlider = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setDays(Number(e.target.value)),
    []
  );

  return (
    <>
      <section id="simulasi" className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
                Simulasi Pendapatan Mitra
              </p>
              <h2 className="text-3xl md:text-[38px] font-bold text-title leading-snug">
                Hitung Potensi <span className="text-accent">Cuan</span> dari Aset Anda
              </h2>
              <p className="mt-4 text-body text-lg leading-relaxed">
                Punya kamera yang jarang terpakai? Gudang yang kosong? Kendaraan yang parkir saja?
                Daftarkan di GUNAIN dan mulai dapatkan penghasilan tambahan setiap bulan.
              </p>
              <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-accent-soft border border-accent/20">
                <TrendingUp size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm text-title leading-relaxed">
                  Mitra GUNAIN menerima <strong>90% pendapatan bersih</strong> dari setiap transaksi sewa.
                  Potongan 10% mencakup biaya verifikasi, proteksi GUNAIN Shield, dan layanan pelanggan.
                </p>
              </div>
            </motion.div>

            {/* Right: calculator card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl border-2 border-primary bg-surface-card shadow-lg overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-5 bg-surface border-b border-surface-border flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-soft">
                  <Calculator size={20} className="text-primary-deep" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-title">Kalkulator Cuan Mitra</h3>
                  <p className="text-xs text-muted">Estimasi penghasilan bulanan Anda</p>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Category selector */}
                <div>
                  <label className="text-sm font-semibold text-title block mb-2">
                    Kategori Aset
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {assetCategories.map((cat, idx) => (
                      <button
                        key={cat.id}
                        onClick={() => setCategoryIndex(idx)}
                        className={`rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors ${
                          idx === categoryIndex
                            ? "bg-primary text-title"
                            : "bg-primary-subtle text-body hover:bg-primary-soft"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Days slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-title">
                      Frekuensi Sewa per Bulan
                    </label>
                    <span className="text-lg font-bold text-primary-deep">{days} hari</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    value={days}
                    onChange={handleSlider}
                    aria-label="Jumlah hari sewa per bulan"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>1 hari</span>
                    <span>30 hari</span>
                  </div>
                </div>

                {/* Result display */}
                <div className="rounded-xl p-5 bg-gradient-to-br from-primary-soft/60 to-surface">
                  <div className="flex justify-between text-sm text-body mb-2">
                    <span>Pendapatan kotor</span>
                    <span>{formatRupiah(grossIncome)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-body mb-3">
                    <span>Komisi platform (10%)</span>
                    <span className="text-muted">- {formatRupiah(commission)}</span>
                  </div>
                  <div className="border-t border-primary/20 pt-3 flex justify-between items-end">
                    <span className="text-sm font-semibold text-title">Estimasi Bersih / Bulan</span>
                    <span className="text-2xl font-extrabold text-primary-deep">
                      {formatRupiah(netIncome)}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full rounded-xl bg-accent py-4 text-white font-semibold text-sm
                             hover:bg-accent-hover transition-all duration-200
                             hover:scale-[1.01] hover:shadow-[0_6px_20px_rgba(242,96,34,0.3)]
                             flex items-center justify-center gap-2"
                >
                  Daftarkan Aset &amp; Raih Cuan Sekarang
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration modal */}
      {showModal && <MitraModal onClose={() => setShowModal(false)} />}
    </>
  );
}

/* ──────────────────── Mitra Registration Modal ──────────────────── */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, CheckCircle2 } from "lucide-react";

const mitraSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  telepon: z
    .string()
    .regex(
      /^(\+62|62|08)\d{8,12}$/,
      "Masukkan nomor HP valid (contoh: 08xxxxxxxxxx)"
    ),
  jenisAset: z.string().min(1, "Pilih jenis aset"),
  kota: z.string().min(2, "Masukkan kota domisili"),
});

type MitraFormData = z.infer<typeof mitraSchema>;

function MitraModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<MitraFormData>({
    resolver: zodResolver(mitraSchema),
  });

  const onSubmit = async (data: MitraFormData) => {
    /* Simulate API call */
    console.log("Mitra registration:", data);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  /* Close on Escape */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Formulir Pendaftaran Mitra"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface">
          <h3 className="text-lg font-bold text-title">Daftar Mitra GUNAIN</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-muted hover:text-title hover:bg-primary-subtle transition-colors"
            aria-label="Tutup formulir"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          /* Success state */
          <div className="p-8 text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary-soft flex items-center justify-center mb-4">
              <CheckCircle2 size={32} className="text-primary-deep" />
            </div>
            <h4 className="text-xl font-bold text-title mb-2">Pendaftaran Berhasil!</h4>
            <p className="text-sm text-body mb-6">
              Tim GUNAIN akan menghubungi Anda melalui WhatsApp dalam 1x24 jam
              untuk langkah selanjutnya.
            </p>
            <button
              onClick={onClose}
              className="rounded-lg bg-primary-deep px-6 py-3 text-white font-semibold text-sm
                         hover:bg-primary-dark transition-colors"
            >
              Kembali ke Halaman Utama
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            <Field
              label="Nama Lengkap"
              error={errors.nama?.message}
              {...register("nama")}
              placeholder="Masukkan nama lengkap"
            />
            <Field
              label="Nomor WhatsApp"
              error={errors.telepon?.message}
              {...register("telepon")}
              placeholder="08xxxxxxxxxx"
              type="tel"
            />
            <div>
              <label className="text-sm font-semibold text-title block mb-1.5">Jenis Aset</label>
              <select
                {...register("jenisAset")}
                className={`w-full rounded-lg border px-4 py-3 text-sm bg-white
                            focus:border-primary-deep focus:ring-1 focus:ring-primary-deep/30
                            ${errors.jenisAset ? "border-red-400" : "border-surface-border"}`}
                defaultValue=""
              >
                <option value="" disabled>
                  Pilih jenis aset
                </option>
                <option value="kamera">Kamera &amp; Gadget</option>
                <option value="ruang">Ruang &amp; Gudang</option>
                <option value="peralatan">Peralatan Khusus</option>
                <option value="kendaraan">Kendaraan</option>
                <option value="pakaian">Pakaian &amp; Fashion</option>
                <option value="jasa">Jasa Harian</option>
              </select>
              {errors.jenisAset && (
                <p className="text-xs text-red-500 mt-1">{errors.jenisAset.message}</p>
              )}
            </div>
            <Field
              label="Kota Domisili"
              error={errors.kota?.message}
              {...register("kota")}
              placeholder="Contoh: Jakarta Selatan"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-accent py-3.5 text-white font-semibold text-sm
                         hover:bg-accent-hover transition-colors disabled:opacity-60 mt-2"
            >
              {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

/* ──────────────── Reusable Field ──────────────── */
import { forwardRef } from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ label, error, ...props }, ref) => (
    <div>
      <label className="text-sm font-semibold text-title block mb-1.5">{label}</label>
      <input
        ref={ref}
        {...props}
        className={`w-full rounded-lg border px-4 py-3 text-sm bg-white
                    placeholder:text-muted
                    focus:border-primary-deep focus:ring-1 focus:ring-primary-deep/30 focus:outline-none
                    ${error ? "border-red-400" : "border-surface-border"}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
);
Field.displayName = "Field";
