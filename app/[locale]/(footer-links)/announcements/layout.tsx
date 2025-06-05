import AnnouncementsHeader from "@/components/announcements/AnnouncementsHeader";
import AnnouncementsSidebar from "@/components/navbar/AnnouncementsSidebar";

export default function AnnouncementsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-[95%] sm:w-[85%] md:w-[80%]  lg:w-[70%] mx-auto mt-10 mb-10">
      <AnnouncementsHeader />
      <div className="flex gap-1 h-full">
        <AnnouncementsSidebar />
        {children}
      </div>
    </div>
  );
}
