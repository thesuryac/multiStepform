import React from "react";

const Bar = ({ width }) => {
  return (
    <div className="h-full w-full flex justify-between items-center">
      <div className="bg-zinc-400 h-2 w-full">
        <div className={`bg-green-500 h-full w-[${width}%]`}>{width}</div>
      </div>
    </div>
  );
};

export default Bar;
