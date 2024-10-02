
const CardProduct = ({}) => {
  return (
    <div>
        <h2>{products.title}</h2>
        <img src={products.image} alt="" />
        <h3>${products.price}</h3>
        <button>mas detalles</button>
        
    </div>
  )
}

export default CardProduct