import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faClock,
  faBookmark,
  faUsers,
  faStore,
  faNewspaper,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../Images/profile.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-header">
        <img
          src={profile} // Replace with your image path
          alt="Profile"
          className="profile-image"
        />
        <span className="profile-name">Sumaira</span>{" "}
        {/* Replace with actual name */}
      </div>
      <ul>
        <li>
          <FontAwesomeIcon icon={faUserFriends} /> Find friends
        </li>
        <li>
          <FontAwesomeIcon icon={faClock} /> Memories
        </li>
        <li>
          <FontAwesomeIcon icon={faBookmark} /> Saved
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} /> Groups
        </li>
        <li>
          <FontAwesomeIcon icon={faStore} /> Marketplace
        </li>
        <li>
          <FontAwesomeIcon icon={faNewspaper} /> Feeds
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarAlt} /> Events
        </li>
        <li>
          <FontAwesomeIcon icon={faStore} /> Marketplace
        </li>
        <li>
          <FontAwesomeIcon icon={faNewspaper} /> Feeds
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarAlt} /> Events
        </li>
        <li>
          <FontAwesomeIcon icon={faStore} /> Marketplace
        </li>
        <li>
          <FontAwesomeIcon icon={faNewspaper} /> Feeds
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarAlt} /> Events
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
