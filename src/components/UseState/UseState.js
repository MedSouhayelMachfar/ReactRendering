import React, { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  console.log("UseState Render");
  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Increment by 1
      </button>
      <button onClick={() => setCount(0)}>Reset to 0</button>
      <button onClick={() => setCount(5)}>Set counter to 1</button>
    </div>
  );
};
