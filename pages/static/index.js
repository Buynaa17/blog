import { useState } from "react";

//CSR
export default function Home() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      {posts.map((post) => {
        return <PostItem key={post.id} {...post} />;
      })}
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  return { props: { data: [] } };
}

const PostItem = (props) => {
  const { id, title, body } = props;
  return (
    <div className="border mb-8">
      <span className="p-8 ">{id}</span>
      <span className="mb-8">{title}</span>
      <span className="p-8">{body}</span>
    </div>
  );
};
