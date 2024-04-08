import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdOutlineEventNote } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" class="navbar-container">
        <div class="logo">
          <img src="Ecelllogo.png" alt="images" width="60" height="60" />
        </div>
        <div class="text-container">
          <h6>E-cell</h6>
          <p>Scoe</p>
        </div>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
  <li className="menu-item">
    <NavLink to="/" className="navlink">
      <IoHome />
      <span>Home</span>
    </NavLink>
  </li>
  <li className="menu-item" >
  <NavLink to="/about" className="navlink">
      <MdContactMail />
      <span>About Us</span>
    </NavLink>
  </li>
  <li className="menu-item">
    <NavLink to="/gallery" className="navlink">
      <GrGallery />
      <span>Gallery</span>
    </NavLink>
  </li>
  <li className="menu-item" >
    <NavLink to="/blogs" className="navlink">
      <MdOutlineEventNote />
      <span>Blogs</span>
    </NavLink>
  </li>
  <li className="menu-item">
    <NavLink to="/contact" className="navlink">
      <IoMdContact />
      <span>Contact</span>
    </NavLink>
  </li>
</ul>
    </nav>
  );
};

export default Header;
