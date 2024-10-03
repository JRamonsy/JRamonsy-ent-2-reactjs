import React from 'react'

const CardProductDetails = ({ product }) => {
  return (
    <div className=" mt-20 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">{product.title}</h2>
      <h3 className="text-lg text-center text-gray-500 mb-4">{product.category}</h3>
      <img className="w-full h-48 object-cover rounded-md mb-4" src={product.image || '/placeholder.jpeg'} alt={product.title} />
      <h3 className="text-xl font-bold text-gray-700 text-center">${product.price} MXN</h3>
      <h3 className='font-semibold text-gray-800' >Descripción:</h3>
      <p className='text-black' >{product.description}</p>
    </div>
  )
}

export default CardProductDetails
