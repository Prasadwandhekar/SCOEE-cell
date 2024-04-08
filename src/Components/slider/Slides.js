import React, { useState, useEffect } from 'react';
import './Slides.css';

const Slides = () => {
  const [slides] = useState([
    {
      name: 'John Doe',
      position: 'CEO',
      image: 'https://via.placeholder.com/300',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Jane Doe',
      position: 'CTO',
      image: 'https://via.placeholder.com/300',
      quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more slides as needed
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 1000); // Change slide every 1 second

    return () => clearInterval(interval);
  }, [slides]);
  
  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <div className="slide-info">
              <img src={slide.image} alt={slide.name} className="slide-image" />
              <div className="slide-details">
                <h2 className="slide-name">{slide.name}</h2>
                <p className="slide-position">{slide.position}</p>
              </div>
            </div>
            <p className="slide-quote">"{slide.quote}"</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slides;
