import React, { useState } from "react";
import { generateName } from "./generateName";

const Name = () => {
  const [name, setName] = useState(generateName());

  const handleClickName = (e) => {
    e.preventDefault();
    setName(generateName());
  };

  return (
    <a href="#" onClick={handleClickName}>
      <h1>{name}</h1>
    </a>
  );
};

export default Name;
