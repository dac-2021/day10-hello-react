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
  const [title, setTitle] = useState("My Project");

  const [list, setList] = useState([]);
  const addElement = () => {
    setList(["Hello Universe", ...list]);
  };

  return (
    <div>
      <div>{title}</div>

      <h1>My Post</h1>
      <h6>Comment List </h6>
      <input type="text" name="" id="" />
      <button onClick={addElement}>Add Element</button>

      <div>{list.length} Comments</div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
