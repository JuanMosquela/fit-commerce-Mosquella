import './navbar.css';
import { useContext } from 'react';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartProvider';
import Cart from '../cart/Cart';




const Navbar = () => {

  const { showCart } = useContext(CartContext) 


  return (
    <>
      <header>
        <Link className='logo' to='/'>PHYSICAL POINT</Link>       
        <CartWidget />        
      </header>
    
      {showCart && <Cart />}
     
    </>
  )
}
export default Navbar