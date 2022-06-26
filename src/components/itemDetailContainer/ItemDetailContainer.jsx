import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import ItemDetail from "../itemDetail/ItemDetail";
import './itemDetailContainer.css'

const ItemDetailContainer = () => {

  const [details, setDetails] = useState([]);  
  
  const {id} = useParams();

  const [productInfo, setProductInfo] = useState({})
  

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(productsData)        
    })
    .then((res) => setDetails(res))        
        

    const filterItem = details.filter(el => el.id == id);    

    console.log(filterItem[0])

    setProductInfo(filterItem[0])

    console.log(productInfo)
   
    
  }, [details])
  




  return (
    <div>
      {
        <ItemDetail key={details.id} productInfo={productInfo}  />

      }


    </div>
    
  )
}
export default ItemDetailContainer