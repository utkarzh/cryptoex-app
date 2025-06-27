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
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    default: "Indoex Digital Assets Exchange",
    template: "%s | Indoex",
  },
  description: "Indoex Digital Assets Exchange",
  keywords: ["crypto", "exchange", "bitcoin", "trading", "indoex"],
  authors: [{ name: "Indoex Team", url: "https://indoex.io" }],
  openGraph: {
    title: "Indoex",
    description: "Trade crypto safely and quickly.",
    url: "https://indoex.io",
    siteName: "Indoex",
    images: [
      {
        url: "/images/logo/logo_indoex_black",
        width: 1200,
        height: 630,
        alt: "Indoex Exchange Preview",
        type: "image/svg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indoex",
    description: "Trade crypto safely and quickly.",
    images: ["/og-image.png"],
    creator: "@indoex",
  },

  metadataBase: new URL("https://indoex.io"),
  // themeColor: "#ffffff",
  // colorScheme: "light",
  category: "finance",
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
              <Toaster richColors position="top-right" />
              <div className="w-full mt-[0] overflow-hidden">{children}</div>
              {/* <Footer /> */}
            </NextIntlClientProvider>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
