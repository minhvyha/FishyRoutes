import React from "react";
import Node from "./elements/Node";

function Content() {
  let grid = []
  for (let row = 0; row < 10; row++) {
    grid.push(<Node />)
  }

  return <div className="w-screen">{grid}</div>;
}

export default Content;
