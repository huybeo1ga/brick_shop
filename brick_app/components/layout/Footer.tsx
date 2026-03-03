"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Facebook,
  Youtube,
} from "lucide-react";

interface Props {
  locale: string;
}

const translations = {
  vi: {
    address: "Địa chỉ",
    contact: "Liên hệ",
    follow: "Theo dõi chúng tôi",
    companyFactory: "Công ty & Nhà máy",
    representative: "Văn phòng đại diện",
    hotline: "Hotline",
    email: "Email",
    website: "Website",
  },
  en: {
    address: "Address",
    contact: "Contact",
    follow: "Follow us",
    companyFactory: "Company & Factory",
    representative: "Representative Office",
    hotline: "Hotline",
    email: "Email",
    website: "Website",
  },
};

export default function Footer({ locale }: Props) {
  const t = translations[locale as "vi" | "en"] || translations.vi;

  return (
    <>
      <footer className="bg-gray-100 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

          {/* Logo + Map */}
          <div className="space-y-6">
            <Image
              src='/img/logo.png'
              alt="Hoang Gia"
              width={180}
              height={60}
            />

            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Quy+Hop,+Nghe+An,+Vietnam&output=embed"
                width="100%"
                height="200"
                loading="lazy"
                className="border-0"
              />
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4 text-sm leading-relaxed">
            <h3 className="font-semibold text-lg">{t.address}</h3>

            <p className="flex gap-2">
              <MapPin size={16} className="mt-1 text-gray-600" />
              <span>
                <strong>{t.companyFactory}:</strong> Dong Song Hamlet,
                Dong Hop Commune, Quy Hop District, Nghe An, Vietnam.
              </span>
            </p>

            <p className="flex gap-2">
              <MapPin size={16} className="mt-1 text-gray-600" />
              <span>
                <strong>{t.representative}:</strong> 129A / 297 Tran Cung
                Street, Bac Tu Liem, Hanoi.
              </span>
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-sm">
            <h3 className="font-semibold text-lg">{t.contact}</h3>

            <p className="flex gap-2 items-center">
              <Phone size={16} />
              +84 948 355 777
            </p>

            <p className="flex gap-2 items-center">
              <Phone size={16} />
              +84 982 835 358
            </p>

            <p className="flex gap-2 items-center">
              <Mail size={16} />
              mineralgrouphoanggia@gmail.com
            </p>

            <p className="flex gap-2 items-center">
              <Globe size={16} />
              <Link
                href="https://hoanggiamineralgroup.com.vn"
                className="hover:text-blue-600 transition"
              >
                hoanggiamineralgroup.com.vn
              </Link>
            </p>
          </div>

          {/* Social */}
          <div className="space-y-4 text-sm">
            <h3 className="font-semibold text-lg">{t.follow}</h3>

            <div className="flex gap-4 pt-2">
              <Link
                href="#"
                className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full transition transform hover:scale-110 hover:shadow-lg"
              >
                <Facebook size={18} />
              </Link>

              <Link
                href="#"
                className="bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full transition transform hover:scale-110 hover:shadow-lg"
              >
                <Youtube size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bg-gray-200 py-4 text-center text-sm">
          © {new Date().getFullYear()} Hoang Gia Mineral Group.
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/84948355777"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl animate-bounce hover:scale-110 transition"
      >
        <Phone className="text-white" />
      </Link>
    </>
  );
}