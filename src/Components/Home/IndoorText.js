import React from "react";
import "./MediaContainer.css";
import "./TextContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faPeopleGroup,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

export default function OutdoorText() {
  return (
    <div className="textContainer">
      <p className="header-text">Outdoor Storage</p>

      <div className="subtext-container">
        <div className="icon-text-box">
          <FontAwesomeIcon className="home-icon" icon={faLock} />

          <p className="body-text">
            Secured with reliable fencing and 24/7 security cameras
          </p>
        </div>
        <div className="icon-text-box">
          <FontAwesomeIcon className="home-icon" icon={faPeopleGroup} />

          <p className="body-text">
            Family Owned an operated with over 15 years of experience
          </p>
        </div>
        <div className="icon-text-box">
          <FontAwesomeIcon className="home-icon" icon={faBolt} />

          <p className="body-text">
            Modern, clean, and well-maintained facilities{" "}
          </p>
        </div>
      </div>

      <a className="button-text" href="tel:4084255347">
        Call Today
      </a>
    </div>
  );
}
