import { useEffect, useState } from "react"
import productsData from "../../data/productsData";
import ItemDetail from "../itemDetail/ItemDetail";
import './itemDetailContainer.css'

const ItemDetailContainer = () => {

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      new Promise((resolve, reject) => {
        resolve(productsData)        
      })
      .then((res) => setDetails(res))     
      .then(() => setLoading(false)) 
    }, 2000); 
   
    
  }, [])
  




  return (
    <div>
      {details.map(product => (
        <ItemDetail key={product.id} product={product}  />

      ))}


    </div>
    
  )
}
export default ItemDetailContainer