import React, { useRef, useState } from "react";
import "../app.css";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();
  console.log(spanRef);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <li className="simple">
      <span ref={spanRef}>Reading</span>
      <span>{count}</span>
      <button onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
