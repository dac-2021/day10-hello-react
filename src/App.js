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
  const [password, setPassword] = useState("");

  // When the state of Input Element is udpated. At the same
  // time we are updating, the state of React State Variabel.
  // To keep the value in SYNC.
  const updateInput = (e) => setUsername(e.target.value);
  const updateInputPassword = (e) => setPassword(e.target.value);

  const processLogin = () => {
    console.log(username, password);
    // we get the user input
    // we have to validte this user input
    // who will validate this. TIER2/LAYER2/BACKEND
    // we have to make ajax call to the BACKEND SERVER.
  };

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

      <br />
      <input
        type="password"
        value={password}
        onChange={updateInputPassword}
        name="username"
        placeholder="Password"
      />

      <br />
      <button onClick={processLogin}>Login</button>

      <br></br>

      <div>Username :: {username}</div>

      <div>Username :: {username}</div>

      <div>Username :: {username}</div>
    </div>
  );
}

export default App;
