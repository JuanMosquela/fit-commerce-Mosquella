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
    if(id){
      new Promise((resolve, reject) => {
        resolve(productsData.filter((product) => product.category === id))        
      })
      .then((res) => setData(res))    

    }else{
      setTimeout(() => {
        new Promise((resolve, reject) => {
          resolve(productsData)        
        })
        .then((res) => setData(res))
        .then(() => setLoading(false)) 
      }, 500); 

    }    
    
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