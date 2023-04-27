import React from "react";
import "./MediaContainer.css";
import "./TextContainer.css";

export default function OutdoorText() {
  return (
    <div
      className="textContainer"
      style={{
        borderRight: "groove rgb(42, 163, 163)",
        borderTop: "groove rgb(42, 163, 163)",
      }}
    >
      <text className="headertxt">Indoor Storage</text>
      <text className="bodytxt">
        If you want to protect your RV or boat from the elements, indoor storage
        is the best option for you. Indoor storage offers a secure and
        climate-controlled environment for your vehicle, keeping it safe from
        dust, dirt, moisture, pests, and UV damage.
      </text>
      <a className="buttontxt" href="tel:4084255347">
        Call Today
      </a>
    </div>
  );
}
