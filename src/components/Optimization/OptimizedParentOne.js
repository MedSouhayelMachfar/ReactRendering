import React, { useState } from "react";

export const OptimizedParentOne = ({ children, newCount }) => {
  const [count, setCount] = useState(0);

  console.log("OptimizedParentOne Render");
  return (
    <div>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        OptimizedParentOne Count - {count}
      </button>
      {children}
    </div>
  );
};
