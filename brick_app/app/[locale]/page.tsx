// app/[locale]/page.tsx

import HeroSection from "@/components/layout/HeroSection"
import ProductCard from "@/components/layout/ProductCards"
import Products from "@/components/layout/Products"
import ProductListing from "@/components/layout/ProductsList"
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
      <ProductListing />
    </div>
  )
}