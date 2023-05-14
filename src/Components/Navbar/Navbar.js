import React from "react";
import "./Navbar.css";

export default function NavMenu() {
  return (
    <header className="Navbar">
      <div className="branding-box">
        <text className="branding">ACRV Boat Storage</text>
      </div>
      <ul className="btnbox">
        {/* nav bar navbutton links */}
        <a className="navbtn" href="./">
          <p className="navbutton-text">Home</p>
        </a>
        <a className="navbtn" href="./About">
          <p className="navbutton-text">About Us</p>
        </a>
        <a className="navbtn" href="./Location">
          <p className="navbutton-text"> Location</p>
        </a>
        <a className="navbtn" href="./Contact">
          <p className="navbutton-text">Contact Us</p>
        </a>
        <a className="navbtn" href="./Pay">
          <p className="navbutton-text">Pay Bill</p>
        </a>
      </ul>
    </header>
  );
}
