import { useState } from "react"
import {getProducts} from '../asyncMock'


const ProductsList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts.then(data => setProducts(data))
  }, [])

  return (
    <div>ProductsList</div>
  )
}


export default ProductsList