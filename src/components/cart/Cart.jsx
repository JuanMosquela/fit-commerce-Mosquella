import { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import ItemCount from "../itemCount/ItemCount";
import './cart.css'



const Cart = () => {

    const { cartItems, toggleCart, removeItem } = useContext(CartContext)

  return (
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

                    


                    <div key={product.id} className="cart-product-list">
                       <figure>
                        <img src={product.pictureURL} alt={product.title}/>
                       </figure>
                       <div className="product-info">
                            <h4>{product.title}</h4>
                            <h5>${product.price}</h5> 
                        </div>
                        <div className="btn-container">
                            <ItemCount />
                            <TiDeleteOutline className="remove-btn" onClick={() => removeItem(product)} />
                        </div>   
                        
                                                    

                        
                        
                    </div>
                ))}
    </div>
  )
}
export default Cart