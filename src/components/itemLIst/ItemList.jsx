import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Item from "../Item/Item";
import productsData from "../../data/productsData";


const ItemList = () => {  

  const [products, setProducts] = useState([])   

  useEffect(() => {    

    setTimeout(() => {
      new Promise((resolve, reject) => {
        resolve(productsData)
        
      }).then((res) => setProducts(res)) 
    }, 2000); 
    
  }, [])  


  return (
    <Grid container spacing={3} sx={{ padding:'10%', marginTop:'8rem' }}>     
      {productsData.map(product => (
        <Grid  item md={3} sm={6} xs={12} >        
           <Item  sx={{ zIndex:'500' }} key={product.id} product={product} initial={1} stock={5} />
        </Grid>
      ))}
    </Grid>
  )
}
export default ItemList