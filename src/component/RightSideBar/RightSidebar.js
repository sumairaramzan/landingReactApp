// src/components/RightSidebar.js
import React from 'react';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <h4>Sponsored</h4>
      <div className="ad">Ad content here</div>
      <div className="ad">Another ad content</div>
      
      <h4><FontAwesomeIcon icon={faComments} /> Group Chats</h4>
      <button className="group-chat"><FontAwesomeIcon icon={faComments} /> Create Group Chat</button>
    </div>
  );
};

export default RightSidebar;
