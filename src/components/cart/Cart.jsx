import { useContext } from "react"
import { CartContext } from "../../context/CartProvider";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import './cartlist.css'

import { Link } from "react-router-dom";

import ItemCount from "../itemCount/ItemCount";
import { TiDeleteOutline } from 'react-icons/ti'
import { AiOutlineShopping } from "react-icons/ai";


const Cart = () => {
    const { showCart, toggleCart, cartItems, totalItems, totalPrice } = useContext(CartContext)
   
    
  return (
    <>
        {showCart && (
            <div className="cart-list-container" >
                <MdOutlineKeyboardArrowLeft className="arrow-back" onClick={() => toggleCart(false)}/>
                <span>Total items</span>
                <span>({totalItems})</span>
                {cartItems.length < 1 ? (
                    <div className="cart-list-empty">
                        <h3>Your cart its empty</h3>
                        <AiOutlineShopping className="cart-icon-empty" />
                        <Link to='/'>
                            <button onClick={() => toggleCart(false)}>
                                Continue shopping
                            </button>
                        </Link>
                    </div>
                ) : cartItems.map(product => (

                    


                    <div key={product.id} className="cart-product">
                        <img src={product.pictureURL} alt={product.title}/>
                        <div className="product-content">
                            <div className="product-info">
                                <h4>{product.title}</h4>
                                <h5>${product.price}</h5> 
                            </div>
                            <div className="btn-container">
                              <ItemCount />
                              <TiDeleteOutline className="remove-btn" />
                            </div>                           

                        </div>
                        
                    </div>
                ))}
                
                <p>Total price: {totalPrice}</p>
                
                
                
            </div>
        )}
    </>
  )
}
export default Cart