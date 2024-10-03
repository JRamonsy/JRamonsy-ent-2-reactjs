import '../carwidget/CarWidget.css';
import { FaShoppingCart } from 'react-icons/fa';


const CarWidget = () => {
  return (
    <div className="cart-container cursor-pointer">
      <FaShoppingCart className="text-[30px] text-zinc-300 hover:text-white" />
      <span className="cart-count">5</span> 
    </div>
  );
};

export default CarWidget;
