import React from "react";
import math from "../assets/math.jpg";
const LearningPath = ({ handleContinueClick }) => {
  return (
    <div className="sm:h-[80vh] sm:w-full w-[90vw] h-auto flex flex-col justify-around items-center mx-4">
      <div className="sm:h-1/4 h-auto w-full flex flex-col items-center justify-around">
        <h1 className="font-bold text-4xl">
          Learning paths based on your answers
        </h1>
        <p className="font-normal text-lg">
          Choose one to get started. You can switch anytime.
        </p>
      </div>
      <div className="flex justify-around items-center flex-col sm:flex-row sm:h-3/4 h-auto gap-3 sm:gap-24 relative">
        <div className="sm:w-1/2 w-[80%]">
          <button
            onClick={handleContinueClick}
            className="border border-gray-600 w-full sm:w-auto sm:p-10 sm:mt-0 mt-20  p-2 rounded-lg flex justify-around items-center"
            type="button"
          >
            <div className="absolute mb-[180px] z-10 bg-yellow-500 p-3 rounded-full sm:mb-[250px]">
              <p className="font-normal text-sm">MOST POPULAR</p>
            </div>
            <div className="">
              <p className="font-bold text-lg">Foundational Math </p>
              <p>
                Build your foundational skills in algebra, geometry and
                probability
              </p>
            </div>
            <div className="h-40 w-40">
              <img src={math} alt="" className="h-full w-full object-cover" />
            </div>
          </button>
        </div>
        <div className="sm:w-1/2 w-[80%]">
          <button
            onClick={handleContinueClick}
            className="border border-gray-600 w-full sm:w-auto sm:p-10 p-2 rounded-lg flex justify-around items-center"
            type="button"
          >
            <div className="">
              <p className="font-bold text-lg">Mathematical thinking</p>
              <p>
                Build your foundational skills in algebra, geometry and
                probability
              </p>
            </div>
            <div className="h-40 w-40">
              <img src={math} alt="" className="h-full w-full object-cover" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
