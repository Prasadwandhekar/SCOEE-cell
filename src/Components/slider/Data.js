import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slider/Data.css";

const data = [
  {
    name: "Virat Kholi",
    img: "hero.png",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
   

  {
    name: "Rohit Sharma",
    img: "hero.png",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    name: "MS Dhoni",
    img: "hero.png",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    name: "Ishan Kishan",
    img: "hero.png",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    name: "Hardik Pandya",
    img: "hero.png",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    name: "Jasprit Bumrha",
    img: "hero.png",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    name: "Rahul Dravid",
    img: "hero.png",
    reviews:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  // Add more objects as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // 1 second
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
          gap:5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          gap:7,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="speakeres">
      <div>
        <h2 className="testimonials">INSPIRATIONAL SPEAKERS</h2>
        <p>
          Discover the influential speakers who have shared their wisdom and
          insights at E-Cell events, enriching the entrepreneurial spirit.
        </p>
      </div>
      <div className="testimonials-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="testimonial-item">
              <img src={item.img} alt={item.name}  style={{ backgroundImage: `url(${item.img})` }}/>
              <h3>{item.name}</h3>
              <p>{item.reviews}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
