import React, { useContext } from "react";
import { instructions } from "../constants";
import InstructionIcon from "./elements/InstructionIcon";
import { MainPageContext } from "../App";

function Instruction() {
  let { setSelectedNode } = useContext(MainPageContext);
  let instructionList = instructions.map((instruction) => {
    return (
      <InstructionIcon
        icon={instruction.class}
        title={instruction.name}
        id={instruction.id}
        key={instruction.id}
        setNode={setSelectedNode}
      />
    );
  });
  console.log(instructionList);
  return <div className="p-2 bg-slate-200 flex flex-row">{instructionList}</div>;
}

export default Instruction;
