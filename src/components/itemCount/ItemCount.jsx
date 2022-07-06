import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './itemCount.css'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartProvider';


const Itemcount = ({ product }) => { 

   

    const {addItem} = useContext(CartContext)

    console.log(product)

    

    

  const [count, setCount] = useState(0)     
  

  const handleClickPlus = () => {
    
    setCount(count + 1)
    
    

     
    
   }

    const handleClickMinus = () => {
        if(count === 0){
            return
        }
        setCount(count - 1)
    }
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
                onClick={handleClickMinus}
            />

            {count}
        
            <AiOutlinePlus                    
                onClick={handleClickPlus} 
            />
        </Button>
        <Button
                  
                  variant='contained' 
                  onClick={() => addItem(product, count)} 
                                                        
                  sx={{ 
                      width:'100%',
                      backgroundColor:'#333',
                      fontSize:'1.4rem',
                      '&:hover': {
                          background: "#faba42",
                      },
                      marginLeft:'0px !important',


              }}
              >
              add to cart
          </Button>      
        
    </CardActions>
    )
    }

export default Itemcount


