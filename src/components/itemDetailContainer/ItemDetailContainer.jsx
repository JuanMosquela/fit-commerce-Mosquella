import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import ItemDetail from "../itemDetail/ItemDetail";
import './itemDetailContainer.css'

const ItemDetailContainer = () => {

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      new Promise((resolve, reject) => {
        resolve(productsData)        
      })
      .then((res) => setDetails(res))        
      .then(() => setLoading(false)) 
    }, 1000); 
   
    
  }, [])
  




  return (
    <div>
      {
        <ItemDetail key={details.id} details={details}  />

      }


    </div>
    
  )
}
export default ItemDetailContainer