import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [details, setDetails] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.username && router.query.slug) {
      fetch(
        `https://dev.to/api/articles/${router.query.username}/${router.query.slug}`
      )
        .then((response) => response.json())
        .then((data) => {
          setDetails(data);
        });
    }
  }, [router.query]);
  console.log([router.query]);
  if (details === undefined) return null;
  return (
    <div className="container mx-auto">
      <Header />
      <h1 className="text-center text-3xl font-bold p-10">{details.title}</h1>

      <img className="p-8 mx-auto" src={details.cover_image} />
      <div
        className="prose mx-auto"
        dangerouslySetInnerHTML={{ __html: details.body_html }}
      ></div>
      <Footer />
    </div>
  );
}
<Footer />;
