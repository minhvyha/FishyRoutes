import React, { useContext } from "react";
import { MainPageContext } from "../../App";

function InstructionIcon({ icon, title, id, setNode }) {
  const {selectedNode} = useContext(MainPageContext)
  return (
    <div onClick={() => setNode(id)}>
      <div className={selectedNode === id ? "flex p-2 cursor-pointer flex-wrap items-center justify-start bg-gray-600 text-white" : "flex p-2 cursor-pointer flex-wrap items-center justify-start "}>
        <i
          className={` ${icon} flex w-7 h-7 justify-center items-center mr-1 `}
        ></i>
        {title}
      </div>
    </div>
  );
}

export default InstructionIcon;
