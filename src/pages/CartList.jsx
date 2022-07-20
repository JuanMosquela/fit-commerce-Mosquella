import { Link } from 'react-router-dom';
import { useContext } from "react"
import { CartContext } from "../context/CartProvider";
import './cartList.css'

const CartList = () => {

    const {cartItems, totalPrice} = useContext(CartContext)

    console.log(cartItems)
  return (
    <section className="cart-list-section">     
        
        <table>
            
            <tr>
                <th>Product</th>
                <th>Product Name</th>
                <th>Amount</th>
                <th>Price</th>
            </tr>
            {cartItems.map(product => (
                <tr>
                    <td><img src={product.pictureURL} alt={product.title} /></td>
                    <td>{product.title}</td>
                    <td>{product.amount}</td>
                    <td>{product.price}</td>
                </tr>
            ))}
            <tr className='table-row'>
                <th colSpan='4'>Total Price: ${totalPrice} </th>         
                
            </tr>
            <tr className='table-row'>
                <th colSpan='4'>
                    <Link to='/checkout'>
                        <button className='btn-purchase'>Buy</button>
                    </Link>
                </th>            
            </tr>        
            
        </table>
    </section>
    
  )
}
export default CartList