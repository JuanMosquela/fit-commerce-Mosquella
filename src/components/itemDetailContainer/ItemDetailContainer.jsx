import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import ItemDetail from "../itemDetail/ItemDetail";
import './itemDetailContainer.css'

const ItemDetailContainer = () => {

  const [details, setDetails] = useState([]);  
  
  const {id} = useParams();  

  useEffect(() => {
    new Promise((resolve, reject) => {      
      
      resolve(productsData.find(product => product.id == id))        
    })
    .then((res) => setDetails(res))  
   
    
  }, [id])


  return (
    <div>
      {
        <ItemDetail stock={5} initial={1} details={details}  />

      }

    </div>
    
  )
}
export default ItemDetailContainer