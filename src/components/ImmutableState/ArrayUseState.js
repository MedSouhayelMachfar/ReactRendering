import React, { useState } from "react";

const initState = ["Alice", "Bob"];

export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);
  const handleClick = () => {
    // persons.push('Machfar')
    // persons.push('Souhayel')
    // setPerson(persons)

    const newPersons = [...persons];
    newPersons.push("Machfar");
    newPersons.push("Souhayel");
    setPersons(newPersons);
  };
  console.log("ArrayUseState Render");
  return (
    <div>
      <button onClick={handleClick}>Click</button>
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
