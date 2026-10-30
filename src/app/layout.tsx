import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GUNAIN | Solusi Sewa Serba Ada di Seluruh Indonesia",
  description:
    "Platform sewa terpercaya untuk barang gaya hidup, ruang transit, dan jasa harian. Dilengkapi jaminan GUNAIN Shield, verifikasi identitas, dan opsi cicilan terdaftar OJK.",
  keywords: [
    "sewa barang",
    "sewa ruang",
    "sewa jasa",
    "rental Indonesia",
    "GUNAIN",
    "platform sewa",
    "sewa kamera",
    "sewa gudang",
  ],
  openGraph: {
    title: "GUNAIN | Solusi Sewa Serba Ada",
    description:
      "Akses praktis penyewaan barang, ruang, dan jasa terpercaya dengan jaminan keamanan transaksi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
