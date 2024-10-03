import CardProduct from '../components/CardProduct';
import { getCategory } from '../asyncMock';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductCategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      const productsByCategory = getCategory(category);
      setProducts(productsByCategory);
    };

    fetchCategoryProducts();
  }, [category]);

  return (
    <div className="mt-16 flex flex-row justify-center gap-5">
      {products.length > 0 ? (
        products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))
      ) : (
        <p>No se encontro producto en esta categoria.</p>
      )}
    </div>
  );
};

export default ProductCategoryPage;
