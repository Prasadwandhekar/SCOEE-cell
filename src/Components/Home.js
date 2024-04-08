//
import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { FaCity } from "react-icons/fa6";
import { GiLightBulb } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { SiBookmeter } from "react-icons/si";
import Data from "./slider/Data";
import Slides from "./slider/Slides";
import Testimonial from "./Testimonial";
import reviews from "../Reveiw";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Home = () => {
  const [cityCount, setCityCount] = useState(0);
  const [startupCount, setStartupCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [competitionCount, setCompetitionCount] = useState(0);

  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 1000); // Change slide every 1 second

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount
  // }, [images.length]);

  useEffect(() => {
    const cityTimer = setInterval(() => {
      setCityCount((count) => (count < 600 ? count + 1 : 600));
    }, 10);
    const startupTimer = setInterval(() => {
      setStartupCount((count) => (count < 450 ? count + 1 : 450));
    }, 10);
    const studentTimer = setInterval(() => {
      setStudentCount((count) => (count < 800 ? count + 1 : 800));
    }, 10);
    const competitionTimer = setInterval(() => {
      setCompetitionCount((count) => (count < 10 ? count + 1 : 10));
    }, 10);

    return () => {
      clearInterval(cityTimer);
      clearInterval(startupTimer);
      clearInterval(studentTimer);
      clearInterval(competitionTimer);
    };
  }, []);

  return (
    <>
      <div className="home">
        <div className="car">
          <div>
            <imag src="banner2.jpg" alt="images" />
          </div>
        </div>
        <div className="scoe">
          <div className="animate-text">
            <div className="delay-animation">
              <h1>E-CELL SCOE</h1>
            </div>
          </div>
          <div className="animate-text">
            <div className="delay-animation">
              <p>
                "Empowering Innovation, Cultivating Leadership, Empowering
                Future Entrepreneurs to Soar."
              </p>
            </div>
          </div>
          <div className="btn animate-btn">
            <button >
              <a href="/about">
              Know More 
              </a>
            </button>
         
          </div>
        </div>
      </div>

      <div className="icon-bar">
  <a
    href="/"
    className="facebook"
    target="_blank"
    style={{ color: "goldenrod", padding: "10px" }}
  >
    Click here to visit <FaFacebookF className="social-icon" />
  </a>
  <a
    href="/"
    className="twitter"
    target="_blank"
    style={{ color: "goldenrod", padding: "10px" }}
  >
    Click here to visit <TiSocialTwitter className="social-icon" />
  </a>
  <a
    href="/"
    className="instagram"
    target="_blank"
    style={{ color: "goldenrod", padding: "10px" }}
  >
    Click here to visit <FaInstagram className="social-icon" />
  </a>
  <a
    href="/"
    className="linkedin"
    target="_blank"
    style={{ color: "goldenrod", padding: "10px" }}
  >
    Click here to visit <FaLinkedinIn className="social-icon" />
  </a>
</div>

      <div className="cell">
        <div className="name">
          <h1>WHAT IS E-CELL?</h1>
        </div>

        <div className="text">
          <p className="define">
            "E-Cell Scoe helps the hustling startups and young professionals via
            dynamic workshops, thought-provoking speaker sessions, high-stakes
            business plan competitions, and numerous other game-changing
            initiatives throughout the year to create a crucible for innovation.
            We stand as pillars of support for budding entrepreneurs, providing
            them with personalized guidance from experienced mentors, crucial
            funding opportunities, network that can change the course of their
            journey forever!"
          </p>
        </div>
      </div>
      <div className="rich">
        <div className="city">
          <FaCity />
          <h3 className="cities">
            <span>{cityCount}</span>+
          </h3>
          <p>Cities</p>
        </div>
        <div className="startup">
          <GiLightBulb />
          <h3 className="bulb">
            <span>{startupCount}</span>+
          </h3>
          <p>Startups</p>
        </div>
        <div className="student">
          <PiStudentBold />
          <h3>
            <span>{studentCount}</span>+
          </h3>
          <p>Students</p>
        </div>
        <div className="compitions">
          <SiBookmeter />
          <h3 className="competition">
            <span>{competitionCount}</span>+<p>Competitions</p>
          </h3>
        </div>
      </div>

      <div className="container">
        <div className="image-container">
          <img
            src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/5fd1a9bc7bff47001c09469e.jpg"
            alt="images"
          />
        </div>

        <div className="goals">
          <h2>Our Goals</h2>
          <ul>
            <li>Empower aspiring entrepreneurs.</li>
            <li>Foster innovation and creativity.</li>
            <li>Provide mentorship and resources.</li>
            <li>Organize impactful events and competitions.</li>
            <li>Build a strong network of industry leaders.</li>
            <li>Promote social responsibility in ecell.</li>
            <li>Encourage collaboration and teamwork.</li>
            <li>Inspire individuals to pursue entrepreneurial dreams.</li>
          </ul>
        </div>
      </div>

      <div className="speak">
        <Data />
      </div>

      <div className="our">
        <div className="testy">
          <h2 className="testimonials">OUR TESTIMONIALS</h2>
        </div>

        <Slides />
        <div className="Appp">
          <div className="data">
            <Testimonial reviews={reviews} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
