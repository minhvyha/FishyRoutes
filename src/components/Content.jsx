import React, { useContext, useRef } from "react";
import Node from "./elements/Node";
import Row from "./elements/Row";
import { nanoid } from "nanoid";

function Content() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize);

  let grid = [];
  for (let row = 0; row < 25; row++) {
    let temp = [];
    for (let col = 0; col < 50; col++) {
      temp.push(<Node key={nanoid()} row={row} col={col} />);
    }
    grid.push(<Row key={nanoid()} Nodes={temp} />);
  }

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="flex flex-col m-8">{grid}</div>
    </div>
  );
}

export default Content;
