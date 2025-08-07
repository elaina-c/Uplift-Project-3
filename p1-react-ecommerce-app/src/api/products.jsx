import { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response);
        if (!response.ok) {
          throw new Error(`Unable to load Posts. Please try again later.`);
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      <h1>Post List</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {posts.map((post) => {
            <li className="post-list" key={post.id}>
              {post.title}
            </li>;
          })}
        </ul>
      )}
    </>
  );
};
export default PostList;
