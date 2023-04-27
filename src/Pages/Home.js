import React from "react";
import MainMedia from "../Components/Home/MainMedia.js";
import OutdoorMedia from "../Components/Home/OutdoorMedia.js";
import OutdoorText from "../Components/Home/OutdoorText.js";
import IndoorText from "../Components/Home/IndoorText.js";
import IndoorMedia from "../Components/Home/IndoorMedia.js";
import "../Components/Home/MediaContainer.css";
import MainText from "../Components/Home/MainText.js";

export default function Home() {
  return (
    <div>
      <MainMedia />
      <MainText />
      <div className="mediaDivider">
        <OutdoorMedia />
        <OutdoorText />
      </div>
      <div className="mediaDivider">
        <IndoorText />
        <IndoorMedia />
      </div>
    </div>
  );
}
