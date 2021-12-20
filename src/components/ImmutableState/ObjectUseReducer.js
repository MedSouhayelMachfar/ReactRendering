import React, { useReducer } from "react";

const initialState = {
  fname: "Alice",
  lname: "Bob",
};

const reducer = (state, action) => {
  const newState = { ...state };
  switch (action) {
    case "firstName":
      // state.fname = 'Machfar'
      // return state
      newState.fname = "Machfar";
      return newState;
    case "lastName":
      // state.lname = 'Souhayel'
      // return state
      newState.lname = "Souhayel";
      return newState;
    case "resetName":
      return initialState;
    default:
      return state;
  }
};

export const ObjectUseReducer = () => {
  const [person, dispatch] = useReducer(reducer, initialState);

  console.log("ObjectUseReducer Render");
  return (
    <div>
      <h3>
        {person.fname} {person.lname}
      </h3>
      <button onClick={() => dispatch("firstName")}>Change first name</button>
      <button onClick={() => dispatch("lastName")}>Change last name</button>
      <button onClick={() => dispatch("resetName")}>Reset name</button>
    </div>
  );
};
