import { React } from "react";
import { useState } from "react";
import "./index.css";

const Counter = () => {
  const [value, setValue] = useState(0);
  const increment = () => setValue(value + 1);

  const decrement = () => setValue(value - 1);

  return (
    <div className="center">
      <div className="box">
        <h1>{value}</h1>
        <div className="cent">
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
