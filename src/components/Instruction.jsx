import React from "react";

function Instruction() {
  return (
    <div className="p-1 bg-slate-200 flex">
      <ul className=" flex flex-wrap justify-start">
        {/* Start Node icon */}
        <li
          className="flex m-3 cursor-pointer"
          data-tip="The start node where it first begin"
        >
          <i className="fa-solid flex fa-paw w-7 h-7 justify-center items-center mr-1 "></i>
          Cat Node
        </li>

        {/* Target Node icon */}
        <li className="flex m-3 cursor-pointer">
          <i className="fa-solid fa-fish w-7 h-7 flex justify-center items-center mr-1"></i>
          Fish Node
        </li>

        {/* Wall node icon */}
        <li className="flex m-3 cursor-pointer">
          <div className="bg-gray-800 w-7 h-7 mr-1"></div>
          Wall Node
        </li>

        {/* Visited Node icon */}
        <li className="flex m-3 cursor-pointer">
          <div className="bg-teal-400 w-7 h-7 mr-1"></div>
          <div className="bg-violet-600 w-7 h-7 mr-1"></div>
          Visited Nodes
        </li>

        {/* Shortest Path Node icon */}
        <li className="flex m-3 cursor-pointer">
          <div className="bg-yellow-300 w-7 h-7 mr-1"></div>
          Shortest-path Node
        </li>
      </ul>
    </div>
  );
}

export default Instruction;
