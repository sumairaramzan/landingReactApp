import React, { useState } from "react";

const BComponent = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
      setIsVisible(false);
    };
  
    if (!isVisible) return null;
  return <div>
     <div className="top-header">
      <p>Sign up and get 20% off on your first order. <a href="/signup">Sign Up Now</a></p>
      <button className="close-button" onClick={handleClose}>×</button>
    </div>
  </div>;
};

export default BComponent;
