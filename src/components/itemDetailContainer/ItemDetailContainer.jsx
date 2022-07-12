import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Carrusel from "../carrusel/Carrusel";
import { doc,collection,getDocs, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from "../itemDetail/ItemDetail";



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
    
    // const product = doc(dataBase, 'products', id )
    // getDoc(product).then((res) => setProduct({...res.data(), id: res.id}))

  },[id])


   
   

  


  return (
    <div className="item-detail-container">
      
      <ItemDetail product={product}  />
      <Carrusel data={data} />
          
    </div>
    
  )
}
export default ItemDetailContainer