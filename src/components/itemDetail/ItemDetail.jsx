import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css'

const ItemDetail = ({ details }) => {   
  return (
    <Card className='container-product' sx={{ display: 'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', padding:'0 2%', gap:'3rem' }}>
      
      <CardMedia className='img'
        component="img"
        sx={{ width: 300, height: 500 }}
        image={details.pictureURL}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth:'600px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="span" variant="subtitle1" sx={{ fontSize:'1.4rem', marginBottom:'.5rem' }}>
            {details.subtitle}
          </Typography>
          <Typography component="div" variant="h4" sx={{ fontSize:'3rem', marginBottom:'.5rem', color:'#faba42', fontWeight:'600' }}>
            {details.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize:'1.8rem' }}>
            $ {details.price}
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" sx={{ fontSize:'1rem' }}>
            {details.description}
          </Typography>
        </CardContent>
        <ItemCount stock={5} initial={1} details={details} />
        
        
      </Box>
    </Card>
  )
}
export default ItemDetail