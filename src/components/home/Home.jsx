import Background from '../background/Background';
import './home.css';
import { useState, useEffect } from 'react';
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

import { collection, getDocs, getFirestore } from 'firebase/firestore';


import Item from '../Item/Item';
import { Skeleton } from '@mui/material';



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
    <div >
      <Background className='background' /> 
      {(loading) ?
      <div className="grid-container">
      <Skeleton variant='rectangular' height={260} width={200} animation='wave'  />
      <Skeleton variant='rectangular' height={260} width={200} animation='wave'  />
      <Skeleton variant='rectangular' height={260} width={200} animation='wave'  />
      <Skeleton variant='rectangular' height={260} width={200} animation='wave'  />
      <Skeleton variant='rectangular' height={260} width={200} animation='wave'  />
      <Skeleton variant='rectangular' height={260} width={200} animation='wave'  />
      <Skeleton variant='rectangular' height={260} width={200} animation='wave'  />
      <Skeleton variant='rectangular' height={260} width={200} animation='wave'  />
    
   </div> :      
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