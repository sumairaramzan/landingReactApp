// src/components/Gallery.js
import React from 'react';
import ImageCard from './ImageCard';
import image1 from "../../Images/image 1.svg"
import rectangleleft from "../../Images/Rectangleleftsmall.png"

const images = [
  { src: image1, alt: 'Description 1' },
  { src: image1, alt: 'Description 2' },
  { src: image1, alt: 'Description 1' },
  { src: image1, alt: 'Description 2' },
  { src: image1, alt: 'Description 1' },
  { src: image1, alt: 'Description 2' },
  { src: image1, alt: 'Description 1' },
  { src: image1, alt: 'Description 2' },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div className="gallery">
    <h2 className="hashtag">Share your setup with #FuniroFurniture</h2>
    <div className="grid">
      {images.map((img, index) => (
        <ImageCard key={index} imageSrc={img.src} altText={img.alt} />
      ))}
    </div>
  </div>
  );
};

export default Gallery;
