import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection,getDocs, getFirestore } from 'firebase/firestore';
import ItemDetail from "../itemDetail/ItemDetail";
import SimpleSlider from '../simpleSlider/SimpleSlider';
import {Skeleton} from '@mui/material'
import { Stack } from "@mui/material";




const ItemDetailContainer = () => {

  const [data, setData] = useState([])

  const [product, setProduct] = useState([]); 

  const [loading, setLoading] = useState(true) 
  
  const {id} = useParams();   

  useEffect(() => {
    const dataBase = getFirestore();
    const products = collection(dataBase, 'products')

    getDocs(products).then((res) => {        
      const aux = res.docs.map(item => ({...item.data(), id: item.id}));   
       
      setData(aux)
      setProduct(aux.find(p => p.id === id)) 
      setLoading(false)     
    })   
    

  },[id])  


  return (
    <div className="item-detail-container" style={{ minHeight:'100vh'}} >
      {loading ? (
         <Stack sx={{display:'flex', gap:'3rem', flexDirection:'row', justifyContent:'center', alignItems:'center', height:'100vh'}}>
          <Skeleton variant='rectangular' width={300} height={380} animation='wave'  />
          <div>
            <Skeleton variant='text' width='50%' height={40} animation='wave'  />
            <Skeleton variant='text' width='60%' height={40} animation='wave'  />
            <Skeleton variant='text' width={340} height={40} animation='wave'  />
            <Skeleton variant='text' width={340} height={40} animation='wave'  />
            <Skeleton variant='text' width={340} height={40} animation='wave'  />
            <Skeleton variant='text' width={340} height={40} animation='wave'  />
            <Skeleton variant='text' width={340} height={40} animation='wave'  />
            <Skeleton variant='text' width={340} height={40} animation='wave'  />
            <Skeleton variant='text' width={340} height={40} animation='wave'  />
          </div>
            
         </Stack>
        ) :
        <>
          <ItemDetail product={product} />
          <SimpleSlider data={data} />
         
        </>
        
      }     
      
          
    </div>
    
  )
}
export default ItemDetailContainer