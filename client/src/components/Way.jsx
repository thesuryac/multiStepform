import React from "react";
import Feed from "./Feed";
import way from "../assets/way.jpg";

const Way = ({ handleContinueClick }) => {
  const header = "You're on your way!";
  const text =
    '"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand . I now feel confident approaching both technical job interviews and real world problem solving situations. "';
  return (
    <div className="h-[90vh] w-[80vw] sm:h-[90vh] sm:w-full flex flex-col justify-center items-center mx-6">
      <Feed
        image={way}
        header={header}
        text={text}
        author={"Jacob S."}
        stars={5}
      />
      <button
        onClick={handleContinueClick}
        type="button"
        className="w-[80%] sm:w-96 h-12 sm:mt-0 mt-28 bg-gray-900 text-white rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};

export default Way;
