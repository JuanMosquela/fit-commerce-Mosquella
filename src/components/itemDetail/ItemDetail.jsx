import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './itemDetail.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillStar } from 'react-icons/ai';
import { Button } from '@mui/material';
import { CartContext } from '../../context/CartProvider';
import { useContext } from 'react';



const ItemDetail = ({ product }) => {

 

  const { title, price, pictureURL, description, category } = product

  const { addItem } = useContext(CartContext)   

  const onAdd = (product) => {
    if(product.amount >= product.stock) return
    product.amount++;
    addItem(product)

  } 

  const notify = (product) => {
    toast.success(`You bought ${product.amount} ${product.title}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,      
      draggable: true,
      progress: undefined,
      });
  };
  

  return (
    <>
      <ToastContainer />
      <Card className='container-product' sx={{ display: 'flex', alignItems:'center', justifyContent:'center', padding:'3rem 2%', gap:'3rem' }}>
      
      <CardMedia className='img'
        component="img"
        sx={{ width: 300, height: 400, objectFit:'contain', marginTop:'2rem' }}
        image={pictureURL}
        alt="Live from space album cover"
        
      />     
      
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth:'500px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="span" variant="subtitle1" sx={{ fontSize:'1.6rem', marginBottom:'.5rem' }}>
            {'Proteina ' + category}
          </Typography>
          <Typography component="div" variant="h4" sx={{ fontSize:'3.2rem', marginBottom:'.5rem', color:'#333', fontWeight:'600' }}>
            {title}
          </Typography>
          <Box sx={{fontSize:'2.6rem', color:'#faba42'}}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </Box>
          
          
          <Typography variant="p" color="text.secondary" component="div" sx={{ fontSize:'1.4rem' }}>
            {description}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize:'2.4rem', color:'#faba42' }}>
            $ {price}
          </Typography>
        </CardContent>          
        
        
        <Box sx={{ display:'flex', gap:'2rem' }}>
          <Button                  
                  variant='contained' 
                  onClick={() => onAdd(product)} 
                                                          
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
            <Button
                      
                      variant='contained' 
                      onClick={() => notify(product)}                      
                                                            
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
                  Buy
            </Button>   
        </Box>        
        
      </Box>
    </Card>
    
    </>
  )
}
export default ItemDetail