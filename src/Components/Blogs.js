import React, { useState } from 'react';
import './Gallery.css'; // Import CSS file for styling

const BlogPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  // Function to toggle the popup and set the content
  const togglePopup = (entry) => {
    setShowPopup(!showPopup);
    setPopupContent(entry);
  };

  // Blog entries data
  const blogEntries = [
    {
      photo: "ecellphoto.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      button: "Button"
    },
    {
      photo: "ecellphoto2.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      button: "Button"
    },
    {
      photo: "ecellphoto3.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      button: "Button"
    },
    {
      photo: "ecellphoto4.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      button: "Button"
    },
    {
      photo: "ecellphoto5.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      button: "Button"
    },
    {
      photo: "https://2k21.s3.amazonaws.com/images/1690893572361.jpeg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      button: "Button"
    },
    // Add more blog entries as needed
  ];

  // Component for each blog entry
  const BlogEntry = ({ entry }) => (
    <div style={styles.entry}>
      <img src={entry.photo} alt="Blog post" style={styles.image} />
      <p>{entry.description}</p>
      <button style={styles.button} onClick={() => togglePopup(entry)}>{entry.button}</button>
    </div>
  );

  return (
    <div>
      <div className="ecell-moments-container">
        <h1 className="ecell-moments-title">E-CELL BLOGS</h1>
        <p className="ecell-moments-description">Explore memorable moments from Our annual event, where aspiring entrepreneurs, industry experts, and innovators come together to inspire and learn</p>
      </div>
      <div style={styles.container}>
        {blogEntries.map((entry, index) => (
          <BlogEntry key={index} entry={entry} />
        ))}
      </div>
      {showPopup && (
        <div style={styles.popup}>
          <img src={popupContent.photo} alt="Popup images" style={styles.popupImage} />
          <p>{popupContent.description}</p>
          <button onClick={togglePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px',
    width: '80%',
    margin: '0 auto',
  },
  entry: {
    marginBottom: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  image: {
    width: '100%',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  popup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -40%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    zIndex: '999',
  },
  popupImage: {
    width: '100%',
    marginBottom: '10px',
    borderRadius: '5px',
  },
};

export default BlogPage;
