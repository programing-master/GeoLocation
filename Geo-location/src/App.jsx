import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MapView from './components/MapView'
import { CoordProvider } from './context/coordContext'

function App () {
  return (
    <div className='leaflet-container'>
      <CoordProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/map' element={<MapView />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CoordProvider>
    </div>
  )
}

export default App
