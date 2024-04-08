import React from "react";
import "./Contact.css"; // Import your CSS file for styling
import TeamMember from "./Teammember";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
// import { toast } from 'react-toastify'

const Contact = () => {
  const teamData = [
    {
      name: "Tejas Gaikwad",
      position: "E-cell Lead",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      email: "john@example.com",
    },
    {
      name: "Rushikesh Dalvi",
      position: "Co-Lead",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/rushikesh-dalavi",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Kunal Puri",
      position: "Co-Lead",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Tanmay Jadhav",
      position: "Event Manager",
      image: "hero.png",
      linkedin:
        "https://www.linkedin.com/in/tanmay-jadhav-2058aa24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Anjali Pawar",
      position: "Event manager",
      image: "girl.jpg",
      linkedin:
        "https://www.linkedin.com/in/anjali-pawar-0a767b2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Prasad Wandhekar",
      position: "Teach Lead",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/prasad-wandhekar-092b0b201/",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Balaji Kagne",
      position: "Teach Lead",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Ashay Jadhav",
      position: "PR & Outreach",
      image: "hero.png",
      linkedin:
        "https://www.linkedin.com/in/ashay-jadhao-6959ab236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "john@example.com",
    },
    {
      name: "Sanika Kalal",
      position: "PR & Outreach",
      image: "girl.jpg",
      linkedin:
        "https://www.linkedin.com/in/aditi-kulkarni1303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Vivek Dange",
      position: "Teach Lead",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/vivek-dange-303190274",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Shantanu Todkar",
      position: "Teach Lead",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/shantanu-todkar/",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Pooja Gawali",
      position: "Teach Lead",
      image: "girl.jpg",
      linkedin:
        "https://www.linkedin.com/in/pooja-gawali-4379a622a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "john@example.com",
    },
    // Add more
    {
      name: "Ruchiket Borase",
      position: "Teach Lead",
      image: "hero.png",
      linkedin:
        "https://www.linkedin.com/in/ruchiket-borse-87759820b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "john@example.com",
    },
    {
      name: "Govindraj Ambatwar",
      position: "Event Planner",
      image: "hero.png",
      linkedin:
        "https://www.linkedin.com/in/govindraj-ambatwar-b13a1b229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "john@example.com",
    },
    {
      name: "Aditi Kulkarni",
      position: "Teach Lead",
      image: "girl.jpg",
      linkedin:
        "https://www.linkedin.com/in/aditi-kulkarni1303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_",
      email: "john@example.com",
    },
    {
      name: "Nitin Vishwakarma",
      position: "Teach Lead",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      email: "john@example.com",
    },
    {
      name: "Shruti Joshi",
      position: "Teach Lead",
      image: "girl.jpg",
      linkedin: "https://www.linkedin.com/in/shruti-joshi-565a7b268",
      email: "john@example.com",
    },
    {
      name: "Prajwal Malokar",
      position: "Member",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      email: "john@example.com",
    },
    {
      name: "Kumar Mangalam",
      position: "Member",
      image: "hero.png",
      linkedin:
        "https://www.linkedin.com/in/manglam620?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "john@example.com",
    },
    {
      name: "Kartik Keshbhat",
      position: "UI/UX Design",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      email: "john@example.com",
    },

    {
      name: "Shruti Amrutkar",
      position: "Member",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      email: "john@example.com",
    },
    {
      name: "Kaustubh Kumbharkar",
      position: "Member",
      image: "hero.png",
      linkedin:
        "https://www.linkedin.com/in/kartik-kesbhat-6a7941234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "john@example.com",
    },

    {
      name: "Anushka Kshirsagar",
      position: "Member",
      image: "girl.jpg",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      email: "john@example.com",
    },
    {
      name: "Ishita Ladniya",
      position: "Member",
      image: "girl.jpg",
      linkedin:
        "https://www.linkedin.com/in/ishita-ladniya-043332285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "john@example.com",
    },
    {
      name: "Rohit Kharkar",
      position: "Android Developer",
      image: "hero.png",
      linkedin: "https://www.linkedin.com/in/rohit-kharkar-a54090229/",
      email: "john@example.com",
    },
    {
      name: "Saee Bandal",
      position: "Design Head",
      image: "girl.jpg",
      linkedin: "www.linkedin.com/in/ saee-bandal-661672297",
      email: "john@example.com",
    },

    {
      name: "Vaidehi Borikar",
      position: "Design Head",
      image: "girl.jpg",
      linkedin:
        "https://www.linkedin.com/in/vaiidehisb-68b957299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      email: "john@example.com",
    },

    // Add more
    // Add more team members as needed
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  // const handleClick = () => {
  //   // Display toast notification
  //   toast.success('Message sent successfully!', {
  //     position: toast.POSITION.TOP_CENTER
  //   });
  // };
  

  return (
    <div>
      <div className="contact-us-container">
        <div className="background-image"></div>
        <div className="content">
          <h2 className="header">GET IN TOUCH WITH US</h2>
          <p className="message">
            We're here to help and answer any questions you may have.
          </p>
        </div>
      </div>
      <div className="contact-page">
        <h2>MEET OUR TEAM</h2>
        <div className="team-members">
          {teamData.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>

      <div className="contact-form-container">
        <h2>SEND US A MESSAGE</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="b" >
            {" "}
            Send <FaArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
