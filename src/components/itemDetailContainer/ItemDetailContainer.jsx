import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection,getDocs, getFirestore } from 'firebase/firestore';
import ItemDetail from "../itemDetail/ItemDetail";
import SimpleSlider from '../simpleSlider/EmblaCarousel';
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import EmblaCarousel from "../simpleSlider/EmblaCarousel";



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
    <div className="item-detail-container">
      {loading ? 
        <Box sx={{ textAlign:'center', marginTop:'2rem' }}>
          <CircularProgress />
        </Box> :
        <>
          <ItemDetail product={product} />
          <EmblaCarousel data={data}/> 
        </>
        
      }     
      
          
    </div>
    
  )
}
export default ItemDetailContainer