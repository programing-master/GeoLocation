import React from 'react'
import { Marker, Popup } from 'react-leaflet'

export default function Makers ({ location }) {
  return (
    <Marker position={location}>
      <Popup>Your localization</Popup>
    </Marker>
  )
}
