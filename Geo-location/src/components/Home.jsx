import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCoors } from '../context/coordContext'

export default function Home () {
  const { location, setLocation } = useCoors()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      function (error) {
        console.log(error)
      },
      { enableHighAccuracy: true }
    )
  }, [location])

  return (
    <div className='home-container'>
      <h1>Geolocation</h1>
      <p>
        Longitude: <span>{location.lng}</span>
      </p>
      <p>
        Latitude: <span>{location.lat}</span>
      </p>
      <Link to={"/map"}>See my current location</Link>
    </div>
  )
}
