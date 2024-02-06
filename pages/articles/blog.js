import Allblog from "@/components/Allblog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function HomeBlog() {
  return (
    <div className="w-[1200px] m-auto">
      <Header />
      <div className="flex justify-center p-8 ">
        <Allblog />
      </div>
      <div className="flex justify-center p-8">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
