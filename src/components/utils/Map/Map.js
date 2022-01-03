import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import React from "react";
import styled from "styled-components";

function Map() {
  return (
    <Wrap>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={6}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Wrap>
  );
}

const Wrap = styled.div`
  .map {
    width: 40%;
    height: 32.6rem;
  }
`;

export default Map;
