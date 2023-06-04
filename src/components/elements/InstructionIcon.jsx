import React from "react";

function InstructionIcon({ icon, title, id, setNode }) {
  return (
    <div onClick={() => setNode(id)}>
      <div className="flex m-3 cursor-pointer flex-wrap justify-start">
        <i
          className={` ${icon} flex w-7 h-7 justify-center items-center mr-1 `}
        ></i>
        {title}
      </div>
    </div>
  );
}

export default InstructionIcon;
