import React from "react";
import "./Navbar.css";

export default function NavMenu() {
  return (
    <header className="Navbar">
      <ul>
        <text className="branding">ACRV Boat Storage</text>
      </ul>
      <ul className="btnbox">
        {" "}
        {/* nav bar button links */}
        <a className="navbtn" href="./">
          Home
        </a>
        <a className="navbtn" href="./">
          About Us
        </a>
        <a className="navbtn" href="./">
          Location
        </a>
        <a className="navbtn" href="./Contact">
          Contact Us
        </a>
      </ul>
    </header>
  );
}
