import React, { useState, useEffect } from "react";

function Bar({ progress }) {
  return (
    <div className="bg-gray-200 rounded h-2 w-[90vw]">
      <div
        style={{ width: `${progress}%` }}
        className={`bg-green-500 h-full rounded`}
      ></div>
    </div>
  );
}

export default Bar;
