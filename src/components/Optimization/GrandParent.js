import React, { useState } from "react";
import { OptimizedParentOne } from "./OptimizedParentOne";
import { ChildOne } from "./ChildOne";

export const GrandParent = () => {
  console.log("GrandParent Render");
  const [newCount, setNewCount] = useState(0);
  return (
    <div>
      <button onClick={() => setNewCount((prevValue) => prevValue + 1)}>
        GrandParent Count - {newCount}
      </button>
      <OptimizedParentOne newCount={newCount}>
        <ChildOne />
      </OptimizedParentOne>
    </div>
  );
};
