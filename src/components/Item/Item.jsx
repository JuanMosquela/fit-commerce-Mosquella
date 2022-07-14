import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material'; 
import './item.css';
import {Link} from 'react-router-dom';


const Item = ({ product}) => {    
 

  return (
    <div>      
             
          <Link to={`/item/${product.id}`}>
            <Card className='card-item' sx={{ 
                maxHeight:'320px', maxWidth:'220px', transition:'.2s ease', borderRadius:'7px' 
              }}>
              <CardContent>                 
                  <CardMedia className='item-img'                    
                                          
                      
                      
                      component="img"
                      image={product.pictureURL}
                      alt={product.title}
                      
                  />   
                  <Typography sx={{ 
                      fontSize:'1.3rem',
                      marginBottom:'1rem'
                    
                      }} variant="h4" component="div">
                    {product.title}
                  </Typography>
                  <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
                    $ {product.price}
                  </Typography>             
                  
              </CardContent> 
                    
            </Card>              
          </Link>
      
      
      

        
      
      

    </div>
  )
}
export default Item