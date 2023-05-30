import React from "react";
import Node from "./elements/Node";

function Content() {
  let grid = [];
  for (let row = 0; row < 60; row++) {
    let temp = [];
    for (let col = 0; col < 50; col++) {
      temp.push(<Node />);
    }
    grid.push(temp);
  }

  return (
    <div className="w-screen flex">
      <div className="flex flex-wrap">{grid}</div>
    </div>
  );
}

export default Content;
