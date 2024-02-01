import { useEffect, useState } from "react";

export default function Home() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=j471n")
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);
  console.log(details);
  return <>Blog Details</>;
}
