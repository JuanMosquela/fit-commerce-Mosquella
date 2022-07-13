import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { collection,getDocs, getFirestore } from 'firebase/firestore';
import ItemDetail from "../itemDetail/ItemDetail";
import SimpleSlider from "../simpleSlider/SimpleSlider";



const ItemDetailContainer = () => {

  const [data, setData] = useState([])

  const [product, setProduct] = useState([]);  
  
  const {id} = useParams();   

  useEffect(() => {
    const dataBase = getFirestore();
    const products = collection(dataBase, 'products')

    getDocs(products).then((res) => {        
      const aux = res.docs.map(item => ({...item.data(), id: item.id}));   
       
      setData(aux)
      setProduct(aux.find(p => p.id === id))      
    })   
    

  },[id])  
   

  


  return (
    <div className="item-detail-container">
      
      <ItemDetail product={product} />
      <SimpleSlider data={data} />
      
      
          
    </div>
    
  )
}
export default ItemDetailContainer