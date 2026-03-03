"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  const t = useTranslations("AboutPage");
  const [play, setPlay] = useState(false);

  return (
    <section className="relative w-full min-h-125 flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-fixed bg-center bg-cover scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1618220179428-22790b461013')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="text-white space-y-6 bg-white/5 p-8 rounded-xl backdrop-blur-md border border-white/10"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-light leading-snug"
            >
              {t("title")}
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-200 leading-relaxed"
            >
              {t("description")}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/contact"
                className="inline-block border border-white px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                {t("button")}
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-white/10">

              {!play ? (
                <div
                  onClick={() => setPlay(true)}
                  className="absolute inset-0 cursor-pointer group"
                >
                  {/* <Image
                    src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    width={20}
                    height={20}
                  /> */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                      <div className="w-0 h-0 border-l-[20px] border-l-red-600 border-y-[12px] border-y-transparent ml-2" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Company Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}