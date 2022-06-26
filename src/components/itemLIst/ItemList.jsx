
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Item from "../Item/Item";



const ItemList = ({ data }) => {  

  
   


  return (
    
    <Grid container spacing={3} sx={{ padding:'0 10%', margin:'auto 0' }}>     
      {data.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </Grid>    
  )
}

export default ItemList