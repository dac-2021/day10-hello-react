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
  // Array Destructuring
  const list = [10, 20, 30];
  const [a, b] = [10, 20, 30]; // let a = 10; let b = 20;

  let count = 100;
  let [counter, setCounter] = useState(100); // React aware variable

  return (
    <div>
      <div>Hello Post</div>
    </div>
  );
}

export default App;
