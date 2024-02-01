import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Mid } from "@/components/Mid";
import { Allblog } from "@/components/Allblog";
import { useEffect, useState } from "react";
import { Trending } from "@/components/Trending";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=j471n")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
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
      <div>
        <Allblog />
      </div>
      <div className="w-96"></div>
      <>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-5">
            {articles.map((article) => (
              <Card key={article.id} article={article} />
            ))}
          </div>
        </div>

        <Footer />
      </>
    </div>
  );
}
