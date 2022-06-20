import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import productsData from "../../data/productsData";


const ItemList = () => {  

  const [products, setProducts] = useState([])  
  const [loading, setLoading] = useState(true) 

  useEffect(() => { 
    
    

    setTimeout(() => {
      new Promise((resolve, reject) => {
        resolve(productsData)
        
      })
      .then((res) => setProducts(res))
      .then(() => setLoading(false)) 
    }, 2000); 
    
  }, [])  


  return (
    (loading !== false) ?
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box> :
    <Grid container spacing={3} sx={{ padding:'10%', marginTop:'8rem' }}>     
      {productsData.map(product => (
        <Grid  item md={3} sm={6} xs={12} >        
           <Item   key={product.id} product={product} initial={1} stock={5} />
        </Grid>
      ))}
    </Grid>    
  )
}
export default ItemList