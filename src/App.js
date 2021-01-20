import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <Post />
    </div>
  );
}

function Post() {
  const [title] = useState("Dynamic Comment List");

  const [singleComment, setSingleComment] = useState("");
  const updateTheSingleComment = (e) => setSingleComment(e.target.value);

  // Immutable object
  const [post, setPost] = useState({
    message: "I am facebook post",
    likeCount: 0,
    disLikeCount: 0,
    comments: [],
  });

  const addComment = () => {
    // Intersting
    setPost({ ...post, comments: [singleComment, ...post.comments] });
    setSingleComment("");
  };

  return (
    <div>
      <h1>{title}</h1>

      <h3>{post.message}</h3>
      <input
        type="text"
        name=""
        value={singleComment}
        onChange={updateTheSingleComment}
        placeholder="Type ur comment..."
      />
      <button onClick={addComment}>Add Comment</button>

      <div>Like {post.likeCount}</div>
      <div>Dislike {post.disLikeCount}</div>
      <div>Comments {post.comments.length} </div>

      {post.comments.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
