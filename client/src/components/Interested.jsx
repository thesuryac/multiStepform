import React, { useState } from "react";
import Option from "./Option";
const Interested = ({ handleContinueClick }) => {
  const [select, setSelect] = useState("");
  const handleRadio = (e) => {
    console.log(e.target.value);
    setSelect(e.target.value);
  };
  const data = [
    "Learning specific skills to advance my career",
    "Exploring new topics I'm interested in",
    "Refreshing my math foundations",
    "Exercising my brain to stay sharp",
    "something else",
  ];
  return (
    <div className=" h-[90vh] mx-4 w-full flex flex-col justify-around items-center">
      <h1 className=" font-bold text-4xl">Which are you most interested in?</h1>
      <p className=" font-normal text-lg">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </p>
      {data.map((role) => {
        return (
          <Option
            key={role}
            role={role}
            handleRadio={handleRadio}
            select={select}
            height={74}
          />
        );
      })}

      {select === "" ? (
        <button
          onClick={handleContinueClick}
          type="button"
          className="w-[60%] h-12 bg-gray-500 text-white rounded-lg cursor-not-allowed"
          disabled
        >
          Continue
        </button>
      ) : (
        <button
          onClick={handleContinueClick}
          type="button"
          className="w-[60%] h-12 bg-gray-900 text-white rounded-lg"
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default Interested;
