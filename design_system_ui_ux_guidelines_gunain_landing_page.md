# DESIGN SYSTEM & UI/UX GUIDELINES
## LANDING PAGE WEB: GUNAIN
### Tagline: "Solusi Sewa Serba Ada"

---

## 1. Fondasi Visual & Identitas Brand

Identitas visual landing page GUNAIN mengadopsi palet warna modern, segar, dan berenergi tinggi yang mencerminkan ekosistem ekonomi sirkular yang aktif dan menguntungkan. Warna utama berbasis **Fresh Lime Green (`#59DE59`)** yang cerah dan bersahabat, diperkuat dengan kontras **Deep Forest Green (`#12B312`)**, kelembutan **Mint Pastel (`#B3F2B3`)**, kebersihan **Snow White (`#FAFAFA`)**, serta aksen dinamis **Sunset Orange (`#F26022`)**.

---

### 1.1 Palet Warna Resmi (Color Tokens)

```css
:root {
  /* Brand Primary (Warna Utama) */
  --color-primary-main: #59DE59;          /* Fresh Lime Green - Hero highlight, badge utama, aksen identitas */
  --color-primary-deep: #12B312;          /* Bold Green - Tombol CTA aksi utama, ikon aktif, teks kontras tinggi */
  --color-primary-dark: #0D820D;          /* Deep Green Hover / Footer background dark mode */
  --color-primary-soft: #B3F2B3;          /* Soft Mint - Background chip, card highlight, border aktif */
  --color-primary-subtle: #E8FDE8;        /* Ultra light tint untuk area interaktif & hover container */

  /* Secondary & Action Accent */
  --color-accent-orange: #F26022;         /* Vibrant Orange - Tombol "Jadi Mitra Cuan", notifikasi, badge diskon */
  --color-accent-orange-hover: #D94E14;   /* Hover state tombol oranye */
  --color-accent-orange-soft: #FDECE5;    /* Tint oranye muda untuk alert & highlight benefit */

  /* Surfaces & Backgrounds */
  --color-bg-base: #FAFAFA;               /* Latar belakang utama aplikasi & web (Snow White) */
  --color-surface-card: #FFFFFF;          /* Latar kartu komponen / container */
  --color-surface-border: #E5E7EB;        /* Garis pemisah komponen (Neutral Slate) */

  /* Text & Typography */
  --color-text-title: #0F172A;            /* Slate 900 untuk headline & teks utama (keterbacaan maksimal) */
  --color-text-body: #475569;             /* Slate 600 untuk body text & deskripsi */
  --color-text-muted: #94A3B8;            /* Slate 400 untuk placeholder & caption */
  --color-text-on-primary: #0F172A;       /* Teks gelap di atas warna #59DE59 / #B3F2B3 */
  --color-text-on-dark: #FFFFFF;          /* Teks putih di atas #12B312 / #F26022 */
}
```

---

### 1.2 Aturan Penggunaan Warna (Color Hierarchy & Accessibility)
1. **Primary Lime (`#59DE59`):** Digunakan pada elemen penarik perhatian utama seperti *hero pill badge*, gradasi teks headline, batas aktif (*active tab indicator*), serta elemen grafis latar belakang. Karena memiliki nilai luminansi tinggi, teks di atas warna ini wajib menggunakan teks gelap (`#0F172A`).
2. **Deep Green (`#12B312`):** Digunakan untuk tombol konversi pengguna (*CTA "Mulai Sewa"*), ikon fitur aktif, dan teks berbobot tebal agar lolos uji kontras rasio WCAG AA.
3. **Soft Mint (`#B3F2B3`):** Digunakan untuk latar belakang elemen pendukung seperti chip kategori, status proteksi *GUNAIN Shield*, dan container kartu ringkasan.
4. **Sunset Orange (`#F26022`):** Khusus dialokasikan untuk konversi mitra (*CTA "Daftar Jadi Mitra / Pasang Iklan"*), aksen panah pada logo, dan simulasi cuan di kalkulator pendapatan.
5. **Snow White (`#FAFAFA`):** Menjadi warna dasar halaman (*body background*) agar mata pengunjung tetap nyaman saat membaca teks panjang.

---

### 1.3 Tipografi

* **Font Keluarga:** `Plus Jakarta Sans`, alternatif: `Inter`, `sans-serif`.
* **Skala Tipografi:**
  * **Display (Hero Headline):** 46px – 56px / ExtraBold (800) / Line-height 1.15
  * **H1 / Section Title:** 32px – 38px / Bold (700) / Line-height 1.25
  * **H2 / Card Title:** 20px – 24px / Semi-bold (600) / Line-height 1.3
  * **Body Large:** 18px / Medium (500) / Line-height 1.6
  * **Body Base:** 15px – 16px / Regular (400) / Line-height 1.5
  * **Caption / Label:** 12px – 13px / Bold (700) / Uppercase / Letter-spacing 1px

---

