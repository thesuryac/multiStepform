import React from "react";
import Describe from "./Describe";
import Intersted from "./Intersted";
import Rightplace from "./Rightplace";
import Mathlevel from "./Mathlevel";
import Way from "./Way";

const Stepper = ({ currentStep, setCurrentStep }) => {
  return (
    <div>
      {currentStep === 1 && <Describe />}
      {currentStep === 2 && <Intersted />}
      {currentStep === 3 && <Rightplace />}
      {currentStep === 4 && <Mathlevel />}
      {currentStep === 5 && <Way />}
    </div>
  );
};

export default Stepper;
