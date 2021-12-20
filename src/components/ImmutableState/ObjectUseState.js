import React, { useState } from "react";

const initState = {
  fname: "Alice",
  lname: "Bob",
};
export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);
  const changeName = () => {
    // person.fname = 'Machfar'
    // person.lname = 'Souhayel'
    // setPerson(person)

    const newPerson = { ...person };
    newPerson.fname = "Machfar";
    setPerson(newPerson);
  };
  console.log("ObjectUseState Render");
  return (
    <div>
      <button onClick={changeName}>
        {person.fname} {person.lname}
      </button>
    </div>
  );
};
