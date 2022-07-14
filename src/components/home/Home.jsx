import Background from '../background/Background';
import './home.css';
import { useState, useEffect } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

import { collection, getDocs, getFirestore } from 'firebase/firestore';


import Item from '../Item/Item';



const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true) 
  const {id} = useParams()

  useEffect(() => { 

    const dataBase = getFirestore();
    const products = collection(dataBase, 'products')

    if(id){      
      
      getDocs(products).then((res) => {         
        const aux = res.docs.map(item => ({...item.data(), id: item.id}));
        console.log(aux)
        setData(aux.filter((product) => product.category === id))
      })
    }else{    

      getDocs(products).then((res) => {         
        const aux = res.docs.map(item => ({...item.data(), id: item.id}));
        
        setLoading(false)
        setData(aux)
      })
    }    
    
  }, [id])

 


  return (
    <div className="item-container">
      <Background /> 
      {(loading) ?
      <Box sx={{ textAlign:'center', marginTop:'2rem' }}>
        <CircularProgress />
      </Box> :      
       <div className="grid-container">
        {data.map((product) => (
          <Item key={product.id} product={product}  />
        ))}
       </div>
      }

    </div>
  )
}
export default Home