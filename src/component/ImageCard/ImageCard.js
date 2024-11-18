// src/components/ImageCard.js
import React from 'react';

const ImageCard = ({ imageSrc, altText }) => {
  return (
    <div className="image-card">
      <img src={imageSrc} alt={altText} className="image" />
    </div>
  );
};

export default ImageCard;
