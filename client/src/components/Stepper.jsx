import React from "react";
import Describe from "./Describe";
import Interested from "./Interested";
import RightPlace from "./RightPlace";
import MathLevel from "./MathLevel";
import Way from "./Way";
import LearningPath from "./LearningPath";
import Final from "./Final";

const Stepper = ({ currentStep, setCurrentStep, handleContinueClick }) => {
  const handleSubmit = (e) => {};
  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full">
      {currentStep === 1 && (
        <Describe handleContinueClick={handleContinueClick} />
      )}
      {currentStep === 2 && (
        <Interested handleContinueClick={handleContinueClick} />
      )}
      {currentStep === 3 && (
        <RightPlace handleContinueClick={handleContinueClick} />
      )}
      {currentStep === 4 && (
        <MathLevel handleContinueClick={handleContinueClick} />
      )}
      {currentStep === 5 && <Way handleContinueClick={handleContinueClick} />}
      {currentStep === 6 && (
        <LearningPath handleContinueClick={handleContinueClick} />
      )}
      {currentStep === 7 && <Final />}
    </form>
  );
};

export default Stepper;
