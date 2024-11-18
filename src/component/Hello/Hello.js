import React, { useState } from "react";
import Step1 from "../steps/Step1";
import Step2 from "../steps/Step2";
import Header from "../FbHeader/Header";
import Sidebar from "../Sidebar";
import Feed from "../Feed/Feed";
import RightSidebar from "../RightSideBar/RightSidebar";

const Hello = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleNextStep = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  
    // Do not change step if already at step 2 and the user just registered
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); 
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onComplete={handleNextStep} />;
      case 2:
        return <Step2 onComplete={handleLoginSuccess} />; // Call this on successful login
      default:
        return null;
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="part1">
          <Header />
          <div className="container-fluid p-0">
            <Sidebar />
            <div className="Feed">
              <Feed />
            </div>
            <RightSidebar />
          </div>
        </div>
      ) : (
        <div className="part2">
          <div className="progress-container">
            <div className="progress-line"></div>
            {[1, 2,3].map((step) => ( // Only show two steps
              <div
                key={step}
                className={`step-circle ${
                  completedSteps.includes(step) ? "completed" : ""
                } ${currentStep === step ? "active" : ""}`}
              >
                {completedSteps.includes(step) ? "✓" : step}
              </div>
            ))}
          </div>
          <div className="step-content">{renderStep()}</div>
          <div className="navigation-buttons">
            {currentStep > 1 && (
              <button
                onClick={handlePreviousStep}
                className="btn btn-secondary"
              >
                Previous
              </button>
            )}
            {currentStep > 2 && ( // Change condition to check for Step 2
              <button onClick={handleNextStep} className="btn btn-primary">
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hello;
