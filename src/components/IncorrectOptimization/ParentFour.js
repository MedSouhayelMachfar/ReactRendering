import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Mohamed");

  const person = {
    fname: "Machfar",
    lname: "Souhayel",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setName("Souhayel")}>Change name</button>
      <button onClick={() => setCount((prevValue) => prevValue + 1)}>
        Count - {count}
      </button>
      {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
    </div>
  );
};
