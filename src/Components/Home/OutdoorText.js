import React from "react";
import "./MediaContainer.css";
import "./TextContainer.css";

export default function OutdoorText() {
  return (
    <div
      className="textContainer"
      style={{
        borderLeft: "groove rgb(42, 163, 163)",
        borderBottom: "groove rgb(42, 163, 163)",
      }}
    >
      <text className="headertxt">Outdoor Storage</text>
      <text className="bodytxt">
        Don’t let your RV or boat take up valuable space at home. Store it with
        us in our outdoor storage. We have a variety of options to suit your
        needs and budget. You’ll love our clean, well-lit, and fenced facility.
      </text>
      <a className="buttontxt" href="tel:4084255347">
        Call Today
      </a>
    </div>
  );
}
