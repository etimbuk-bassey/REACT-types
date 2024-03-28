import { useState } from "react";

import "./App.css";
import Users from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("Click Me");
  const [hidden, setHidden] = useState("");

  const myValue = {
    value1: "count as long as you want",
    value2: "Keep Counting",
  };


  const handleClick = () => {
    setWord("Count");
    setCount(count + 1);
    setHidden(count == 4 ? myValue.value1 : myValue.value2);
  };
  console.log(count);

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={handleClick}>{word}</button>
      <p>{hidden}</p> */}

      <Users />
    </>
  );
}

export default App;
