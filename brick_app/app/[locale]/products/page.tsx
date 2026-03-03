"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { useParams } from "next/dist/client/components/navigation";

const PER_PAGE = 8;

export default function ProductsPage({}) {
   const params = useParams();
  const locale = params.locale as string;

  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const categories = ["all", "tile", "slab"];

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  const display = filtered.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home / Products
      </div>

      {/* Filter */}
      <div className="flex gap-4 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setPage(1);
            }}
            className={`px-4 py-2 border ${
              category === c
                ? "bg-black text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {display.map((p) => (
          <Link
            key={p.id}
            href={`/${locale}/products/${p.slug}`}
            className="group relative overflow-hidden aspect-square"
          >
            <Image
              src={p.images[0]}
              alt={p.title_vi}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />

            {/* Type badge */}
            <div className="absolute top-2 left-2 bg-white text-xs px-2 py-1 font-semibold">
              {p.type}
            </div>

            {/* Title */}
            <div className="absolute bottom-0 w-full text-white p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
              <h3 className="text-sm font-semibold">
                {locale === "vi"
                  ? p.title_vi
                  : p.title_en}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 border cursor-pointer ${
              page === i + 1
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}