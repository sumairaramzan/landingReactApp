// src/component/CustomCarousel.js
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import carousel1 from "../../Images/bell.svg";
import carousel2 from "../../Images/bell.svg";
import carousel3 from "../../Images/bell.svg";
import carousel4 from "../../Images/bell.svg";
import carousel5 from "../../Images/bell.svg";
import carousel6 from "../../Images/bell.svg";
import carousel7 from "../../Images/bell.svg";
import "./carousel.css";

function CustomCarousel() {
    const [playInterval, setPlayInterval] = useState(2000);
    const [slideDuration, setSlideDuration] = useState(450);
    const [thumbnailPosition, setThumbnailPosition] = useState("bottom");
    const [showFullscreenButton, setShowFullscreenButton] = useState(true);
    const [showPlayButton, setShowPlayButton] = useState(true);
    const [showBullets, setShowBullets] = useState(true);
    const [showThumbnails, setShowThumbnails] = useState(true);
    const [showNav, setShowNav] = useState(true);
  const images = [
    {
      original: carousel1,
      thumbnail: carousel1,
      description: "Render custom slides (such as videos)",
      renderItem: () => (
        <div className="custom-slide">
          <img src={carousel1} alt="Custom slide" />
          {/* Optional play button or overlay */}
          <button className="play-button">▶</button>
        </div>
      ),
    },
    {
      original: carousel2,
      thumbnail: carousel2,
      description: "Another example description",
    },
    {
      original: carousel3,
      thumbnail: carousel3,
      description: "Another example description",
    },
    {
      original: carousel4,
      thumbnail: carousel4,
      description: "Another example description",
    },
    {
      original: carousel5,
      thumbnail: carousel5,
      description: "Another example description",
    },
    {
      original: carousel6,
      thumbnail: carousel6,
      description: "Another example description",
    },
    {
      original: carousel7,
      thumbnail: carousel7,
      description: "Another example description",
    },
  ];

  return (
    <div>
    <div className="carousel-container">
      <ImageGallery
        items={images}
        showThumbnails={showThumbnails}
        showPlayButton={showPlayButton}
        showFullscreenButton={showFullscreenButton}
        showNav={showNav}
        showBullets={showBullets}
        slideInterval={playInterval}
        slideDuration={slideDuration}
        thumbnailPosition={thumbnailPosition}
      />
       <div className="settings-panel">
      <h3>Settings</h3>
      
      <div className="setting-group">
        <label>Play Interval</label>
        <input
          type="number"
          value={playInterval}
          onChange={(e) => setPlayInterval(Number(e.target.value))}
        />
      </div>

      <div className="setting-group">
        <label>Slide Duration</label>
        <input
          type="number"
          value={slideDuration}
          onChange={(e) => setSlideDuration(Number(e.target.value))}
        />
      </div>

      <div className="setting-group">
        <label>Thumbnail Bar Position</label>
        <select
          value={thumbnailPosition}
          onChange={(e) => setThumbnailPosition(e.target.value)}
        >
          <option value="bottom">Bottom</option>
          <option value="top">Top</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>

      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            checked={showFullscreenButton}
            onChange={(e) => setShowFullscreenButton(e.target.checked)}
          />
          Show fullscreen button
        </label>
        <label>
          <input
            type="checkbox"
            checked={showPlayButton}
            onChange={(e) => setShowPlayButton(e.target.checked)}
          />
          Show play button
        </label>
        <label>
          <input
            type="checkbox"
            checked={showBullets}
            onChange={(e) => setShowBullets(e.target.checked)}
          />
          Show bullets
        </label>
        <label>
          <input
            type="checkbox"
            checked={showThumbnails}
            onChange={(e) => setShowThumbnails(e.target.checked)}
          />
          Show thumbnails
        </label>
        <label>
          <input
            type="checkbox"
            checked={showNav}
            onChange={(e) => setShowNav(e.target.checked)}
          />
          Show navigation
        </label>
      </div>
    </div>
    </div>

   
  </div>
  );
}

export default CustomCarousel;
