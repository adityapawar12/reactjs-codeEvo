// USE STATE HOOK WITH AN OBJECT IN REACT JS
import React, { useState } from "react";

const HookCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <input
        type={"text"}
        value={name.firstName}
        onChange={(event) => {
          setName({ ...name, firstName: event.target.value });
        }}
      />
      <input
        type={"text"}
        value={name.lastName}
        onChange={(event) => {
          setName({ ...name, lastName: event.target.value });
        }}
      />

      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </>
  );
};

export default HookCounterThree;
