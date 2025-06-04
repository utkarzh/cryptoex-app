import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/utils/ThemeProvider";
// import Footer from "@/components/footer/Footer";
import { inter } from "../utils/Font";
import { ReduxProvider } from "@/redux/ReduxProvider";

export const metadata: Metadata = {
  title: "Indoex Digital Assets Exchange",
  description: "Indoex Digital Assets Exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-[#eff0f2] dark:bg-[#06062a]  `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReduxProvider>
            <Navbar />
            <div className="w-full mt-[0] overflow-hidden">{children}</div>
            {/* <Footer /> */}
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
