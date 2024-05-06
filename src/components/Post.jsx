
import { useState, useEffect } from "react";

function Post() {
  const [post, setPost] = useState();
  const [id, setId] = useState(1);
  const[idFromButton, setIdFromButton] =useState(1)

  const handleClick = () => {
    setIdFromButton(id);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [idFromButton]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>

      {post && <div>{post.title}</div>}
    </div>
  );
}

export default Post;