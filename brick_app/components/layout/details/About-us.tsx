import Image from "next/image";

const translations = {
  vi: {
    heroTitle: "Nhà sản xuất đá tự nhiên hàng đầu",
    heroSubtitle:
      "Chuyên cung cấp đá lát sân vườn, đá ốp tường và vật liệu đá chất lượng cao",
    overviewTitle: "Về Chúng Tôi",
    overviewText: `Hoàng Gia Mineral Group là đơn vị sản xuất, phân phối đá tự nhiên &
    gạch cổ với hơn 20 năm kinh nghiệm. Sản phẩm của chúng tôi được phân phối rộng
    khắp thị trường trong nước và quốc tế.`,
    missionTitle: "Sứ mệnh & Giá trị",
    missionText: `Cam kết mang đến sản phẩm chất lượng, phát triển bền vững,
    hướng đến khách hàng và môi trường.`,
    capabilityTitle: "Năng lực sản xuất",
    capabilityList: [
      "Nhà máy đá tự nhiên 10,000 m²",
      "Hệ thống máy cắt CNC hiện đại",
      "Đội ngũ kỹ thuật lành nghề",
      "Quy trình kiểm tra chất lượng nghiêm ngặt",
    ],
    galleryTitle: "Hình ảnh doanh nghiệp",
    ctaText: "Liên hệ với chúng tôi ngay",
  },
  en: {
    heroTitle: "Leading Natural Stone Manufacturer",
    heroSubtitle:
      "Premium natural stone for gardens, walls & architectural projects",
    overviewTitle: "About Us",
    overviewText: `Hoang Gia Mineral Group is a leading natural stone
    manufacturer with over 20 years of experience. Our products are
    distributed domestically and internationally.`,
    missionTitle: "Mission & Values",
    missionText: `Committed to quality products, sustainable growth,
    and customer satisfaction.`,
    capabilityTitle: "Production Capabilities",
    capabilityList: [
      "10,000 m² natural stone factory",
      "Modern CNC cutting systems",
      "Skilled technical team",
      "Strict quality control process",
    ],
    galleryTitle: "Company Gallery",
    ctaText: "Contact us today",
  },
};

export default function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = translations[locale as "vi" | "en"] || translations.vi;

  return (
    <div className="space-y-20 pb-20">

      {/* Hero */}
      <section className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold">{t.heroTitle}</h1>
        <p className="mt-4 text-lg text-gray-700">{t.heroSubtitle}</p>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl font-semibold mb-4">{t.overviewTitle}</h2>
        <p className="text-gray-700 leading-relaxed">{t.overviewText}</p>
      </section>

      {/* Mission */}
      <section className="bg-white max-w-6xl mx-auto px-6 py-12 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold">{t.missionTitle}</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">{t.missionText}</p>
      </section>

      {/* Capability */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">{t.capabilityTitle}</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          {t.capabilityList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">{t.galleryTitle}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            "https://images.unsplash.com/photo-1560185007-5f0bb1866cab",
            "https://images.unsplash.com/photo-1604014237800-1c9102c219da",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={t.galleryTitle}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h3 className="text-2xl font-semibold">{t.ctaText}</h3>
        <p className="mt-2">
          <a
            href="tel:+84948355777"
            className="underline font-medium text-lg"
          >
            +84 948 355 777
          </a>
        </p>
      </section>
    </div>
  );
}