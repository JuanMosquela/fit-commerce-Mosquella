import { useContext } from "react"
import { CartContext } from "../context/CartProvider";
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import './cartlist.css'
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";



const CartList = () => {
    const { cart, toggleCart, cartItems, totalItems } = useContext(CartContext)

    console.log(cartItems)
  return (
    <>
        {cart && (
            <div className="cart-list-container" >
                <MdOutlineKeyboardArrowLeft className="arrow-back" onClick={() => toggleCart(false)}/>
                <span>Total items</span>
                <span>({totalItems})</span>
                {cartItems.length < 1 ? (
                    <div className="cart-list-empty">
                        <h3>Your cart its empty</h3>
                        <Link to='/'>
                            <button onClick={() => toggleCart(false)}>
                                Continue shopping
                            </button>
                        </Link>
                    </div>
                ) : cartItems.map(product => (
                    <div className="cart-product">
                        <img src={product.pictureURL} alt={product.title}/>
                        <div className="product-content">
                            <h4>{product.title}</h4>
                            <h5>${product.price}</h5>

                        </div>
                    </div>
                ))}
                
                
            </div>
        )}
    </>
  )
}
export default CartList