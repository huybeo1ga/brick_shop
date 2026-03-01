"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Mail, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Header() {
  const locale = useLocale();
  const t = useTranslations("header");

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">

      {/* TOP BAR */}
      <div className="bg-muted text-gray-700 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">

          {/* Welcome */}
          <p className="hidden md:block">
            {t("welcome")}
          </p>

          {/* Contact */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 cursor-pointer hover:text-mist-950">
              <Mail size={14} />
              {t("contact")}
            </span>

            <span className="flex items-center gap-1 cursor-pointer hover:text-mist-950">
              <Phone size={14} className="hover:text-mist-950" />
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
            <div>
              <Image
                src='/img/logo.png'
                alt="Logo"
                width={300}
                height={40}
                className="h-10 object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-sm">
            <Link href={`/${locale}`} className="hover:text-mist-500">
              {t("home")}
            </Link>

            <Link href={`/${locale}/about`} className="hover:text-mist-500">
              {t("about")}
            </Link>

            <Link href={`/${locale}/products`} className="hover:text-mist-500">
              {t("products")}
            </Link>

            <Link href={`/${locale}/collections`} className="hover:text-mist-500">
              {t("collections")}
            </Link>

            <Link href={`/${locale}/categories`} className="hover:text-mist-500">
              {t("categories")}
            </Link>

            <Link href={`/${locale}/blog`} className="hover:text-mist-500">
              BLOG
            </Link>

            <Link href={`/${locale}/contact`} className="hover:text-mist-500">
              {t("contactPage")}
            </Link>

            <div className="">
              <LanguageSwitcher locale={locale} />
            </div>
          </nav>

          {/* Mobile button */}
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

              {/* Header mobile */}
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <div className="flex items-center gap-3">
                  <img
                    src={'/'}
                    alt="Logo"
                    className="h-10 object-contain"
                  />
                </div>

                <button onClick={() => setMobileOpen(false)}>
                  <X size={22} />
                </button>
              </div>

              {/* Menu list */}
              <nav className="flex flex-col text-base font-medium p-4 space-y-4">
                <Link href={`/${locale}`} className="py-2 border-b">
                  {t("home")}
                </Link>
                <Link href={`/${locale}/about`} className="py-2 border-b">
                  {t("about")}
                </Link>
                <Link href={`/${locale}/products`} className="py-2 border-b">
                  {t("products")}
                </Link>
                <Link href={`/${locale}/collections`} className="py-2 border-b">
                  {t("collections")}
                </Link>
                <Link href={`/${locale}/categories`} className="py-2 border-b">
                  {t("categories")}
                </Link>
                <Link href={`/${locale}/blog`} className="py-2 border-b">
                  BLOG
                </Link>
                <Link href={`/${locale}/contact`} className="py-2">
                  {t("contactPage")}
                </Link>
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