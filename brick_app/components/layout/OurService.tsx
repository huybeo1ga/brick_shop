"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function OurService() {
  const t = useTranslations("OurService");

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600">
            {t("subtitle")}
          </p>
        </div>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
              alt="Factory Machine"
              width={800}
              height={500}
              className="w-full h-[350px] object-cover"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
              alt="Industrial Equipment"
              width={800}
              height={500}
              className="w-full h-[350px] object-cover"
            />
          </motion.div>
        </div>

        {/* Description */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
}