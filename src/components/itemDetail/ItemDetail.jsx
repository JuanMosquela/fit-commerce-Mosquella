import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const ItemDetail = ({ productInfo }) => { 

  console.log(productInfo)
  

  
  

  
  return (
    <Card className='container-product' sx={{ display: 'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', padding:'0 2%', gap:'2rem' }}>
      
      <CardMedia
        component="img"
        sx={{ width: 300 }}
        image={productInfo.pictureURL}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth:'600px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="span" variant="subtitle1" sx={{ fontSize:'1.4rem', marginBottom:'.5rem' }}>
            {productInfo.subtitle}
          </Typography>
          <Typography component="div" variant="h4" sx={{ fontSize:'3rem', marginBottom:'.5rem', color:'#faba42', fontWeight:'600' }}>
            {productInfo.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize:'1.8rem' }}>
            $ {productInfo.price}
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" sx={{ fontSize:'1rem' }}>
            {productInfo.description}
          </Typography>
        </CardContent>
        <ItemCount stock={5} initial={1} productInfo={productInfo} />
        
        
      </Box>
    </Card>
  )
}
export default ItemDetail