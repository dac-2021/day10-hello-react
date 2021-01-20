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
  let count = 200; // 100 assigned to  local variable
  let [counter, setCounter] = useState(200); // react state variable

  const likeMethod = () => {
    // react state variable
    setCounter(counter + 1);

    // local
    count += 1;
  };

  const dislikeMethod = () => setCounter(counter - 1);

  return (
    <div>
      <div>Hello Post</div>
      <div>
        {counter} / {count}
      </div>
      <button onClick={likeMethod}>Like</button>
      <button onClick={dislikeMethod}>DisLike</button>
    </div>
  );
}

export default App;
