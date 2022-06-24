import { useState } from 'react';
import Swal from 'sweetalert2';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material'; 
import './item.css'
import ItemCount from '../itemCount/ItemCount';
import {Link} from 'react-router-dom'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';

const Item = ({ product}) => {    

  return (
    <div>
      

        <Card className='card-item' sx={{ 
            maxWidth:'300px',
             }}>
            <CardContent>
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                  $ {product.price}
                </Typography>
                
                <CardMedia sx={{
                    
                    width:'100%',
                    height:'220px',
                    objectFit:'contain',
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
            <ItemCount initial={1} stock={5} product={product}/>        
        </Card>
      
      

    </div>
  )
}
export default Item