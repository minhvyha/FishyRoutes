import React from "react";
import Node from "./elements/Node";

function Content() {
  let Nodes = <Node/>
  for (let row = 0; row < 10; row++) {
    Nodes = <Node/>; 
  }

  return <div className="w-screen">{Nodes}</div>;
}

export default Content;
