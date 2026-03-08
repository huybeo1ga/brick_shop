"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanityClient";
import type { ProductListItem } from "@/lib/sanityTypes";
import { Search, X } from "lucide-react";

const PER_PAGE = 12;

export default function ProductList({
  products,
  categories,
  locale,
}: {
  products: ProductListItem[];
  categories: { _id: string; slug: string; name: string }[];
  locale: string;
}) {
  const [categorySlug, setCategorySlug] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = products;
    if (categorySlug !== "all") {
      result = result.filter((p) => {
        const cat = p.category;
        return typeof cat === "object" ? cat?.slug === categorySlug : cat === categorySlug;
      });
    }
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter((p) =>
        (p.name || "").toLowerCase().includes(q)
      );
    }
    return result;
  }, [products, search]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE) || 1;
  const display = filtered.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  const resetFilters = () => {
    setCategorySlug("all");
    setSearch("");
    setPage(1);
  };

  const hasActiveFilters = categorySlug !== "all" || search.trim() !== "";

  return (
    <div className="space-y-8">
      {/* Search & filters */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center border-b border-stone-200 pb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder={locale === "vi" ? "Tìm kiếm sản phẩm..." : "Search products..."}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 border border-stone-300 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400"
          />
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <button
            onClick={() => {
              setCategorySlug("all");
              setPage(1);
            }}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              categorySlug === "all"
                ? "bg-stone-800 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c._id}
              onClick={() => {
                setCategorySlug(c.slug);
                setPage(1);
              }}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                categorySlug === c.slug
                  ? "bg-stone-800 text-white"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              {c.name}
            </button>
          ))}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 px-3 py-2 text-sm text-stone-600 hover:text-stone-900"
            >
              <X className="w-4 h-4" />
              {locale === "vi" ? "Xóa bộ lọc" : "Clear"}
            </button>
          )}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-stone-500">
        {locale === "vi"
          ? `${filtered.length} sản phẩm`
          : `${filtered.length} products`}
      </p>

      {display.length === 0 ? (
        <div className="py-16 text-center text-stone-500">
          {locale === "vi"
            ? "Không tìm thấy sản phẩm phù hợp."
            : "No products found."}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {display.map((p) => {
              const img = p.thumbnail || p.mainImage;
              const imageUrl = img
                ? urlFor(img).width(500).height(500).url()
                : null;
              const displayName = p.name || "Untitled";

              return (
                <Link
                  key={p._id}
                  href={`/${locale}/products/${p.slug}`}
                  className="group block bg-white border border-stone-200 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-stone-100">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={displayName}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-sm">
                        No image
                      </div>
                    )}
                    <div className="absolute top-2 left-2">
                      <span className="bg-white/90 text-stone-800 text-xs font-semibold px-2 py-1 uppercase tracking-wide">
                        {typeof p.category === "object" ? p.category?.name : p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-stone-800 line-clamp-2 group-hover:text-stone-600 transition">
                      {displayName}
                    </h3>
                  </div>
                </Link>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 pt-8">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1.5 text-sm border transition-colors ${
                    page === i + 1
                      ? "bg-stone-800 text-white border-stone-800"
                      : "border-stone-300 hover:bg-stone-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
