import React from "react";
import "./component.css";
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="component-container">
      <p>you have clicked {count} times</p>
      <button
        id="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Component;
