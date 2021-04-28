import React, { useState} from "react";

function Counter1() {
  const [count, setCount] = useState(0);


  async function handleIncrement() {
    const newCount = await setCount(count + 1)
    console.log(newCount)
  }

  async function handleDecrement() {
    const newCount = await setCount(count - 1)
    console.log(newCount)
  }
  
  return (
    <div>
      <h3 className="counter-header">Count is {count}</h3>
      <div className="buttons-group">
        <button className="buttons" onClick={handleDecrement}>Decrement</button>
        <button className="buttons" onClick={handleIncrement}>Increment</button>
        <button className="buttons" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter1;