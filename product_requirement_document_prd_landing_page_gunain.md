# PRODUCT REQUIREMENT DOCUMENT (PRD)
## LANDING PAGE WEB: GUNAIN (INDONESIA)
### Tagline: "Solusi Sewa Serba Ada"

---

## 1. Ikhtisar dan Sasaran Produk

### 1.1 Latar Belakang
GUNAIN adalah platform agregator sewa terintegrasi berskala nasional yang mempertemukan pemilik aset (*supply*) dan penyewa (*demand*) dalam tiga kategori utama: Barang Gaya Hidup dan Produktif, Ruang dan Properti Menganggur, serta Jasa Harian.

Landing page web ini berfungsi sebagai kanal digital utama untuk:
1. Memvalidasi penerimaan pasar di hadapan publik dan dewan juri program ASTA Kementerian Ekonomi Kreatif RI.
2. Memfasilitasi pendaftaran pengguna awal baik dari sisi penyewa maupun mitra pemilik aset.
3. Memberikan pemahaman menyeluruh mengenai jaminan keamanan transaksi melalui GUNAIN Shield dan fleksibilitas pembiayaan sewa melalui kemitraan BNPL.

### 1.2 Sasaran Utama
* **Dual-Target Conversion:** Mengakomodasi alur konversi dua arah secara berimbang antara pencarian sewa untuk konsumen dan formulir pendaftaran aset untuk mitra.
* **Trust and Credibility:** Menampilkan sistem keamanan transaksi meliputi verifikasi identitas resmi, rekening bersama penjamin, dan rekaman digital kondisi fisik barang.
* **Traction and Pre-Registration Capture:** Mengumpulkan data pendaftaran awal mitra dan calon pengguna melalui formulir interaktif terintegrasi.

---

## 2. Target Persona dan Alur Pengunjung

### 2.1 Persona Penyewa
* **Kebutuhan:** Menyewa kamera, pakaian formal, ruang transit, atau asisten harian tanpa keharusan membeli aset baru.
* **Kendala:** Kekhawatiran dituduh merusak barang yang mengalami kerusakan alami bawaan, penipuan transaksi non-resmi, dan keterbatasan dana tunai.
* **Tujuan di Landing Page:** Menemukan barang terdekat, memverifikasi perlindungan transaksi, dan mencoba simulasi pemesanan.

### 2.2 Persona Mitra Pemilik Aset
* **Kebutuhan:** Memonetisasi barang bernilai tinggi, ruang kosong, atau waktu luang yang belum termanfaatkan secara optimal.
* **Kendala:** Kekhawatiran kehilangan barang, kerusakan tanpa kompensasi yang adil, serta keterlambatan pembayaran.
* **Tujuan di Landing Page:** Menghitung potensi pendapatan melalui kalkulator simulasi, memahami proteksi ganti rugi, dan mendaftarkan aset.

---

## 3. Spesifikasi Arsitektur Teknologi dan Deployment Vercel

Landing page dirancang menggunakan arsitektur modern berkinerja tinggi, responsif, dan optimal untuk penerapan langsung di platform **Vercel** dengan pendekatan *zero-configuration deployment*.

### 3.1 Rincian Tech Stack

| Lapisan / Layer | Teknologi Terpilih | Justifikasi Teknis dan Kesesuaian Vercel |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14+ (App Router)** | Framework utama dari tim Vercel dengan optimasi *Server-Side Rendering (SSR)* dan *Static Site Generation (SSG)* untuk kecepatan muat awal dan skor SEO maksimal. |
| **Bahasa Pemrograman** | **TypeScript** | Menjamin keamanan tipe data (*type safety*) pada manipulasi data formulir dan kalkulator cuan mitra. |
| **Styling & Desain** | **Tailwind CSS 3.4+** | Mendukung tokenisasi palet warna kustom brand (`#59DE59`, `#12B312`, `#B3F2B3`, `#FAFAFA`, `#F26022`) dengan ukuran bundel CSS terkompresi. |
| **Pustaka Ikon** | **Lucide React** | Ikon berbasis SVG yang modern, ringan, berstandar industri, dan bersih tanpa emotikon teks. |
| **Animasi & Interaksi** | **Framer Motion** | Digunakan untuk transisi halus pada tab kategori, menu akordeon FAQ, dan modal formulir. |
| **Manajemen Formulir** | **React Hook Form + Zod** | Validasi input pendaftaran mitra secara *real-time* di sisi klien sebelum pengiriman data. |
| **Optimasi Media** | **Next.js Image Component (`next/image`)** | Kompresi otomatis format WebP/AVIF pada gambar dokumentasi eksternal guna mencapai skor Core Web Vitals 95+. |
| **Platform Hosting** | **Vercel Edge Network** | Deployment otomatis via GitHub, penyediaan sertifikat SSL gratis, CDN global terdistribusi, dan analitik pengunjung bawaan. |

