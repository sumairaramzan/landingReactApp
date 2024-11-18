import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserFriends,
  faFlag,
  faTv,
  faStore,
  faTh,
  faCommentDots,
  faBell,
  faUserCircle,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookIcon,
  FlagSvgIcon,
  ProfileSvgIcon,
  SvgIcon,
  VideoSvgIcon,
} from "../../svg/svg";
import profile from "../../Images/profile.jpg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const navigate = useNavigate();

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };
  const handleIconNext = () => {
    navigate("/carousel");
  };
  return (
    <div className="facebook-header row">
      <div className="left-section col-md-3">
        <FacebookIcon />
        <div className="search-container position-relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="position-absolute"
            style={{
              left: "11px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#65676b",
            }}
          />
          <input
            type="text"
            placeholder="Search Facebook"
            className="search-input"
          />
        </div>
      </div>
      <div className=" col-md-6">
        <div className="d-flex justify-content-between align-items-center">
          <FontAwesomeIcon icon={faHome} onClick={() => handleIconNext()} />

          <FontAwesomeIcon
            icon={faUserFriends}
            className={`header-icon ${
              activeIcon === "friends" ? "active" : ""
            }`}
          />
          <FontAwesomeIcon
            icon={faFlag}
            className={`header-icon ${activeIcon === "flag" ? "active" : ""}`}
            onClick={() => handleIconClick("flag")}
          />
          <FontAwesomeIcon
            icon={faTv}
            className={`header-icon ${activeIcon === "tv" ? "active" : ""}`}
            onClick={() => handleIconClick("tv")}
          />

          <FontAwesomeIcon
            width="24px"
            height="24px"
            icon={faStore}
            className={`header-icon ${activeIcon === "store" ? "active" : ""}`}
            onClick={() => handleIconClick("store")}
          />
        </div>
      </div>
      <div className="right-section col-md-3">
        <FontAwesomeIcon icon={faTh} className="header-icon right-icon" />
        <FontAwesomeIcon
          icon={faCommentDots}
          className="header-icon right-icon"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="header-icon right-icon notification-icon"
        />
        <FontAwesomeIcon
          icon={faUserCircle}
          className="header-icon right-icon profile-icon"
        />
        <img src={profile} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
};

export default Header;
