// app/[locale]/page.tsx

import AboutSection from "@/components/layout/AboutSection"
import BlogsCarousel from "@/components/layout/BlogsCarousel"
import HeroSection from "@/components/layout/HeroSection"
import OurService from "@/components/layout/OurService"
import ProductCard from "@/components/layout/ProductCards"
import Products from "@/components/layout/Products"
import { getTranslations } from "next-intl/server"
import Link from "next/link"

export default async function HomePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({
    locale,
    namespace: "home"
  })

  return (
    <div className="space-y-12">
      <HeroSection />
      <Products params={{ locale }} />
      <AboutSection />
      <OurService />
      <BlogsCarousel />
    </div>
  )
}