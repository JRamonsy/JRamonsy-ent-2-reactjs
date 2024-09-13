import '../carwidget/CarWidget.css';
import { FaShoppingCart } from 'react-icons/fa';


const CarWidget = () => {
  return (
    <div className="cart-container">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">5</span> {/* Aquí pones el número fijo */}
    </div>
  );
};

export default CarWidget;
