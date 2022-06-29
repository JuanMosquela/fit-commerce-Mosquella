import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../itemCount/ItemCount';
import './itemDetail.css';
import { useState } from 'react';
import Swal from 'sweetalert2';

const ItemDetail = ({ stock, initial, details }) => {

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
                text: `usted ha sumado ${btnClick} ${details.title}`,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }        
    }

    



  return (
    <Card className='container-product' sx={{ display: 'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh', padding:'0 2%', gap:'3rem' }}>
      
      <CardMedia className='img'
        component="img"
        sx={{ width: 300, height: 500 }}
        image={details.pictureURL}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth:'500px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="span" variant="subtitle1" sx={{ fontSize:'1.6rem', marginBottom:'.5rem' }}>
            {'Proteina ' + details.category}
          </Typography>
          <Typography component="div" variant="h4" sx={{ fontSize:'3.2rem', marginBottom:'.5rem', color:'#faba42', fontWeight:'600' }}>
            {details.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize:'2rem' }}>
            $ {details.price}
          </Typography>
          <Typography variant="p" color="text.secondary" component="div" sx={{ fontSize:'1.4rem' }}>
            {details.description}
          </Typography>
        </CardContent>
        <ItemCount handleClickMinus={handleClickMinus} handleClickPlus={handleClickPlus} onAdd={onAdd} btnClick={btnClick} />
        
        
      </Box>
    </Card>
  )
}
export default ItemDetail