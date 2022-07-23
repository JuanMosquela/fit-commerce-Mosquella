import { Link } from 'react-router-dom';
import { useContext } from "react"
import { CartContext } from "../../context/CartProvider";
import './cartList.css'
import { Button } from '@mui/material';

const CartList = () => {

    const {cartItems, totalPrice} = useContext(CartContext)


  return (
    <section className="cart-list-section">     
        
        <table>
            
            <tbody>
                <tr>
                    <th>Product</th>
                    <th>Product Name</th>
                    <th>Amount</th>
                    <th>Price</th>
                </tr>
                {cartItems.map(product => (
                    <tr key={product.id}>
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
                            <Button
                                    className='purchase-button'                                    
                                    variant='contained'                                                             
                                                                                
                                    sx={{                                                                        
                                        backgroundColor:'#333',
                                        fontSize:'1.4rem',
                                        '&:hover': {
                                            background: "#faba42",
                                        },
                                        marginLeft:'0px !important',
                                    }}
                                    >
                                    Buy
                                </Button>   
                        </Link>
                    </th>            
                </tr>        
            </tbody>
            
        </table>
    </section>
    
  )
}
export default CartList