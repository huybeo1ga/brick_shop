"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanityClient";
import PortableTextContent from "@/components/blog/PortableTextContent";
import type { Product } from "@/lib/sanityTypes";
import { X } from "lucide-react";

export default function ProductDetail({
  product,
  locale,
}: {
  product: Product;
  locale: string;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const primaryImage = product.mainImage || product.thumbnail;
  const allImages = [
    primaryImage,
    ...(product.gallery?.filter(Boolean) || []),
  ].filter(Boolean);

  const mainImage = product.mainImage || product.thumbnail;
  const mainImageUrl = mainImage
    ? urlFor(mainImage).width(800).height(600).url()
    : null;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const specs = product.specifications;
  const hasSpecs =
    specs &&
    (specs.material || specs.finish || specs.thickness || specs.origin);

  const displayName =
    typeof product.name === "string"
      ? product.name
      : (product.name?.en || product.name?.vi || "Untitled");

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
          {/* Gallery */}
          <div className="space-y-4">
            <div
              className="relative aspect-[4/3] overflow-hidden bg-stone-100 cursor-pointer"
              onClick={() => allImages.length > 0 && openLightbox(0)}
            >
              {mainImageUrl ? (
                <Image
                  src={mainImageUrl}
                  alt={displayName}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                  No image
                </div>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((img, i) => {
                  if (!img) return null;
                  const thumbUrl = urlFor(img)
                    .width(200)
                    .height(150)
                    .url();
                  return (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="relative aspect-[4/3] overflow-hidden border-2 border-transparent hover:border-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400"
                    >
                      <Image
                        src={thumbUrl}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="150px"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
              {typeof product.category === "object"
                ? product.category?.name
                : product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-semibold text-stone-800 mb-6">
              {displayName}
            </h1>

            {product.description &&
            Array.isArray(product.description) &&
            product.description.length > 0 ? (
              <div className="prose prose-stone max-w-none mb-8">
                <PortableTextContent value={product.description} />
              </div>
            ) : null}

            {hasSpecs && (
              <div className="border border-stone-200 overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <tbody>
                    {specs!.material && (
                      <tr className="border-b border-stone-200">
                        <td className="px-4 py-3 font-medium text-stone-600 w-1/3">
                          {locale === "vi" ? "Chất liệu" : "Material"}
                        </td>
                        <td className="px-4 py-3 text-stone-800">
                          {specs!.material}
                        </td>
                      </tr>
                    )}
                    {specs!.finish && (
                      <tr className="border-b border-stone-200">
                        <td className="px-4 py-3 font-medium text-stone-600 w-1/3">
                          {locale === "vi" ? "Bề mặt" : "Finish"}
                        </td>
                        <td className="px-4 py-3 text-stone-800">
                          {specs!.finish}
                        </td>
                      </tr>
                    )}
                    {specs!.thickness && (
                      <tr className="border-b border-stone-200">
                        <td className="px-4 py-3 font-medium text-stone-600 w-1/3">
                          {locale === "vi" ? "Độ dày" : "Thickness"}
                        </td>
                        <td className="px-4 py-3 text-stone-800">
                          {specs!.thickness}
                        </td>
                      </tr>
                    )}
                    {specs!.origin && (
                      <tr>
                        <td className="px-4 py-3 font-medium text-stone-600 w-1/3">
                          {locale === "vi" ? "Xuất xứ" : "Origin"}
                        </td>
                        <td className="px-4 py-3 text-stone-800">
                          {specs!.origin}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            <a
              href={`/${locale}/contact`}
              className="inline-block bg-stone-800 text-white px-8 py-3 font-medium hover:bg-stone-700 transition-colors"
            >
              {locale === "vi" ? "Liên hệ báo giá" : "Contact for Price"}
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && allImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={urlFor(allImages[lightboxIndex]!).width(1200).url()}
              alt=""
              width={1200}
              height={900}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === lightboxIndex ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
