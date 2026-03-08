"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanityClient";
import type { BlogPost } from "@/lib/sanityTypes";

const PER_PAGE = 9;

export default function BlogList({
  posts,
  locale,
}: {
  posts: BlogPost[];
  locale: string;
}) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(posts.length / PER_PAGE) || 1;
  const display = posts.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  if (posts.length === 0) {
    return (
      <p className="text-gray-600">
        No blog posts yet. Add some in Sanity Studio.
      </p>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-3 gap-10">
        {display.map((post) => {
          const date = post.publishedAt
            ? new Date(post.publishedAt)
            : null;
          const day = date ? date.getDate() : null;
          const month = date
            ? date.toLocaleString("en-US", { month: "short" })
            : null;

          const imageUrl = post.featuredImage
            ? urlFor(post.featuredImage).width(600).height(400).url()
            : null;

          return (
            <Link
              key={post._id}
              href={`/${locale}/blog/${post.slug}`}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden mb-4 bg-gray-200">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
                    No image
                  </div>
                )}

                {/* DATE BADGE */}
                {day && month && (
                  <div className="absolute top-2 left-2 bg-blue-900 text-white text-center px-3 py-2 text-xs leading-tight">
                    <div className="text-lg font-semibold">{day}</div>
                    <div>{month}</div>
                  </div>
                )}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold mb-2 group-hover:text-gray-700 transition">
                {post.title}
              </h3>

              {/* EXCERPT */}
              <p className="text-sm text-gray-600 line-clamp-3">
                {post.excerpt || "No excerpt available."}
              </p>
            </Link>
          );
        })}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border ${
                page === i + 1
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
