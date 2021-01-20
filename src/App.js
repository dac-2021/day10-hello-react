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
  const [post, setPost] = useState("I am facebook post");
  const [comments, setComments] = useState([]);
  const [likeCount, setLikeCount] = useState(0);
  const [disLikeCount, setdisLikeCount] = useState(0);

  const addComment = () => {
    // setComments(["Hello Universe", ...comments]);
    setComments([singleComment, ...comments]);

    setSingleComment("");
  };

  return (
    <div>
      <h1>{title}</h1>

      <h3>{post}</h3>
      <input
        type="text"
        name=""
        value={singleComment}
        onChange={updateTheSingleComment}
        placeholder="Type ur comment..."
      />
      <button onClick={addComment}>Add Comment</button>

      <div>Like {likeCount}</div>
      <div>Dislike {disLikeCount}</div>
      <div>Comments {comments.length} </div>

      {comments.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
