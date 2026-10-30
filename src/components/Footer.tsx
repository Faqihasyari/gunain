import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Layanan",
    links: [
      { label: "Sewa Barang", href: "#kategori" },
      { label: "Sewa Ruang", href: "#kategori" },
      { label: "Sewa Jasa", href: "#kategori" },
      { label: "Simulasi Pendapatan", href: "#simulasi" },
    ],
  },
  {
    title: "Informasi",
    links: [
      { label: "Cara Kerja", href: "#cara-kerja" },
      { label: "GUNAIN Shield", href: "#keamanan" },
      { label: "FlexiRent PayLater", href: "#keamanan" },
      { label: "Tanya Jawab", href: "#faq" },
    ],
  },
  {
    title: "Kebijakan",
    links: [
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Pusat Bantuan", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="GUNAIN"
              width={140}
              height={42}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-5">
              Platform agregator sewa terintegrasi berskala nasional yang mempertemukan
              pemilik aset dan penyewa di seluruh Indonesia.
            </p>

            {/* ASTA badge */}
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-medium">
              Peserta Program ASTA Kementerian Ekonomi Kreatif RI
            </div>

            <div className="mt-5 space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>halo@gunain.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+62 812-0000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-bold mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} GUNAIN. Hak cipta dilindungi undang-undang.
          </p>
          <p className="text-xs text-white/40">
            Solusi Sewa Serba Ada
          </p>
        </div>
      </div>
    </footer>
  );
}
