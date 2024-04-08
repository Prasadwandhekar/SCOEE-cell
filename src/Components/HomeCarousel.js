import React, { useState } from 'react';
// import './HomeCarousel.css'; 

const HomeCarousel = () => {
  const images = ['Ecelllogo.jpg', 'banner1.jpg', 'banner2.jpg', 'banner3.jpg', 'banner4.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button className="arrow left" onClick={goToPrevSlide}>{'<'}</button>
      <div className="slide">
        <img src={images[currentIndex]} alt={`Images ${currentIndex + 1}`} />
        <p className="legend">Message for Image {currentIndex + 1}</p>
      </div>
      <button className="arrow right" onClick={goToNextSlide}>{'>'}</button>
    </div>
  );
};

export default HomeCarousel;
