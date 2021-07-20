import React, { useState } from "react";
import { generateName } from "./generateName";
import { Helmet } from "react-helmet";

const Name = () => {
  const [name, setName] = useState(generateName());

  const handleClickName = (e) => {
    e.preventDefault();
    setName(generateName());
  };

  return (
    <div>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <h1>{name}</h1>
      {name == "Bob Johnson!" ? <h3 className="bob">oh, wait...</h3> : null}
      <div className="reload">
        <a href="#" onClick={handleClickName}>
          <h2>new name...</h2>
        </a>
      </div>

      <div className="credit">
        <h3>
          rydermatic by <a href="https://buckar.ooo">alex cline</a> - many
          thanks to{" "}
          <a href="https://www.youtube.com/watch?v=RFHlJ2voJHY&feature=youtu.be">
            mst3k
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Name;
