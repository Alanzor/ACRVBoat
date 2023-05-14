import React from "react";
import LocationText from "../Components/Location/LocationText";
import MapContainer from "../Components/Location/MapContainer";
import "../Components/Home/MediaContainer.css";

export default function Location() {
  return (
    <div>
      <LocationText />
      <div className="map-container">
        <MapContainer />
      </div>
    </div>
  );
}
