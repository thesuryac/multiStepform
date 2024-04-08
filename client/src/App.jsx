import React, { useEffect, useState } from "react";
import Bar from "./components/Bar";
import Stepper from "./components/Stepper";

const App = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const [width, setWidth] = useState(20);
  useEffect(() => {
    setWidth(currentStep * 20);
  }, [currentStep]);

  return (
    <div className="h-screen w-[80vw] mx-auto">
      <div className="h-10 flex justify-center items-center">
        <div className="h-full w-10">
          {currentStep !== 1 && (
            <button className="h-10 w-10 font-semibold text-2xl">{"<"}</button>
          )}
        </div>
        <Bar width={width} />
      </div>
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
};

export default App;
