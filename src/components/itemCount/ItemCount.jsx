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
    
    <div className="container-button">
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                 best sellers
                </Typography>
                <Typography variant="h4" component="div">
                  Product title
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    category
                </Typography>
                <Typography variant="body2">
                Lorem ipsum dolor sit amet.
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',                                      
                }}>
                <Button  sx={{
                        width:'100%',
                        mb:'5px',                                                             
                        display:'flex',
                        justifyContent:'space-around',
                        alignItems:'center'
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
                                                
                        sx={{ 
                            backgroundColor:'red'                                         
                                         
                    }}
                    >
                    add to cartttt
                </Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default ItemCount


