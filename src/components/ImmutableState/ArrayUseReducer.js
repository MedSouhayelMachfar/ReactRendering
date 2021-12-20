import React, { useReducer } from "react";

const initialState = ["Alice", "Bob"];

const reducer = (state, action) => {
  const newState = [...state];
  switch (action) {
    case "addNames":
      // state.push('Machfar')
      // state.push('Souhayel')
      // return state
      newState.push("Machfar");
      newState.push("Souhayel");
      return newState;
    case "resetNames":
      return initialState;
    default:
      return state;
  }
};

export const ArrayUseReducer = () => {
  const [persons, dispatch] = useReducer(reducer, initialState);

  console.log("ArrayUseReducer Render");
  return (
    <div>
      <button onClick={() => dispatch("addNames")}>Add names</button>
      <button onClick={() => dispatch("resetNames")}>Reset names</button>
      {persons.map((person) => (
        <h3 key={getId()}>{person}</h3>
      ))}
    </div>
  );
};
// Custom key
let id = 0;
const getId = () => {
  return id++;
};
