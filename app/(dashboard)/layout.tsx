import Footer from "@/components/footer/Footer";
import DashboardSidebar from "@/components/navbar/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full ">
      <div className="w-full flex my-6">
        <div className="w-fit hidden lg:block  pl-2">
          {" "}
          <DashboardSidebar />
        </div>
        <div className="w-full ">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
