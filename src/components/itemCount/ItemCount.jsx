import { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';


const ItemCount = ({ stock, initial }) => {

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
                text: `usted ha sumado ${btnClick} productos`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }        
    }

  return (
    
    <CardActions sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',                                      
    }}>
        <Button variant='outlined'  sx={{
                width:'100%',
                mb:'5px',                                                             
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center',
                color:'#333',
                border:'1px solid #333'
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
                    backgroundColor:'#333'                                
            }}
            >
            add to cart
        </Button>
    </CardActions>
    )
    }

export default ItemCount


