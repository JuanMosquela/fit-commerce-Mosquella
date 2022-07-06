import { useContext } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import './cartWidget.css';
import { CartContext } from '../../context/CartProvider';
import { Link } from 'react-router-dom';





const CartWidget = () => {

  const {quantity} = useContext(CartContext)

  return (
    <Link to='/cart'>
      <button className="cart-icon" >
        <AiOutlineShopping />
        <span className='cart-item-total'>{quantity}</span>         
             
    </button>
    </Link>
  )
}
export default CartWidget