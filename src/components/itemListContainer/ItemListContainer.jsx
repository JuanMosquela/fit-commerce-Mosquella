import Background from '../background/Background';
import ItemList from '../itemList/ItemList'
import './itemListContainer.css';
import productsData from '../../data/productsData';
import { useState, useEffect } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const ItemListContainer = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)  
  

  useEffect(() => {     

    setTimeout(() => {
      new Promise((resolve, reject) => {
        resolve(productsData)        
      })
      .then((res) => setData(res))
      . finally(() => setLoading(false)) 
    }, 500); 
    
  }, [])  


  return (
    <div className="item-container">
      <Background /> 
      {(loading) ?
      <Box sx={{ textAlign:'center', marginTop:'2rem' }}>
        <CircularProgress />
      </Box> :      
      <ItemList data={data} />
      }

    </div>
  )
}
export default ItemListContainer