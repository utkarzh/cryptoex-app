import TradeNavBar from "@/components/navbar/TradeNavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <TradeNavBar/>
        <div className="w-full mt-[0]">
           {children}
        </div>
    </>
  );
}