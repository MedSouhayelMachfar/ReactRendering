import React from "react";

export const ChildTwo = ({ name }) => {
  console.log("ChildTwo Render");
  return <h3>ChildTwo component - {name}</h3>;
};

export const MemoizedChildTwo = React.memo(ChildTwo);
