import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './itemCount.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartProvider';




const Itemcount = ({ product }) => { 

    const [count, setCount] = useState(product.amount)

    const { cartItems, setCartItems, addItem } = useContext(CartContext)
    
    const handleClick = (product, i) => {
        setCount(count + i)

        const findItem = cartItems.find(item => {
            return item.id === product.id              
            
        })       

        addItem(findItem, i)
        
       
        
        


        
        
    }

    console.log(cartItems)

    console.log(count)

  
  return (
    
    <CardActions sx={{
        display:'flex',                
        justifyContent:'center',
        alignItems:'center', 
        gap:'1rem',
        width:'100%'
                                            
    }}>
        <Button variant='outlined'  sx={{
                width:'100%',
                fontSize:'1.4rem',                                                                            
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center',
                color:'#333',              
                
            }}>                
            <AiOutlineMinus                    
                onClick={() => handleClick(product, -1)}
            />

            {count}
        
            <AiOutlinePlus                    
                onClick={() => handleClick(product, +1)} 
            />
        </Button>
           
        
    </CardActions>
    )
    }

export default Itemcount


