import React from "react";
import "./MediaContainer.css";
import "./TextContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaravan,
  faWarehouse,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

export default function OutdoorText() {
  return (
    <div className="textContainer">
      <p className="header-text">Outdoor Storage</p>

      <div className="subtext-container">
        <div className="icon-text-box">
          <FontAwesomeIcon className="home-icon" icon={faCaravan} />

          <p className="body-text">
            The Perfect place to store your RV or Boat
          </p>
        </div>
        <div className="icon-text-box">
          <FontAwesomeIcon className="home-icon" icon={faWarehouse} />

          <p className="body-text">
            We have Outdoor and Indoor storage options
          </p>
        </div>
        <div className="icon-text-box">
          <FontAwesomeIcon className="home-icon" icon={faMoneyBill} />

          <p className="body-text">Always affordable with competitive rates</p>
        </div>
      </div>

      <a className="button-text" href="tel:4084255347">
        Call Today
      </a>
    </div>
  );
}
