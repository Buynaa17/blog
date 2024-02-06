import { Header } from "@/components/Header";
import { Mid } from "@/components/Mid";
import { Trending } from "@/components/Trending";
import { Footer } from "@/components/Footer";
import Allblog from "@/components/Allblog";

export default function Home() {
  return (
    <div className="w-[1200px] m-auto">
      <div className=" mb-[132px] mt-8">
        <Header />
      </div>
      <div className="mb-[100px]">
        <Mid />
      </div>
      <div className=" mb-10">
        <Trending />
      </div>
      <Allblog />

      <Footer />
    </div>
  );
}
