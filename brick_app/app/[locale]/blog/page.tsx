"use client";

import { useState } from "react";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";

const PER_PAGE = 9;

export default function BlogPage({
  params
}: {
  params: { locale: string };
}) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / PER_PAGE);

  const display = blogs.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-2xl font-semibold mb-10">
        BLOG
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-10">

        {display.map((post) => {
          const day = new Date(post.date).getDate();
          const month = new Date(post.date)
            .toLocaleString("en-US", { month: "short" });

          return (
            <Link
              key={post.id}
              href={`/${params.locale}/blog/${post.slug}`}
              className="group"
            >
              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {/* DATE BADGE */}
                <div className="absolute top-2 left-2 bg-blue-900 text-white text-center px-3 py-2 text-xs leading-tight">
                  <div className="text-lg font-semibold">
                    {day}
                  </div>
                  <div>{month}</div>
                </div>
              </div>

              {/* TITLE */}
              <h3 className="font-semibold mb-2 group-hover:text-gray-700 transition">
                {post.title}
              </h3>

              {/* EXCERPT */}
              <p className="text-sm text-gray-600 line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          );
        })}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalPages }).map(
          (_, i) => (
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
          )
        )}
      </div>
    </div>
  );
}