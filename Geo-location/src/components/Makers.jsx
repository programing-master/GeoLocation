import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

const MyIcon = L.icon({
  iconUrl: '../assets/venue_location_icon.svg', 
  iconSize: [32, 32], 
  iconAnchor: [16, 32],
  popupAnchor: [0, -32] 
});
export default function Makers ({ location }) {
  return (
    <Marker position={location} icon={MyIcon}>
      <Popup>Your localization</Popup>
    </Marker>
  )
}
