import { useEffect, useState } from "react";

//CSR
export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setPosts(data);
        }, 1000);
      });
  }, []);
  console.log("posts:", posts);

  return (
    <div>
      {posts.map((post) => {
        return (
          <PostItems
            key={post.id}
            {...post}
            // title={post.title}
            // body={post.body}
          />
        );
      })}
    </div>
  );
}

const PostItems = (props) => {
  const { id, title, body } = props;
  return (
    <div className="border mb-8">
      <span className="p-8 ">{id}</span>
      <span className="mb-8">{title}</span>
      <span className="p-8">{body}</span>
    </div>
  );
};
