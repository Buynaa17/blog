import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Mid } from "@/components/Mid";
import { Allblog } from "@/components/Allblog";
import { useEffect, useState } from "react";
import { Trending } from "@/components/Trending";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=j471n&per_page=9&page=1")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  function loadNext() {
    fetch(
      `https://dev.to/api/articles?username=j471n&per_page=9&page=${
        currentPage + 1
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      });
  }

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <Card key={article.id} article={article} />
            ))}
          </div>
        </div>
        <div
          className="  p-3 rounded bg-slate-200 text-slate-600  inline-block mx-auto mt-7 hover:bg-blue-300"
          onClick={loadNext}
        >
          Laod more
        </div>

        <Footer />
      </>
    </div>
  );
}
