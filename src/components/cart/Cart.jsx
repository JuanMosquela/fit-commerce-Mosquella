import { useContext, useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import ItemCount from "../itemCount/ItemCount";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import './cart.css'



const Cart = () => {       

    const { cartItems, toggleCart, removeItem, totalPrice } = useContext(CartContext)    
    

  return (
    <div className="cart-wrapper">
        <section className="cart-section">
         <div className="container-total-price">
            <MdOutlineKeyboardArrowLeft className="back-icon" onClick={() => toggleCart(false)}/>
            <span>Precio total a pagar: ${totalPrice} </span>
         </div>
        <div className="cart-list-container">            

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
                        
                        <div className="cart-product-container">
                            <div key={product.id} className="cart-product-list">
                                <figure>
                                    <img src={product.pictureURL} alt={product.title}/>
                                </figure>
                                <div className="product-info">
                                    <h4>{product.title}</h4>
                                    <h5>${product.price * product.amount}</h5> 
                                    
                                </div>
                                <div className="btn-container">
                                    <ItemCount product={product} />
                                    <AiFillDelete className="remove-btn" onClick={() => removeItem(product)} />
                                </div>                      
                            
                            </div>
                        </div>
                    ))}
        </div>
    </section>
    </div>
  )
}
export default Cart