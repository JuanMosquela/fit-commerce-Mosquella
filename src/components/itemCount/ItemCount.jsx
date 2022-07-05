import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './itemCount.css'
import { useState } from 'react';


const ItemCount = () => { 

  const [btnClick, setBtnClick] = useState(1)     
  

  const handleClickPlus = () => {
    if(btnClick >= 5){
        return
    }
    setBtnClick(btnClick + 1)
    
   }

    const handleClickMinus = () => {
        if(btnClick === 0){
            return
        }
        setBtnClick(btnClick - 1)
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
                onClick={handleClickMinus}
            />

            {btnClick}
        
            <AiOutlinePlus                    
                onClick={handleClickPlus} 
            />
        </Button>
        
    </CardActions>
    )
    }

export default ItemCount


