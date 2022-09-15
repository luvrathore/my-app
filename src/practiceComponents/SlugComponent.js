import React from "react";

function SlugComponent(props) {
  return <h1>{" We are playing " + props.match.params.slug}</h1>;
}

export default SlugComponent;
