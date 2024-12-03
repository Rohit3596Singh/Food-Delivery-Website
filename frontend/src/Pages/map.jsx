import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';

const MapComponent = ({ latitude, longitude, restaurantName, description }) => {
  const [markerPosition, setMarkerPosition] = useState([latitude, longitude]);

  const defaultIcon = new Icon({
    iconUrl: markerIconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const handleMapClick = (event) => {
    setMarkerPosition([event.latlng.lat, event.latlng.lng]);
  };

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
      onClick={handleMapClick} // Set marker on map click
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={markerPosition} icon={defaultIcon}>
        <Popup>
          <strong>{restaurantName}</strong>
          <br />
          {description}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
