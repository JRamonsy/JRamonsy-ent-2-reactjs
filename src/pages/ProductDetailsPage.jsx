import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {getProduct} from '../asyncMock'
import CardProductDetails from "../components/CardProductDetails";

const ProductDetailsPage = () => {

  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setProduct(getProduct(id));
  }, []);


  return (
    <div className="flex justify-center" >
      <CardProductDetails
      product={product}
      />
    </div>
  )
}

export default ProductDetailsPage