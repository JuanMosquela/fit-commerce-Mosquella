import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './itemCount.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartProvider';




const Itemcount = ({ product }) => { 

    const [count, setCount] = useState(product.amount)

    const { addItem } = useContext(CartContext)
    
    const handleClickPlus = (product, counter) => {
        if(product.amount >= product.stock) return
        setCount(count + counter)
        addItem(product, counter)        
        
    }

    const handleClickMinus = (product, counter) => {
        if(product.amount === 0) return
        setCount(count + counter)          

        addItem(product, counter)        
        
    }    

  
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
                style={{ fontSize:'1.8rem' }}                   
                onClick={() => handleClickMinus(product, -1)}
            />

            {count}
        
            <AiOutlinePlus 
                style={{ fontSize:'1.8rem' }}                    
                onClick={() => handleClickPlus(product, +1)} 
            />
        </Button>           
        
    </CardActions>
    )
    }

export default Itemcount


