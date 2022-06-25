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

const ItemDetail = ({ details }) => { 

  const [url, setUrl] = useState("")

  const params = useParams()

  useEffect(() => {
    const itemDetailID = details.filter((el) => el.id == params.id )
    console.log(itemDetailID)
    setUrl(itemDetailID)
    
  }, [])
  

  console.log(url)
  return (
    <Card sx={{ display: 'flex', padding:'0 20%' }}>
      
      <CardMedia
        component="img"
        sx={{ width: 300, marginRight:'5rem' }}
        image={details.pictureURL}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth:'600px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize:'1.8rem' }}>
            {details.price}
          </Typography>
          <Typography component="div" variant="h5" sx={{ fontSize:'3rem', marginBottom:'1rem' }}>
            {details.title}
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" sx={{ fontSize:'1.4rem' }}>
            {details.description}
          </Typography>
        </CardContent>
        <ItemCount stock={5} initial={1} />
        
        
      </Box>
    </Card>
  )
}
export default ItemDetail