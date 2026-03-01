import Image from "next/image";
import Link from "next/link";

const translations = {
  vi: {
    gachCo: "GẠCH CỔ",
    daTuNhien: "ĐÁ TỰ NHIÊN",
    xemThem: "Xem thêm →",
  },
  en: {
    gachCo: "ANTIQUE BRICKS",
    daTuNhien: "NATURAL STONE",
    xemThem: "View more →",
  },
};

function getData(locale: string) {
  return {
    gachCo: [
      {
        title:
          locale === "vi"
            ? "GẠCH CỔ BIA ỐP TƯỜNG"
            : "ANTIQUE BRICK WALL CLADDING",
        image:
          "https://images.unsplash.com/photo-1604014237800-1c9102c219da",
        slug: "gach-co-bia",
      },
      {
        title:
          locale === "vi"
            ? "GẠCH CỔ NGUYÊN VIÊN"
            : "FULL ANTIQUE BRICKS",
        image:
          "https://images.unsplash.com/photo-1582582429416-2c1e0f2d8e4a",
        slug: "gach-co-nguyen-vien",
      },
      {
        title:
          locale === "vi"
            ? "GẠCH CỔ RUỘT ỐP TƯỜNG"
            : "ANTIQUE BRICK CUT",
        image:
          "https://images.unsplash.com/photo-1599940824399-b87987ceb72a",
        slug: "gach-co-ruot",
      },
    ],
    daTuNhien: [
      {
        title: locale === "vi" ? "ĐÁ CHẾ TÁC" : "CRAFTED STONE",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        slug: "da-che-tac",
      },
      {
        title: locale === "vi" ? "ĐÁ LÁT SÂN VƯỜN" : "GARDEN STONE",
        image:
          "https://images.unsplash.com/photo-1560185007-5f0bb1866cab",
        slug: "da-lat-san-vuon",
      },
      {
        title:
          locale === "vi"
            ? "ĐÁ ỐP TƯỜNG TRANG TRÍ"
            : "DECORATIVE WALL STONE",
        image:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
        slug: "da-op-tuong",
      },
      {
        title: locale === "vi" ? "ĐÁ TỔ ONG" : "VOLCANIC STONE",
        image:
          "https://images.unsplash.com/photo-1618220179428-22790b461013",
        slug: "da-to-ong",
      },
    ],
  };
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold tracking-wide">{children}</h2>
      <div className="w-12 h-[3px] bg-red-600 mt-2"></div>
    </div>
  );
}

function Card({
  title,
  image,
  slug,
  locale,
  xemThem,
}: {
  title: string;
  image: string;
  slug: string;
  locale: string;
  xemThem: string;
}) {
  return (
    <Link href={`/${locale}/products/`} className="group block">
      <div className="relative overflow-hidden rounded-xl shadow-md">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 font-semibold text-sm">
          {title}
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600 group-hover:text-black transition">
        {xemThem}
      </div>
    </Link>
  );
}

export default function Products({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = translations[locale as "vi" | "en"] || translations.vi;
  const data = getData(locale);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <SectionTitle>{t.gachCo}</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {data.gachCo.map((item, index) => (
          <Card
            key={index}
            {...item}
            locale={locale}
            xemThem={t.xemThem}
          />
        ))}
      </div>

      <SectionTitle>{t.daTuNhien}</SectionTitle>
      <div className="grid md:grid-cols-4 gap-8">
        {data.daTuNhien.map((item, index) => (
          <Card
            key={index}
            {...item}
            locale={locale}
            xemThem={t.xemThem}
          />
        ))}
      </div>
    </div>
  );
}