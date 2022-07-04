import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import Carrusel from "../carrusel/Carrusel";


import ItemDetail from "../itemDetail/ItemDetail";


const ItemDetailContainer = () => {

  const [data, setData] = useState([])

  const [details, setDetails] = useState([]);  
  
  const {id} = useParams(); 

   

  useEffect(() => {
    new Promise((resolve, reject) => {      
      
      resolve(productsData.find(product => product.id == id))        
    })
    .then((res) => setDetails(res))  
   
    
  }, [id])

  useEffect(() => {    

    new Promise((resolve, reject) => {
      resolve(productsData)        
    })
    .then((res) => setData(res))
    
    
  }, [])


  return (
    <div className="item-detail-container">
      <ItemDetail details={details}  />
      <Carrusel data={data} />
          
    </div>
    
  )
}
export default ItemDetailContainer