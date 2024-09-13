import './App.css'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import NavBar from './components/navbar/NavBar'

function App() {


  return (
    <>
      <NavBar/>
      <ItemListContainer 
        greeting='Welcome to my e-commerce'
      />
    </>
  )
}

export default App
