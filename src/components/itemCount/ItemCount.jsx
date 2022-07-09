import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './itemCount.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartProvider';



const Itemcount = ({ quantity }) => { 
    
    const {handleClickMinus, handleClickPlus} = useContext(CartContext)


  const [count, setCount] = useState(quantity)

   console.log(quantity)  

  
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
                onClick={handleClickMinus}
            />

            {count}
        
            <AiOutlinePlus                    
                onClick={handleClickPlus} 
            />
        </Button>
           
        
    </CardActions>
    )
    }

export default Itemcount


