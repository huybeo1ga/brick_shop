"use client";

import Image from "next/image";
import Link from "next/link";
import {
  collections,
  shopCategories,
  stoneTypes
} from "@/data/collections";

export default function CollectionPage({
  params
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">

      {/* HERO COLLECTIONS */}
      <div className="space-y-10">
        {collections.map((c) => (
          <Link
            key={c.id}
            href={`/${locale}/collection/${c.slug}`}
            className="relative block h-[300px] overflow-hidden group"
          >
            <Image
              src={c.image}
              alt=""
              fill
              className="object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-3xl font-semibold">
                {locale === "vi"
                  ? c.title_vi
                  : c.title_en}
              </h2>
            </div>
          </Link>
        ))}
      </div>

      {/* SHOP NOW */}
      <section>
        <div className="text-center mb-10">
          <h3 className="text-sm tracking-widest">
            SHOP NOW
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {shopCategories.map((item) => (
            <div
              key={item.id}
              className="relative h-48 overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TYPES OF STONES */}
      <section>
        <div className="text-center mb-12">
          <h3 className="text-sm tracking-widest">
            TYPES OF STONES WE SUPPLY
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stoneTypes.map((stone) => (
            <div key={stone.id} className="text-center">
              <div className="relative h-48 mb-4">
                <Image
                  src={stone.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2">
                {stone.title}
              </h4>
              <p className="text-sm text-gray-600">
                {stone.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}