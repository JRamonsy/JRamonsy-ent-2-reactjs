import './App.css'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SparePartsPage from './pages/SparePartsPage'
import DevicesPage from './pages/DevicesPage'
import SensorsPage from './pages/SensorsPage'

function App() {


  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/spare' element={<SparePartsPage/>} />  
        <Route exact path='/sensor' element={<SensorsPage/>} />  
        <Route exact path='/device' element={<DevicesPage/>} />  
      </Routes>
    </div>


  )
}

export default App
