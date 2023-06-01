import React, { useContext, useRef } from "react";
import Node from "./elements/Node";
import Row from "./elements/Row";
import { MainPageContext } from "../App";

function Content() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize)

  const {selectedNode} = useContext(MainPageContext)
  console.log(selectedNode)
  let grid = [];
  for (let row = 0; row < 25; row++) {
    let temp = [];
    for (let col = 0; col < 50; col++) {
      temp.push(<Node />);
    }
    grid.push(<Row Nodes={temp} />);
  }

  return (
    <div className="w-screen flex">
      <div className="flex flex-col">{grid}</div>
    </div>
  );
}

export default Content;
