import { Card } from "./Card";
import { useEffect, useState } from "react";

export default function Allblog() {
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
    <div>
      <h2 className=" text-[24px]  font-bold font-[Work Sans] mb-8">
        All Blog Post
      </h2>
      <div className="text-3 font-bold font-[Work Sans] flex gap-4 mb-10">
        <p className=" text-orange-500">All</p>
        <p>Design</p>
        <p>Travel</p>
        <p>Fashion</p>
        <p>Technology</p>
        <p>Branding</p>
      </div>

      <div className="w-96"></div>
      <>
        <div className="container mx-auto flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  ">
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
      </>
    </div>
  );
}
