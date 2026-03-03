"use client";

import { products } from "@/data/products";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetail({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const product = products.find(
    (p) => p.slug === params.slug
  );

  const [activeImage, setActiveImage] = useState(
    product?.images[0]
  );

  if (!product) return <div>Not found</div>;

  const related = products.filter(
    (p) =>
      p.category === product.category &&
      p.slug !== product.slug
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Gallery */}
        <div>
          <div className="relative h-[450px] mb-4">
            <Image
              src={activeImage}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="flex gap-2">
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img)}
                className="relative w-20 h-20 cursor-pointer"
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-semibold mb-4">
            {params.locale === "vi"
              ? product.title_vi
              : product.title_en}
          </h1>

          <p className="text-gray-600 mb-6">
            {params.locale === "vi"
              ? product.description_vi
              : product.description_en}
          </p>

          <button className="bg-black text-white px-6 py-3">
            Contact for Price
          </button>
        </div>
      </div>

      {/* Related */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6">
          Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {related.map((p) => (
            <div key={p.id} className="relative h-40">
              <Image
                src={p.images[0]}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}