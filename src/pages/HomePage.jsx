import React from 'react'
import CardProduct from '../components/CardProduct'
import { useState, useEffect } from "react"
import {getProducts} from '../asyncMock'

const HomePage = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts.then(data => setProducts(data))
  }, [])

  return (
    <div className='mt-16 flex flex-wrap justify-center gap-5'>
      {products.map((product) => (
          <CardProduct 
          key={product.id} 
          product={product} />
        ))}
    </div>
  )
}

export default HomePage