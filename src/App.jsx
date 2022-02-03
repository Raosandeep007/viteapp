import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import { Example } from "./components/example";
import { Todo } from "./components/todo";

function App() {
  const [showCounter, setShowCounter] = useState(false);
  return (
    <div className="App">
      {/* {showCounter && <Counter />}
      <br />
      <button onClick={() => setShowCounter(!showCounter)}>SHOW</button>
      <Example /> */}
      <Todo />
    </div>
  );
}

export default App;
