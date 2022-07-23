import './navbar.css';
import { HiMenu, HiX } from "react-icons/hi";
import { useContext, useState } from 'react';
import CartWidget from '../cartWidget/CartWidget';
import { Link } from 'react-router-dom';
import MenuPopupState from '../menuPopupState/MenuPopupState';
import { CartContext } from '../../context/CartProvider';
import Cart from '../cart/Cart';




const Navbar = () => {

  const { showCart } = useContext(CartContext)  

  

  
  


  return (
    <>
      <header>
        <Link className='logo' to='/'>PHYSICAL POINT</Link>
        <nav>
            <ul className='container-links'>
              
              <MenuPopupState />                          
            </ul>
        </nav>     
        
        
      <CartWidget />
        
        
        
    </header>
    
    {showCart && <Cart />}
     
    </>
  )
}
export default Navbar