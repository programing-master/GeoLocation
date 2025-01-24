import { createContext, useContext, useState } from 'react'

const CoordContext = createContext()

export const useCoors = () => {
  const context = useContext(CoordContext)
  if (!context) throw new Error('Donde esta el contexto')
  return context
}

export const CoordProvider = ({ children }) => {
  const [location, setLocation] = useState({
    lat: '0',
    lng: '0'
  })
  return (
    <CoordContext.Provider value={{ location, setLocation }}>
      {children}
    </CoordContext.Provider>
  )
}
