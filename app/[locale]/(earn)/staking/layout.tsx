import Footer from "@/components/footer/Footer";

export default function StakeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full ">
      <div className="w-full">{children}</div>
      <Footer />
    </div>
  );
}
