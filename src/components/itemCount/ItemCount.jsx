import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './itemCount.css'

const ItemCount = ({ handleClickMinus, handleClickPlus, onAdd, btnClick }) => {    

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
                variant='contained'                                        
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

export default ItemCount


