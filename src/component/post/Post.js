// src/components/Post.js
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faImages,
  faSmile,
  faUserTag,
  faMapMarkerAlt,
  faGift,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

const Post = ({ user, text, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [postContent, setPostContent] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSecondModal = () => {
    setIsSecondModalOpen(!isSecondModalOpen);
  };

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePost = () => {
    console.log("Posted content:", postContent);
    setPostContent(""); 
    toggleModal(); 
  };
  return (
    <div className="post pb-0">
      <div className="post-header">
        <img src={user.avatar} alt={`${user.name} avatar`} className="avatar" />
        <div className="post-input-div" onClick={toggleModal}>
          What's on your mind, Sumaira?
        </div>
      </div>
      <div>
        <div className="post-options">
          <div className="option">
            <FontAwesomeIcon icon={faVideo} className="icon live-video" />
            <span>Live video</span>
          </div>
          <div className="option">
            <FontAwesomeIcon icon={faImages} className="icon photo-video" />
            <span>Photo/video</span>
          </div>
          <div className="option">
            <FontAwesomeIcon icon={faSmile} className="icon feeling-activity" />
            <span>Feeling/activity</span>
          </div>
        </div>

        {/* Bootstrap Modal */}
        <Modal show={isModalOpen} onHide={toggleModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Create Post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="user-section">
              <img
                src="profile-pic.jpg"
                alt="Profile"
                className="profile-pic"
              />
              <span className="username">Sumaira</span>
            </div>

            {/* Text Area */}
            <textarea
              placeholder="Share your thoughts..."
              className="form-control"
              rows="4"
              value={postContent}
              onChange={handleContentChange}
            ></textarea>

            {/* Media Options */}
            <div className="media-options">
              <span className="media-title" onClick={toggleSecondModal}>
                Add to your post
              </span>
              <div className="media-icons">
                <div className="option">
                  <FontAwesomeIcon icon={faVideo} className="icon live-video" />
                </div>
                <div className="option">
                  <FontAwesomeIcon
                    icon={faImages}
                    className="icon photo-video"
                  />
                </div>
                <div className="option">
                  <FontAwesomeIcon
                    icon={faSmile}
                    className="icon feeling-activity"
                  />
                </div>
                <div className="option">
                  <FontAwesomeIcon
                    icon={faUserTag}
                    className="icon tag-people"
                  />
                </div>
                <div className="option">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="icon check-in"
                  />
                </div>
                <div className="option">
                  <FontAwesomeIcon icon={faGift} className="icon gift" />
                </div>
                <div className="option">
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    className="icon more-options"
                  />
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="w-100"
              variant="primary"
              onClick={handlePost}
              disabled={!postContent.trim()} // Disables if content is empty
            >
              Post
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={isSecondModalOpen} onHide={toggleSecondModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Select Options</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Content for the second modal */}
            <p>
              Here you can add more options or select additional settings for
              your post.
            </p>
            {/* Example options */}
            <div>
              <label>
                <input type="checkbox" /> Option 1
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Option 2
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Option 3
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleSecondModal}>
              Close
            </Button>
            <Button variant="primary" onClick={toggleSecondModal}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <p className="post-text">{text}</p>
      {image && <img src={image} alt="post" className="post-image" />}
    </div>
  );
};

export default Post;
