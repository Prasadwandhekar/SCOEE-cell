import React from 'react';
import './Gallery.css'; // Import CSS file for styling

const Gallery = () => {
  return (
    <>
    <div className="ecell-moments-container">
    <h1 className="ecell-moments-title">E-CELL MOMENTS</h1>
    <p className="ecell-moments-description">Explore memorable moments from Our annual E-summit event, where aspiring entrepreneurs, industry experts, and innovators come together to inspire and learn</p>
    {/* <Gallery></Gallery> */}
</div>
    <div className="gallery">
     
      <div className="gallery-item">
        <img src="ecellphoto.jpg" alt="Image1" />
      </div>
      <div className="gallery-item">
        <img src="ecellphoto2.jpg" alt="Image2" />
      </div>
      <div className="gallery-item">
        <img src="ecellphoto3.jpg" alt="Image3" />
      </div>
      <div className="gallery-item">
        <img src="ecellphoto2.jpg" alt="Image3" />
      </div>
      <div className="gallery-item">
        <img src="ecellphoto5.jpg" alt="Image3" />
      </div>
      <div className="gallery-item">
        <img src="banner2.jpg" alt="Image3" />
      </div>
      <div className="gallery-item">
      <img src="ecellphoto4.jpg" alt="Image3" />
      </div>
      {/* <div className="gallery-item">
        <img src="banner2.jpg" alt="Image3" />
      </div>
      <div className="gallery-item">
        <img src="banner2.jpg" alt="Image3" />
      </div> */}
      {/* Add more gallery items as needed */}
    </div>
    </>
  );
};

export default Gallery;
