"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Blog {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  link?: string;
}

const blogs: Blog[] = [
  {
    title: "Viet Nam White Marble – A Symbol of Natural Beauty and Prestige",
    date: "09/08/2025",
    excerpt:
      "Premium natural white marble from Vietnam with timeless elegance and durability for luxury projects.",
    imageUrl:
      "https://images.unsplash.com/photo-1618220179428-22790b461013",
    link: "/blog/vietnam-white-marble",
  },
  {
    title: "Outdoor Marble Paving: Elegance and Safety for Your Space",
    date: "21/01/2025",
    excerpt:
      "Outdoor marble paving creates luxurious and durable outdoor living spaces with safety and elegance.",
    imageUrl:
      "https://images.unsplash.com/photo-1604014237744-7a7d6f4f0b36",
    link: "/blog/outdoor-marble-paving",
  },
  {
    title: "Vietnamese White Marble Tiles and Its Types",
    date: "27/11/2024",
    excerpt:
      "Vietnamese White Marble Tiles are known for their unique beauty and high quality.",
    imageUrl:
      "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
    link: "/blog/vietnamese-white-marble-tiles",
  },
  {
    title: "Vietnamese White Marble Tiles and Its Types",
    date: "27/11/2024",
    excerpt:
      "Vietnamese White Marble Tiles are known for their unique beauty and high quality.",
    imageUrl:
      "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
    link: "/blog/vietnamese-white-marble-tiles",
  },
  {
    title: "Vietnamese White Marble Tiles and Its Types",
    date: "27/11/2024",
    excerpt:
      "Vietnamese White Marble Tiles are known for their unique beauty and high quality.",
    imageUrl:
      "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
    link: "/blog/vietnamese-white-marble-tiles",
  },
];

export default function BlogsCarousel() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our Blogs
          </h2>
          <p className="text-gray-600 text-lg">
            Our latest news about marble, production and design trends
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="!pb-14"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[480px] flex flex-col group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-gray-500 mb-2">
                    {blog.date}
                  </span>

                  <h3 className="text-xl font-semibold text-gray-600 mb-3 line-clamp-2 group-hover:text-gray-800 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>

                  {blog.link && (
                    <Link
                      href={blog.link}
                      className="mt-auto inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-all group-hover:translate-x-1"
                    >
                      Read more →
                    </Link>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}