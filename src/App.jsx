import './App.css'
import NavBar from './components/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
import ProductCategoryPage from './pages/ProductCategoryPage'

function App() {


  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/product/:id' element={<ProductDetailsPage/>} /> 
        <Route exact path="/category/:category" element={<ProductCategoryPage />} />  
      </Routes>
    </div>


  )
}

export default App
