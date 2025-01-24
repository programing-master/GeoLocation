import React, { useEffect} from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import '../../node_modules/leaflet/dist/leaflet.css'
import Makers from './Makers'
import { useCoors } from '../context/coordContext'
export default function MapView () {
  const { location, setLocation } = useCoors()

  useEffect(() => {
    if (location) {
      const currentLocation = {
        lat: location.lat,
        lng: location.lng
      }
      setLocation(currentLocation)
    }
  }, [])

  return (
    <MapContainer center={location} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Makers location={location} />
    </MapContainer>
  )
}
