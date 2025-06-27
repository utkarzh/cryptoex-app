import Footer from "@/components/footer/Footer";
import Home from "@/components/home/Home";

export const metadata = {
  title: "Markets",
  description: "Explore all crypto trading pairs on Indoex.",
};

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
