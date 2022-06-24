import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import productsData from '../../data/productsData'
import { Link } from 'react-router-dom';


const ItemList = () => {  

  const [data, setData] = useState([])  
  const [loading, setLoading] = useState(true) 

  useEffect(() => {     

    setTimeout(() => {
      new Promise((resolve, reject) => {
        resolve(productsData)        
      })
      .then((res) => setData(res))
      .then(() => setLoading(false)) 
    }, 2000); 
    
  }, [])  


  return (
    (loading !== false) ?
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box> :
    <Grid container spacing={3} sx={{ padding:'10%', marginTop:'8rem', margin:'auto 0' }}>     
      {data.map(product => (
        <Grid key={product.id} item md={3} sm={6} xs={12} >        
           <Link to={`/item/${product.id}`}>
              <Item product={product} />
           </Link>
        </Grid>
      ))}
    </Grid>    
  )
}

export default ItemList