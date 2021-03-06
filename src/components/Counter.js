import React, { useState} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <div>
      <h3 className ="counter-header">Count is {count}</h3>
      <div className="buttons-group">
        <button className="buttons" onClick={handleDecrement}>Decrement</button>
        <button className="buttons" onClick={handleIncrement}>Increment</button>
        <button className="buttons" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;