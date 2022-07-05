import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import Carrusel from "../carrusel/Carrusel";


import ItemDetail from "../itemDetail/ItemDetail";


const ItemDetailContainer = () => {

  const [data, setData] = useState([])

  const [product, setProduct] = useState([]);  
  
  const {id} = useParams(); 

   

  useEffect(() => {
    
      new Promise((resolve, reject) => {      
      
        resolve(productsData)        
      })
      .then((res) => {
        setData(res)
        setProduct(res.find(product => product.id === Number(id)))})  

    
    
   
    
  }, [id])

  


  return (
    <div className="item-detail-container">
      <ItemDetail product={product}  />
      <Carrusel data={data} />
          
    </div>
    
  )
}
export default ItemDetailContainer