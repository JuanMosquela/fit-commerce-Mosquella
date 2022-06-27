import Background from '../background/Background';
import ItemList from '../itemList/ItemList'
import './itemListContainer.css';
import productsData from '../../data/productsData';
import { useState, useEffect } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true) 
  const {id} = useParams()
  

  useEffect(() => {     

    setTimeout(() => {
      new Promise((resolve, reject) => {
        resolve(productsData)        
      })
      .then((res) => setData(res))
      .finally(() => setLoading(false)) 
    }, 500); 
    
  }, [])

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(productsData.filter((product) => product.category == id))        
    })
    .then((res) => setData(res))

    console.log(data)    
    
  }, [id])    


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