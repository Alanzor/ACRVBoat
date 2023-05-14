import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "65vh",
};

const center = {
  lat: 37.10041,
  lng: -121.60433,
};

function MapContainer() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDL344-JRfJU-AP1gnmvxxt6OfyQnoXssc">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Child components, such as markers, info windows, etc. */}
        <MarkerF position={center} label={"ACRV Boat Storage"} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapContainer);
