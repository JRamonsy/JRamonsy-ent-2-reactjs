import { Link } from "react-router-dom"

const CardProduct = ({ product }) => {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl text-center font-semibold text-gray-800 mb-3">{product.title}</h2>
      <h3 className="text-lg text-center text-gray-500 mb-4">Categoria: {product.category}</h3>
      <img className="w-full h-40 object-cover mb-4 rounded-md" src={product.image || '/placeholder.jpeg'} alt={product.title} />
      <h3 className="text-lg font-bold text-gray-700 mb-3">${product.price} MXN</h3>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
        <Link to={`/product/${product.id}`}>Más detalles</Link>
      </button>
    </div>
  )
}

export default CardProduct
