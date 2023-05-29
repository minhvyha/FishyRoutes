import React from "react";

function Instruction() {
  return (
    <div className="h10">
      <ul>
        <li className="flex">
          <i className="fa-solid flex fa-paw w-7 h-7 justify-center items-center"></i>
          Start Node
        </li>
        <li className="flex">
          <i className="fa-solid fa-fish w-7 h-7 flex justify-center items-center"></i>
          Target Node
        </li>
        <li className="flex">
          <div className="bg-gray-800 w-7 h-7 "></div>
          Wall Node
        </li>
      </ul>
    </div>
  );
}

export default Instruction;
