import { useContext } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import './cartWidget.css';
import { CartContext } from '../../context/CartProvider';


const CartWidget = () => {

  const {quantity, toggleCart} = useContext(CartContext)
  

  return (
    
    <button className="cart-icon" onClick={() => toggleCart(true)} >
      <AiOutlineShopping  />
      <span className='cart-item-total'>{quantity}</span>             
             
    </button>
    
  )
}
export default CartWidget