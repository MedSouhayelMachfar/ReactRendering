import React, { useState } from "react";
import { ChildThree, MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFour } from "./ChildFour";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Machfar");

  console.log("ParentThree Render");
  return (
    <div>
      <button onClick={() => setName("Souhayel")}>Change name</button>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Count - {count}
      </button>
      {/* <ChildThree name={name} />
      <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
      <MemoizedChildFour name={name} />
    </div>
  );
};
