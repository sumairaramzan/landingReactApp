import React, { useState } from "react";
import layer from "../Images/layer.svg";
import bell from "../Images/bell.svg";
import profile from "../Images/profile.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [notificationCount, setNotificationCount] = useState(0); // State for notification count
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Function to handle bell icon click
  const handleBellClick = () => {
    setNotificationCount((prevCount) => prevCount + 1); // Increment the notification count
  };
  return (
    <header className="header">
      <div className="header-title">
        <img src={layer} alt="" />
      </div>
      <div className="header-options">
       
        <img className="mx-2" src={profile} alt="" />
        <Link to="/add">
          <img src={bell} alt="" onClick={handleBellClick} /> {/* Call the handler on click */}
          {notificationCount > 0 && (
            <span className="cart-count">{notificationCount}</span> // Display notification count
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
