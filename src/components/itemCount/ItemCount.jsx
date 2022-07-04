import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './itemCount.css'
import { useState } from 'react';
import Swal from 'sweetalert2';


const ItemCount = ({ details:{title, price, stock}, initial }) => {  
    
  const [btnClick, setBtnClick] = useState(initial)

  const onAdd = (btnClick) => {
        if(btnClick === 0){
            return
        }else{
            Swal.fire({
                title: 'Success!',
                text: `usted ha sumado ${btnClick} ${title} por ${btnClick*price}`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }        
    }

  

  const handleClickPlus = () => {
    if(btnClick >= stock){
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
        gap:'1rem'
                                            
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
        <Button
                onClick={() => onAdd(btnClick)} 
                variant='outlined'                                        
                sx={{ 
                    width:'100%',
                    fontSize:'1.4rem',                                                                            
                    display:'flex',
                    justifyContent:'space-around',
                    alignItems:'center',
                    color:'#333',                    
                    marginLeft:'0px !important',


            }}
            >
            buy product
        </Button>
    </CardActions>
    )
    }

export default ItemCount


