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

/**
 * <Post /> React also has "state"
 *
 * <div></div>
 * <input></input> :: All the form element  has thier own "state".
 */
function Post() {
  const [title] = useState("Working with Form Input Element");
  const [username, setUsername] = useState("");

  // When the state of Input Element is udpated. At the same
  // time we are updating, the state of React State Variabel.
  // To keep the value in SYNC.
  const updateInput = (e) => setUsername(e.target.value);

  return (
    <div>
      <h1>{title}</h1>

      <input
        type="text"
        value={username}
        onChange={updateInput}
        name="username"
        placeholder="Username"
      />
    </div>
  );
}

export default App;
