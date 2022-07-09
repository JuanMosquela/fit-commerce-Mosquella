import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => { 

    const [showCart, setShowCart] = useState(false)    

    const [cartItems, setCartItems] = useState([])   

    const [quantity, setQuantity] = useState(0)     

    const [totalPrice, setTotalPrice] = useState(0) 
    
    
    

    const addItem = (product, i) => { 

      i = (typeof i !== 'undefined') ?  i : 1         
     

      const inCart = cartItems.find(item => {
        return item.id === product.id
      })           

      if(inCart){
        setCartItems(
          cartItems.map(item => {
            if(item.id === product.id){
              
              return { ...inCart, amount:inCart.amount + i }
              
            }else return item
          })
        )
      }else{
        setCartItems([...cartItems, {...product, amount: 1}])        
      }      
    }    

  const removeItem = (product) => {
    const removeProduct = cartItems.filter(item => item.id !== product.id)    

    if(removeProduct){
      setCartItems(removeProduct)  
         
    }
  } 

  const toggleCart = (state) => {
    setShowCart(state)
  }

  useEffect(() => {
    setQuantity(
      cartItems.reduce((previous,current) => previous + current.amount, 0)       
    ); 

    const total = cartItems.reduce((previous,current) => previous + current.amount * current.price, 0)

    setTotalPrice(total)
  
  }, [cartItems]) 

      
    


  return (
    <CartContext.Provider value={{ addItem,toggleCart, showCart, cartItems, totalPrice, removeItem, quantity}}>
        {children}
    </CartContext.Provider>
  )
}
export default CartProvider