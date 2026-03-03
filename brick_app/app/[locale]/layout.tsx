import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const locales = ["vi", "en"];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale)) notFound();

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}