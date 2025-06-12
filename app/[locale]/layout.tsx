import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/utils/ThemeProvider";
// import Footer from "@/components/footer/Footer";
import { inter } from "../../utils/Font";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "Indoex Digital Assets Exchange",
  description: "Indoex Digital Assets Exchange",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const dir = routing.getDirection(locale);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html
      lang={locale}
      dir={dir}
      className="text-[16px] xl:text-[16px] 2xl:text-[1.08vw]"
    >
      <body className={`${inter.className}  bg-[#eff0f2] dark:bg-[#06062a]  `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReduxProvider>
            <NextIntlClientProvider>
              <Navbar />
              <div className="w-full mt-[0] overflow-hidden">{children}</div>
              {/* <Footer /> */}
            </NextIntlClientProvider>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
