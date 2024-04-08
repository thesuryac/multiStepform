import React, { useEffect, useState } from "react";
import Bar from "./components/Bar";
import Stepper from "./components/Stepper";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    if (currentStep > 1 && currentStep <= 5) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleContinueClick = () => {
    if (((currentStep) => 1) && currentStep <= 6) {
      setCurrentStep(currentStep + 1);
    }
  };
  useEffect(() => {
    setProgress(currentStep * 20);
  }, [currentStep]);

  return (
    <div className="h-screen w-[90vw] mx-0 sm:mx-auto">
      <div className="h-10 flex justify-center items-center">
        <div className="h-full w-10">
          {currentStep !== 1 && currentStep !== 6 && currentStep !== 7 && (
            <button
              onClick={handleClick}
              className="h-10 w-10 font-semibold text-2xl"
            >
              {"<"}
            </button>
          )}
        </div>
        {currentStep !== 6 && currentStep !== 7 && <Bar progress={progress} />}
      </div>
      <Stepper
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        handleContinueClick={handleContinueClick}
      />
    </div>
  );
};

export default App;
