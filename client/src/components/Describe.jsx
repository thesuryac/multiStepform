import React, { useState } from "react";
import Option from "./Option";

const Describe = ({ handleContinueClick }) => {
  const [select, setSelect] = useState("");
  const handleRadio = (e) => {
    console.log(e.target.value);
    setSelect(e.target.value);
  };
  return (
    <div className=" h-screen mx-4 sm:h-[90vh] w-[90vw] sm:w-full flex flex-col justify-around items-center">
      <h1 className=" font-bold text-4xl">Which describe you best?</h1>
      <p className=" font-normal text-lg">
        This will help us personalize your experience.
      </p>

      <Option
        role={"Student"}
        subText={"or soon to be enrolled"}
        handleRadio={handleRadio}
        select={select}
      />
      <Option
        role={"Professional"}
        subText={"pursuing a career"}
        handleRadio={handleRadio}
        select={select}
      />
      <Option
        role={"Parent"}
        subText={"of a school-age child"}
        handleRadio={handleRadio}
        select={select}
      />
      <Option
        role={"Lifelong learner"}
        handleRadio={handleRadio}
        select={select}
      />
      <Option role={"Teacher"} handleRadio={handleRadio} select={select} />
      <Option role={"Other"} handleRadio={handleRadio} select={select} />
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

export default Describe;
