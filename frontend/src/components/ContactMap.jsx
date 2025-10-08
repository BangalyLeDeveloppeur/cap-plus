// src/components/ContactMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ContactMap = () => {
  const position = [9.6412, -13.5784];

  return (
    <div className="map-container">
      <h3>Notre localisation</h3>

      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false}
        className="carteMap"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Guinée Conakry <br /> Quartier Nongo
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
