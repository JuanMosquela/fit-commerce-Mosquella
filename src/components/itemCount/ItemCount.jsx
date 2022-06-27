import { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import './itemCount.css'


const ItemCount = ({ stock, initial, details }) => {

    const [btnClick, setBtnClick] = useState(initial)

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

    const onAdd = (btnClick) => {
        if(btnClick === 0){
            return
        }else{
            Swal.fire({
                title: 'Success!',
                text: `usted ha sumado ${btnClick} ${details.title}`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }        
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
                variant='contained'                                        
                sx={{ 
                    width:'100%',
                    backgroundColor:'#333',
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

export default ItemCount


