import React from "react";
import "./About.css";
import { useState, useEffect } from "react";
import Blogs from "./Blogs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";



const AboutPage = ({data}) => {

  
 
  const [cityCount, setCityCount] = useState(0);
  const [startupCount, setStartupCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [competitionCount, setCompetitionCount] = useState(0);

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
    <div>
      <div className="about">
        <div className="image-containe">
          <img
            src="https://www.ecell.in/mainpage/assets/images/origin.png"
            alt="Origins of E-Cell"
          />
        </div>
        <div className="text-containe">
          <h2 className="heading">ORIGIN OF E-CELL</h2>
          <p className="description">
            "The Entrepreneurship Cell, at SCOE E-CELL was founded in 2023 with
            the motto of ‘Creating Job Creators’. Currently, we are a team of 24
            members, 2 overall Coordinators, and many enthusiastic students
            studying at SCOE, sharing a common mission. The team meets up in an
            18x18x14 room, popularly known as the ‘E-Cell office’ inside the
            Students Activity Centre (SAC), where the strategy to uplift the
            flame of startups across the globe originates."
          </p>
        </div>
      </div>
      <div className="vision">
        <h2 className="header">OUR VISION</h2>
        <p className="message">
          "Entrepreneurs have a clear vision. These are the thinkers, innovators,
          the action takers who change society for a better tomorrow. The vision
          of  SCOE-Cell  is to enable these action-takers to efficiently
          traverse their road to an enterprise by giving them exposure, 
          mentorship, network, funding opportunities and wisdom to turn their
          dreams into reality."
        </p>
      </div>
           

      <div className="rich">
        <div className="city">

          <FaFacebookF />
          <h3 className="cities">
            <span>{cityCount}</span>+
          </h3>
          <p>Followers</p>
        </div>
        <div className="startup">
          <FaInstagram />
          <h3 className="bulb">
            <span>{startupCount}</span>+
          </h3>
          <p>Followers</p>
        </div>
        <div className="student">
          <FaLinkedinIn />
          <h3>
            <span>{studentCount}</span>+
          </h3>
          <p>Followers</p>
        </div>
        <div className="compitions">
          <TiSocialTwitter />
          <h3 className="competition">
            <span>{competitionCount}</span>+
          </h3>
          <p>Followers</p>
        </div>
      </div>
          
        <div>
            <div style={{ textAlign: 'center' }}>
                <h2 className="spot">SPOTLIGHT</h2>
            </div>
            <div>
                <Blogs  /> {/* Pass the sliced data to the Blogs component */}
            </div>
        </div>
            
    </div>
  );
};
  
export default AboutPage;
