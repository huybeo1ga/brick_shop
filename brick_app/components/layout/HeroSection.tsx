'use client';

import React, { useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

interface SlideData {
  id: number;
  titleKey: string;
  subtitleKey: string;
  bgImg: string;
  imgExterior: string;
  imgInterior: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    titleKey: "slide1.title",
    subtitleKey: "slide1.subtitle",
    bgImg: "https://images.unsplash.com/photo-1510414696678-2415ea84792e?q=80&w=2000",
    imgExterior: "https://images.unsplash.com/photo-1541888046835-18967b57b14a?q=80&w=800",
    imgInterior: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800"
  },
  {
    id: 2,
    titleKey: "slide2.title",
    subtitleKey: "slide2.subtitle",
    bgImg: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=2000",
    imgExterior: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    imgInterior: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"
  },
  {
    id: 3,
    titleKey: "slide2.title",
    subtitleKey: "slide2.subtitle",
    bgImg: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=2000",
    imgExterior: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    imgInterior: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800"
  }
];

const HeroSlider: React.FC = () => {
  const t = useTranslations('Hero');
  const swiperRef = useRef<SwiperType | null>(null);
  const locale = useLocale();

  return (
    <section className="relative w-full h-[550px] bg-gray-900 overflow-hidden group">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (_, className) =>
            `<span class="${className}"></span>`
        }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="!h-full">
            <div className="relative w-full h-full">

              {/* Background */}
              <div className="absolute inset-0">
                <img
                  src={slide.bgImg}
                  alt="background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between">

                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">

                  <div className="mb-4">
                    <h3 className="text-white text-base md:text-xl font-light tracking-wider mb-2">
                      {t(slide.subtitleKey)}
                    </h3>
                    <div className="w-48 h-1 bg-red-600 mx-auto lg:ml-0"></div>
                  </div>

                  <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black mb-8 drop-shadow-2xl">
                    {t(slide.titleKey)}
                  </h1>
                  <Link href={`/${locale}/about-us`}>
                    <button className="bg-[#2e6d81] hover:bg-[#214f5e] text-white px-10 py-3.5 font-bold uppercase transition-all shadow-xl active:scale-95 cursor-pointer">
                      {t("button")}
                    </button>
                  </Link>

                  <button className="bg-zinc-300 hover:bg-zinc-400 text-black px-10 py-3.5 font-bold uppercase transition-all shadow-xl active:scale-95 mt-2 cursor-pointer">
                    {t("button2")}
                  </button>

                </div>

                {/* Right Images */}
                <div className="hidden md:block relative w-[400px] h-[300px] lg:w-[550px] lg:h-[400px]">

                  <div className="absolute top-0 right-0 w-[65%] h-[75%] border-[6px] border-white shadow-2xl z-10 overflow-hidden">
                    <img
                      src={slide.imgExterior}
                      alt="exterior"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 w-[65%] h-[75%] border-[6px] border-white shadow-2xl z-20 overflow-hidden">
                    <img
                      src={slide.imgInterior}
                      alt="interior"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-50 gap-3"></div>

      {/* Pagination */}
      <div className="custom-pagination absolute !top-8 !left-1/2 !-translate-x-1/2 !z-50 flex gap-3 !w-auto !bottom-auto"></div>

      {/* Navigation */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col bg-white border-l border-gray-200 shadow-2xl">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-4 hover:bg-gray-100 text-gray-700 transition-colors border-b border-gray-100"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-4 hover:bg-gray-100 text-gray-700 transition-colors"
        >
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ===== Custom Style ===== */}
      <style jsx global>{`

        .swiper-slide {
          height: 100% !important;
        }

        .swiper-fade .swiper-slide {
          pointer-events: none;
        }

        .swiper-fade .swiper-slide-active {
          pointer-events: auto;
        }

        /* Pagination màu đỏ */
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255,255,255,0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          background: #dc2626; /* đỏ */
          transform: scale(1.3);
        }

      `}</style>
    </section>
  );
};

export default HeroSlider;