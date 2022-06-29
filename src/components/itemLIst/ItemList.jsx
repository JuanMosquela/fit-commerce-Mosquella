import { Grid } from "@mui/material";
import Item from "../Item/Item";

const ItemList = ({ data }) => {   


  return (
    
    <Grid container spacing={4} sx={{ gap:'2rem', justifyContent:'center', marginTop:'2rem', padding:'0 10%' }}>     
      {data.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </Grid>    
  )
}

export default ItemList