// src/component/ExampleCarouselImage.js
import React from 'react';
import PropTypes from 'prop-types';

function ExampleCarouselImage({ src, alt }) {
  return <img src={src} alt={alt} className="d-block w-100" />;
}

ExampleCarouselImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