### 3.2 Konfigurasi Deployment Vercel (`vercel.json`)
```json
{
  "framework": "nextjs",
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

### 3.3 Konfigurasi Domain Gambar (`next.config.js`)
Diperlukan untuk memvalidasi penggunaan foto beresolusi tinggi dari domain Unsplash:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
```

---

## 4. Kurasi Media Dokumentasi Visual Beresolusi Tinggi (Unsplash Curated)

Untuk mempercantik tampilan visual landing page tanpa menggunakan emotikon, berikut adalah aset fotografi profesional berlisensi komersial terbuka yang digunakan pada masing-masing seksi:

### 4.1 Aset Visual Kategori Barang Gaya Hidup dan Gadget
* **Kamera & Lensa Mirrorless:**
  `https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80`
  *Deskripsi:* Fotografer dengan kamera profesional mirrorless, digunakan pada kartu kategori barang dan modal sewa.
* **Gadget & Peralatan Mobile:**
  `https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80`
  *Deskripsi:* Smartphone premium dan aksesoris audio, memperkuat representasi segmen teknologi.
* **Busana Formal & Fesyen:**
  `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80`
  *Deskripsi:* Deretan pakaian gaya hidup berkualitas tinggi di ruang pamer butik.

### 4.2 Aset Visual Kategori Ruang dan Properti Menganggur
* **Gudang Logistik & Transit UMKM:**
  `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80`
  *Deskripsi:* Interior gudang penyimpanan barang yang rapi dan terorganisir untuk kebutuhan sewa ruang transit.
* **Studio Foto & Ruang Kreatif:**
  `https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=80`
  *Deskripsi:* Studio kreatif modern dengan pencahayaan profesional siap pakai.

### 4.3 Aset Visual Kategori Jasa Harian
* **Tenaga Bantuan Logistik & Kurir:**
  `https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1000&q=80`
  *Deskripsi:* Petugas layanan serah terima dan bantuan logistik dengan paket pengiriman terverifikasi.
* **Kolaborasi Tim & Pekerja Lepas:**
  `https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80`
  *Deskripsi:* Interaksi kolaboratif penyedia keahlian jasa harian dan klien profesional.

### 4.4 Aset Visual Fitur Keamanan dan Inspeksi Digital
* **Pemeriksaan Kondisi Perangkat:**
  `https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80`
  *Deskripsi:* Inspeksi detail teknis perangkat elektronik untuk visualisasi fitur GUNAIN Shield.
* **Pembayaran Digital & PayLater:**
  `https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1000&q=80`
  *Deskripsi:* Pembayaran nirsentuh yang aman untuk visualisasi kemitraan cicilan terdaftar OJK.

---

## 5. Struktur Konten dan Komponen Antarmuka

### 5.1 Navigasi Utama (Navbar)
* **Posisi:** Sticky Top dengan latar belakang semi-transparan `backdrop-blur-md` dan batas tipis abu-abu netral.
* **Komponen:**
  * Logo resmi GUNAIN (vektor huruf G, aksen oranye, dan tipografi brand).
  * Menu Tautan: Kategori Layanan, Cara Kerja, Simulasi Pendapatan, Jaminan Keamanan, Tanya Jawab.
  * Tombol Aksi:
    * Tombol Sekunder (Garis Tepi Hijau `#12B312`): Mulai Sewa.
    * Tombol Primer (Oranye Solid `#F26022`): Daftar Jadi Mitra.

### 5.2 Bagian Utama (Hero Section)
* **Tagline:** Solusi Sewa Serba Ada di Seluruh Indonesia.
* **Deskripsi:** Akses praktis penyewaan barang gaya hidup, ruang transit, dan layanan jasa terpercaya dengan jaminan keamanan transaksi serta opsi pembayaran berkala.
* **Bilah Penelusuran Interaktif:**
  * Pemilih Kategori: Tab Barang, Ruang/Gudang, dan Jasa.
  * Kolom Pencarian: Input teks nama kebutuhan atau merk.
  * Pemilih Wilayah: Pilihan cakupan kota di Indonesia.
  * Tombol Cari (Hijau `#12B312`).
* **Lencana Kepercayaan:** Rekening Bersama Penjamin, Verifikasi Identitas Resmi, Pilihan Cicilan Terdaftar OJK.

