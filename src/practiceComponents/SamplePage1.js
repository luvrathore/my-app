import React from "react";
import Data from "./data.js";

function SamplePage1(props) {
  const { name, planet } = props;
  return (
    <div>
      <h1>
        {" "}
        I say hey from :: {name} living in {planet}
      </h1>
      {Data.map((data) => {
        return <h1 className={data.name}> {data.name} </h1>;
      })}
    </div>
  );
}

export default SamplePage1;
