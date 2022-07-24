import Background from '../background/Background';
import './home.css';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Item from '../Item/Item';
import { Skeleton } from '@mui/material';
import { HiSearch } from 'react-icons/hi'



const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true) 
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState([])
  const {id} = useParams()

  useEffect(() => { 

    const dataBase = getFirestore();
    const products = collection(dataBase, 'products')

    if(id){      
      
      getDocs(products).then((res) => {         
        const aux = res.docs.map(item => ({...item.data(), id: item.id}));
        console.log(aux)
        setData(aux.filter((product) => product.category === id))
        setFilter()
      })
    }else{    

      getDocs(products).then((res) => {         
        const aux = res.docs.map(item => ({...item.data(), id: item.id}));
        
        setLoading(false)
        setData(aux)
        setFilter(aux)
      })
    }    
    
  }, [id])

  const handleClick = () => {
    const searchedProducts = filter.filter((product) => {    
      if(product.category.toLowerCase().includes(input.toLowerCase())){
        return product
      } 
    })
    if(searchedProducts){

      setData(searchedProducts) 
    }
    if(input === ''){
      setData(filter)
    }

  }

 


  return (
    <div className='home-container' >
      <Background className='background' /> 
     
      <div className="search-filter">
        <input          
          type="text"
          placeholder='Busca tu producto por categoria' 
          onChange={(e) => setInput(e.target.value)}
          value={input}        
          
        />
        <HiSearch 
          
          className='loop-icon'
          onClick={handleClick}
        />
      </div>
      
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