### 5.3 Tiga Pilar Layanan Utama
Grid tiga kolom interaktif yang memadukan fotografi kurasi dengan rincian layanan:
1. **Pilar Barang:** Dilengkapi foto kamera mirrorless dan pakaian, menyorot kemudahan sewa harian untuk kebutuhan temporer.
2. **Pilar Ruang:** Dilengkapi foto gudang rapi dan studio foto, menyorot penyewaan ruang fleksibel tanpa kontrak tahunan.
3. **Pilar Jasa:** Dilengkapi foto bantuan logistik, menyorot layanan bantuan harian terpercaya dengan tarif transparan.

### 5.4 Kalkulator Simulasi Pendapatan Mitra
Komponen interaktif untuk menarik calon pemilik aset:
* **Input Interaktif:**
  * Pilihan kategori aset (Kamera dan Gadget, Ruang dan Gudang, Peralatan Khusus).
  * Penggeser frekuensi penyewaan per bulan (rentang 1 hingga 30 hari).
* **Keluaran Kalkulasi Dinamis:**
  * Rumus kalkulasi: Nilai Sewa Harian x Jumlah Hari x 0.90 (bersih setelah komisi 10%).
  * Tampilan estimasi nominal bersih bulanan dalam format mata uang Rupiah.
* **Aksi Konversi:** Tombol oranye bertuliskan Daftarkan Aset Sekarang yang memicu modal formulir mitra.

### 5.5 Ekosistem Keamanan: GUNAIN Shield dan Pembiayaan Fleksibel
* **Pilar GUNAIN Shield:** Penjelasan alur verifikasi fisik saat serah terima menggunakan dokumentasi foto dan video digital untuk memastikan klaim kerusakan non-kelalaian ditangani secara objektif.
* **Pilar FlexiRent:** Penjelasan skema pembayaran bertahap melalui penyedia pembiayaan berizin OJK, di mana pemilik aset tetap menerima pembayaran penuh di muka.

### 5.6 Alur Transaksi (How It Works)
Pemisahan alur dalam dua tab navigasi:
* **Alur Penyewa:** Penelusuran kebutuhan, verifikasi identitas kilat, pembayaran aman via rekening bersama, dan penerimaan aset dengan cek fisik digital.
* **Alur Mitra:** Pendaftaran aset gratis, penerimaan konfirmasi pesanan, serah terima aset terverifikasi, dan pencairan saldo otomatis.

### 5.7 Tanya Jawab Populer (FAQ)
Menu akordeon interaktif yang memuat informasi seputar:
* Mekanisme penggantian kerusakan aset melalui GUNAIN Shield.
* Tata cara pencairan dana mitra pada transaksi cicilan.
* Besaran potongan komisi operasional 10%.
* Prosedur verifikasi identitas mitra dan penyewa.

### 5.8 Footer dan Legalitas
* Informasi resmi keikutsertaan dalam inisiatif ASTA Kementerian Ekonomi Kreatif RI.
* Tautan dokumen syarat ketentuan, kebijakan privasi, kontak pusat bantuan, dan kanal komunikasi resmi.

---

## 6. Persyaratan Fungsional dan Validasi Data

| Komponen | Masukan Pengguna | Respons Sistem |
| :--- | :--- | :--- |
| **Kalkulator Cuan** | Kategori aset dan durasi hari sewa | Menghitung dan memperbarui estimasi pendapatan bersih secara langsung tanpa memuat ulang halaman. |
| **Formulir Mitra** | Nama lengkap, nomor telepon seluler, jenis aset, kota domisili | Melakukan validasi format nomor WhatsApp dan kelengkapan data, lalu menampilkan konfirmasi sukses pendaftaran. |
| **Akordeon FAQ** | Klik pada judul pertanyaan | Menampilkan jawaban dengan animasi geser vertikal dan menutup pertanyaan aktif lainnya. |
| **Pemilih Kategori Hero** | Klik pada tombol tab kategori | Mengubah placeholder pencarian dan daftar rekomendasi populer yang relevan. |

---

## 7. Indikator Kinerja Utama (KPI)
1. **Performa Teknis:** Skor Google Lighthouse minimal 95 untuk metrik Kinerja, Aksesibilitas, Praktik Terbaik, dan SEO pada deployment Vercel.
2. **Tingkat Interaksi:** Minimal 12% pengunjung berinteraksi dengan kalkulator simulasi atau pemilih kategori pada sesi kunjungan.
3. **Konversi Pendaftaran:** Rasio pendaftaran formulir mitra dan prapendaftaran penyewa minimal 5% dari total kunjungan unik.