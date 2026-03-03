"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("header");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { key: "home", href: `/${locale}` },
    { key: "about", href: `/${locale}/about-us` },
    { key: "products", href: `/${locale}/products` },
    { key: "collections", href: `/${locale}/collection` },
    { key: "categories", href: `/${locale}/categories` },
    { key: "blog", href: `/${locale}/blog`, label: "BLOG" },
    { key: "contactPage", href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="bg-muted text-gray-700 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          <p className="hidden md:block">{t("welcome")}</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-mist-950">
              <Mail size={14} />
              {t("contact")}
            </span>

            <span className="flex items-center gap-1 cursor-pointer hover:text-mist-950">
              <Phone size={14} />
              +84 948 355 777
            </span>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/img/logo.png"
              alt="Logo"
              width={250}
              height={60}
              className="h-10 object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-mist-500 ${
                  isActive(item.href)
                    ? "text-mist-600 font-bold"
                    : "text-gray-700"
                }`}
              >
                {item.label ? item.label : t(item.key)}
              </Link>
            ))}

            <LanguageSwitcher locale={locale} />
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/40">
            <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col">
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <Image
                  src="/img/logo.png"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="h-10 object-contain"
                />

                <button onClick={() => setMobileOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              {/* Mobile Menu List */}
              <nav className="flex flex-col text-base font-medium p-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-2 border-b ${
                      isActive(item.href)
                        ? "text-mist-600 font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label ? item.label : t(item.key)}
                  </Link>
                ))}
              </nav>

              {/* Language Switcher */}
              <div className="mt-auto p-4 border-t">
                <LanguageSwitcher locale={locale} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}