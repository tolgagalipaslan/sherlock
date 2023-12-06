import React from "react";

const FancyLine = () => {
  return (
    <div className="absolute flex items-center gap-1 bottom-0  left-1/2 transform -translate-x-1/2">
      <div className="bg-[#f6be27] h-[3px] w-[47px] rounded-md"></div>
      <div className="bg-[#f6be27] h-[3px] w-[30px] rounded-md"></div>
      <div className="bg-[#f6be27] h-[3px] w-[8px] rounded-md"></div>
    </div>
  );
};

export default FancyLine;
