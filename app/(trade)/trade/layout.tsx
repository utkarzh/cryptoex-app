import TradeNavBar from "@/components/navbar/TradeNavBar";

export default function TradeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col overflow-auto ">
      <div className="h-fit">
        <TradeNavBar />
      </div>
      <div className="w-full h-fit mt-[0] ">{children}</div>
    </div>
  );
}
