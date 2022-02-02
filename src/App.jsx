import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserDetails } from "./components/UserDetails";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <UserDetails name="Rahul" add="delhi" age="25" isMarried={false} />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
