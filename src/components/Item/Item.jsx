import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material'; 
import './item.css';
import {Link} from 'react-router-dom';
import { Grid } from '@mui/material'

const Item = ({ product}) => {    

  return (
    <div>
      <Grid key={product.id} item md={3} sm={6} xs={12} >        
          <Link to={`/item/${product.id}`}>
            <Card className='card-item' sx={{ 
                maxWidth:'300px', minHeight:'350px'
              }}>
              <CardContent>          
                  
                  <CardMedia className='img' sx={{
                      
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
      </Grid>
      
      

        
      
      

    </div>
  )
}
export default Item