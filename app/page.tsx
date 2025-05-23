import Footer from "@/components/footer/Footer";
import Home from "@/components/home/Home";

export default function Page() {
  return (
    <>
      <div className="w-full h-full overflow-y-auto scrollbar-custom">
        <Home />
      </div>
      <Footer />
    </>
  );
}
