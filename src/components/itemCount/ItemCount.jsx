import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import './itemCount.css'





const Itemcount = ({ handleClickMinus, handleClickPlus, count, product }) => {    

  
  return (
    
    <CardActions sx={{
        display:'flex',       
        alignItems:'center', 
        gap:'1rem',
        
                                            
    }}>
        <Button variant='outlined'  sx={{               
                fontSize:'1.4rem',                                                                            
                display:'flex',
                justifyContent:'space-around',
                alignItems:'center',
                color:'#333', 
                width:'200px'             
                
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


