import React from "react";
import './App.css';
import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";

export default function App() {
  return (
    <div className="App">
    <h1>Counter App</h1>
    <div className="display"> 
      <Counter />
      <Counter1 />
      </div>
      
    </div>
  );
}
