import React from "react";
import Feed from "./Feed";
import place from "../assets/place.jpg";

const RightPlace = ({ handleContinueClick }) => {
  const header = "You're in the right place";
  const text =
    "Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math , science, and computer science";
  return (
    <div className="h-[90vh] w-[80vw] sm:h-[90vh] sm:w-full flex flex-col justify-center items-center mx-6">
      <Feed image={place} header={header} text={text} />
      <button
        onClick={handleContinueClick}
        type="button"
        className="w-full sm:w-96 h-12 bg-gray-900 mt-10 text-white rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};

export default RightPlace;