## 2. Tata Letak Komponen & Wireframe Visual

### 2.1 Hero Section
```
+---------------------------------------------------------------------------------+
| [LOGO GUNAIN]      Kategori    Cara Kerja    Simulasi Cuan    FAQ   [MASUK]     |
+---------------------------------------------------------------------------------+
|                                                                                 |
|   [Pill: #B3F2B3 text: #0F172A | 🛡️ Platform Sewa Terpercaya & Berasuransi]     |
|                                                                                 |
|   SOLUSI SEWA SERBA ADA                                                         |
|   Pinjam Kebutuhan Harian, Maksimalkan Aset Nganggur Jadi Cuan.                 |
|                                                                                 |
|   +-------------------------------------------------------------------------+   |
|   | [#59DE59 Barang]   [Ruang & Properti]   [Jasa Harian]                   |   |
|   |-------------------------------------------------------------------------|   |
|   | [🔍 Mau sewa apa hari ini?]   | [📍 Seluruh Indonesia v] | [Cari: #12B312]| |
|   +-------------------------------------------------------------------------+   |
|                                                                                 |
|   ✓ Rekber Escrow Aman  ✓ Proteksi Kerusakan Shield  ✓ Opsi Cicilan OJK         |
|                                                                                 |
|   [CTA Primer: #12B312 "Mulai Sewa"]     [CTA Sekunder: #F26022 "Jadi Mitra"]   |
+---------------------------------------------------------------------------------+
```

### 2.2 Tiga Pilar Layanan (3-Card Feature Grid)
Setiap kartu memanfaatkan border halus dengan sentuhan warna baru:
1. **Pilar 1: Sewa Barang Gaya Hidup & Gadget**
   * *Aksen Badge:* `#59DE59` (Fresh Lime)
   * *Highlight:* Kamera, Lensa, Smartphone, Tenda, Pakaian Wisuda/Pesta.
2. **Pilar 2: Sewa Ruang & Properti Transit**
   * *Aksen Badge:* `#12B312` (Deep Green)
   * *Highlight:* Gudang Transit Mini UMKM, Studio Konten, Ruko Pop-up Event.
3. **Pilar 3: Sewa Jasa Harian (Suruh & Bantuan)**
   * *Aksen Badge:* `#F26022` (Sunset Orange)
   * *Highlight:* Bantuan Antar-Jemput, Asisten Belanja, Kru Setting Acara.

### 2.3 Interactive Cuan Calculator (Pusat Konversi Mitra)
* **Desain UI:**
  * Kontainer utama menggunakan latar belakang bersih berbingkai ganda (`border: 2px solid #59DE59`).
  * Header kalkulator berlatar belakang `#FAFAFA` dengan highlight teks oranye `#F26022`.
  * Track slider interaktif menggunakan warna `#B3F2B3`, sedangkan *thumb slider* menggunakan `#12B312`.
  * Kotak hasil estimasi pendapatan bersih mitra diberi latar belakang gradasi halus dari `#B3F2B3` ke `#FAFAFA`.
  * **Tombol Konversi:** Berwarna oranye tegas (`#F26022`) dengan teks putih bertuliskan: **"Daftarkan Aset & Raih Cuan Sekarang"**.

### 2.4 Blok Keamanan: "GUNAIN Shield & FlexiRent"
* **Kolom Kiri (GUNAIN Shield):**
  * Lencana tameng dengan ikon hijau `#12B312`.
  * Fokus pesan: Inspeksi serah terima digital (foto/video check-in & check-out) melindungi mitra dari risiko kerusakan dan melindungi penyewa dari tuduhan sepihak.
* **Kolom Kanan (FlexiRent PayLater):**
  * Lencana kartu pintar dengan aksen oranye `#F26022`.
  * Fokus pesan: Kemudahan cicilan sewa tanpa beban tunai di muka bekerja sama dengan fintech berizin OJK, sementara pemilik aset tetap dibayar lunas 100% di depan.

---

## 3. Micro-Interactions & UX Writing

### 3.1 Micro-Interactions
* **Tombol Primer (`#12B312`):** Saat di-hover, warna bertransisi ke `#0D820D` dengan efek elevasi `translateY(-2px)` dan bayangan lembut `rgba(18, 179, 18, 0.25)`.
* **Tombol Mitra (`#F26022`):** Saat di-hover, membesar halus (`scale: 1.02`) dengan bayangan hangat `rgba(242, 96, 34, 0.3)`.
* **Kategori Tab Aktif:** Latar belakang langsung berubah menjadi `#59DE59` dengan teks tebal gelap `#0F172A`.

### 3.2 Nada Bicara (Tone of Voice)
* **Optimis & Segar:** Merefleksikan warna hijau cerah yang memberikan nuansa kemudahan dan pertumbuhan finansial.
* **Jelas & Menenangkan:** Memberi rasa aman bagi masyarakat awam yang baru pertama kali menyewakan atau menyewa barang secara online.