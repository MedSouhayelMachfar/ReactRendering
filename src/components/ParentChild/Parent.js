import React, { useState } from "react";

export const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Render");
  return (
    <div>
      <h1>Counter - {count}</h1>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>set to 0</button>
      <button onClick={() => setCount(5)}>set to 5</button>
      <Child />
    </div>
  );
};

// Child Component
const Child = () => {
  console.log("Child Render");
  return <h3>Child component</h3>;
};
