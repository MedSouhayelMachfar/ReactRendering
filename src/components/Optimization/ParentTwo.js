import React, { useState } from "react";
import { ChildTwo, MemoizedChildTwo } from "./ChildTwo";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Machfar");

  console.log("ParentTwo Render");
  return (
    <div>
      <h3>Counter = {count}</h3>
      <button onClick={() => setName("Souhayel")}>Change name</button>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Increment by 1
      </button>
      {/* <ChildTwo name={name} /> */}
      <MemoizedChildTwo name={name} />
    </div>
  );
};
