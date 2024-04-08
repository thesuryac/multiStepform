import React, { useState } from "react";
import Option from "./Option";

const MathLevel = ({ handleContinueClick }) => {
  const [select, setSelect] = useState("");
  const data = [
    { role: "Arithmetic", subText: "Introductory", equation: "5 + 4 = ?" },
    { role: "Basic Algebra", subText: "Foundational", equation: "3x + 5 = 4" },
    {
      role: "Intermediate Algebra",
      subText: "Intermediate",
      equation: "x=-b+4ac-b",
    },
    { role: "Calculus", subText: "Advanced", equation: "dy/dx = x^2 + y^2" },
  ];
  const handleRadio = (e) => {
    setSelect(e.target.value);
  };
  return (
    <div className=" h-auto w-[90vw] mx-4 sm:mx-0 sm:h-[90vh] sm:w-full flex flex-col justify-around items-center">
      <h1 className=" font-bold text-4xl">Which are you most interested in?</h1>
      <p className=" font-normal text-lg">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </p>
      <div className=" flex flex-col sm:flex-row gap-4">
        {data.map((element) => {
          return (
            <Option
              style={{ width: 200 }}
              key={element.role}
              role={element.role}
              subText={element.subText}
              equation={element.equation}
              handleRadio={handleRadio}
              select={select}
              height={200}
              squared={true}
            />
          );
        })}
      </div>

      {select === "" ? (
        <button
          onClick={handleContinueClick}
          type="button"
          className="w-[60%] h-12 my-10 sm:my-0 bg-gray-500 text-white rounded-lg cursor-not-allowed"
          disabled
        >
          Continue
        </button>
      ) : (
        <button
          onClick={handleContinueClick}
          type="button"
          className="w-[60%] h-12 my-10 sm:my-0 bg-gray-900 text-white rounded-lg"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default MathLevel;
