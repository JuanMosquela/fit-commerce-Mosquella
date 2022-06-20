import { useState } from 'react';
import Swal from 'sweetalert2';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material'; 
import './item.css'

const Item = ({ initial, stock, product}) => {

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
                text: `usted ha sumado ${btnClick} ${product.title}`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        } 
        console.log(product)
              
    }


  return (
    <div>
      <Card className='card-item' sx={{ 
            maxWidth:'300px' }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                  $ {product.price}
                </Typography>
                
                <CardMedia sx={{
                    backgroundColor:'red',
                    width:'100%',
                    objectFit:'cover',
                    marginBottom:'1.2rem'

                    }}
                    component="img"
                    height="260"
                    image={product.pictureURL}
                    alt={product.title}
                    
                />   
                <Typography sx={{ 
                    fontSize:'1.3rem',
                   
                    }} variant="h4" component="div">
                  {product.title}
                </Typography>             
                
            </CardContent> 
            <CardActions sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',                                      
                }}>
                <Button variant='outlined' sx={{
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
                        variant='outlined'                         
                        sx={{                                          
                        width:'100%',                    
                    }}
                    >
                    add to cart
                </Button>
            </CardActions>           
        </Card>

    </div>
  )
}
export default Item